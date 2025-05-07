// Custom command for login
Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/login')
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
    })
})

// Custom command for checking if element is visible
Cypress.Commands.add('isVisible', { prevSubject: 'element' }, (subject) => {
    const isVisible = (elem) => {
        const style = window.getComputedStyle(elem)
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
    }
    return cy.wrap(subject).should('be.visible').and(isVisible)
})

// Verify button is clickable and has correct text
Cypress.Commands.add('verifyButton', { prevSubject: 'element' }, (subject, expectedText) => {
    return cy.wrap(subject)
        .should('be.visible')
        .should('not.be.disabled')
        .should('have.text', expectedText)
        .should('have.attr', 'type', 'button')
})

// Verify input field is enabled and has correct placeholder
Cypress.Commands.add('verifyInput', { prevSubject: 'element' }, (subject, placeholder) => {
    return cy.wrap(subject)
        .should('be.visible')
        .should('not.be.disabled')
        .should('have.attr', 'placeholder', placeholder)
})

// Verify element has correct text and is visible
Cypress.Commands.add('verifyText', { prevSubject: 'element' }, (subject, expectedText) => {
    return cy.wrap(subject)
        .should('be.visible')
        .should('have.text', expectedText)
})

// Verify element has correct class
Cypress.Commands.add('verifyClass', { prevSubject: 'element' }, (subject, className) => {
    return cy.wrap(subject)
        .should('have.class', className)
})

// Verify element is enabled and clickable
Cypress.Commands.add('verifyClickable', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
        .should('be.visible')
        .should('not.be.disabled')
        .should('not.have.attr', 'disabled')
})

// Verify element has correct attribute value
Cypress.Commands.add('verifyAttribute', { prevSubject: 'element' }, (subject, attribute, value) => {
    return cy.wrap(subject)
        .should('have.attr', attribute, value)
})

// Verify element is in viewport
Cypress.Commands.add('verifyInViewport', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
        .should('be.visible')
        .then($el => {
            const rect = $el[0].getBoundingClientRect()
            expect(rect.top).to.be.lessThan(window.innerHeight)
            expect(rect.bottom).to.be.greaterThan(0)
        })
})

// Verify element has correct styling
Cypress.Commands.add('verifyStyle', { prevSubject: 'element' }, (subject, property, value) => {
    return cy.wrap(subject)
        .should('have.css', property, value)
})

// Verify element is focused
Cypress.Commands.add('verifyFocused', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
        .should('be.focused')
})

// Verify element has correct value
Cypress.Commands.add('verifyValue', { prevSubject: 'element' }, (subject, expectedValue) => {
    return cy.wrap(subject)
        .should('have.value', expectedValue)
})

// Verify element is selected (for checkboxes and radio buttons)
Cypress.Commands.add('verifySelected', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
        .should('be.checked')
})

// Verify element is not selected
Cypress.Commands.add('verifyNotSelected', { prevSubject: 'element' }, (subject) => {
    return cy.wrap(subject)
        .should('not.be.checked')
})

// Verify element has correct href
Cypress.Commands.add('verifyHref', { prevSubject: 'element' }, (subject, expectedHref) => {
    return cy.wrap(subject)
        .should('have.attr', 'href', expectedHref)
})

// Verify element has correct alt text (for images)
Cypress.Commands.add('verifyAltText', { prevSubject: 'element' }, (subject, expectedAlt) => {
    return cy.wrap(subject)
        .should('have.attr', 'alt', expectedAlt)
}) 