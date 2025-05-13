const experienceLocators = {
    url: 'https://tristenc.vercel.app/#experience',

    title: '//h2[@class="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-white"]',
    description: '//p[@class="max-w-[85%] text-white/80 sm:text-lg sm:leading-7"]',

    secondExperienceCard: '//div[@class="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8"]//div[@style="opacity: 1; transform: translateY(-5px);"]',
    firstExperienceCard: '//div[@class="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8"]//div[@style="opacity: 1; transform: none;"]',

    firstExperience: {
        title: '(//h3[@class="text-xl font-bold text-pink"])[1]',
        date: '(//div[@class="px-2 py-1 text-xs font-medium rounded-full bg-maroon/20 text-pink"])[1]',
        company: '(//div[@class="text-lg font-semibold text-white"])[1]',
        address: '(//div[@class="flex items-center text-sm text-white/70 italic"])[1]',
        description: '(//p[@class="text-sm text-white/90 mb-4"])[1]',
        skillOne: '(//div[@class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-maroon text-black text-xs"])[1]',
        skillTwo: '(//div[@class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-maroon text-black text-xs"])[2]',
    },

    secondExperienceCard: {
        title: '(//h3[@class="text-xl font-bold text-pink"])[2]',
        date: '(//div[@class="px-2 py-1 text-xs font-medium rounded-full bg-maroon/20 text-pink"])[2]',
        company: '(//div[@class="text-lg font-semibold text-white"])[2]',
        address: '(//div[@class="flex items-center text-sm text-white/70 italic"])[2]',
        description: '(//p[@class="text-sm text-white/90 mb-4"])[2]',
        skillOne: '(//div[@class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-maroon text-black text-xs"])[3]',
        skillTwo: '(//div[@class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-maroon text-black text-xs"])[4]',
    }
}
export default experienceLocators;