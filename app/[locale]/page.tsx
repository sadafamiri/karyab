import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import Statistics from "@/components/home/Statistics";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedOpportunities />
      <Statistics />
    </>
  );
}
