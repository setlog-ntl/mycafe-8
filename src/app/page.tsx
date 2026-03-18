import { siteConfig } from '@/lib/config';
import { NavHeader } from '@/components/nav-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { MenuSection } from '@/components/menu-section';
import { InfoSection } from '@/components/info-section';
import { GallerySection } from '@/components/gallery-section';
import { SnsSection } from '@/components/sns-section';
import { QuickActions } from '@/components/quick-actions';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <NavHeader />
      <main id="main">
        <HeroSection config={siteConfig} />
        <QuickActions config={siteConfig} />
        <AboutSection config={siteConfig} />
        <MenuSection items={siteConfig.menuItems} />
        <InfoSection config={siteConfig} />
        {siteConfig.galleryImages.length > 0 && (
          <GallerySection images={siteConfig.galleryImages} />
        )}
        <SnsSection config={siteConfig} />
      </main>
      <Footer />
    </>
  );
}
