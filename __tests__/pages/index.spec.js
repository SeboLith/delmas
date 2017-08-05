/**
* __tests_/pages/index.spec.js
 *
 * @author Reginald Mathieu
 * @since July 15 2017
 */

// Access supertest module functionality under the variable name "request"
const request = require('supertest');

describe('Test the root path', () => {
  test('It should response the GET method', () =>
    request('http://localhost:3000').get('/').then(response => {
      expect(response.statusCode).toBe(200);
    }));
});
