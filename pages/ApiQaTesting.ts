import { test, expect, APIRequestContext } from '@playwright/test';
import { CreateUserDto } from "../models/createUserDto";

export class ApiQaTesting {
    readonly baseUrl: string = "https://demoqa.com/Account/v1/User";


    constructor() {

    }

    async registrationUser(user: CreateUserDto) {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.status;
    }
}
