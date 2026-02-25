import { Globe } from "lucide-react";
import type { Project } from "../ProjectsSection";

import smartlinerSelector from "@/assets/projectDocs/smartliner-usa-selector.png";
import smartlinerDirectus from "@/assets/projectDocs/smartliner-usa-directus.png";
import smartlinerLanding from "@/assets/projectDocs/smartliner-usa-landing.png";

export const getSmartlinerWebsite = (): Project => ({
  title: "Smartliner Website",
  subtitle: "Headless E-Commerce Platform with AI Search",
  icon: <Globe className="w-6 h-6" />,
  description:
    "Migrated Shopify frontend to headless architecture with .NET C# middleware, React frontend, and Directus CMS for marketing flexibility.",
  overview:
    "Led the transition from Shopify frontend to a headless Shopify architecture, implementing a .NET C# middleware layer and React frontend. Integrated Directus CMS to empower marketing teams with flexible content management and Algolia AI search to index 2,000+ product listings across dynamic pages.",
  technicalDetails: {
    architecture:
      ".NET C# middleware with React frontend, Directus headless CMS, headless Shopify backend, and Redis caching. Centralized common logic for cookie management across components. Implemented CI/CD pipeline with GitHub Actions.",
    challenges:
      "Managing shared state across multiple components using cookies, indexing 2,000+ product listings for search, integrating multiple connected APIs while maintaining clean code architecture.",
    solutions:
      "Centralized common cookie logic for consistency across components. Implemented Algolia AI search to index all dynamic pages and product listings. Established robust DevOps practices with comprehensive documentation and CI/CD pipeline using GitHub Actions.",
  },
  impact: {
    metrics: [
      "2,000+ indexed listings",
      "AI-powered search",
      "Headless architecture",
    ],
    outcomes: [
      "Marketing team empowered with Directus CMS",
      "Scalable search across all product pages",
      "Clean, maintainable codebase with centralized logic",
    ],
  },
  tech: [
    ".NET C#",
    "React",
    "Directus",
    "Shopify",
    "Algolia",
    "Redis",
    "GitHub Actions",
  ],
  customTabs: [
    {
      label: "Architecture",
      value: "architecture",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Headless Shopify Migration
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Transitioned from a traditional Shopify frontend to a headless
              architecture, implementing a .NET C# middleware layer that sits
              between the React frontend and Shopify's backend APIs. This
              separation allowed for greater flexibility in design and
              functionality while maintaining Shopify's powerful e-commerce
              capabilities.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The middleware handles authentication, request routing, data
              transformation, and caching logic, providing a unified API for the
              frontend to consume. This architecture enabled the marketing team
              to manage content independently through Directus CMS without
              requiring developer intervention for every change.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Landing Page
            </h3>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={smartlinerLanding}
                alt="Smartliner landing page"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Modern, responsive landing page built with React and powered by
                Directus CMS for flexible content management.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "CMS & Search",
      value: "cms",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Directus CMS Integration
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Implemented Directus as a headless CMS to empower the marketing
              team with full control over content without requiring developer
              involvement. Directus provides a user-friendly interface for
              managing pages, product content, images, and marketing materials.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The CMS integration allows non-technical users to create and
              update content across the site, manage collections, and control
              the presentation of products without touching code. This
              dramatically reduced the time-to-market for marketing campaigns
              and content updates.
            </p>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={smartlinerDirectus}
                alt="Directus CMS interface"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Directus CMS interface for managing content, collections, and
                product data.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Algolia AI Search
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Integrated Algolia AI-powered search to index over 2,000 product
              listings and all dynamic pages. The search implementation provides
              instant, typo-tolerant results with advanced filtering
              capabilities, dramatically improving the user experience and
              product discoverability.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Algolia's real-time indexing keeps search results synchronized
              with inventory changes, ensuring customers always see accurate,
              up-to-date product information. The search interface includes
              faceted filtering, allowing users to narrow results by vehicle
              make, model, year, and product category.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "Product Selector",
      value: "selector",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Vehicle Selector Tool
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Built a sophisticated vehicle selector that guides customers
              through finding the perfect products for their specific vehicle.
              The selector filters through 2,000+ SKUs based on make, model,
              year, and other vehicle attributes to show only compatible
              products.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This tool significantly improved conversion rates by reducing
              confusion and helping customers confidently select the right
              products. The centralized cookie management system remembers user
              selections across sessions, providing a seamless shopping
              experience.
            </p>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={smartlinerSelector}
                alt="Vehicle selector interface"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Interactive vehicle selector filtering products by make, model,
                and year.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Centralized State Management
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Multiple components throughout the application needed to access
              and modify shared state, particularly around user vehicle
              selections and session data. Rather than duplicating cookie logic
              across components, I centralized all cookie management into a
              single, well-documented module.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This architectural decision ensured consistency, reduced bugs, and
              made the codebase significantly more maintainable. Any changes to
              cookie handling logic only needed to be made in one place, and all
              components automatically benefited from improvements and bug
              fixes.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "DevOps",
      value: "devops",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              CI/CD Pipeline
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Established a robust CI/CD pipeline using GitHub Actions to
              automate testing, building, and deployment processes. The pipeline
              runs comprehensive test suites, performs code quality checks, and
              deploys to staging and production environments with zero downtime.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Automated deployments reduced manual errors and deployment time
              from hours to minutes. The pipeline includes rollback capabilities
              and environment-specific configuration management to ensure safe,
              reliable releases.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Redis Caching Strategy
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Implemented Redis caching at multiple layers to optimize
              performance and reduce load on external APIs. Product data, search
              results, and session information are cached with appropriate TTL
              values to balance freshness with performance.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The caching strategy significantly improved page load times and
              reduced costs associated with API calls to Shopify and other
              third-party services. Cache invalidation logic ensures users
              always see current pricing and inventory information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Documentation & Code Quality
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Maintained comprehensive documentation covering architecture
              decisions, API integrations, deployment procedures, and common
              troubleshooting scenarios. Clear documentation enabled team
              members to quickly understand and contribute to the codebase.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Enforced code quality standards through linting, formatting rules,
              and code review processes. The centralized common logic pattern
              made the codebase more readable and maintainable, reducing
              technical debt and making onboarding new developers significantly
              easier.
            </p>
          </div>
        </div>
      ),
    },
  ],
});
