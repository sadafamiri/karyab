import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedOpportunities from "@/components/home/FeaturedOpportunities";
import Statistics from "@/components/home/Statistics";

export default function Home() {
  return (
    <>
      <div className="bg-red-500 dark:bg-green-500 h-40">Test</div>
      <Hero />
      <Categories />
      <FeaturedOpportunities />
      <Statistics />
    </>
  );
}
