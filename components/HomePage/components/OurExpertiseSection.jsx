
const expertiseData = [
    {
        title: 'Digital Transformation',
        image: '/images/icons/DigitalTransformation.svg',
    },
    {
        title: 'Digital Marketing Services',
        image: '/images/icons/DigitalMarketingservices.svg',
    },
    {
        title: 'FinTech',
        image: '/images/icons/Fintech.svg',
    },
    {
        title: 'EdTech',
        image: '/images/icons/Edtech.svg',
    },
    {
        title: 'Retail & Logistics',
        image: '/images/icons/RetailLogistics.svg',
    },
    {
        title: 'Health Care',
        image: '/images/icons/Healthcare.svg',
    },
    {
        title: 'Fitness and Wearables',
        image: '/images/icons/Fitnessandwearables.svg',
    },
    {
        title: 'E-Commerce',
        image: '/images/icons/E-commerce.svg',
    },
    {
        title: 'UI/UX',
        image: '/images/icons/UIUX.svg',
    },
    {
        title: 'AI/ML',
        image: '/images/icons/AIML.svg',
    },
    {
        title: 'Crypto',
        image: '/images/icons/Crypto.svg',
    },
    {
        title: 'BlockChain',
        image: '/images/icons/Blockchain.svg',
    },
    {
        title: 'Gaming/Gaming App Studio',
        image: '/images/icons/GamingGamingAppStudio.svg',
    },
    {
        title: 'Dev Ops',
        image: '/images/icons/DevOps.svg',
    },
    {
        title: 'Partner Program',
        image: '/images/icons/Partnerprogram.svg',
    },
    {
        title: 'SAAS using AI',
        image: '/images/icons/SAASusingAI.svg',
    },
    {
        title: 'Data Analytics',
        image: '/images/icons/DataAnalytics.svg',
    },
    {
        title: 'Staff Augmentation',
        image: '/images/icons/StaffAugmentation.svg',
    },
];

export default function OurExpertiseSection() {
    return (
        <>
            <section className="py-[50px] lg:py-[100px] text-center">
                <div className="container max-w-[1600px] px-[30px] lg:px-[80px] mx-auto">
                    <div className="mb-[80px]">
                        <h2 className="text-[42px] leading-[54px] lg:text-[62px] font-bold mb-[10px]">
                            Our Expertise
                        </h2>
                        <p className="text-[16px] lg:text-[20px]">
                            Shaping ideas to digital experiences
                        </p>
                    </div>

                    <div className="grid 2xl:grid-cols-9 xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-[40px]">
                        {expertiseData.length > 0 && expertiseData.map((data, index) => (
                            <div className="[&:hover>div]:bg-[#000D0D] [&:hover>div]:rounded-[100%]" key={index}>
                                <div className="w-[90px] h-[90px] mx-auto mb-[12px] border border-solid border-[#f2f2f2] rounded-[16px] flex items-center justify-center duration-[0.5s] ease-in cursor-pointer">
                                    <img src={data.image} alt={data.title} className="hue-rotate-[250deg] brightness-[30%] contrast-[50%] saturate-[50] sepia-[50%] grayscale-[0]" />
                                </div>
                                <p className="text-[14px] xl:text-[16px]">
                                    {data.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
