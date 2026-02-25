import { Wrench } from "lucide-react";
import type { Project } from "../ProjectsSection";
import CodeSnippet from "../CodeSnippet";

import b2bDropshipAnalytics from "@/assets/projectDocs/b2b-dropship-analytics.png";
import b2bDropshipLanding from "@/assets/projectDocs/b2b-dropship-landing.png";
import b2bDashboardSample from "@/assets/projectDocs/b2b-dashboard-sample.png";
import b2bOnboarding from "@/assets/projectDocs/b2b-onboarding.png";

export const getAutomationInternalTools = (): Project => ({
  title: "B2B Automation & Internal Tools",
  subtitle: "End-to-End Order Processing Systems",
  icon: <Wrench className="w-6 h-6" />,
  description:
    "Led development of complete B2B dropship and wholesale automation systems, processing orders from SFTP, email, and customer portal with multi-database architecture.",
  overview:
    "Architected and built end-to-end B2B order processing automation working cross-functionally with B2B department, customer service, and accounting. Designed multi-database architecture separating B2B customer accounts, dropship orders, and wholesale orders. Implemented intelligent order intake from SFTP, email (with GPT parsing), and customer-facing portal. Built self-service onboarding system eliminating manual IT intervention.",
  technicalDetails: {
    architecture:
      "Three-database architecture: B2B database for customer accounts and authentication, Dropship database for order processing and tracking, Wholesale database for bulk orders. Python backend with FastAPI, EDI integration via Orderful API, GPT API for email parsing, TaxJar for tax calculation, integrated with SellerCloud order management system.",
    challenges:
      "Coordinating across multiple departments for requirements, handling orders from diverse sources (SFTP, email, portal), managing customer-specific discount rules and tax logic, parsing unstructured email orders, maintaining data integrity across three databases, enabling self-service onboarding without IT intervention.",
    solutions:
      "Separated concerns with dedicated databases for customer data, dropship orders, and wholesale orders. Engineered GPT-based email parser handling plain text and attachments. Built robust EDI 850/855 transaction processing. Created comprehensive error handling with automated notifications. Developed customer-facing portal for order placement and analytics. Implemented self-service B2B onboarding application.",
  },
  impact: {
    metrics: [
      "Multi-database architecture",
      "Cross-functional coordination",
      "Complete automation",
    ],
    outcomes: [
      "Eliminated manual B2B order processing across all channels",
      "Self-service customer onboarding without IT involvement",
      "Centralized customer discounts, tax rules, and account data",
    ],
  },
  tech: [
    "Python",
    "FastAPI",
    "SQL Server",
    "EDI",
    "OpenAI GPT",
    "React",
    "TaxJar",
    "Azure",
  ],
  customTabs: [
    {
      label: "System Overview",
      value: "overview",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              End-to-End B2B Order Automation
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Built a complete B2B order processing ecosystem handling dropship
              and wholesale orders from intake through fulfillment. The system
              automatically processes orders from multiple sources—SFTP files,
              email (parsed with GPT), and a customer-facing web portal—applying
              customer-specific discounts, calculating taxes, and routing to
              warehouse fulfillment.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Worked cross-functionally with B2B department, customer service,
              and accounting teams to align on data structure, business rules,
              and automated workflows that replaced entirely manual processes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Multi-Database Architecture
            </h3>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">B2B Database:</strong>{" "}
                  Customer accounts, authentication, discount rules, tax
                  exemptions, shipping preferences, and accounting information
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">
                    Dropship Database:
                  </strong>{" "}
                  Order processing, order items, shipment tracking, invoice
                  status, and EDI transaction history
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">
                    Wholesale Database:
                  </strong>{" "}
                  Bulk order management, historical data migrated from local
                  server, separate tracking and invoicing workflows
                </p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-4">
              This separation ensures clean code architecture, proper data
              isolation, and makes the system maintainable as business
              requirements evolve independently for each order type.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Order Intake Channels
            </h3>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6">
              <ul className="space-y-2 ml-4">
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>SFTP:</strong> Automated file monitoring and
                    processing for EDI 850 purchase orders
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Email:</strong> GPT-powered parsing of customer
                    emails and attachments into structured order data
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Customer Portal:</strong> Self-service web
                    application for order placement and analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Database Schema",
      value: "database",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              B2B Customer Accounts
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Centralized all B2B customer data previously scattered across
              systems. Stores account information, discount rules, shipping
              preferences, EDI identifiers, and QuickBooks integration details.
            </p>
            <CodeSnippet
              language="sql"
              title="B2B Partners table schema"
              code={`-- Core B2B customer account information
CREATE TABLE [dbo].[B2BPartners](
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [name] NVARCHAR(255) NOT NULL,
    [code] NVARCHAR(50) NOT NULL UNIQUE,
    [kramer_shipping_account] NVARCHAR(255),
    [sellercloud_customer_id] INT,
    [ftp_folder_name] NVARCHAR(255),
    [blocked_status] BIT DEFAULT 0,
    [date_added] DATETIME DEFAULT GETDATE(),
    [ship_method] NVARCHAR(100),
    [invoice_email] NVARCHAR(255),
    [discount_percentage] DECIMAL(5,2),
    [shipping_account_number] NVARCHAR(100),
    [email_notifications] BIT DEFAULT 1,
    [stock_tracker] BIT DEFAULT 0,
    [edi_name] NVARCHAR(255),
    [blocked_reason] NVARCHAR(MAX),
    [customer_type] NVARCHAR(50),
    [edi_status] NVARCHAR(50),
    [isa_id] NVARCHAR(50),
    [is_separate_job_file] BIT DEFAULT 0,
    [shipping_discount] DECIMAL(10,2),
    [quickbooks_id] NVARCHAR(100),
    [limit_b2b_app_catalog] BIT DEFAULT 0
);`}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Wholesale Order Processing
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Separate database for wholesale orders with complete tracking from
              order placement through shipment. Migrated historical data from
              local server to cloud-based solution.
            </p>
            <CodeSnippet
              language="sql"
              title="Wholesale order tables"
              code={`-- Wholesale order header
CREATE TABLE [dbo].[Orders](
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [customer_id] INT NOT NULL,
    [sellercloud_order_id] INT,
    [sellercloud_status] NVARCHAR(50),
    [po_number] NVARCHAR(100),
    [po_date] DATE,
    [requested_delivery_date] DATE,
    [ship_to_name] NVARCHAR(255),
    [ship_to_address] NVARCHAR(500),
    [ship_to_city] NVARCHAR(100),
    [ship_to_state] NVARCHAR(50),
    [ship_to_zip] NVARCHAR(20),
    [ship_to_country] NVARCHAR(100),
    [include_boxes] BIT DEFAULT 1,
    [created_at] DATETIME DEFAULT GETDATE(),
    [updated_at] DATETIME DEFAULT GETDATE(),
    [is_approved] BIT DEFAULT 0,
    [warehouse_sent_at] DATETIME,
    FOREIGN KEY ([customer_id]) REFERENCES [dbo].[B2BPartners]([id])
);

-- Order line items
CREATE TABLE [dbo].[OrderItems](
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [order_id] INT NOT NULL,
    [sku] NVARCHAR(100) NOT NULL,
    [ordered_quantity] INT NOT NULL,
    [sellercloud_quantity] INT,
    [created_at] DATETIME DEFAULT GETDATE(),
    [updated_at] DATETIME DEFAULT GETDATE(),
    FOREIGN KEY ([order_id]) REFERENCES [dbo].[Orders]([id])
);

-- Shipment tracking
CREATE TABLE [dbo].[Shipments](
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [order_id] INT NOT NULL,
    [tracking_number] NVARCHAR(100),
    [shipping_cost] DECIMAL(10,2),
    [created_at] DATETIME DEFAULT GETDATE(),
    [updated_at] DATETIME DEFAULT GETDATE(),
    FOREIGN KEY ([order_id]) REFERENCES [dbo].[Orders]([id])
);

-- Shipment item details
CREATE TABLE [dbo].[ShipmentItems](
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [shipment_id] INT NOT NULL,
    [order_item_id] INT NOT NULL,
    [shipped_quantity] INT NOT NULL,
    [created_at] DATETIME DEFAULT GETDATE(),
    FOREIGN KEY ([shipment_id]) REFERENCES [dbo].[Shipments]([id]),
    FOREIGN KEY ([order_item_id]) REFERENCES [dbo].[OrderItems]([id])
);`}
            />
          </div>
        </div>
      ),
    },
    {
      label: "EDI Automation",
      value: "edi",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              EDI 850/855 Transaction Processing
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Automated processing of EDI 850 purchase orders from B2B
              customers, applying business logic for pricing and tax, creating
              orders in the order management system, and generating EDI 855
              acknowledgments back to customers—all without manual intervention.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The system integrates with Orderful API for EDI transactions,
              SellerCloud for order management, and TaxJar for real-time tax
              calculation based on customer location and product taxability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Main Processing Script
            </h3>
            <CodeSnippet
              language="python"
              title="EDI 850/855 automation orchestration"
              code={`from kramer_functions import ProcessLogger, AzureSecrets, GmailNotifier

from orderful import OrderfulAPI
from db import DB
from seller_cloud_api import SellerCloudAPI
from context import get_customer_context
from errors import ErrorCollector
from processes import import_850_orders, process_850_orders, create_855_acknowledgments

def main():
    errors = ErrorCollector()
    db = DB()
    sc_api = SellerCloudAPI()
    edi_api = OrderfulAPI()
    customer_mappings, error_customers = get_customer_context(db, sc_api)

    import_850_orders(customer_mappings, edi_api, db, errors)
    process_850_orders(customer_mappings, sc_api, db, errors)
    create_855_acknowledgments(edi_api, sc_api, db, errors)

    for cust, msg in error_customers:
        errors.add_with_context(cust, msg)

    if errors.has_errors():
        notifier = GmailNotifier()
        secrets = AzureSecrets()
        recipient_email = secrets.get_secret("email-address-it-department")
        notifier.send_notification(
            subject="EDI 850/855 Processor Errors",
            body=errors.summary(),
            recipients=[recipient_email],
            cc_recipients=[],
            machine_info=True,
        )

if __name__ == "__main__":
    process_logger = ProcessLogger()
    try:
        main()
        process_logger.end("success")
    except Exception as e:
        error_message = f"An error occurred: {e}"
        print(error_message)
        notifier = GmailNotifier()
        secrets = AzureSecrets()
        recipient_email = secrets.get_secret("email-address-it-department")
        notifier.send_notification(
            subject="Orderful 850/855 Processor Error",
            body=error_message,
            recipients=[recipient_email],
            machine_info=True,
        )
        process_logger.end("failure", error_message)
        raise e`}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Order Import and Processing
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The import process retrieves EDI 850 transactions, validates
              customers, builds order context, and stores in the database.
              Processing applies customer-specific discounts, calculates taxes
              via TaxJar API, validates SKUs exist in inventory, and creates
              orders in SellerCloud.
            </p>
            <CodeSnippet
              language="python"
              title="EDI order processing with tax calculation"
              code={`def process_850_orders(customer_mappings: dict, sc_api: SellerCloudAPI, db: DB, errors: ErrorCollector):
    ready_orders = db.get_ready_for_sellercloud()
    taxjar_api_key = None
    for order in ready_orders:
        try:
            customer = customer_mappings[order["partner_code"]]
            order_object = generate_order_object(order, customer)

            skus_in_sellercloud_with_pricing = sc_api.get_skus_in_sellercloud(
                [product['ProductID'] for product in order_object['Products']]
            )
            missing_skus = [
                sku for sku in order_object['Products']
                if sku['ProductID'] not in skus_in_sellercloud_with_pricing
            ]
            if missing_skus:
                error_message = f"Order {order['id']} has SKUs not found in SellerCloud: {[sku['ProductID'] for sku in missing_skus]}"
                errors.add_with_context(order['id'], error_message)
                continue

            calculate_unit_price(order_object, skus_in_sellercloud_with_pricing)

            tax_object = generate_tax_object(order_object, skus_in_sellercloud_with_pricing)
            tax_rate = None
            if tax_object:
                if not taxjar_api_key:
                    secrets = AzureSecrets()
                    taxjar_api_key = secrets.get_secret("taxjar-api-key")
                tax_api = TaxjarAPI(taxjar_api_key, tax_object)
                tax_result = tax_api.get_tax_for_order()
                # No nexus means no tax required
                if not tax_result['has_nexus']:
                    pass
                elif tax_result:
                    add_tax_to_order_object(order_object, tax_result)
                    tax_rate = tax_result['rate']
                else:
                    error_message = f"Failed to retrieve tax for Order {order['id']} from TaxJar."
                    errors.add_with_context(order['id'], error_message)
                    continue

            response = sc_api.create_order(order_object)

            if not response.ok:
                error_message = f"Failed to create order in SellerCloud for Order {order['id']}: {response.text}"
                errors.add_with_context(order['id'], error_message)
                continue

            sc_order_id = response.json()
            db.update_order_and_items(order['edi_order_id'], sc_order_id, order_object, tax_rate)

            print(f"Successfully created SellerCloud order {sc_order_id} for Order {order['id']}")
        except Exception as e:
            error_message = f"Error processing Order {order['id']}: {e}"
            errors.add_with_context(order['edi_order_id'], error_message)`}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Customer Portal",
      value: "portal",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Self-Service Order Portal
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Built a customer-facing web application allowing B2B partners to
              place orders, view order history, track shipments, and access
              analytics—all without needing to contact customer service or send
              emails.
            </p>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={b2bDropshipLanding}
                alt="B2B customer portal landing page"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Customer portal landing page with order placement and account
                management.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Analytics Dashboard
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Customers can view comprehensive analytics about their ordering
              patterns, popular products, shipping costs, and order status
              trends. This transparency improves customer satisfaction and
              reduces support inquiries.
            </p>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={b2bDropshipAnalytics}
                alt="B2B analytics dashboard"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Real-time analytics showing order trends, popular products, and
                shipment status.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Email Order Processing with GPT
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For customers not using EDI or the portal, implemented GPT-powered
              email parsing that reads customer emails—whether plain text or as
              attachments— extracts order information, and automatically creates
              orders in the system.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The GPT integration handles various email formats, interprets SKUs
              and quantities even with typos or abbreviations, and sends
              confirmation emails back to customers with order acceptance or
              rejection details based on inventory availability and account
              status.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "Onboarding System",
      value: "onboarding",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Self-Service Customer Onboarding
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Previously, onboarding new B2B customers required manual
              coordination across multiple departments and IT intervention to
              create database records. Built a self-service onboarding
              application that allows the B2B team to create new customer
              accounts, set discount rules, configure EDI settings, and manage
              account details without any developer involvement.
            </p>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={b2bOnboarding}
                alt="B2B customer onboarding interface"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Onboarding form for creating new B2B customer accounts with all
                necessary configuration options.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              B2B Management Dashboard
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Internal dashboard for the B2B team to manage customer accounts,
              view order history, update discount percentages, configure tax
              exemptions, and monitor EDI transaction status. This replaced
              scattered Excel files and manual database updates.
            </p>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={b2bDashboardSample}
                alt="B2B management dashboard"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Internal dashboard for managing B2B customer accounts and
                viewing order analytics.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Cross-Functional Coordination
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Building this system required extensive coordination across
              departments:
            </p>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6">
              <ul className="space-y-2 ml-4">
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>B2B Sales:</strong> Requirements for customer
                    discount structures, pricing tiers, and order approval
                    workflows
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Customer Service:</strong> Notification preferences,
                    order rejection messaging, and customer communication
                    templates
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Accounting:</strong> Tax calculation rules,
                    QuickBooks integration, invoice generation, and payment
                    tracking
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Warehouse:</strong> Inventory availability checks,
                    packing preferences, and shipment notification requirements
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Successfully aligned all teams on a common solution, ensuring the
              automation met everyone's needs while maintaining clean,
              maintainable code architecture.
            </p>
          </div>
        </div>
      ),
    },
  ],
});
