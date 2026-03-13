import HeroSection from '../Components/HeroSection/heroSection.js';
import FeatureSection from '../Components/FeatureSection/featureSection.js';
import CTASection from '../Components/CTASection/CTASection.js';

export default function HomeContainer() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </main>
  );
}
