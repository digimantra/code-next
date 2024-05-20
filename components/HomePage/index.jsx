import HomeBannerAiSection from "./components/HomeBannerAiSection";
import HomeTheOpportunity from "./components/HomeTheOpportunity";
import HomeDatingIntegration from "./components/HomeDatingIntegration";
import OurExpertiseSection from "./components/OurExpertiseSection";

export default function HomePage() {
  return (
    <>
      <main className="text-[#000D0D]">
        <HomeBannerAiSection />
        <HomeTheOpportunity />
        <HomeDatingIntegration />
        <OurExpertiseSection />
      </main>
    </>
  );
}
