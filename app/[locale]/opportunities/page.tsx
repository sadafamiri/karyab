"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";
import OpportunityCard from "@/components/opportunities/OpportunityCard";
import { useOpportunities } from "@/context/OpportunityContext";
import SearchBar from "@/components/opportunities/SearchBar";
import CategoryFilter from "@/components/opportunities/CategoryFilter";
import LocationFilter from "@/components/opportunities/LocationFilter";

export default function OpportunitiesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const { opportunities } = useOpportunities();

  return (
    <section className="py-20">
      <Container>
        <h1 className="mb-10 text-center text-5xl font-bold">Opportunities</h1>

        <SearchBar search={search} setSearch={setSearch} />

        <CategoryFilter category={category} setCategory={setCategory} />
        <LocationFilter location={location} setLocation={setLocation} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {opportunities
            .filter((opportunity) => {
              const matchesSearch = opportunity.title
                .toLowerCase()
                .includes(search.toLowerCase());

              const matchesCategory =
                category === "All" || opportunity.category === category;
              const matchesLocation =
                location === "All" || opportunity.location === location;

              return matchesSearch && matchesCategory && matchesLocation;
            })
            .map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                id={opportunity.id}
                title={opportunity.title}
                organization={opportunity.organization}
                location={opportunity.location}
                category={opportunity.category}
                type={opportunity.type}
                deadline={opportunity.deadline}
              />
            ))}
        </div>
      </Container>
    </section>
  );
}
