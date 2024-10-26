import test, { expect } from "playwright/test";
import { ApiQaTesting } from "../pages/ApiQaTesting";
import { CreateUserDto } from "../models/createUserDto";
import { QaTestingPageLogin } from "../pages/QaTestingLogin";
import { QaTestingPageHome } from "../pages/QaTestingPageHome";
import userData from "../TestingData/user.json";

const username = userData.username;
const password = userData.password;

test.slow();

test('User registration', async ({ page }) => {
    const api = new ApiQaTesting();
    const newUserDto: CreateUserDto = {
        userName: username,
        password: password
    };
    const body = {
        "userName": username,
        "password": password
      }
    const response = await api.registrationUser(body);
    console.log(response);
    await expect(response).toBe(201);
    await page.waitForTimeout(5000);

    const loginPage = new QaTestingPageLogin(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    // await page.waitForTimeout(4000);
    // await expect(page.url(),"User is logged in")
    // .toBe("https://demoqa.com/profile");
    await page.waitForTimeout(5000); // tiempo adicional para que se vea que el usuario se loguea
    const homePage = new QaTestingPageHome(page);
    await homePage.deleteAccount();
    await expect(page.url(),"User is logged out")
    .toBe("https://demoqa.com/login");

    await loginPage.login(username, password);
    await expect(page.locator('#name'), "Invalid username or password!")
    .toContainText('Invalid username or password!');
});



