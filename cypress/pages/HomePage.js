import homeLocators from "../locators/homeLocators";

class HomePage {
    visit() {
        Logger.info("Visiting Home Page");
        cy.visit("/");
    }
    verifyTopNavElements() {
        elements = [
            homeLocators.topNav.homeButton,
            homeLocators.topNav.aboutButton,
            homeLocators.topNav.experienceButton,
            homeLocators.topNav.projectsButton,
            homeLocators.topNav.contactButton,
            homeLocators.topNav.githubButton,
            homeLocators.topNav.linkedinButton,
        ]
        // Verify each element is visible
        Logger.info("Verifying Top Nav Elements");
        try {
            elements.forEach(element => {
                cy.get(element).should("be.visible");
                cy.get(element).should("not.be.disabled");
            });
            Logger.info("Top Nav Elements verified successfully");
        } catch (error) {
            Logger.error(`Error verifying Top Nav Elements: ${error}`);
        }
    }
    verifyHomePageLabels() {
        elements = [
            homeLocators.labels.introductionLabel,
            homeLocators.labels.introductionText,
        ]
        Logger.info("Verifying Home Page Labels");
        try {
            elements.forEach(element => {
                cy.get(element).should("be.visible");
                cy.get(element).should("not.be.disabled");
            });
            Logger.info("Home Page Labels verified successfully");
        } catch (error) {
            Logger.error(`Error verifying Home Page Labels: ${error}`);
        }
    }
    verifyHomePageButtons() {
        elements = [
            homeLocators.buttons.viewProjectsButton,
            homeLocators.buttons.contactMeButton,
        ]
        Logger.info("Verifying Home Page Buttons");
        try {
            elements.forEach(element => {
                cy.get(element).should("be.visible");
                cy.get(element).should("not.be.disabled");
            });
            Logger.info("Home Page Buttons verified successfully");
        } catch (error) {
            Logger.error(`Error verifying Home Page Buttons: ${error}`);
        }   
    }
    verifyHomePageImages() {
        try {
            cy.get(homeLocators.images.profileImage).should("be.visible");
            Logger.info("Home Page Images verified successfully");
        } catch (error) {
            Logger.error(`Error verifying Home Page Images: ${error}`);
        }
    }
}

export default HomePage;
