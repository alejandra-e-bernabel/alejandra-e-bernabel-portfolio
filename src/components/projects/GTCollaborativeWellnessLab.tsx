import { Brain } from "lucide-react";
import type { Project } from "../ProjectsSection";
import CodeSnippet from "../CodeSnippet";

import myChoiceBackendCommits from "@/assets/projectDocs/my-choice-backend-commits.png";
import myChoiceFrontendCommits from "@/assets/projectDocs/my-choice-frontend-commits.png";
import myChoiceLoginPage from "@/assets/projectDocs/my-choice-login-page.png";
import myChoiceStudentPage from "@/assets/projectDocs/my-choice-student-page.png";

export const getGTCollaborativeWellnessLab = (): Project => ({
  title: "GT Collaborative Wellness Lab",
  subtitle: "AI-Powered Accessibility Platform",
  icon: <Brain className="w-6 h-6" />,
  description:
    "Led development of AI platform enabling students with intellectual and developmental disabilities to participate in standard college classes.",
  overview:
    "Built from scratch an end-to-end Azure-based platform helping students with developmental and intellectual disabilities participate in standard college classes. Led full-stack development, integrating Georgia Tech's authentication system, designing pedagogical AI prompts, and deploying production infrastructure. Documented entire system for handoff to research team.",
  technicalDetails: {
    architecture:
      "Azure ecosystem with SQL DB and Cosmos NoSQL DB, Python FastAPI backend deployed via Docker, React frontend on Netlify. Integrated with Georgia Tech SSO for authentication and OpenAI GPT API with custom prompt engineering for pedagogical approaches.",
    challenges:
      "Building entire cloud infrastructure from scratch, integrating with institutional SSO, designing AI prompts matching different pedagogical approaches, implementing A/B testing for information sharing levels, ensuring accessibility for diverse cognitive abilities.",
    solutions:
      "Architected complete Azure cloud solution with both SQL and NoSQL databases for different data needs. Engineered custom GPT prompts with A/B variations to customize output based on student needs. Built comprehensive documentation for research team handoff. Deployed production-grade infrastructure with Docker containerization and Netlify CDN.",
  },
  impact: {
    metrics: [
      "Full Azure infrastructure",
      "End-to-end development",
      "Production deployment",
    ],
    outcomes: [
      "Enabled students with disabilities to participate in college classes",
      "Created reusable platform for accessibility research",
      "Comprehensive documentation for team handoff",
    ],
  },
  tech: [
    "Azure SQL",
    "Cosmos DB",
    "Python",
    "FastAPI",
    "React",
    "OpenAI GPT",
    "Docker",
    "Netlify",
  ],
  customTabs: [
    {
      label: "Project Mission",
      value: "mission",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Empowering Students with Disabilities
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This project aimed to help students with developmental and
              intellectual disabilities participate in standard college classes
              alongside their peers. The platform provides AI-powered support
              tailored to each student's learning needs and cognitive abilities,
              enabling them to engage with course material and make educational
              decisions independently.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Working with Georgia Tech's Collaborative Wellness Lab, I built
              the entire technical infrastructure to bring this vision to
              life—from cloud architecture to AI prompt engineering to
              production deployment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Student Interface
            </h3>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={myChoiceStudentPage}
                alt="Student dashboard interface"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Accessible student interface designed for users with varying
                cognitive abilities, powered by AI to provide personalized
                support.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Authentication & Security
            </h3>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={myChoiceLoginPage}
                alt="Login page with Georgia Tech SSO"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Integrated with Georgia Tech's institutional login system for
                secure authentication and seamless user experience.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Azure Infrastructure",
      value: "azure",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Complete Cloud Ecosystem
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Built the entire Azure infrastructure from scratch, including:
            </p>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">
                    Azure SQL Database:
                  </strong>{" "}
                  Relational data storage for user accounts, course information,
                  and structured data
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">Cosmos NoSQL DB:</strong>{" "}
                  Flexible document storage for student interactions, AI
                  responses, and session data
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">
                    Georgia Tech SSO Integration:
                  </strong>{" "}
                  Secure authentication using institutional login system
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">
                    Docker Deployment:
                  </strong>{" "}
                  Containerized backend for consistent, scalable deployment
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 font-bold">•</span>
                <p className="text-foreground/80 text-sm">
                  <strong className="text-foreground">Netlify Frontend:</strong>{" "}
                  CDN-hosted React application for fast, reliable access
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Architecture Decisions
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The dual-database approach (Azure SQL + Cosmos DB) was chosen
              strategically: SQL handles structured, relational data like user
              accounts and course catalogs, while Cosmos DB provides the
              flexibility needed for storing varied student interactions and
              AI-generated content with different schemas.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Docker containerization ensures the backend can be easily
              deployed, scaled, and maintained. The Netlify deployment provides
              global CDN distribution for the frontend, ensuring fast load times
              for students regardless of location.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Public Repositories
            </h3>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6 space-y-3">
              <p className="text-foreground/80 text-sm">
                <strong className="text-foreground">Backend:</strong>{" "}
                <a
                  href="https://github.com/cowelltechlab/ipse_student_dashboard_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  github.com/cowelltechlab/ipse_student_dashboard_backend
                </a>
              </p>
              <p className="text-foreground/80 text-sm">
                <strong className="text-foreground">Frontend:</strong>{" "}
                <a
                  href="https://github.com/cowelltechlab/ipse_student_dashboard_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  github.com/cowelltechlab/ipse_student_dashboard_frontend
                </a>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "AI & Pedagogy",
      value: "ai",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Custom Prompt Engineering
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Developed specialized GPT prompts aligned with different
              pedagogical approaches to support diverse learning needs. The
              prompts were engineered to provide appropriate levels of
              scaffolding, encouragement, and information based on educational
              research and best practices for students with intellectual
              disabilities.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Each prompt variation was carefully crafted in collaboration with
              the research team to ensure responses were accessible,
              encouraging, and educationally sound.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              A/B Testing for Information Sharing
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Implemented A/B prompt variations to test different degrees of
              information sharing and support. Some students benefit from more
              detailed explanations, while others need concise, simplified
              responses. The system customizes GPT output based on the student's
              assigned condition:
            </p>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6">
              <ul className="space-y-2 ml-4">
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Condition A:</strong> Detailed explanations with
                    multiple examples and step-by-step guidance
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Condition B:</strong> Simplified responses with
                    visual aids and minimal text
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Adaptive Mode:</strong> System learns from student
                    interactions to adjust verbosity and complexity
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              OpenAI GPT Integration
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Integrated OpenAI's GPT API with custom system prompts,
              temperature controls, and response filtering to ensure
              appropriate, educational outputs. The backend processes student
              queries, applies the appropriate pedagogical prompt template, and
              returns formatted responses optimized for accessibility.
            </p>
            <CodeSnippet
              language="python"
              title="Example prompt configuration"
              code={`def build_prompt_for_version(
    assignment_version_id: str,
    selected_options: list[str],
    additional_edit_suggestions: str | None = "",
    for_stream: bool = True
):
    # Load context
    version_doc, assignment, class_info, full_profile = load_assignment_context(assignment_version_id)

    # Selected options JSON
    selected = filter_selected_options(version_doc, selected_options)
    selected_options_str = json.dumps(selected, indent=2)

    # Choose group A/B template file
    group = full_profile.get("group_type")
    if group == "A":
        with open("application/features/group_A_version_generation_prompt.txt", "r", encoding="utf-8") as f:
            template = f.read()
        user_prompt = template.format(
            reading_level=full_profile.get("reading_level", "N/A"),
            writing_level=full_profile.get("writing_level", "N/A"),
            strengths=", ".join(full_profile.get("strengths", [])),
            challenges=", ".join(full_profile.get("challenges", [])),
            short_term_goals=full_profile.get("short_term_goals", "N/A"),
            long_term_goals=full_profile.get("long_term_goals", "N/A"),
            best_ways_to_help=", ".join(full_profile.get("best_ways_to_help", [])),
            hobbies_and_interests=full_profile.get("hobbies_and_interests", "N/A"),
            class_name=class_info.get("class_name", "N/A"),
            learning_goal=class_info.get("learning_goal", "N/A"),
            assignment_title=assignment.get("title", "N/A"),
            assignment_content=assignment.get("content", "N/A"),
            assignment_type=assignment.get("assignment_type", "N/A"),
            selected_options=selected_options_str,
            additional_ideas_for_changes=additional_edit_suggestions or ""
        )
    else:
        with open("application/features/group_B_version_generation_prompt.txt", "r", encoding="utf-8") as f:
            template = f.read()
        user_prompt = template.format(
            class_name=class_info.get("class_name", "N/A"),
            assignment_title=assignment.get("title", "N/A"),
            assignment_content=assignment.get("content", "N/A"),
            assignment_type=assignment.get("assignment_type", "N/A"),
            selected_options=selected_options_str,
            additional_ideas_for_changes=additional_edit_suggestions or ""
        )
    messages = []
    persist_ctx = {
        "version_doc": version_doc,
        "selected_options": selected_options,
        "additional_edit_suggestions": additional_edit_suggestions or "",
    }
  
    messages.append({"role": "user", "content": user_prompt})
    return messages, persist_ctx`}
            />
          </div>
        </div>
      ),
    },
    {
      label: "Development & Handoff",
      value: "development",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Full-Stack Development Leadership
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Led development of both frontend and backend codebases,
              architecting the entire application from database schemas to UI
              components. Coordinated with the research team to translate
              educational requirements into technical specifications and
              delivered production-ready code.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Backend Contributions
            </h3>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={myChoiceBackendCommits}
                alt="Backend commit history"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Extensive backend development including API design, database
                integration, authentication, and AI prompt engineering.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Frontend Contributions
            </h3>
            <div className="bg-white/10 border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
              <img
                src={myChoiceFrontendCommits}
                alt="Frontend commit history"
                className="mx-auto mb-4 rounded-lg shadow-lg"
              />
              <p className="text-foreground/60">
                Comprehensive frontend work including accessible UI components,
                state management, and integration with backend services.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-foreground">
              Documentation for Handoff
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Created comprehensive documentation covering:
            </p>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-6">
              <ul className="space-y-2 ml-4">
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Architecture Overview:</strong> System design, data
                    flow, and component relationships
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Azure Setup Guide:</strong> Step-by-step
                    instructions for provisioning and configuring cloud
                    resources
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Deployment Procedures:</strong> Docker build
                    process, Netlify configuration, and CI/CD setup
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>API Documentation:</strong> Complete endpoint
                    reference with request/response examples
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Prompt Engineering Guide:</strong> How to modify and
                    test GPT prompts for different pedagogical approaches
                  </span>
                </li>
                <li className="text-foreground/80 text-sm flex items-start gap-2">
                  <span className="text-pink-600">▸</span>
                  <span>
                    <strong>Troubleshooting:</strong> Common issues and
                    solutions for maintenance and support
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-4">
              This documentation enabled the research team to maintain, extend,
              and deploy the platform independently after project handoff.
            </p>
          </div>
        </div>
      ),
    },
  ],
});
