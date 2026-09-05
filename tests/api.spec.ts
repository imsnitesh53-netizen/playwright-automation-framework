import { test, expect } from '@playwright/test';

test('API health check using Playwright request context', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.ok()).toBeTruthy();

  const body = await response.json();
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('userId');
});
