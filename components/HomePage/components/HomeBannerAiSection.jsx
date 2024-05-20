
export default function HomeBannerAiSection() {
    return (
        <>
            <section className="bg-[#020003] text-[#fff]">
                <section className="relative py-[80px] xl:min-h-[calc(100vh-250px)] flex flex-wrap items-center">
                    <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[90%] max-lg:top-[50%]">
                        <video playsinline="true" autoplay="true" muted="true" loop="true">
                            <source src="/images/Color-Change_Compressed_Low_2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="container max-w-[1600px] px-[20px] lg:px-[80px] max-lg:mx-auto relative">
                        <div className="lg:max-w-[50%] max-lg:text-center bg-[rgba(0,0,0,0.5)] p-[20px]">
                            <p className="font-raleway text-[14px] font-[700] tracking-[0.3px] sm:text-[18px] sm:leading-[28px] text-[#00B26A] mb-[10px]">
                                Join to Earn Lifetime Skills
                            </p>
                            <h1 className="text-[26px] sm:text-[38px] xl:text-[52px] xl:leading-[70px] mb-[30px] font-[300]">
                                Empowering Digital Education Transforming 
                                <span className="block font-[700] bg-[#fff] text-[#020003]">
                                    Futures with Technology
                                </span>
                            </h1>
                            <p className="font-raleway tracking-[0.3px] text-[16px] leading-[28px] xl:text-[22px] xl:leading-[38px]">
                                GameChanger is a unique AI protocol helping socially-challenged individuals perform better on dating apps.
                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="">
                    <div className="container max-w-[1600px] px-[20px] lg:px-[80px] mx-auto relative">
                        <div className="flex flex-wrap items-end gap-y-[50px] lg:flex-row-reverse">
                            <div className="w-full lg:w-1/2">
                                <div className="p-[20px] xl:p-[50px] text-[14px] xl:leading-[28px] xl:text-[18px] max-lg:text-center max-lg:bg-[rgba(0,0,0,0.5)]">
                                    <h3 className="text-[24px] leading-[40px] xl:text-[32px] font-[600] mb-[20px]">Changing the Dating Game</h3>
                                    <p className="mb-[20px]">GameChanger utilizes proprietary artificial intelligence chatbot trained on hundreds of thousands of chat messages aggregated from different dating apps to predict and mimic response patterns.</p>
                                    <p>Since the AI is carefully trained on datasets contributed by the community, supporters of the project share the project’s success and can earn passive lifetime Royalties generated from global usage of the GameChanger app.</p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="max-lg:max-w-[500px] mx-auto">
                                    <img src="/images/How-does-it-work22.png" alt="How Does it Work" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
