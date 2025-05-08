// import LoginPage from '../pages/LoginPage'

// describe('Login Page Tests', () => {
//     beforeEach(() => {
//         LoginPage.visit()
//     })

//     it('should login successfully with valid credentials', () => {
//         LoginPage.login('validUser', 'validPassword')
//         // Add assertions here
//         cy.url().should('include', '/dashboard')
//     })

//     it('should show error message with invalid credentials', () => {
//         LoginPage.login('invalidUser', 'invalidPassword')
//         LoginPage.elements.errorMessage().should('be.visible')
//             .and('contain', 'Invalid credentials')
//     })
// }) 