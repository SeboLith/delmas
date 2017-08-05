import axios from 'axios';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      user: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user &&
          <div>
            <img src={user.avatar_url} alt={user.login} width={50} />
            <h3>
              {user.name}
            </h3>
            <p>
              {user.location}
            </p>
          </div>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="type username ..."
            onChange={this.handleChange}
          />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username } = this.state;
    const res = await axios.get(`/api/users/${username}`);
    const user = res.data;
    this.setState({ user });
  }
}
