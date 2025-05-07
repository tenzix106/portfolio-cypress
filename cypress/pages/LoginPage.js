import loginLocators from '../locators/loginLocators'

class LoginPage {
    // Selectors using XPath
    elements = {
        usernameInput: () => cy.xpath(loginLocators.usernameInput),
        passwordInput: () => cy.xpath(loginLocators.passwordInput),
        loginButton: () => cy.xpath(loginLocators.loginButton),
        errorMessage: () => cy.xpath(loginLocators.errorMessage),
        successMessage: () => cy.xpath(loginLocators.successMessage),
        rememberMeCheckbox: () => cy.xpath(loginLocators.rememberMeCheckbox),
        forgotPasswordLink: () => cy.xpath(loginLocators.forgotPasswordLink),
        registerLink: () => cy.xpath(loginLocators.registerLink)
    }

    // Actions
    visit() {
        cy.visit('/login')
        return this
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username)
        return this
    }

    typePassword(password) {
        this.elements.passwordInput().type(password)
        return this
    }

    clickLogin() {
        this.elements.loginButton().click()
        return this
    }

    clickRememberMe() {
        this.elements.rememberMeCheckbox().click()
        return this
    }

    clickForgotPassword() {
        this.elements.forgotPasswordLink().click()
        return this
    }

    clickRegister() {
        this.elements.registerLink().click()
        return this
    }

    // Combined actions
    login(username, password) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickLogin()
    }

    // Validation methods
    getErrorMessage(message) {
        return cy.xpath(loginLocators.dynamicErrorMessage(message))
    }

    getUsernameValidation() {
        return cy.xpath(loginLocators.usernameValidation)
    }

    getPasswordValidation() {
        return cy.xpath(loginLocators.passwordValidation)
    }
}

export default new LoginPage() 