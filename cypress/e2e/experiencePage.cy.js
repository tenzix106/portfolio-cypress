import ExperiencePage from "../pages/ExperiencePage";
import Logger from "../utils/Logger";

describe("Experience Page Tests", () => {
    beforeEach(() => {
        ExperiencePage.visit();
        cy.wait(1000);
    });

    it("should verify all experience page elements", () => {
        
        cy.wrap(null).then(() => {
            // Verify page labels
            ExperiencePage.verifyExperiencePageLabels();

            // Verify experience cards visibility
            // ExperiencePage.verifyExperienceCardsVisibility();

            // Verify first experience card elements
            ExperiencePage.verifyFirstExperienceCard();

            // Verify second experience card elements
            ExperiencePage.verifySecondExperienceCard();
        })
    });
});
