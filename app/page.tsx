"use client"
import type React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState, useCallback } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  TerminalIcon,
  X,
  Code,
  Zap,
  Cpu,
  Rocket,
  Calendar,
  Clock,
  ArrowRight,
  Camera,
  Menu,
  DoorClosedIcon as CloseIcon,
  Star,
  Sparkles,
  Award,
  Users,
  icons,
  Keyboard,
  Power,
  Code2Icon,
  Instagram,
  TwitterIcon,
  XIcon,
  Twitter,
  Contact,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiHashnode } from 'react-icons/si';
import { SiMedium } from "react-icons/si"
import { SiGooglescholar } from "react-icons/si"
import ContactForm from './form/contact-form';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const codeLines = [
    "Initializing portfolio system...",
    "Loading AI/ML modules...",
    "Compiling React components...",
    "Establishing neural networks...",
    "Optimizing cyberpunk aesthetics...",
    "Deploying holographic interface...",
    "System ready. Welcome, visitor.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          setIsComplete(true)
          setTimeout(onComplete, 1000)
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 200)

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length)
    }, 800)

    return () => {
      clearInterval(interval)
      clearInterval(lineInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center max-w-2xl mx-auto px-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-24 h-24 mx-auto mb-8 border-4 border-cyan-400 rounded-full flex items-center justify-center"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="mb-8">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
            <motion.div
              className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 font-mono text-lg"
          >
            {Math.round(progress)}%
          </motion.p>
        </div>

        <div className="h-32 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLine}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-green-400"
            >
              <span className="text-cyan-400">$</span> {codeLines[currentLine]}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>

        {isComplete && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mt-8">
            <p className="text-purple-400 font-mono text-xl">System Online ✓</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

// Fixed Custom Cursor Component
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    if (typeof window !== "undefined") {
      // Use passive listeners for better performance
      window.addEventListener("mousemove", updateMousePosition, { passive: true })
      window.addEventListener("mousedown", handleMouseDown, { passive: true })
      window.addEventListener("mouseup", handleMouseUp, { passive: true })

      // Add hover detection for interactive elements
      const interactiveElements = document.querySelectorAll("button, a, [role='button'], .cursor-pointer")
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter, { passive: true })
        el.addEventListener("mouseleave", handleMouseLeave, { passive: true })
      })

      return () => {
        window.removeEventListener("mousemove", updateMousePosition)
        window.removeEventListener("mousedown", handleMouseDown)
        window.removeEventListener("mouseup", handleMouseUp)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }
  }, [updateMousePosition])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
    </>
  )
}

// Terminal Component
function Terminal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<string[]>([
    "Welcome to Ashutosh's Portfolio Terminal v2.0",
    "Type 'help' for available commands",
    "",
  ])

  const commands = {
    help: () => [
      "Available commands:",
      "  about    - Learn about Ashutosh",
      "  skills   - View technical skills",
      "  projects - List featured projects",
      "  contact  - Get contact information",
      "  matrix   - Enter the matrix",
      "  hack     - Initiate hacking sequence",
      "  clear    - Clear terminal",
      "  exit     - Close terminal",
    ],
    about: () => [
      "Ashutosh Mishra - Computer Science Engineer",
      "Specializing in AI/ML, Android development, and system solutions",
      "Winner of XR Creator Hackathon 2025",
      "Passionate about turning ideas into intelligent systems",
    ],
    skills: () => [
      "Technical Skills:",
      "• Flutter & Dart",
      "• .NET & C#",
      "• Python & AI/ML",
      "• Android Development",
      "• React & JavaScript",
      "• Firebase & Cloud",
    ],
    projects: () => [
      "Featured Projects:",
      "1. Shiksha.Tech - AI-powered EdTech platform",
      "2. Smart Home Controller - IoT automation system",
      "3. ThermoCore - Engineering simulation software",
      "4. Ambio AR - Award-winning AR interior design",
    ],
    contact: () => [
      "Contact Information:",
      "Email: am3718440@gmail.com",
      "GitHub: github.com/TheScriptRailoth",
      "LinkedIn: https://linkedin.com/in/thescriptrailoth",
      "Location: India",
    ],
    matrix: () => {
      const chars = "01"
      return Array.from({ length: 10 }, () =>
        Array.from({ length: 50 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""),
      )
    },
    hack: () => [
      "Initiating hack sequence...",
      "Accessing mainframe...",
      "Bypassing firewall...",
      "Downloading data...",
      "██████████ 100%",
      "Access granted. Welcome, hacker.",
    ],
    clear: () => [],
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const newOutput = [...output, `$ ${cmd}`]

    if (command === "clear") {
      setOutput([])
    } else if (command === "exit") {
      onClose()
    } else if (commands[command as keyof typeof commands]) {
      const result = commands[command as keyof typeof commands]()
      setOutput([...newOutput, ...result, ""])
    } else if (command === "") {
      setOutput([...newOutput, ""])
    } else {
      setOutput([...newOutput, `Command not found: ${cmd}`, "Type 'help' for available commands", ""])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput("")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-4 bg-black/95 backdrop-blur-lg border border-cyan-400/50 rounded-lg z-40 font-mono text-sm flex flex-col"
        >
          <div className="flex items-center justify-between p-3 border-b border-cyan-400/30 bg-gray-900/50">
            <div className="flex items-center space-x-2">
              <TerminalIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400">Terminal</span>
            </div>
            <button onClick={onClose} className="text-red-400 hover:text-red-300 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {output.map((line, index) => (
              <div key={index} className="text-green-400 whitespace-pre-wrap">
                {line}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-cyan-400 mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-green-400 outline-none"
                placeholder="Type a command..."
                autoFocus
              />
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-cyan-400"
              >
                |
              </motion.span>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Konami Code Hook
function useKonamiCode(callback: () => void) {
  const [keys, setKeys] = useState<string[]>([])
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.code].slice(-konamiCode.length)
        if (newKeys.join(",") === konamiCode.join(",")) {
          callback()
          return []
        }
        return newKeys
      })
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [callback])
}

