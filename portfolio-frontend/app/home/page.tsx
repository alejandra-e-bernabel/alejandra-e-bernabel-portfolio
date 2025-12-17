import NavMenu from "../components/navMenu";
import IntroCard from "../components/introCardGrid";
import HeroBanner from "../components/HeroBanner";

const HomePage = () => {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--background-secondary)' }}>
      {/* Left sidebar - Intro Card (sticky) */}
      <aside className="sticky top-0 h-screen">
        <IntroCard />
      </aside>

      {/* Main content area */}
      <main className="flex-1">
        <HeroBanner />
        {/* Other page content here */}
      </main>

      {/* Right sidebar - Nav Menu (sticky) */}
      <NavMenu />
    </div>
  );
};

export default HomePage;
