import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Login', () => {
  test('valid user can login', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await inventory.assertLoaded();
    await expect(page).toHaveURL(/inventory/);
  });

  test('invalid user sees validation error', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('invalid_user', 'wrong_password');

    await login.assertLoginError();
  });
});
