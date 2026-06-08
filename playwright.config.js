import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  workers: 1,
  retries: 2,
  timeout: 120000,

  use: {
  baseURL: process.env.BASE_URL,
  headless: true,
  ignoreHTTPSErrors: true,
  actionTimeout: 30000,
  navigationTimeout: 90000,
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure'
},

  projects: [
  {
    name: 'chrome',
    use: { browserName: 'chromium' },
  },
  {
    name: 'webkit',
    use: { browserName: 'webkit' },
  }
]
});