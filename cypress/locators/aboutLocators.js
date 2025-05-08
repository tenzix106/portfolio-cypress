const aboutLocators = {

    url: 'https://tristenc.vercel.app/#about',

    label: {
        aboutTitle: '//h2[@class="text-3xl font-bold tracking-tighter sm:text-4xl text-navy"]',
        description: '(//p[@class="max-w-[600px] text-navy md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"])[1]',
        skillTitle: '//h3[@class="text-xl font-bold text-navy"]',
    },

    button: {
        viewAllSkills: '(//button[@class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-pink text-navy hover:bg-pink/90"])[2]',
    },
    dialog: {
        menu: '//div[@role="dialog"]',
        title: '//div[@role="dialog"]//h2',
        description: '//div[@role="dialog"]//p',
        frontendTitle: '(//div[@role="dialog"]//h3)[1]',
        backendTitle: '(//div[@role="dialog"]//h3)[2]',
        mobileTitle: '(//div[@role="dialog"]//h3)[3]',
        testingTitle: '(//div[@role="dialog"]//h3)[4]',
        othersTitle: '(//div[@role="dialog"]//h3)[5]',

        icon: {
            javascript: '//div[@role="dialog"]//img[@alt="JavaScript"]',
            typescript: '//div[@role="dialog"]//img[@alt="TypeScript"]',
            nextjs: '//div[@role="dialog"]//img[@alt="Next.js"]',
            html: '//div[@role="dialog"]//img[@alt="HTML"]',
            css: '//div[@role="dialog"]//img[@alt="CSS"]',
            tailwind: '//div[@role="dialog"]//img[@alt="Tailwind"]',
            python: '//div[@role="dialog"]//img[@alt="Python"]',
            firebase: '//div[@role="dialog"]//img[@alt="Firebase"]',
            flutter: '//div[@role="dialog"]//img[@alt="Flutter"]',
            dart: '//div[@role="dialog"]//img[@alt="Dart"]',
            cypresS: '//div[@role="dialog"]//img[@alt="Cypress"]',
            cpp: '//div[@role="dialog"]//img[@alt="C++"]',
        },
    },
    skillConveyer: '//div[@class="relative h-24"]',
}

export default aboutLocators;