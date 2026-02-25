import { Database } from "lucide-react";
import CodeSnippet from "../CodeSnippet";
import type { Project } from "../ProjectsSection";

import productsAppScreenshot from "@/assets/projectDocs/products_app_screenshot.png";
import productsAppFilters from "@/assets/projectDocs/products-app-custom-filters.png";
import productsAppStructure from "@/assets/projectDocs/products-app-subdirs.png";
import productsAppBackend from "@/assets/projectDocs/products-app-fastapi.png";

export const getProductCatalogIntegration = (): Project => ({
  title: "Product Catalog Integration",
  subtitle: "Enterprise Data Unification",
  icon: <Database className="w-6 h-6" />,
  description:
    "Unified a disparate catalog of products across all company channels into a single database, now powering every sales channel.",
  overview:
    "Coordinated every department in the company through end-to-end processes. Created the BRD, led stakeholder meetings, designed the database schema, and built key frontend integrations. Developed scripts to load data to and from all channels during initial DB construction.",
  technicalDetails: {
    architecture:
      "Built on SQL with Python backend services and React frontend. Integrated with multiple sales channels via REST APIs, containerized with Docker for consistent deployments across environments.",
    challenges:
      "Harmonizing product data from disparate sources with inconsistent schemas, maintaining data integrity during migration, and ensuring zero downtime during the transition.",
    solutions:
      "Implemented AI-powered data indexing and parsing for automated catalog management. Created migration scripts with rollback capabilities and comprehensive validation. Built a robust ETL pipeline for continuous synchronization.",
  },
  impact: {
    metrics: [
      "Cross-department coordination",
      "Single source of truth",
      "AI-powered indexing",
    ],
    outcomes: [
      "Eliminated data inconsistencies across all sales channels",
      "Reduced product onboarding time by 75%",
      "Enabled real-time inventory synchronization",
    ],
  },
  tech: ["Python", "React", "AI/ML", "REST APIs", "Docker"],
  flagship: true,
  customTabs: [
    {
      label: "Database",
      value: "database",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Data Unification Challenge
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The project involved gathering data from many disparate sources,
              including legacy databases, Google Sheets, and a third-party
              catalog tool. Each source had its own schema, data types, and
              conventions. The challenge was to universalize all this data to
              fit into a unified SQL database without losing any
              information or business context.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Legacy systems stored product data in inconsistent formats—some
              using nested JSON, others with denormalized tables. Google Sheets
              contained manual entries with varying column structures. The
              catalog tool used proprietary field mappings that needed
              translation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Database Schema Design
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Created a flexible, normalized schema that could accommodate all
              data sources while maintaining referential integrity:
            </p>
            <CodeSnippet
              language="sql"
              title="products table schema"
              code={`-- Core "parent" products table with universal fields
CREATE TABLE [dbo].[Product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[manufacture_sku] [nvarchar](255) NOT NULL,
	[manufacturer_id] [int] NULL,
	[manufacture_status_id] [nvarchar](255) NULL,
	[classification_id] [int] NULL,
	[color_id] [int] NULL,
	[box_id] [int] NULL,
	[cost_avg] [decimal](10, 2) NULL,
	[average_weight] [decimal](10, 2) NULL,
	[trim_id] [int] NULL,
	[ordered] [bit] NULL,
	[part_status_id] [int] NULL,
	[scan_status_id] [int] NULL,
	[date_ordered] [datetime] NULL,
	[date_created] [datetime] NULL,
	[date_modified] [datetime] NULL,
	[fitment_notes] [text] NULL


    -- Table for "children" products (inheriting parent attributes)
    CREATE TABLE [dbo].[ProductSKU](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[product_id] [int] NOT NULL,
	[sku] [varchar](255) NOT NULL,
	[upc] [varchar](50) NULL,
	[make_id] [int] NULL,
	[model_id] [int] NULL,
	[blocked_in_inventory_file] [bit] NULL,
	[asin] [varchar](255) NULL,
	[year_start] [int] NULL,
	[year_end] [int] NULL,
	[date_created] [datetime] NULL,
	[date_modified] [datetime] NULL,
	[diagram_url] [varchar](500) NULL,
	[is_blocked_amz_vendor] [bit] NOT NULL
);`}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Fullstack Application",
      value: "fullstack",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Replacing Manual Workflows
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Previously, product catalog data was manually entered into Google
              Sheets and then individually uploaded to five different sales
              channels (Amazon, eBay, Shopify, Amazon, and the Sales Management
              System). This process was time-consuming, error-prone, and made it
              difficult to maintain consistency across channels.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              I led the design, implementation, and development of a full-stack
              React application that replaced this entire manual workflow. Now,
              all product data is managed through a single interface, and the
              application automatically syncs to all channels using their
              respective APIs. This eliminated data entry errors and reduced
              product onboarding time by 75%.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Application Screenshots
            </h3>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={productsAppScreenshot}
                alt="Products app screenshot"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60 mb-4">
                Main product catalog interface showing unified data across
                channels.
              </p>
              <img
                src={productsAppFilters}
                alt="Products app filters screenshot"
                className="mx-auto rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Advanced filtering options for managing large product catalogs.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Code Structure
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The application follows a modular architecture with clear
              separation of concerns.
            </p>

            {/* Side-by-side layout for structure diagram and explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4">
                <img
                  src={productsAppStructure}
                  alt="Code structure diagram"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-semibold text-foreground">
                  Backend API Segregation
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  The backend architecture strategically sections off different
                  external APIs into isolated modules, providing clear
                  segregation between channels and their respective APIs. Each
                  channel integration lives in its own directory with dedicated
                  authentication, request handlers, and response transformers.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  This modular approach accounts for the vastly different
                  documentation standards, data structures, and schema
                  requirements across platforms like Amazon MWS, Shopify
                  REST/GraphQL, eBay Trading API, and custom B2B endpoints. Each
                  module encapsulates its own complexity, error handling, and
                  rate limiting logic.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  The clear separation makes it significantly easier for any
                  team member to locate channel-specific code, understand data
                  flow, and make modifications without navigating through
                  unrelated integrations. When debugging or extending
                  functionality for a specific channel, developers can work
                  within a single, well-defined module without worrying about
                  side effects in other channels.
                </p>

                {/* Backend architecture diagram */}
                <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4 mt-4">
                  <img
                    src={productsAppBackend}
                    alt="Backend API architecture"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Data Synchronicity",
      value: "synchronicity",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Bulk Import Scripts
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To enable comprehensive data comparison across all sales channels,
              I developed bulk import scripts that download and store complete
              snapshots of product data from each platform. These scripts handle
              the complexity of different API structures, pagination, rate
              limiting, and data transformation requirements unique to each
              channel.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For example, the SellerCloud integration required designing
              multiple database tables to capture the full breadth of product
              information, including pricing across different channels,
              kit/bundle relationships, and inventory data. Each table is
              optimized for specific query patterns used in data comparison and
              reconciliation workflows.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              SellerCloud Database Schema
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The SellerCloud schema includes tables for main product data,
              channel-specific pricing, price summaries, and kit/bundle child
              relationships:
            </p>
            <CodeSnippet
              language="sql"
              title="SellerCloud product tables schema"
              code={`-- Main products table with comprehensive product data
CREATE TABLE [dbo].[SellercloudProducts](
	[product_id] [nvarchar](100) NOT NULL,
	[product_name] [nvarchar](max) NULL,
	[short_description] [nvarchar](max) NULL,
	[long_description] [nvarchar](max) NULL,
	[product_type] [nvarchar](255) NULL,
	[upc] [nvarchar](50) NULL,
	[asin] [nvarchar](50) NULL,
	[manufacturer_sku] [nvarchar](100) NULL,
	[status] [int] NULL,
	[is_kit] [bit] NULL,
	[is_matrix_parent] [bit] NULL,
	[is_end_of_life] [bit] NULL,
	[site_price] [decimal](18, 2) NULL,
	[list_price] [decimal](18, 2) NULL,
	[average_cost] [decimal](18, 5) NULL,
	[aggregate_qty] [int] NULL,
	[inventory_available_qty] [int] NULL,
	[reserved_qty] [int] NULL,
	[image_url] [nvarchar](1000) NULL,
	[date_created] [datetime2](7) NULL,
	[last_modified_date] [datetime2](7) NULL,
	[raw_payload] [nvarchar](max) NOT NULL,
	[synced_at] [datetime2](7) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

-- Channel-specific pricing table
CREATE TABLE [dbo].[SellercloudProductPriceCurrent](
	[product_id] [nvarchar](100) NOT NULL,
	[channel_id] [int] NOT NULL,
	[price] [decimal](18, 2) NOT NULL,
	[use_default_site_price] [bit] NOT NULL,
	[synced_at] [datetime2](7) NOT NULL
) ON [PRIMARY]

-- Price summary for quick lookups
CREATE TABLE [dbo].[SellercloudProductPriceSummary](
	[product_id] [nvarchar](100) NOT NULL,
	[site_price] [decimal](18, 2) NULL,
	[stop_loss_price] [decimal](18, 2) NULL,
	[synced_at] [datetime2](7) NOT NULL
) ON [PRIMARY]

-- Kit/bundle child product relationships
CREATE TABLE [dbo].[SellercloudProductKitChild](
	[parent_product_id] [nvarchar](100) NOT NULL,
	[child_product_id] [nvarchar](100) NOT NULL,
	[per_kit_qty] [int] NOT NULL,
	[child_product_name] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]`}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Bulk Import Implementation
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The bulk import script handles pagination, batch processing, error
              collection, and progress tracking to reliably import thousands of
              products:
            </p>
            <CodeSnippet
              language="python"
              title="bulk_import_sellercloud_products.py - SellerCloud bulk import"
              code={`from datetime import datetime

from errors import ErrorCollector
from sellercloud import process_product
from sellercloud.catalog_fetcher import CatalogFetcher
from sellercloud.db import DB
from sellercloud.sellercloud_api import SellerCloudAPI
from variables import get_variables

def bulk_import_sellercloud_products(errors: ErrorCollector, test_mode: bool = False) -> bool:
    """
    Bulk import products from SellerCloud.

    Args:
        errors: ErrorCollector instance to collect errors
        test_mode: Whether to run in test mode with limited products

    Returns:
        bool: True if import completed successfully, False if fatal error occurred
    """
    context = "SellerCloud Import"
    start_time = datetime.now()

    try:
        vars = get_variables()
        view_id = vars["view_id"]
        page_size = vars["catalog_page_size"]
        image_batch_size = vars["image_batch_size"]

        progress_tracker = {
            "total_products": 0,
            "products_processed": 0,
            "products_failed": 0,
        }

        api = SellerCloudAPI()
        catalog_fetcher = CatalogFetcher(
            api, progress_tracker=progress_tracker,
            test_mode=test_mode
        )

        # Step 1: Fetch all products with pagination
        all_products = catalog_fetcher.fetch_all_products(view_id=view_id, page_size=page_size)

        # Step 2: Fetch images for all products in batches
        images_lookup = catalog_fetcher.fetch_product_images(all_products, batch_size=image_batch_size)

        # Step 3: Connect to DB and process products
        with DB(max_retries=3) as db:
            product_processor = process_product.ProductProcessor(db, api, progress_tracker)
            product_processor.process_all_products(all_products, images_lookup)

        # Final statistics
        end_time = datetime.now()
        duration = end_time - start_time

        print(f"Total: {progress_tracker['total_products']}")
        print(f"Processed: {progress_tracker['products_processed']}")
        print(f"Failed: {progress_tracker['products_failed']}")
        print(f"Duration: {duration}")

        return True

    except Exception as e:
        errors.add_with_context(context, f"Fatal error: {e}")
        return False`}
            />
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Scheduled Synchronization with Azure
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              After the initial bulk import, data must be regularly synchronized
              based on the last updated date to capture changes, new products,
              and deletions. I configured Azure scheduled jobs to run these sync
              scripts automatically, checking for updates and maintaining data
              freshness across all channels without manual intervention.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The scheduled jobs use incremental sync strategies, querying only
              products modified since the last sync timestamp. This dramatically
              reduces API calls, processing time, and database load compared to
              full re-imports while ensuring data stays current.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Multi-Channel Data Comparison
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              With synchronized snapshots from all channels stored locally, we
              can run complex comparison queries to identify discrepancies in
              pricing, availability, and missing listings across platforms:
            </p>
            <CodeSnippet
              language="sql"
              title="Finding products missing from channels"
              code={`-- Products in master catalog but not on Amazon
SELECT
    p.sku,
    p.title,
    p.brand_id,
    'Not published to Amazon' as issue
FROM products p
LEFT JOIN channel_snapshots_amazon csa ON csa.sku = p.sku
    AND csa.snapshot_id = (SELECT MAX(id) FROM channel_snapshots WHERE channel = 'amazon')
WHERE csa.sku IS NULL
    AND p.is_active = true;

-- Products with price discrepancies across channels
SELECT
    p.sku,
    p.title,
    p.price as master_price,
    csa.price as amazon_price,
    css.price as shopify_price,
    cse.price as ebay_price
FROM products p
LEFT JOIN channel_snapshots_amazon csa ON csa.sku = p.sku
LEFT JOIN channel_snapshots_shopify css ON css.sku = p.sku
LEFT JOIN channel_snapshots_ebay cse ON cse.sku = p.sku
WHERE (
    ABS(p.price - csa.price) > 0.01 OR
    ABS(p.price - css.price) > 0.01 OR
    ABS(p.price - cse.price) > 0.01
);`}
            />
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Automated Reconciliation
            </h3>
            <CodeSnippet
              language="python"
              title="reconcile_differences.py - Automated sync correction"
              code={`from sqlalchemy import select, and_
from models import Product, ChannelSnapshot
from adapters import get_channel_adapter

async def reconcile_channel(channel_name: str, auto_fix: bool = False):
    """Identify and optionally fix discrepancies between master and channel."""
    adapter = get_channel_adapter(channel_name)

    # Find products in master but missing from channel
    missing_products = await find_missing_products(channel_name)

    # Find products with mismatched data
    mismatched_products = await find_mismatched_products(channel_name)

    print(f"\\n{channel_name} Reconciliation Report")
    print(f"  Missing products: {len(missing_products)}")
    print(f"  Mismatched data: {len(mismatched_products)}")

    if auto_fix:
        # Publish missing products
        for product in missing_products:
            await adapter.publishProduct(product)
            print(f"  ✓ Published {product.sku} to {channel_name}")

        # Update mismatched products
        for product, differences in mismatched_products:
            await adapter.updateProduct(product.channel_id, differences)
            print(f"  ✓ Updated {product.sku} on {channel_name}")

    return {
        "missing": len(missing_products),
        "mismatched": len(mismatched_products),
        "fixed": auto_fix
    }`}
            />
          </div>
        </div>
      ),
    },
  ],
});
