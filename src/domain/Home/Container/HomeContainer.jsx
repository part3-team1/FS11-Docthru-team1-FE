import HeroSection from '../Components/HeroSection/HeroSection.jsx';
import FeatureSection from '../Components/FeatureSection/FeatureSection.jsx';
import CTASection from '../Components/CTASection/CTASection.jsx';
import * as styles from './HomeContainer.css.js'

export default function HomeContainer() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </div>
  );
}
