"use client";

import Container from "@/components/layout/Container";
import { useSaved } from "@/context/SavedContext";

export default function SavedPage() {
  const { savedIds } = useSaved();

  return (
    <Container>
      <section className="py-20">
        <h1 className="mb-8 text-4xl font-bold">Saved Opportunities</h1>

        <p>You have saved {savedIds.length} opportunities.</p>
      </section>
    </Container>
  );
}
