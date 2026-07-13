import Logo from "./Logo";
import Navigation from "./Navigation";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <Navigation />

          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
              Add Opportunity
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
