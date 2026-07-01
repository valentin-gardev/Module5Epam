
import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const STORAGE_STATE_PATH = path.join(__dirname, 'playwright/.auth/user.json')
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests/specs/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: 2,
  reporter: 'html',
  use: {
    headless: true,
    trace: 'on-first-retry',
    baseURL: 'https://practicesoftwaretesting.com/'
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.js/
    },

    {
    name : 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      storageState:STORAGE_STATE_PATH,
    },
    dependencies: ['setup']
    }
   
  ],

 
});

