import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient.js';

test('Update Post API', async ({ request }) => {

  const api = new ApiClient(request);

  const response = await api.updatePost(
    1,
    {
      id: 1,
      title: 'Updated Title',
      body: 'Updated Body',
      userId: 1
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Updated Title');

  console.log(body);
});