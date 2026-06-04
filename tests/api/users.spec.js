import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient.js';

test('Get Posts API', async ({ request }) => {

  const api = new ApiClient(request);

  const response = await api.getPosts();

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body[0]);

  expect(body.length).toBeGreaterThan(0);
});