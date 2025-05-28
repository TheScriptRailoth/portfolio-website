"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Filter, Grid, List, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { title } from "process"

// Extended projects data
const allProjects = [
  {
    id: 1,
    title: "CodeStream",
    description:
      "CodeStream is a real-time collaborative coding platform that allows multiple users to write, edit, and review code together in a shared room. With built-in audio/video conferencing, live code syncing, and room creation, CodeStream is the ultimate tool for remote pair programming, technical interviews, group projects, and teaching.",
    longDescription:
      "A comprehensive educational technology platform that leverages artificial intelligence to provide personalized learning experiences. Features include adaptive learning paths, intelligent content recommendations, automated assessment generation, and real-time progress tracking. Built with modern web technologies and scalable cloud architecture.",
    tech: ["TypeScript", "React", "Python", "CSS", "Javascript"],
    image: "/projects/codestream.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/CodeStream",
    liveLink: "https://codestream-rtj5.onrender.com/",
    category: "Web Developement",
    status: "Live",
    featured: true,
    startDate: "2025-01-15",
    endDate: "2025-06-30",
    teamSize: 2,
    role: "Lead Developer",
  },
  {
    id: 2,
    title: "StreamSync - PC and Smart Home Control App",
    description: "StreamSync is a cross-platform Flutter application that enables users to remotely control their PC from a mobile device. It allows users to manage their PC's cursor, keyboard inputs, and more, providing a seamless and intuitive interface for remote PC management. Ideal for presentations, remote troubleshooting, and casual use.",
    longDescription:
      "StreamSync is a cross-platform Flutter application that enables users to remotely control their PC from a mobile device. It allows users to manage their PC's cursor, keyboard inputs, and more, providing a seamless and intuitive interface for remote PC management. Ideal for presentations, remote troubleshooting, and casual use.",
    tech: ["IoT", "Raspberry Pi", "Flutter", "BLE", "Python", "Firebase"],
    image: "/projects/stream-sync.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/stream-sync",
    liveLink: "#",
    category: "IoT",
    status: "Live",
    featured: true,
    startDate: "2024-09-01",
    endDate: "2024-02-28",
    teamSize: 3,
    role: "Lead Developer",
  },
  {
    id : 3,
    title: "Shiskha.Tech - AI-Powered Educational Platform",
    description:
      "Shiksha.tech is an online learning platform that aims to revolutionize the education system by providing comprehensive support for overall development",
    longDescription: 
      "Shiksha.tech is an online learning platform that aims to revolutionize the education system by providing comprehensive support for overall development",
    tech: ["Python", "Flutter", "Dart", "Ngrok", "AI", "Flask", "Firebase"],
    image: "/projects/shiksha-tech.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/SHIKSHA.TECH",
    liveLink: "",
    category: "Mobile",
    status: "Completed",
    featured: true,
    startDate: "2023-01-01",
    endDate: "2023-06-30",
    teamSize: 4,
    role: "Lead Developer & Team Lead",
  },
  {
    id: 4,
    title: "Thermodynamics Cycle Simulations Software",
    description: "ThermoCore offers intuitive modeling and simulation of complex thermodynamic cycles, targeting engineers, researchers, and educators.",
    longDescription:
      "ThermoCore is a cutting-edge Windows application built using Flutter, designed to enable intuitive modeling and simulation of complex thermodynamic cycles. Targeted at engineers, researchers, and educators, ThermoCore provides a powerful tool for visualizing and analyzing energy systems with a focus on the Rankine cycle.",
    tech: ["Python", "Simulation", "Engineering", "GUI", "Flutter Windows", "Matplotlib", "Flask"],
    image: "https://github.com/TheScriptRailoth/thermo-core/raw/master/lib/Screenshots/property_edit.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/thermo-core",
    liveLink: "#",
    category: "Engineering",
    status: "Live",
    featured: true,
    startDate: "2024-03-01",
    endDate: "2024-08-15",
    teamSize: 2,
    role: "Lead Developer",
  },
  {
    id: 5,
    title: "Speech to Text Keyboard",
    description: "A speech-to-text keyboard using Whisper and Vosk for accurate voice input. It enables seamless and efficient typing for users by converting speech into text in real-time.",
    longDescription:
      "A speech-to-text keyboard using Whisper and Vosk for accurate voice input. It enables seamless and efficient typing for users by converting speech into text in real-time.",
    tech: ["Kotlin", "TensorFlow-Lite", "Android", "Whisper", "Vosk"],
    image: "/projects/vollaboard.png?height=400&width=600",
    githubLink: "https://github.com/hellovolla/vollaboard",
    liveLink: "#",
    category: "AR/VR",
    status: "Live",
    featured: true,
    startDate: "2024-11-01",
    endDate: "2025-01-15",
    teamSize: 1,
    role: "AR Developer & Team Lead",
  },
  {
    id: 6,
    title: "Team Management Dashboard",
    description: "Enterprise-grade team management tool built for Fiserv serving 1,000+ managers.",
    longDescription:
      "A comprehensive team management solution designed for large enterprises. Features include employee tracking, performance analytics, project management, resource allocation, and automated reporting. Built with .NET Core and modern web technologies for scalability and performance.",
    tech: [".NET", "C#", "SQL Server", "Angular", "Azure", "SignalR"],
    image: "/projects/team-dashboard.png?height=400&width=600",
    githubLink: "#",
    liveLink: "#",
    category: "Enterprise",
    status: "Live",
    featured: false,
    startDate: "2023-06-01",
    endDate: "2023-12-31",
    teamSize: 1,
    role: ".NET Developer",
  },
  {
    id: 7,
    title: "College Management App",
    description: "App is an Android solution for managing college activities, including notice sharing, event tracking, and resource access, enabling seamless communication between students and faculty.",
    longDescription:
      "App is an Android solution for managing college activities, including notice sharing, event tracking, and resource access, enabling seamless communication between students and faculty.",
    tech: ["Java", "Android", "Firebase", "REST API", "Material Design", "MVVM"],
    image: "/projects/college-app.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/College-App",
    liveLink: "#",
    category: "Application",
    status: "Live",
    featured: false,
    startDate: "2024-03-01",
    endDate: "2024-08-30",
    teamSize: 2,
    role: "AI Integration Developer",
  },
  {
    id: 8,
    title: "Salon Booking App",
    description: "Hair Haven is a beauty app that enables users to book salon appointments and access hair care services. It offers a seamless experience for discovering salons and managing appointments.",
    longDescription: "Hair Haven is a beauty app that enables users to book salon appointments and access hair care services. It offers a seamless experience for discovering salons and managing appointments.",
    tech: ["Flutter", "Dart", "Firebase", "REST API", "Push Notifications"],
    image: "/projects/hair-heaven.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/Hair-Haven",
    liveLink: "#",
    category: "Mobile",
    status: "Live",
    featured: false,
    startDate: "2022-08-01",
    endDate: "2023-01-15",
    teamSize: 1,
    role: "Mobile App Developer",
  },
  {
    id: 9,
    title: "Custom Numeric Pad Package",
    description: "A customizable Numeric Pad package for integration into various screens, such as payment interfaces. The package offers flexible design options and seamless functionality for numeric input.",
    longDescription:"A customizable Numeric Pad package for integration into various screens, such as payment interfaces. The package offers flexible design options and seamless functionality for numeric input.",
    tech: ["Python", "TensorFlow", "Keras", "Pandas", "Scikit-learn", "Flask"],
    image: "/projects/numeric-pad.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/package-custom_numpad",
    liveLink: "https://pub.dev/packages/custom_numeric_pad",
    category: "Packages",
    status: "Completed",
    featured: false,
    startDate: "2023-01-01",
    endDate: "2023-05-30",
    teamSize: 1,
    role: "Developer",
  },
  {
    id: 10,
    title: "Blogs Application",
    description: "A blog application that allows users to create, edit, and share posts seamlessly. It provides a user-friendly interface and rich text formatting options for an enhanced blogging experience.",
    longDescription:
      "A blog application that allows users to create, edit, and share posts seamlessly. It provides a user-friendly interface and rich text formatting options for an enhanced blogging experience.",
    tech: ["Dart", "Flutter", "Bloc", "Firebase", "REST API", "Responsive Design"],
    image: "/projects/quill.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/QUILL",
    liveLink: "#",
    category: "Mobile Applications",
    status: "Completed",
    featured: false,
    startDate: "2023-03-01",
    endDate: "2023-08-15",
    teamSize: 1,
    role: "Blockchain Developer",
  },
  {
    id: 11,
    title: "Weather Application - TinySky",
    description: "TinySky is a weather application that provides accurate weather forecasts based on your device location. It allows users to access real-time weather information, hourly forecasts, and a delightful UI experience.",
    longDescription:   "TinySky is a weather application that provides accurate weather forecasts based on your device location. It allows users to access real-time weather information, hourly forecasts, and a delightful UI experience.",
    tech: ["Flutter", "Dart", "OpenWeather", "API", "Responsive Design", "State Management"],
    image: "/projects/tinysky.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/TinySky",
    liveLink: "#",
    category: "Web",
    status: "Live",
    featured: false,
    startDate: "2023-10-01",
    endDate: "2023-03-30",
    teamSize: 1,
    role: "Backend Developer",
  },
  {
    id: 12,
    title: "Face-Mask Detector App",
    description: "A Face Mask Detector app using TensorFlow Lite and OpenCV to detect face mask usage in real-time. The app leverages machine learning to provide accurate detection and instant feedback, ensuring safety compliance in public and private spaces.",
    longDescription:
      "A Face Mask Detector app using TensorFlow Lite and OpenCV to detect face mask usage in real-time. The app leverages machine learning to provide accurate detection and instant feedback, ensuring safety compliance in public and private spaces.",
    tech: [ "TfLite", "OpenCV", "Python", "Dart", "TensorFlow", ],
    image: "/projects/face-mask.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/Xpense-web",
    liveLink: "#",
    category: "AI/ML",
    status: "Completed",
    featured: false,
    startDate: "2023-11-10",
    endDate: "2023-11-15",
    teamSize: 1,
    role: "Lead Developer",
  },
  {
    id: 13,
    title: "Expense Tracker Website",
    description: "Xpense is a single-page static website developed using Flutter web. It is built to demonstrate the concepts of web applications using Flutter and offers an intuitive user interface for managing expenses.",
    longDescription:
      "Xpense is a single-page static website developed using Flutter web. It is built to demonstrate the concepts of web applications using Flutter and offers an intuitive user interface for managing expenses.",
    tech: ["Flutter", "Dart", "Web", "Responsive Design", "State Management"],
    image: "/projects/xpense.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/Xpense-web",
    liveLink: "https://xpense-web.vercel.app/",
    category: "Mobile",
    status: "Completed",
    featured: false,
    startDate: "2024-09-01",
    endDate: "2025-03-30",
    teamSize: 1,
    role: "Full Stack Developer",
  },
   {
    id: 14,
    title: "Calculator for NothingOS",
    description: "Calculator app developed for the Nothing OS, featuring a unique design. The calculator is designed to perform calculations, incorporating an animation when the output is pressed without any input, symbolizing the concept of nothingness.",
    longDescription:
      "Calculator app developed for the Nothing OS, featuring a unique design. The calculator is designed to perform calculations, incorporating an animation when the output is pressed without any input, symbolizing the concept of nothingness.",
    tech: ["Flutter", "Dart", "Responsive Design", "State Management"],
    image: "/projects/nothing.png?height=400&width=600",
    githubLink: "https://github.com/TheScriptRailoth/Nothing-calculator",
    liveLink: "#",
    category: "Mobile",
    status: "Completed",
    featured: false,
    startDate: "2023-09-01",
    endDate: "2023-03-30",
    teamSize: 1,
    role: "Full Stack Developer",
  },
];





