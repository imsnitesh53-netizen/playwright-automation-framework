import { expect, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  readonly title = this.page.locator('.title');
  readonly inventoryItems = this.page.locator('.inventory_item');

  async assertLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }
}
