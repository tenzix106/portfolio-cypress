import homeLocators from "../locators/homeLocators";
import Logger from "../utils/Logger";

class HomePage {
    visit() {
        Logger.testStep(1, "Navigating to Home Page");
        Logger.info("Visiting Home Page", "Navigation");
        cy.visit(homeLocators.url);
        Logger.info("Successfully loaded Home Page", "Navigation");
    }
    verifyTopNavElements() {
        Logger.testSection("Top Navigation Verification");
        const elements = [
            homeLocators.topNav.homeButton,
            homeLocators.topNav.aboutButton,
            homeLocators.topNav.experienceButton,
            homeLocators.topNav.projectsButton,
            homeLocators.topNav.contactButton,
            homeLocators.topNav.githubButton,
            homeLocators.topNav.linkedinButton,
        ]
        // Verify each element is visible
        Logger.info("Starting Top Nav Elements verification", "TopNav");
        try {
            elements.forEach((element, index) => {
                Logger.info(`Verifying element ${index + 1} of ${elements.length}`, "TopNav");
                cy.xpath(element).should("be.visible");
                cy.xpath(element).should("not.be.disabled");
                Logger.info(`Element ${index + 1} verified successfully`, "TopNav");
            });
            Logger.info("All Top Nav Elements verified successfully", "TopNav");
        } catch (error) {
            Logger.error(`Error verifying Top Nav Elements: ${error}`, "TopNav");
            throw error;
        }
    }
    verifyHomePageLabels() {
        Logger.testSection("Home Page Labels Verification");
        const elements = [
            homeLocators.labels.introductionLabel,
            homeLocators.labels.introductionText,
        ]
        Logger.info("Starting Home Page Labels verification", "Labels");
        try {
            elements.forEach((element, index) => {
                Logger.info(`Verifying label ${index + 1} of ${elements.length}`, "Labels");
                cy.xpath(element).should("be.visible");
                cy.xpath(element).should("not.be.disabled");
                Logger.info(`Label ${index + 1} verified successfully`, "Labels");
            });
            Logger.info("All Home Page Labels verified successfully", "Labels");
        } catch (error) {
            Logger.error(`Error verifying Home Page Labels: ${error}`, "Labels");
            throw error;
        }
    }
    verifyHomePageButtons() {
        Logger.testSection("Home Page Buttons Verification");
        const elements = [
            homeLocators.buttons.viewProjectsButton,
            homeLocators.buttons.contactMeButton,
        ]
        Logger.info("Starting Home Page Buttons verification", "Buttons");
        try {
            elements.forEach((element, index) => {
                Logger.info(`Verifying button ${index + 1} of ${elements.length}`, "Buttons");
                cy.xpath(element).should("be.visible");
                cy.xpath(element).should("not.be.disabled");
                Logger.info(`Button ${index + 1} verified successfully`, "Buttons");
            });
            Logger.info("All Home Page Buttons verified successfully", "Buttons");
        } catch (error) {
            Logger.error(`Error verifying Home Page Buttons: ${error}`, "Buttons");
            throw error;
        }   
    }
    verifyHomePageImages() {
        Logger.testSection("Home Page Images Verification");
        try {
            Logger.info("Starting profile image verification", "Images");
            cy.xpath(homeLocators.images.profileImage).should("be.visible");
            Logger.info("Profile image verified successfully", "Images");
        } catch (error) {
            Logger.error(`Error verifying Home Page Images: ${error}`, "Images");
            throw error;
        }
    }
}

const homePage = new HomePage();
export default homePage;
