import Container from "../layout/Container";
import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-20 bg-white transition-colors duration-300 dark:bg-slate-950">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Browse by Category
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Explore opportunities based on your interests.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              total={category.total}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
