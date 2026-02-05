import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FamousCarsSection from "@/components/sections/FamousCarsSection";
import CarDetailsSection from "@/components/sections/CarDetailsSection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FamousCarsSection />
      <CarDetailsSection />
    </Layout>
  );
}
