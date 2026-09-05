import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  readonly username = this.page.locator('#user-name');
  readonly password = this.page.locator('#password');
  readonly loginButton = this.page.locator('#login-button');
  readonly errorMessage = this.page.locator('[data-test="error"]');

  async goto() {
    await this.page.goto('/');
  }

  async login(user: string, password: string) {
    await this.username.fill(user);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async assertLoginError() {
    await expect(this.errorMessage).toBeVisible();
  }
}
