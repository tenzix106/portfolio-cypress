import homePage from "../pages/HomePage";

describe('Home Page Tests', () => {
    before(() => {
        homePage.visit();
        cy.wait(1000);
    })

    it('Verify Homepage UI', () => {
        cy.wrap(null).then(()=>{
            homePage.verifyTopNavElements();
            homePage.verifyHomePageLabels();
            homePage.verifyHomePageButtons();
        })
    })
}) 