const categories = ["All", "AI/ML", "IoT", "Mobile", "Web", "AR/VR", "Engineering", "Enterprise", "Blockchain"]
const statusOptions = ["All", "Live", "In Development", "Completed", "Prototype"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter projects based on category and status
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus
    return matchesCategory && matchesStatus
  })

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500/80"
      case "In Development":
        return "bg-blue-500/80"
      case "Completed":
        return "bg-purple-500/80"
      case "Prototype":
        return "bg-orange-500/80"
      default:
        return "bg-gray-500/80"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <Link
                href="/"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Link>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Projects Portfolio
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                A comprehensive showcase of my technical projects, from AI-powered applications to innovative IoT
                solutions
              </p>
            </motion.div>

            {/* Filters and Controls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto mb-12"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm">Categories:</span>
                  </div>
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : "bg-white/5 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Status Filter */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-sm">Status:</span>
                  </div>
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        selectedStatus === status
                          ? "bg-purple-500 text-white"
                          : "bg-white/5 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "grid" ? "bg-cyan-500 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "list" ? "bg-cyan-500 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center mt-6">
                <p className="text-gray-400">
                  Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {selectedStatus !== "All" && ` with status ${selectedStatus}`}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="pb-12">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-blue-400 mb-8 flex items-center gap-2"
              >
                <Star className="w-8 h-8" />
                Featured Projects
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl hover:bg-white/10 transition-all duration-300 h-full">
                      <div className="relative overflow-hidden rounded-lg mb-6 h-64">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Status and Featured Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-blue-500/80 text-white backdrop-blur-sm">Featured</Badge>
                          <Badge className={`${getStatusColor(project.status)} text-white backdrop-blur-sm`}>
                            {project.status}
                          </Badge>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a
                            href={project.githubLink}
                            className="p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
                          >
                            <Github className="w-4 h-4 text-white" />
                          </a>
                          <a
                            href={project.liveLink}
                            className="p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(project.startDate).getFullYear()}
                        </div>
                        <Badge className="bg-purple-900/50 text-purple-300 text-xs">{project.category}</Badge>
                        <span className="text-xs">Team of {project.teamSize}</span>
                      </div>

                      <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 mb-4">{project.description}</p>

                      <div className="mb-4">
                        <p className="text-sm text-gray-400 mb-2">Role: {project.role}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-gray-800/50 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge className="bg-gray-800/50 text-gray-300 text-xs">
                            +{project.tech.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Projects */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-purple-400 mb-8 flex items-center gap-2"
            >
              <Code className="w-8 h-8" />
              All Projects ({filteredProjects.length})
            </motion.h2>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl hover:bg-white/10 transition-all duration-300 h-full">
                      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute top-3 left-3">
                          <Badge className={`${getStatusColor(project.status)} text-white backdrop-blur-sm text-xs`}>
                            {project.status}
                          </Badge>
                        </div>

                        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <a
                            href={project.githubLink}
                            className="p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
                          >
                            <Github className="w-3 h-3 text-white" />
                          </a>
                          <a
                            href={project.liveLink}
                            className="p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
                          >
                            <ExternalLink className="w-3 h-3 text-white" />
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(project.startDate).getFullYear()}
                        </div>
                        <Badge className="bg-purple-900/50 text-purple-300 text-xs">{project.category}</Badge>
                      </div>

                      <h3 className="text-xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 mb-4 text-sm line-clamp-3">{project.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-gray-800/50 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge className="bg-gray-800/50 text-gray-300 text-xs">+{project.tech.length - 3}</Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {regularProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="group"
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="relative overflow-hidden rounded-lg h-48 md:h-32">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2">
                              <Badge
                                className={`${getStatusColor(project.status)} text-white backdrop-blur-sm text-xs`}
                              >
                                {project.status}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-2/3">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                                {project.title}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(project.startDate).getFullYear()}
                                </div>
                                <Badge className="bg-purple-900/50 text-purple-300 text-xs">{project.category}</Badge>
                                <span className="text-xs">Team of {project.teamSize}</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <a
                                href={project.githubLink}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                              >
                                <Github className="w-4 h-4 text-white" />
                              </a>
                              <a
                                href={project.liveLink}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                              >
                                <ExternalLink className="w-4 h-4 text-white" />
                              </a>
                            </div>
                          </div>

                          <p className="text-gray-300 mb-3">{project.description}</p>

                          <div className="mb-3">
                            <p className="text-sm text-gray-400">Role: {project.role}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} className="bg-gray-800/50 text-gray-300 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg mb-4">No projects found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedStatus("All")
                  }}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Project Statistics */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Project Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{allProjects.length}</div>
                  <div className="text-gray-400 text-sm">Total Projects</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {allProjects.filter((p) => p.status === "Live").length}
                  </div>
                  <div className="text-gray-400 text-sm">Live Projects</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {new Set(allProjects.flatMap((p) => p.tech)).size}
                  </div>
                  <div className="text-gray-400 text-sm">Technologies Used</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    {allProjects.filter((p) => p.featured).length}
                  </div>
                  <div className="text-gray-400 text-sm">Featured Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}


