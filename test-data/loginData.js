export const loginData = [
  {
    testName: 'Valid Login',
    username: 'Admin',
    password: 'admin123',
    expected: 'success'
  },
  {
    testName: 'Invalid Username',
    username: 'wronguser',
    password: 'admin123',
    expected: 'fail'
  },
  {
    testName: 'Invalid Password',
    username: 'Admin',
    password: 'wrongpass',
    expected: 'fail'
  }
];