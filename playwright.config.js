import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  timeout: 120000,

  use: {
  baseURL: process.env.BASE_URL,
  headless: true,
  ignoreHTTPSErrors: true,
  actionTimeout: 30000,
  navigationTimeout: 60000,
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure'
},

  projects: [
  {
    name: 'chrome',
    use: { ...devices['Desktop Chrome'] }
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] }
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] }
  }
]
});