// Enhanced Animated Background Component
function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />

      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
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

      {/* Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            width: Math.random() * 100 + 50 + "px",
            height: Math.random() * 100 + 50 + "px",
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />
    </div>
  )
}

// Navbar Component
function Navbar({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blogs", href: "#blogs" },
    { name: "Gallery", href: "#behind-the-lens" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg border-b border-cyan-400/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            The Script Railoth
          </motion.a> */}

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-[cursive]"
            >
              TheScriptRailoth
            </motion.a>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#00ffff" }}
                className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 cursor-pointer"
          >
            {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-cyan-400/20"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer px-4 py-2"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Image Carousel Component
function ImageCarousel({
  images,
}: {
  images: {
    title: string
    description: string
    image: string
    category: string
    date: string
  }[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length, isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Main Carousel */}
        <div className="relative h-96 md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={images[currentIndex].image || "/placeholder.svg"}
                alt={images[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-pink-500/80 text-white backdrop-blur-sm">{images[currentIndex].category}</Badge>
                  <Badge className="bg-purple-500/80 text-white backdrop-blur-sm">{images[currentIndex].date}</Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{images[currentIndex].title}</h3>
                <p className="text-gray-200 text-lg">{images[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all cursor-pointer"
          >
            <ArrowRight className="w-6 h-6 text-white rotate-180" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all cursor-pointer"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                index === currentIndex ? "border-cyan-400" : "border-transparent opacity-60"
              }`}
            >
              <img src={image.image || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? "bg-cyan-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useKonamiCode(() => {
    setShowEasterEgg(true)
    setTimeout(() => setShowEasterEgg(false), 3000)
  })

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/" && !isTerminalOpen) {
        e.preventDefault()
        setIsTerminalOpen(true)
      }
      if (e.key === "Escape" && isTerminalOpen) {
        setIsTerminalOpen(false)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyPress)
      return () => window.removeEventListener("keydown", handleKeyPress)
    }
  }, [isTerminalOpen])

  const experiences = [
    {
      company: "Volla Systeme GmbH",
      role: "Application Engineer",
      period: "08/2024 - Present",
      description: "Integrated Whisper AI for voice recognition, serving 600K+ users",
      tech: ["AI/ML", "Python", "TF-Lite", "Kotlin", "Android"],
    },
    {
      company: "Fiserv Pvt. Ltd.",
      role: "Technology Analyst Intern",
      period: "05/2024 - 07/2024",
      description: "Built team management tools for 1,000+ managers",
      tech: [".NET", "C#", "SQL Server", "WPF", "Agile"],
    },
    {
      company: "Jaiprakash Power Venture Ltd.",
      role: "Project Intern Trainee",
      period: "02/2024 - 05/2024",
      description: "Developed thermodynamic cycle simulation software",
      tech: ["Python", "Flutter Windows", "Dart" ,"Engineering", "Flask"],
    },
    {
      company: "Ricoz Pvt. Ltd.",
      role: "Android Developer Intern",
      period: "11/2023 - 03/2024",
      description: "Published multiple Android applications on Play Store",
      tech: ["Android", "Flutter", "Dart", "Firebase", "Node.js"],
    },
  ]

  const projects = [
     {
        title: "Shiksha.Tech - AI-Powered Educational Platform",
        description:
          "Shiksha.tech is an online learning platform that aims to revolutionize the education system by providing comprehensive support for overall development",
        tech: ["Python", "Flutter", "Dart", "Ngrok", "AI", "Flask", "Firebase", "Java Script", "AWS", "NLP", "Tensorflow"],
        image: "/projects/shiksha-tech.png?height=400&width=600",
        link: "https://github.com/TheScriptRailoth/SHIKSHA.TECH",
        icon: <Code className="w-8 h-8" />,       
      },
    {
      title: "StreamSync - PC and Smart Home Control App",
      description: "StreamSync is a cross-platform Flutter application that enables users to remotely control their PC from a mobile device. It allows users to manage their PC's cursor, keyboard inputs, and more, providing a seamless and intuitive interface for remote PC management. Ideal for presentations, remote troubleshooting, and casual use.",
      tech: ["IoT", "Raspberry Pi", "Flutter", "BLE", "Python", "Firebase"],
      image: "/projects/stream-sync.png?height=400&width=600",
      link: "https://github.com/TheScriptRailoth/stream-sync",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Thermodynamics Cycle Simulations Software",
      description: "ThermoCore offers intuitive modeling and simulation of complex thermodynamic cycles, targeting engineers, researchers, and educators.",
      tech: ["Python", "Simulation", "Engineering", "GUI", "Flutter Windows", "Matplotlib", "Flask"],
      image: "https://github.com/TheScriptRailoth/thermo-core/raw/master/lib/Screenshots/property_edit.png?height=400&width=600",
      link: "https://github.com/TheScriptRailoth/thermo-core",
      icon: <Code2Icon className="w-8 h-8" />,
    },
    {
      title: "Speech to Text Keyboard",
      description: "A speech-to-text keyboard using Whisper and Vosk for accurate voice input. It enables seamless and efficient typing for users by converting speech into text in real-time.",
      tech: ["Kotlin", "TensorFlow-Lite", "Android", "Whisper", "Vosk"],
      image: "/projects/vollaboard.png?height=400&width=600",
      link: "https://github.com/hellovolla/vollaboard",
      icon: <Keyboard className="w-8 h-8" />,
    },
  ]




  // const projects = [
  //   {
  //     title: "Shiksha.Tech",
  //     description: "AI-powered EdTech platform revolutionizing online learning",
  //     tech: ["AI/ML", "React", "Python", "TensorFlow"],
  //     image: "/placeholder.svg?height=200&width=300",
  //     link: "#",
  //     icon: <Code className="w-8 h-8" />,
  //   },
  //   {
  //     title: "Smart Home Controller",
  //     description: "BLE-enabled Raspberry Pi home automation system",
  //     tech: ["IoT", "Raspberry Pi", "Flutter", "BLE"],
  //     image: "/placeholder.svg?height=200&width=300",
  //     link: "#",
  //     icon: <Zap className="w-8 h-8" />,
  //   },
  //   {
  //     title: "ThermoSim",
  //     description: "Engineer-grade thermodynamic cycle simulation software",
  //     tech: ["Python", "Simulation", "Engineering", "GUI"],
  //     image: "/placeholder.svg?height=200&width=300",
  //     link: "#",
  //     icon: <Cpu className="w-8 h-8" />,
  //   },
  //   {
  //     title: "Ambio AR",
  //     description: "Award-winning AR interior design platform",
  //     tech: ["AR", "Unity", "C#", "3D Modeling"],
  //     image: "/placeholder.svg?height=200&width=300",
  //     link: "#",
  //     icon: <Rocket className="w-8 h-8" />,
  //   },
  // ]

  const skills = [
    { name: "Flutter", icon: "📱", color: "from-blue-400 to-blue-600" },
    { name: ".NET", icon: "🔷", color: "from-purple-400 to-purple-600" },
    { name: "Python", icon: "🐍", color: "from-green-400 to-green-600" },
    { name: "Android", icon: "🤖", color: "from-emerald-400 to-emerald-600" },
    { name: "AI/ML", icon: "🧠", color: "from-orange-400 to-orange-600" },
    { name: "Firebase", icon: "🔥", color: "from-yellow-400 to-yellow-600" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-cyan-600" },
    { name: "TensorFlow", icon: "🤖", color: "from-red-400 to-red-600" },
    { name: "JavaScript", icon: "☕", color: "from-gray-400 to-gray-600" },
    { name: "C#", icon: "🔶", color: "from-indigo-400 to-indigo-600" },
    { name: "Dart", icon: "🟠", color: "from-pink-400 to-pink-600" },
    { name: "SQL", icon: "📊", color: "from-teal-400 to-teal-600" },
    { name: "GitHub", icon: "🐙", color: "from-gray-800 to-gray-900" },
    { name: "Flask", icon: "🔥", color: "from-yellow-400 to-yellow-600" },
    { name: "Node.js", icon: "🌐", color: "from-green-400 to-green-600" },
    { name: "Java", icon: "☕", color: "from-blue-400 to-blue-600" },
    { name: "Unity", icon: "🕹️", color: "from-purple-400 to-purple-600" },
    { name: "Selenium", icon: "🔍", color: "from-orange-400 to-orange-600" },
    { name: "C++", icon: "🔧", color: "from-red-400 to-red-600" },
    { name: "C", icon: "🔩", color: "from-gray-400 to-gray-600" },

  ]

  const achievements = [
    {
      title: "XR Creator Hackathon 2025",
      subtitle: "Winner",
      description: "National-level AR/3D innovation competition with 2,200+ participants. Built Ambio AR platform.",
      icon: "🥇",
      highlight: "WAVES Summit 2025 Presenter",
    },
    {
      title: "Convoke Hackathon 2023",
      subtitle: "1st Place",
      description: "AR-based indoor navigation system. Beat 50+ national teams at CIC Delhi.",
      icon: "🏅",
      highlight: "Spatial Computing Innovation",
    },
    {
      title: "IDE Bootcamp 2023",
      subtitle: "National Finalist",
      description: "5-day innovation bootcamp at IISER Bhopal. AICTE & Ministry of Education program.",
      icon: "🎓",
      highlight: "Design Thinking Expert",
    },
  ]

  const blogs = [
    {
      title: "Building CI/CD Pipelines on GitHub Actions: A Step-by-Step Guide",
      excerpt:
        "Automating Builds, Tests, and Deployments for Your Applications.",
      date: "2024-09-16",
      readTime: "11 min read",
      tags: ["CI/CD", "Github Workflow", "Scalability", "YAML"],
      image : "https://cdn.hashnode.com/res/hashnode/image/upload/v1726501975561/2360a378-f608-48f7-8552-c68f5c167d9d.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp?height=400&width=600",
      // image: "/placeholder.svg?height=400&width=600",
      link: "https://thescriptrailoth.hashnode.dev/building-cicd-pipelines-on-github-actions-a-step-by-step-guide",
    },
    {
      title: "Building and Publishing Your First Flutter Package: A Beginner’s Guide",
      excerpt:
        "Getting Started with Your Flutter Package Journey: A Comprehensive Guide for Novice Users",
      date: "2024-02-05",
      readTime: "14 min read",
      tags: ["Flutter", "Mobile", "Packages", "Development"],
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707138885560/4d8e86e7-6504-4ced-9ef0-277b5c202073.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp?height=400&width=600",
      link : "https://thescriptrailoth.hashnode.dev/building-and-publishing-your-first-flutter-package-a-beginners-guide",
  },



  ]

  const achievementImages = [
    {
      title: "XR Creator Hackathon 2025 - Winner",
      description: "Presenting Ambio AR at the national competition",
      image: "/gallery/xr-win.jpg?height=400&width=600",
      category: "Hackathon",
      date: "2025",
    },
    {
      title: "WAVES Summit 2025 Presentation",
      description: "Showcasing AR innovation to industry leaders",
      image: "/gallery/waves-presentation.jpg?height=400&width=600",
      category: "Conference",
      date: "2025",
    },
    {
      title: "Convoke Hackathon 2023 - 1st Place",
      description: "CIC Delhi with team for AR navigation system",
      image: "/gallery/cic-delhi.jpg?height=400&width=600",
      category: "Hackathon",
      date: "2023",
    },
    {
      title: "IDE Bootcamp 2023",
      description: "Innovation workshop at IISER Bhopal",
      image: "/gallery/ide.jpg?height=400&width=600",
      category: "Bootcamp",
      date: "2023",
    },
    {
      title: "Invited for Honor Launch Event",
      description: "Honor India launch event in Delhi with Madhav Seth, CEO HTech",
      image: "/gallery/madhav_seth.jpg?height=400&width=600",
      category: "Demo",
      date: "2024",
    },
    {
      title: "XR Creator Hacathon Winners and Organizers",
      description : "XR Creator Hackathon 2025 winners and organizers celebrating the success.",  
      image: "/gallery/xr-winners.jpg?height=600&width=800",
      category: "Work",
      date: "2023-09-08",
    
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navbar */}
      {!isLoading && <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

      {/* Loading Screen */}
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}</AnimatePresence>

      {/* Custom Cursor */}
      {!isLoading && <CustomCursor />}

      {/* Terminal */}
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />

      {/* Konami Code Easter Egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-lg"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="text-8xl mb-4"
              >
                🎮
              </motion.div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Konami Code Activated!
              </h2>
              <p className="text-xl text-cyan-400">You found the secret! 🎉</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint for Easter Eggs */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-4 left-4 z-30 text-xs text-gray-500 font-mono"
        >
          Press "/" for terminal • Try the Konami code
        </motion.div>
      )}

      {/* Enhanced Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      {!isLoading && (
        <>
          {/* Enhanced Hero Section */}
          <section className="min-h-screen flex items-center justify-center relative pt-16">
            <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />

            <div className="container mx-auto px-6 text-center relative z-10">
              {/* Enhanced Profile Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-12"
              >
                <div className="relative w-56 h-56 mx-auto mb-8">
                  {/* Multiple Rotating Borders */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-2"
                  >
                    <div className="w-full h-full rounded-full bg-black" />
                  </motion.div>

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-400/50"
                  />

                  {/* Profile Image */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src="/profile_img.png?height=200&width=200"
                    alt="Ashutosh Mishra"
                    className="absolute inset-4 w-48 h-48 rounded-full object-cover z-10 border-4 border-black cursor-pointer"
                  />

                  {/* Enhanced Floating Icons */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-2 bg-cyan-400/20 rounded-full backdrop-blur-sm"
                    >
                      <Code className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="absolute top-1/2 -right-6 transform -translate-y-1/2 p-2 bg-purple-400/20 rounded-full backdrop-blur-sm"
                    >
                      <Zap className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 p-2 bg-pink-400/20 rounded-full backdrop-blur-sm"
                    >
                      <Cpu className="w-6 h-6 text-pink-400" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="absolute top-1/2 -left-6 transform -translate-y-1/2 p-2 bg-blue-400/20 rounded-full backdrop-blur-sm"
                    >
                      <Rocket className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="flex items-center justify-center gap-2 mb-6"
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
                </motion.div>
              </motion.div>

              {/* Enhanced Name Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Ashutosh Mishra
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"
                  />
                </h1>

                {/* Role Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="flex flex-wrap justify-center gap-3 mb-6"
                >
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 px-4 py-2">                
                    <Star className="w-4 h-4 mr-2" />
                    Mobile Developer
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Full Stack Developer
                  </Badge>
                  <Badge className="bg-pink-500/20 text-pink-300 border-pink-400/30 px-4 py-2">
                    <Award className="w-4 h-4 mr-2" />
                    Hackathon Winner
                  </Badge>
                </motion.div>
              </motion.div>

              {/* Enhanced Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="mb-8"
              >
                <TypewriterText text="Turning Ideas into Impact, One Clean Commit at a Time." />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mb-12 max-w-4xl mx-auto"
              >
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                  Computer Science Engineer passionate about{" "}
                  <span className="text-purple-400 font-semibold">Android and cross-platform development</span>,{" "}
                  <span className="text-cyan-400 font-semibold">robust backend engineering</span>, and{" "}
                  <span className="text-pink-400 font-semibold">building real-world tech solutions</span> that solve meaningful problems.
                </p>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="flex flex-wrap justify-center gap-4 mb-16"
              >

                <GlowButton href="https://github.com/TheScriptRailoth" 
                icon={<Github />} 
                variant="primary">
                  GitHub
                </GlowButton>                
                

                <GlowButton 
                    href="https://linkedin.com/in/thescriptrailoth" 
                    icon={<Linkedin />} variant="secondary">
                  LinkedIn
                </GlowButton>
                

                <GlowButton href="https://drive.google.com/file/d/19u73VeQF2o5-T8mA6kD6mwB3n_k086qm/view?usp=drive_link" 
                  icon={<ExternalLink/>} 
                  
                  variant="accent">
                  Resume
                </GlowButton>
                <GlowButton href="#contact" icon={<Mail />} variant="primary">
                  Contact
                </GlowButton>
              </motion.div>

              {/* Enhanced Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
              >
                <StatCard
                  number="600K+"
                  label="Users Served"
                  icon={<Users className="w-7 h-7" />}
                  gradient="from-cyan-500 to-blue-600"
                />
                <StatCard
                  number="2+"
                  label="Years Experience"
                  icon={<Code className="w-7 h-7" />}
                  gradient="from-purple-500 to-pink-600"
                />
                <StatCard
                  number="2"
                  label="National Level Hackathon Wins"
                  icon={<Award className="w-7 h-7" />}
                  gradient="from-green-500 to-emerald-600"
                />
                <StatCard
                  number="20+"
                  label="Projects Built"
                  icon={<Rocket className="w-7 h-7" />}
                  gradient="from-orange-500 to-red-600"
                />
              </motion.div>
            </div>

            {/* REMOVED: Scroll Indicator */}
          </section>

          {/* About Section */}
          <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Who I am?
                </h2>
                <div className="max-w-4xl mx-auto">
                  <GlassCard>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      I’m Ashutosh Mishra — a Computer Science graduate, 4-time intern, patent-holder, and product-driven developer who builds tech that actually ships. From integrating AI into Android keyboards for 600,000+ users to simulating power cycles that reduce real-world plant costs, I don’t just write code — I solve problems. I've won national hackathons, built 20+ full-stack apps, filed two patents, and even showcased my work to the Prime Minister of India. I bring execution, impact, and obsession with craft to every line of code I write.
                    </p>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent"
              >
                Experience
              </motion.h2>

              <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <GlassCard className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-cyan-400">{exp.company}</h3>
                          <p className="text-xl text-purple-300">{exp.role}</p>
                        </div>
                        <Badge variant="outline" className="border-cyan-400 text-cyan-400 w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-purple-900/50 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Projects Section */}
          <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              >
                Featured Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <GlassCard className="h-full overflow-hidden cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-6 h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                       
                       
                        <motion.div whileHover={{ scale: 1.2, rotate: 5 }} className="text-cyan-400">
                          {project.icon}
                        </motion.div>

                          {project.image && (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover opacity-30"
                            />
                          )}


                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button 
                            size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </Button>
                          </a>
                        </motion.div>

                      </div>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-blue-900/50 text-blue-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <GlowButton href="/projects" icon={<ArrowRight />} variant="primary">
                  View All Projects
                </GlowButton>
              </motion.div>
            </div>
          </section>

          {/* Enhanced Skills Section (No Percentages) */}
          <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Skills & Technologies
              </motion.h2>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="cursor-pointer"
                    >
                      <GlassCard className="text-center h-full">
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-2">{skill.name}</h3>
                        <div className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full`} />
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent"
              >
                Achievements
              </motion.h2>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="group cursor-pointer"
                    >
                      <GlassCard className="h-full text-center relative overflow-hidden">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                          className="text-6xl mb-4"
                        >
                          {achievement.icon}
                        </motion.div>
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{achievement.title}</h3>
                        <Badge className="bg-purple-900/50 text-purple-300 mb-4">{achievement.subtitle}</Badge>
                        <p className="text-gray-300 mb-4">{achievement.description}</p>
                        <div className="text-sm text-cyan-300 font-semibold">{achievement.highlight}</div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg"
                        />
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Blogs Section */}
          <section id="blogs" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
              >
                Latest Blogs
              </motion.h2>

              <div className="max-w-6xl mx-auto">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center">
                  {blogs.map((blog, index) => (
                    <motion.article
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                      className="group cursor-pointer"
                    >
                      <GlassCard className="h-full">
                        <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20">
                          <img
                            src={blog.image || "/placeholder.svg"}
                            alt={blog.title}
                            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(blog.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {blog.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                          {blog.title}
                        </h3>

                        <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {blog.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} className="bg-green-900/50 text-green-300 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors mt-4"
                        >
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>


                       
                        
                       

                      </GlassCard>
                    </motion.article>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <GlowButton href="/blogs" icon={<ArrowRight />} variant="primary">
                    View All Blogs
                  </GlowButton>
                </motion.div>
              </div>
            </div>
          
          </section>

          {/* Behind the Lens Carousel Section */}
          <section id="behind-the-lens" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Behind the Lens
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Capturing moments of innovation, achievement, and the journey of turning ideas into reality
                </p>
              </motion.div>

              <ImageCarousel images={achievementImages} />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <GlowButton href="/gallery" icon={<Camera />} variant="secondary">
                  View Full Gallery
                </GlowButton>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              >
                Get In Touch
              </motion.h2>

              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <GlassCard>
                    {/* <form className="space-y-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors cursor-pointer"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors cursor-pointer"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={5}
                          placeholder="Your Message"
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 resize-none transition-colors cursor-pointer"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 cursor-pointer"
                      >
                        Send Message
                      </motion.button>
                    </form> */}

                    
                    <ContactForm />                    

                    

                    <div className="flex justify-center space-x-6 mt-8">

                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://x.com/ScriptRailoth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Twitter size={24} />
                      </motion.a>


                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://www.github.com/TheScriptRailoth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Github size={24} />
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        href="https://www.linkedin.com/in/thescriptrailoth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Linkedin size={24} />
                      </motion.a>


                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="mailto:am3718440@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Mail size={24} />
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://www.instagram.com/__ashutosh.mishra_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <Instagram size={24} />
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://thescriptrailoth.hashnode.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <SiHashnode size={24} />
                      </motion.a>


                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://medium.com/@am3718440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <SiMedium size={24} />
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        href="https://medium.com/@am3718440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        <SiGooglescholar size={24} />
                      </motion.a>



                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 text-center text-gray-400">
            <p>&copy; 2025 Ashutosh Mishra. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  )
}

// Enhanced Components
function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length && text) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <div className="text-lg md:text-2xl text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text font-mono">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="text-cyan-400"
      >
        |
      </motion.span>
    </div>
  )
}

function GlowButton({
  children,
  href,
  icon,
  variant = "primary",
}: {
  children: React.ReactNode
  href: string
  icon: React.ReactNode
  variant?: "primary" | "secondary" | "accent"
}) {
  const variants = {
    primary:
      "from-cyan-500/20 to-blue-600/20 border-cyan-400/30 hover:from-cyan-500/30 hover:to-blue-600/30 hover:border-cyan-400/50",
    secondary:
      "from-purple-500/20 to-pink-600/20 border-purple-400/30 hover:from-purple-500/30 hover:to-pink-600/30 hover:border-purple-400/50",
    accent:
      "from-green-500/20 to-emerald-600/20 border-green-400/30 hover:from-green-500/30 hover:to-emerald-600/30 hover:border-green-400/50",
  }

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${variants[variant]} border rounded-lg backdrop-blur-sm transition-all duration-300 group cursor-pointer font-semibold text-sm md:text-base`}
    >
      <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{icon}</span>
      {children}
    </motion.a>
  )
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 md:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl hover:bg-white/10 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

function StatCard({
  number,
  label,
  icon,
  gradient,
}: { number: string; label: string; icon: React.ReactNode; gradient: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      whileHover={{
        scale: 1.08,
        y: -8,
        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
      }}
      className="group relative overflow-hidden"
    >
      <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl hover:border-cyan-400/50 transition-all duration-500">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
        />

        {/* Icon Container */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          whileHover={{ rotate: 360, scale: 1.2 }}
          className="relative z-10 flex items-center justify-center mb-4 w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300"
        >
          <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">{icon}</div>
        </motion.div>

        {/* Number */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="relative z-10 text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300"
        >
          {number}
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative z-10 text-gray-400 group-hover:text-gray-300 text-sm md:text-base font-medium uppercase tracking-wider transition-colors duration-300"
        >
          {label}
        </motion.p>

        {/* Animated Border */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
            backgroundClip: "padding-box, border-box",
            backgroundOrigin: "padding-box, border-box",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
