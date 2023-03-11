import { LoginPage } from "./pages/login.page"

const loginPage = new LoginPage()

describe('All Login Tests', function(){

    this.beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Login with valid credentials', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()

    })
    
    it('Login with invalid username', () => {
    
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()

    })

    it('Login with invalid password', () => {
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin456')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()

    })

})