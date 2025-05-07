// // Custom command for login
// Cypress.Commands.add('login', (username, password) => {
//     cy.session([username, password], () => {
//         cy.visit('/login')
//         cy.get('#username').type(username)
//         cy.get('#password').type(password)
//         cy.get('#login-button').click()
//     })
// })

// // Custom command for checking if element is visible
// Cypress.Commands.add('isVisible', { prevSubject: 'element' }, (subject) => {
//     const isVisible = (elem) => {
//         const style = window.getComputedStyle(elem)
//         return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
//     }
//     return cy.wrap(subject).should('be.visible').and(isVisible)
// }) 