
const homeLocators = {
    url: "https://tristenc.vercel.app/",
    homePage: "//div[@class='home-page']",

    // Top Navigation elements
    topNav: {
        homeButton: '//span[@class="font-bold text-xl text-white"]',
        aboutButton: '//a[@href="#about"]',
        experienceButton: '//a[@href="#experience"]',
        projectsButton: '//a[@href="#projects"]',
        contactButton: '//a[@href="#contact"]',
        githubButton: '//a[@href="https://github.com/tenzix106"]',
        linkedinButton: '//a[@href="https://www.linkedin.com/in/tristen-chris-14303a228/"]',
    },

    // Labels
    labels: {
        introductionLabel: '//h1[@class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white"]',
    introductionText: '//p[@class="max-w-[700px] text-white/80 md:text-xl"]',
    },

    // Buttons
    buttons: {
        viewProjectsButton: '(//a[@href="#projects"])[3]',
        contactMeButton: '(//a[@href="#contact"])[3]',
    },

    // Image
    images: {
        profileImage: '//div[@class="relative"]',
    },
    
    

}

export default homeLocators


