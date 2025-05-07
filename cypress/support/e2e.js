// Import commands.js using ES2015 syntax:
import './commands'

// Import XPath plugin
require('cypress-xpath')

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
const app = window.top;
if (app) {
    app.document.addEventListener('DOMContentLoaded', () => {
        const style = app.document.createElement('style');
        style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
        app.document.head.appendChild(style);
    });
}

// Global before each hook
beforeEach(() => {
    // Add any global setup here
    cy.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })
}) 