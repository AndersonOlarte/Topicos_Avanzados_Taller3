import { Page } from "playwright-core";


export class QaTestingPageHome {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async deleteAccount() {
        await this.page.getByRole('button', { name: 'Delete Account' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.getByRole('button', { name: 'Ok' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press('Enter');
        
    }
}
