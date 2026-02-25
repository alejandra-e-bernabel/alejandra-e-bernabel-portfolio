import { Database } from "lucide-react";
import type { Project } from "../ProjectsSection";

import masterWarehouseApp from "@/assets/projectDocs/master-warehouse-app-vendor.png";
import logisticsAppVendor from "@/assets/projectDocs/logistics-app-vendor.png";
import logisticsAppDashboard from "@/assets/projectDocs/logistics-app-dashboard.png";

export const getWarehouseSystemMigration = (): Project => ({
  title: "Warehouse System Migration",
  subtitle: "Complete Cloud Warehouse & Logistics Platform",
  icon: <Database className="w-6 h-6" />,
  description:
    "Year-long migration replacing manual warehouse processes with fully automated cloud-based warehouse and logistics applications.",
  overview:
    "Led complete warehouse system modernization, transitioning from manual, email-based processes to fully automated cloud platform. Coordinated cross-department implementation over a full year, building interconnected warehouse and logistics applications with real-time tracking and automated workflows.",
  technicalDetails: {
    architecture:
      "Cloud-native architecture using SQL Server, Python FastAPI backend, Electron/React/Vite desktop applications, containerized with Docker. Integrated with vendor portals via REST APIs for automated order processing and shipment tracking.",
    challenges:
      "Replacing over a dozen manual processes while maintaining operational continuity, migrating years of historical data from local Access databases, training staff on completely new workflows, and coordinating dependencies between warehouse and logistics operations.",
    solutions:
      "Implemented phased migration approach: first automating packing and logistics, then inventory management. Built robust migration scripts to process all workflow types from order intake through invoicing. Created comprehensive admin dashboards for oversight and reporting.",
  },
  impact: {
    metrics: ["1 year migration", "Complete automation", "Zero data loss"],
    outcomes: [
      "Eliminated manual email-based workflows across 12+ processes",
      "Reduced order processing time from hours to minutes",
      "Enabled real-time visibility across warehouse and logistics operations",
    ],
  },
  tech: [
    "SQL Server",
    "Electron",
    "React",
    "Vite",
    "Python",
    "FastAPI",
    "Docker",
    "REST APIs",
  ],
  flagship: false,
  customTabs: [
    {
      label: "The Problem",
      value: "problem",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Manual, Disconnected Processes
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Previously, warehouse receiving, packing, and logistics
              coordination was extremely manual and inefficient. Each order
              required multiple people, numerous emails, physical walks between
              departments, and manual data entry into disconnected systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Example: Amazon Vendor Order Flow
            </h3>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">1.</span>
                <p className="text-foreground/80 text-sm">
                  Amazon Vendor order comes in → Someone manually emails
                  Logistics department
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">2.</span>
                <p className="text-foreground/80 text-sm">
                  Logistics creates Excel spreadsheet → Emails it to warehouse
                  team
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">3.</span>
                <p className="text-foreground/80 text-sm">
                  Warehouse manually inputs Excel data into custom Access app
                  connected to local server
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">4.</span>
                <p className="text-foreground/80 text-sm">
                  After picking and packing, warehouse employee physically walks
                  to Logistics desk
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">5.</span>
                <p className="text-foreground/80 text-sm">
                  Logistics inputs shipment info to Amazon portal → Walks back
                  to warehouse with printed labels
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">6.</span>
                <p className="text-foreground/80 text-sm">
                  Back-and-forth continues through multiple steps until shipment
                  complete
                </p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-4">
              <strong className="text-foreground">
                This pattern repeated across over a dozen different order types
                and processes,
              </strong>{" "}
              creating bottlenecks, data entry errors, and massive inefficiency.
              The system couldn't scale, provided no real-time visibility, and
              made reporting extremely difficult.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "Migration Plan",
      value: "migration",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Year-Long Phased Migration
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              I planned and executed a complete warehouse system replacement
              over the course of one year, with a comprehensive scope covering
              every aspect of warehouse and logistics operations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Phase 1: Packing & Logistics Automation (Months 1-6)
            </h3>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6 space-y-3">
              <p className="text-foreground/80 text-sm">
                <strong className="text-foreground">Goal:</strong> Eliminate
                manual email workflows and automate order intake through
                shipment completion
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Built cloud-based Logistics application with automated
                    vendor order ingestion
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Created automated packing workflows with barcode scanning
                    and label printing
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Integrated with Amazon, eBay, and other vendor APIs for
                    real-time updates
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Developed shipment tracking and automated status
                    notifications
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Phase 2: Inventory Management (Months 7-12)
            </h3>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6 space-y-3">
              <p className="text-foreground/80 text-sm">
                <strong className="text-foreground">Goal:</strong> Replace local
                Access database with cloud-based inventory system
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Built Master Warehouse application for receiving, putaway,
                    and inventory control
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Migrated historical inventory data from local server to
                    cloud SQL database
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Created real-time inventory tracking with location
                    management
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    Built interconnected workflows between warehouse and
                    logistics apps
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Migration Scripts & Data Processing
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Developed comprehensive migration scripts to automate data
              transfer and process transformation:
            </p>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6">
              <ul className="space-y-2 ml-4">
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Order Intake Scripts:</strong> Automated vendor
                    order parsing and validation
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Pick & Pack Workflows:</strong> Barcode-driven
                    picking with automated packing slip generation
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Logistics Tracking:</strong> Real-time carrier
                    integration and shipment status updates
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Invoicing & Reporting:</strong> Automated invoice
                    generation and business intelligence dashboards
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Historical Data Migration:</strong> Scripts to
                    clean, transform, and migrate Access DB data to SQL Server
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Admin Dashboards & Oversight
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Created comprehensive admin dashboards providing real-time
              visibility into all warehouse and logistics operations, with
              reporting tools for performance metrics, inventory levels, order
              status, and operational analytics.
            </p>
          </div>
        </div>
      ),
    },
    {
      label: "Cloud Applications",
      value: "applications",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Master Warehouse Application
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Desktop application built with Electron, React, and Vite providing
              warehouse staff with streamlined interfaces for receiving,
              inventory management, picking, and packing operations. Connected
              to cloud SQL database with real-time synchronization.
            </p>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4">
              <img
                src={masterWarehouseApp}
                alt="Master Warehouse Application - Vendor Order Processing"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-foreground/60 text-sm text-center mt-3">
                Vendor order processing interface with automated workflows
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Logistics Application
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Cloud-based logistics platform handling vendor order ingestion,
              shipment creation, carrier integration, and tracking. Fully
              automated workflows eliminate manual data entry and physical
              coordination between departments.
            </p>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4">
                <img
                  src={logisticsAppVendor}
                  alt="Logistics Application - Vendor Management"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-foreground/60 text-sm text-center mt-3">
                  Vendor order management with automated API integrations
                </p>
              </div>
              <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4">
                <img
                  src={logisticsAppDashboard}
                  alt="Logistics Application - Admin Dashboard"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-foreground/60 text-sm text-center mt-3">
                  Admin dashboard with real-time analytics and reporting
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Interconnected Architecture
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Both applications communicate through a shared cloud database and
              Python FastAPI backend, ensuring real-time data synchronization.
              Warehouse actions automatically trigger logistics updates, and
              vendor orders flow seamlessly from intake through fulfillment
              without manual intervention. The system is containerized with
              Docker for consistent deployment and scalability.
            </p>
          </div>
        </div>
      ),
    },
  ],
});
