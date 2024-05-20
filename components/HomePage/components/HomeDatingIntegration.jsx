
const datingIntegrationData = [
    {
        title: 'PHASE I',
        text: 'AI chatbot that predicts behavioral patterns on dating apps and helps users self-improve their fluency and pick up skills using NLP processes',
        image: '/images/PHASE1.jpg',
    },
    {
        title: 'PHASE II',
        text: 'Hyper realistic relationship simulator presenting evolving-in-complexity scenarios as a tool for learning and preparation for relationship scenarios',
        image: '/images/PHASE2.jpg',
    },
    {
        title: 'PHASE III',
        text: 'VR Academy employing deepfake and AI-generated models for confidence-building immresive sessions and projection of real-world encounters',
        image: '/images/PHASE3.jpg',
    },
];

export default function HomeDatingIntegration() {
    return (
        <>
            <section className="py-[50px] lg:py-[100px] bg-[#EDEDED]">
                <div className="container max-w-[1600px] px-[20px] lg:px-[80px] mx-auto">
                    <h2 className="text-[42px] leading-[54px] lg:text-[62px] font-bold mb-[50px]">
                        AI & Dating Integrations
                    </h2>

                    <div className="flex items-center gap-[40px] max-lg:flex-wrap">
                        <div className="w-full lg:w-2/5 [&>div:last-child]:mb-0">
                            {datingIntegrationData.length > 0 && datingIntegrationData.map((data, index) => (
                                <div className="mb-[40px]" key={index}>
                                    <h3 className="text-[24px] lg:text-[40px] leading-[40px] text-[#00B26A] font-bold uppercase mb-[10px]">
                                        {data.title}
                                    </h3>
                                    <p className="text-[15px] lg:text-[18px]">
                                        {data.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="w-full lg:w-3/5">
                            <div className="flex gap-[10px]">
                                {datingIntegrationData.length > 0 && datingIntegrationData.map((data, index) => (
                                    <div className="rounded-[10px] md:rounded-[30px] overflow-hidden animate-[toggleFloat_10s_ease-in-out_infinite]" style={{ animationDelay: index % 2 !== 0 ? '2s' : '0s' }}>
                                        <img src={data.image} alt={data.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
