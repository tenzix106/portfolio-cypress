import experienceLocators from "../locators/experienceLocators";
import CommonUtils from "../utils/commonUtils";
import Logger from "../utils/Logger";

class ExperiencePage {
    visit() {
        cy.visit(experienceLocators.url);
    }

    verifyExperiencePageLabels() {
        const elements = [
            { xpath: experienceLocators.title, name: "Experience Title" },
            { xpath: experienceLocators.description, name: "Experience Description" }
        ];
        CommonUtils.verifyMultipleElements(elements, "Experience Page Labels");
    }

    verifyFirstExperienceCard() {
        Logger.testStep(1, "Verifying First Experience Card");
        const elements = [
            { xpath: experienceLocators.firstExperience.title, name: "First Experience Title" },
            { xpath: experienceLocators.firstExperience.date, name: "First Experience Date" },
            { xpath: experienceLocators.firstExperience.company, name: "First Experience Company" },
            { xpath: experienceLocators.firstExperience.address, name: "First Experience Address" },
            { xpath: experienceLocators.firstExperience.description, name: "First Experience Description" },
            { xpath: experienceLocators.firstExperience.skillOne, name: "First Experience Skill One" },
            { xpath: experienceLocators.firstExperience.skillTwo, name: "First Experience Skill Two" }
        ];
        CommonUtils.verifyMultipleElements(elements, "First Experience Card Elements");
    }

    verifySecondExperienceCard() {
        Logger.testStep(2, "Verifying Second Experience Card");
        const elements = [
            { xpath: experienceLocators.secondExperienceCard.title, name: "Second Experience Title" },
            { xpath: experienceLocators.secondExperienceCard.date, name: "Second Experience Date" },
            { xpath: experienceLocators.secondExperienceCard.company, name: "Second Experience Company" },
            { xpath: experienceLocators.secondExperienceCard.address, name: "Second Experience Address" },
            { xpath: experienceLocators.secondExperienceCard.description, name: "Second Experience Description" },
            { xpath: experienceLocators.secondExperienceCard.skillOne, name: "Second Experience Skill One" },
            { xpath: experienceLocators.secondExperienceCard.skillTwo, name: "Second Experience Skill Two" }
        ];
        CommonUtils.verifyMultipleElements(elements, "Second Experience Card Elements");
    }

    verifyExperienceCardsVisibility() {
        Logger.testStep(3, "Verifying Experience Cards Visibility");
        CommonUtils.verifyVisible(experienceLocators.firstExperienceCard, "First Experience Card");
        CommonUtils.verifyVisible(experienceLocators.secondExperienceCard, "Second Experience Card");
    }
}

export default new ExperiencePage();
