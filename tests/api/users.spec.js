import { test, expect } from '@playwright/test';

test('Get Posts API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body[0]);

  expect(body.length).toBeGreaterThan(0);
});