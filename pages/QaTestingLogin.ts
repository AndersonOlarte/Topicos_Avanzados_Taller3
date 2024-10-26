import { Page } from "@playwright/test";

export class QaTestingPageLogin {
    readonly page: Page;
    readonly url: string;
    
    constructor(page: Page) {
        this.page = page;
        this.url = "https://demoqa.com/login";
    }

    async goto() {
        await this.page.goto(this.url); 
    }

    async login(username: string, password: string) {
        await this.page.getByPlaceholder('UserName').pressSequentially(username, { delay: 150 });
        await this.page.getByPlaceholder('Password').pressSequentially(password, { delay: 150 });
        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}
