import AboutPage from "../pages/AboutPage";

describe('About Page Tests', () => {
    beforeEach(() => {
        AboutPage.visit();
        cy.wait(1000);
    })

    it('1. Verify About page UI', () => {
        cy.wrap(null).then(()=>{
            AboutPage.verifyAboutPageLabels();
            AboutPage.verifyAboutPageButtons();
            AboutPage.verifySkillConveyer();
        })
    })

    it('2. Verify Skill Dialog Elements', () => {
        cy.wrap(null).then(() => {
            AboutPage.clickViewSkillsButton();
            AboutPage.verifySkillDialog();
            AboutPage.verifySkillDialogElements();
        })
    })
}) 