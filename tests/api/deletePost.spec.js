import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/apiClient.js';

test('Delete Post API', async ({ request }) => {

  const api = new ApiClient(request);

  const response = await api.deletePost(1);

  expect(response.status()).toBe(200);

  console.log('Post deleted successfully');
});