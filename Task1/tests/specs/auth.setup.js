
import { test as setup, expect } from '@playwright/test';


const STORAGE_STATE_PATH = 'playwright/.auth/user.json';

setup('authenticate via backend API', async ({ request }) => {
    const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
        data: {
            email: 'customer2@practicesoftwaretesting.com',
            password: 'welcome01'
        }
    });

    expect(response.ok()).toBe(true);
    
    await request.storageState({ path: STORAGE_STATE_PATH });
});