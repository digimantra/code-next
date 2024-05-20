import Link from 'next/link';

import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>



            <footer className="text-[#fff]">
                <section className="mb-[-2px]">
                    <svg className="fill-[#228256] w-[calc(100%+2px)] ml-[-2px]" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" viewBox="0 0 1920 234">
                        <path opacity="1.000000" stroke="none" d="M1920.698975,158.668503C1921.000000,183.328247 1920.959351,207.656647 1921.062500,231.984467C1921.072876,234.445862 1920.558960,235.495743 1918.013062,235.018066C1917.369263,234.897278 1916.683472,235.000000 1916.016968,235.000000C1279.316895,235.000000 642.616882,234.993713 5.916911,235.127350C1.465652,235.128281 0.871608,233.934845 0.899025,229.918289C1.090102,201.925705 1.000000,173.931198 1.000000,145.468658C2.358093,143.188446 4.328652,142.307236 6.322577,141.427383C37.640915,127.607475 69.929039,116.594406 102.987801,107.751823C150.427567,95.062607 198.658508,86.758865 247.452713,81.644035C271.624237,79.110268 295.833588,77.139221 320.148254,76.141945C349.440369,74.940514 378.733490,73.665764 408.028900,74.470398C432.976837,75.155624 457.936676,75.476433 482.878143,77.054176C508.962311,78.704216 535.049561,80.324501 561.084778,82.547112C594.113464,85.366753 627.036438,89.258148 659.901733,93.622589C725.810059,102.375046 791.397034,113.293457 857.195007,122.785416C893.636292,128.042419 930.163391,132.677597 966.824768,136.086487C987.868408,138.043182 1008.957764,139.535446 1030.087402,140.449509C1053.208252,141.449722 1076.338989,142.619034 1099.469238,142.202332C1122.587891,141.785858 1145.679321,140.378723 1168.761719,138.669830C1225.965454,134.434753 1282.674194,126.189796 1339.414307,118.230370C1380.991943,112.397888 1422.495972,106.041313 1464.172485,100.921532C1494.094238,97.245789 1524.062134,94.124191 1554.159546,92.154915C1584.249390,90.186127 1614.348511,88.694313 1644.495361,89.381096C1714.183228,90.968704 1782.625854,100.253960 1848.543091,124.013374C1871.607056,132.326599 1893.893799,142.493240 1915.398804,154.316116C1917.303711,155.363373 1919.201782,156.411804 1920.698975,158.668503z"></path>
                    </svg>
                </section>

                <section className="py-[15px] bg-[#228256]">
                    <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">

                        <div className="flex flex-wrap items-center">
                            <div className="w-full lg:w-1/4 max-lg:text-center">
                                <a href="" className="inline-block max-w-[180px] md:max-w-[250px]">
                                    <img className="" src="/images/voixapp-web-logo.svg" alt="VOIXAPP AI" />
                                </a>
                            </div>

                            <div className="w-full lg:w-1/2 max-lg:my-[30px]">
                                <div className="">
                                    <ul className="flex flex-wrap justify-center gap-x-[21px] uppercase [&>li>a:hover]:text-[#ccc] [&>li]:relative [&>li:after]:content-[''] [&>li:after]:w-[1px] [&>li:after]:h-[14px] [&>li:after]:bg-[rgba(255,255,255,0.5)] [&>li:after]:absolute [&>li:after]:right-[-10px] [&>li:after]:top-[6px] max-lg:justify-center max-lg:text-[14px]">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="">Services</Link></li>
                                        <li><Link href="">About Us</Link></li>
                                        <li className="after:hidden"><Link href="/blog">Blog</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/4 max-lg:py-[20px]">
                                <ul className="flex flex-wrap justify-end gap-[30px] text-[18px] lg:text-[24px] [&>li>a]:text-[#fff] [&>li>a:hover]:text-[#ccc] max-lg:justify-center">
                                    <li><Link href=""><FaFacebookF /></Link></li>
                                    <li><Link href=""><FaLinkedinIn /></Link></li>
                                    <li><Link href=""><FaXTwitter /></Link></li>
                                    <li><Link href=""><FaYoutube /></Link></li>
                                    <li><Link href=""><FaInstagram /></Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="font-raleway text-center py-[15px] bg-[#000D0D] text-[12px] lg:text-[14px]">
                    <div className="container max-w-[1600px] px-[10px] lg:px-[80px] mx-auto">
                        Copyright © {currentYear}. All rights reserved.
                    </div>
                </section>
            </footer>
        </>
    );
}