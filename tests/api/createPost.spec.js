import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient.js';

test('Create Post API', async ({ request }) => {

  const api = new ApiClient(request);

  const response = await api.createPost({
    title: 'Playwright',
    body: 'API Testing',
    userId: 1
  });

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Playwright');

  console.log(body);
});