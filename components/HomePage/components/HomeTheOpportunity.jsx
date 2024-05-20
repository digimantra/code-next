export default function HomeTheOpportunity() {
    return (
        <>
            <section className="py-[50px] lg:py-[100px]">
                <div className="container max-w-[1600px] px-[20px] lg:px-[80px] mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="max-lg:text-center">
                                <p className="text-[14px] lg:text-[18px] tracking-[0.3px] bg-[#000D0D] text-[#fff] py-[8px] px-[16px] mb-[20px]">
                                    A Blue Chip Utility Project
                                </p>
                                <h2 className="text-[42px] lg:text-[62px] font-bold uppercase">
                                    The Opportunity
                                </h2>

                                <div className="mt-[50px] lg:mt-[80px]">
                                    <h3 className="text-[26px] lg:text-[52px] font-bold mb-[10px]">
                                        Untapped & Ready To Go
                                    </h3>
                                    <p className="text-[18px] font-raleway">
                                        The online dating market is expected to surpass $3.5B by 2028, It is a high value industry with high LTV which is at the cusp of transitioning into AI tools and services - presenting now an early entry to an untapped market opportunity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="animate-[toggleUpDown_5s_ease-in-out_infinite] mx-auto max-lg:max-w-[500px] max-lg:mt-[50px]">
                                <img src="/images/Market-car.png" alt="Market Car" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
