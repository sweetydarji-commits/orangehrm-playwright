import { test, expect } from '@playwright/test';

test('Create Post API', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright',
        body: 'API Testing',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Playwright');

  console.log(body);
});