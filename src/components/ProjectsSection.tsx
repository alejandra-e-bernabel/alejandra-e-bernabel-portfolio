import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import TechIcon from "./TechIcon";
import {
  getProductCatalogIntegration,
  getWarehouseSystemMigration,
  getSmartlinerWebsite,
  getGTCollaborativeWellnessLab,
  getAutomationInternalTools,
} from "./projects";

export interface CustomTab {
  label: string;
  value: string;
  content: React.ReactNode;
}

export interface Project {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  overview: string;
  technicalDetails: {
    architecture?: string;
    challenges?: string;
    solutions?: string;
  };
  impact: {
    metrics?: string[];
    outcomes?: string[];
  };
  tech: string[];
  flagship?: boolean;
  customTabs?: CustomTab[];
}

const projects: Project[] = [
  getProductCatalogIntegration(),
  getWarehouseSystemMigration(),
  getSmartlinerWebsite(),
  getGTCollaborativeWellnessLab(),
  getAutomationInternalTools(),
];

const ProjectModal = ({
  project,
  open,
  onOpenChange,
}: {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Use custom tabs if available, otherwise use default tabs
  const hasCustomTabs = project.customTabs && project.customTabs.length > 0;
  const defaultValue = hasCustomTabs
    ? project.customTabs![0].value
    : "overview";

  // Scroll to top when tab changes
  const handleTabChange = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] border-2 border-foreground/10 bg-[#F5F2F0] backdrop-blur-sm p-0 overflow-hidden">
        <div ref={modalContentRef} className="overflow-y-auto max-h-[85vh] p-6">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-pink-600/10 text-pink-600">
                {project.icon}
              </div>
              <div>
                <DialogTitle className="font-display text-2xl font-bold text-foreground">
                  {project.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </DialogHeader>

          <Tabs defaultValue={defaultValue} className="w-full min-w-0" onValueChange={handleTabChange}>
          {hasCustomTabs ? (
            // Render custom tabs
            <>
              <TabsList
                className={`grid w-full bg-background/50 ${
                  project.customTabs!.length === 3
                    ? "grid-cols-3 h-12"
                    : project.customTabs!.length === 4
                      ? "grid-cols-4 h-12"
                      : "grid-cols-2 h-auto min-h-12 py-1"
                }`}
              >
                {project.customTabs!.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {project.customTabs!.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="space-y-4 min-w-0"
                >
                  {tab.content}
                </TabsContent>
              ))}
            </>
          ) : (
            // Render default tabs
            <>
              <TabsList className="grid w-full grid-cols-3 bg-background/50">
                <TabsTrigger value="overview" className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">Overview</TabsTrigger>
                <TabsTrigger value="technical" className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">Technical Details</TabsTrigger>
                <TabsTrigger value="impact" className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">Impact</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 min-w-0">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    Project Summary
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.overview}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs border-foreground/15 text-foreground/60 hover:bg-primary hover:text-pink-600 hover:bg-pink-600 transition-all"
                      >
                        <TechIcon name={t} />
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="space-y-4 min-w-0">
                {project.technicalDetails.architecture && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Architecture
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {project.technicalDetails.architecture}
                    </p>
                  </div>
                )}
                {project.technicalDetails.challenges && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Challenges
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {project.technicalDetails.challenges}
                    </p>
                  </div>
                )}
                {project.technicalDetails.solutions && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Solutions
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {project.technicalDetails.solutions}
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="impact" className="space-y-4 min-w-0">
                {project.impact.metrics &&
                  project.impact.metrics.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        Key Metrics
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.impact.metrics.map((m) => (
                          <Badge
                            key={m}
                            className="bg-yellow-400 text-foreground border-0 text-xs font-semibold"
                          >
                            {m}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                {project.impact.outcomes &&
                  project.impact.outcomes.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {project.impact.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-pink-600 mt-1">▸</span>
                            <span className="text-foreground/80">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </TabsContent>
            </>
          )}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className={`relative rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-all duration-300 hover-pink-glow ${
          project.flagship ? "md:col-span-2 bg-pink-600/40" : ""
        }`}
        onClick={() => setModalOpen(true)}
      >
        {project.flagship && (
          <div className="absolute -top-3 left-6">
            <Badge className="bg-yellow-500 text-black border-0 text-xs font-bold uppercase tracking-wider">
              ★ Flagship
            </Badge>
          </div>
        )}

        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-pink-600/10 text-pink-600">
              {project.icon}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>

        <p className="text-foreground/60 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="group text-xs border-foreground/15 text-foreground/60 hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all"
            >
              <TechIcon name={t} />
            </Badge>
          ))}
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use custom tabs if available, otherwise use default tabs
  const hasCustomTabs = selectedProject.customTabs && selectedProject.customTabs.length > 0;
  const defaultValue = hasCustomTabs
    ? selectedProject.customTabs![0].value
    : "overview";

  // Scroll to top when tab changes
  const handleTabChange = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-2 text-foreground">
            Featured <span className="gradient-text-yellow">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-orange-400 rounded-full mb-8" />
          <p className="text-foreground/60 mb-4 max-w-2xl">
            {isMobile
              ? "Click on any project to see the full breakdown — the challenge, my role, and the impact."
              : "Select a project to explore code snippets, architecture, and technical details."
            }
          </p>
        </motion.div>

        {/* Mobile: Keep modal approach */}
        {isMobile ? (
          <div className="grid md:grid-cols-2 gap-6 bg-background/50">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        ) : (
          /* Desktop: Split-screen layout */
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Project Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
                    selectedProject.title === project.title
                      ? "border-pink-500 bg-pink-500/10 shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                      : "border-foreground/10 bg-background/60 hover:border-pink-500/30"
                  }`}
                >
                  {project.flagship && (
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-yellow-500 text-black border-0 text-xs font-bold">
                        ★
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-xl transition-all ${
                      selectedProject.title === project.title
                        ? "bg-pink-500 text-white"
                        : "bg-pink-500/10 text-pink-600"
                    }`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/60 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.tech.slice(0, 4).map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs border-foreground/15 text-foreground/60"
                      >
                        {t}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-foreground/15 text-foreground/60"
                      >
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Panel - Project Details */}
            <motion.div
              key={selectedProject.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8"
            >
              <div className="sticky top-4 rounded-2xl border-2 border-foreground/10 bg-background/95 backdrop-blur-sm overflow-hidden" style={{ maxHeight: "calc(100vh - 1rem)" }}>
                {/* Project Header */}
                <div className="p-6 border-b border-foreground/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-xl bg-pink-500/10 text-pink-600">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs border-foreground/15 text-foreground/60"
                      >
                        <TechIcon name={t} />
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tabs and Content */}
                <div ref={scrollContainerRef} className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 15rem)" }}>
                  <Tabs defaultValue={defaultValue} className="w-full" onValueChange={handleTabChange}>
                    {hasCustomTabs ? (
                      <>
                        <div className="sticky top-0 bg-[#F5F2F0] backdrop-blur-sm border-b border-foreground/10 z-10">
                          <TabsList
                            className={`w-full rounded-none grid ${
                              selectedProject.customTabs!.length === 3
                                ? "grid-cols-3 h-12"
                                : selectedProject.customTabs!.length === 4
                                  ? "grid-cols-4 h-12"
                                  : "grid-cols-2 h-auto min-h-12 py-1"
                            }`}
                          >
                            {selectedProject.customTabs!.map((tab) => (
                              <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">
                                {tab.label}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                        </div>

                        {selectedProject.customTabs!.map((tab) => (
                          <TabsContent
                            key={tab.value}
                            value={tab.value}
                            className="p-6 space-y-6"
                          >
                            {tab.content}
                          </TabsContent>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 z-10">
                          <TabsList className="w-full grid grid-cols-3 bg-transparent rounded-none h-12">
                            <TabsTrigger value="overview" className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">Overview</TabsTrigger>
                            <TabsTrigger value="technical" className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">Technical</TabsTrigger>
                            <TabsTrigger value="impact" className="data-[state=active]:bg-pink-500/10 data-[state=active]:text-pink-600">Impact</TabsTrigger>
                          </TabsList>
                        </div>

                        <TabsContent value="overview" className="p-6 space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">
                              Project Summary
                            </h3>
                            <p className="text-foreground/80 leading-relaxed">
                              {selectedProject.overview}
                            </p>
                          </div>
                        </TabsContent>

                        <TabsContent value="technical" className="p-6 space-y-6">
                          {selectedProject.technicalDetails.architecture && (
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-foreground">
                                Architecture
                              </h3>
                              <p className="text-foreground/80 leading-relaxed">
                                {selectedProject.technicalDetails.architecture}
                              </p>
                            </div>
                          )}
                          {selectedProject.technicalDetails.challenges && (
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-foreground">
                                Challenges
                              </h3>
                              <p className="text-foreground/80 leading-relaxed">
                                {selectedProject.technicalDetails.challenges}
                              </p>
                            </div>
                          )}
                          {selectedProject.technicalDetails.solutions && (
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-foreground">
                                Solutions
                              </h3>
                              <p className="text-foreground/80 leading-relaxed">
                                {selectedProject.technicalDetails.solutions}
                              </p>
                            </div>
                          )}
                        </TabsContent>

                        <TabsContent value="impact" className="p-6 space-y-6">
                          {selectedProject.impact.metrics &&
                            selectedProject.impact.metrics.length > 0 && (
                              <div>
                                <h3 className="text-lg font-semibold mb-3 text-foreground">
                                  Key Metrics
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {selectedProject.impact.metrics.map((m) => (
                                    <Badge
                                      key={m}
                                      className="bg-yellow-400 text-foreground border-0 text-xs font-semibold"
                                    >
                                      {m}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          {selectedProject.impact.outcomes &&
                            selectedProject.impact.outcomes.length > 0 && (
                              <div>
                                <h3 className="text-lg font-semibold mb-3 text-foreground">
                                  Outcomes
                                </h3>
                                <ul className="space-y-2">
                                  {selectedProject.impact.outcomes.map((outcome, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-pink-600 mt-1">▸</span>
                                      <span className="text-foreground/80">
                                        {outcome}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </TabsContent>
                      </>
                    )}
                  </Tabs>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
