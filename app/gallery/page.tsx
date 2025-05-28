"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, X, Camera, Award, Calendar, Filter, Grid, List } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Description } from "@radix-ui/react-toast"

// Gallery data with more images
const galleryImages = [
  {
    id: 1,
    title: "XR Creator Hackathon 2025 - Winner",
    description: "Team EMO won the XR Creator Hackathon with our project Ambio.",
    image: "/gallery/xr-win.jpg?height=600&width=800",
    category: "Hackathon",
    date: "2025-01-15",
    location: "Mumbai, India",
    tags: ["Winner", "AR", "Innovation"],
  },
  {
    id: 2,
    title: "WAVES Summit 2025 Presentation",
    description: "Showcasing AR innovation to industry leaders and investors",
    image: "/gallery/waves-presentation.jpg?height=600&width=800",
    category: "Conference",
    date: "2025-01-20",
    location: "Mumbai, India",
    tags: ["Presentation", "AR", "Summit"],
  },
  {
    id: 3 ,
    title: "Won XR Creator Hackathon 2025",
    description: "After winning the XR Creator Hackathon",
    image: "/gallery/winning.jpg?height=600&width=800",
    category: "Work",
    date: "2023-09-08",
    location: "Mumbai, India",
    tags: ["Team", "Collaboration", "XR"],
  },
  {
    id: 4,
    title: "EMO - XR Creator Hackathon 2025",
    description: "Team EMO won the XR Creator Hackathon with our project Ambio.",
    image: "/gallery/team-emo.jpg?height=600&width=800",
    category: "Work",
    date: "2023-09-08",
    location: "Mumbai, India",
    tags: ["Team", "Collaboration", "XR"],
  },
    {
    id: 5,
    title: "XR Creator Hacathon Winners and Organizers",
    description : "XR Creator Hackathon 2025 winners and organizers celebrating the success.",  
    image: "/gallery/xr-winners.jpg?height=600&width=800",
    category: "Work",
    date: "2023-09-08",
    location: "Mumbai, India",
    tags: ["Team", "Collaboration", "XR"],
  },
  {
    id: 6,
    title: "Convoke Hackathon 2023 - 1st Place",
    description: "Team celebration after winning the AR navigation challenge",
    image: "/gallery/cic-delhi.jpg?height=600&width=800",
    category: "Hackathon",
    date: "2023-11-15",
    location: "Delhi, India",
    tags: ["Winner", "Navigation", "AR"],
  },
  {
    id: 7,
    title: "IDE Bootcamp 2023",
    description: "Innovation workshop at IISER Bhopal with fellow innovators",
    image: "/gallery/ide.jpg?height=600&width=800",
    category: "Bootcamp",
    date: "2023-08-10",
    location: "Bhopal, India",
    tags: ["Innovation", "Workshop", "Learning"],
  },
  {
    id: 8,
    title: "Madhav Seth, CEO of HTech, at Honor Launch Event",
    description: "Invited for Honor launch event.",
    image: "/gallery/madhav_seth.jpg?height=600&width=800",
    category: "Event",
    date: "2023-05-20",
    location: "Delhi, India",
    tags: ["Event", "Honor", "Technology"],
  },
   {
    id: 9,
    title: "Shri Hari, Product Manager at HTech, at Honor Launch Event",
    description: "Invited for Honor launch event.",
    image: "/gallery/shri-hari.jpg?height=600&width=800",
    category: "Event",
    date: "2024-06-15",
    location: "Remote",
    tags: ["Event", "Launch", "Success"],
  },
  {
    id: 10,
    title: "Tech Talk at University",
    description: "Speaking about competitive programming and its impact on careers",
    image: "/gallery/code-session.jpg?height=600&width=800",
    category: "Speaking",
    date: "2024-03-12",
    location: "JUET, Guna",
    tags: ["Speaking", "AI/ML", "Mobile"],
  },
  {
    id: 11,
    title: "CIC Hackthon",
    description: "Working on a project for the CIC Hackathon in Delhi.",
    image: "/gallery/cic-hackathon.jpg?height=600&width=800",
    category: "Work",
    date: "2024-06-15",
    location: "Remote",
    tags: ["AI", "Integration", "Success"],
  },
  {
    id: 12,
    title: "Fiserv Team Building",
    description: "Team collaboration session while building management tools",
    image: "/placeholder.svg?height=600&width=800",
    category: "Work",
    date: "2023-09-08",
    location: "Pune, India",
    tags: ["Team", "Collaboration", ".NET"],
  },
  {
    id: 13,
    title: "Explaining Project to Vice Chancellor",
    description: "Presenting our project to the Vice Chancellor of JUET",
    image: "/gallery/vc.jpg?height=600&width=800",
    category: "Launch",
    date: "2022-12-03",
    location: "Bangalore, India",
    tags: ["Android", "Launch", "Mobile"],
  },
  {
    id: 14,
    title: "Shisksha Setu - NGO for Education",
    description: "Volunteering with Shiksha Setu to support education in rural areas",
    image: "/gallery/shiksha_setu.jpg?height=600&width=800",
    category: "Demo",
    date: "2024-02-28",
    location: "Ruthiyai, India",
    tags: ["NGO", "Enducation"],
  },
  {
    id: 15,
    title: "JUET Builds College Hackathon",
    description: "Got Most Scalable Award in JUET Builds College Hackathon",
    image: "/gallery/juet-builds.jpg?height=600&width=800",
    category: "Milestone",
    date: "2022-06-25",
    location: "JUET, Guna",
    tags: ["Graduation", "Achievement", "Education"],
  },
  {
    id: 16,
    title: "Developement and Innovation Center - JUET",
    description: "Led the development team at JUET's Development and Innovation Center",
    image: "/gallery/dic.jpg?height=600&width=800",
    category: "Competition",
    date: "2021-10-15",
    location: "JUET, Guna",
    tags: ["Coding", "Competition", "Win"],
  },
  {
    id: 17,
    title: "Devfest Bhopal 2024",
    description: "Participated in Devfest Bhopal, showcasing our latest project",
    image: "/gallery/devfest.jpg?height=600&width=800",
    category: "Summit",
    date: "2024-10-15",
    location: "Bhopal, India",
    tags: ["Coding", "Community", "Google"],
  },
    {
    id: 18,
    title: "Training and Placement Cell - JUET",
    description: "After completion of Tech Mahindra placement drive at JUET",
    image: "/gallery/tnp-juet.jpg?height=600&width=800",
    category: "Summit",
    date: "2024-10-15",
    location: "JUET, Guna",
    tags: ["Placement", "Career", "Success"],
  },
    {
    id: 19,
    title: "MOE Bootcamp - Arindam Mondal, Program Manager at MOE",
    description: "Discussing the future of education technology with Arindam Mondal",
    image: "/gallery/moe.jpg?height=600&width=800",
    category: "Summit",
    date: "2024-10-15",
    location: "JUET, Guna",
    tags: ["Placement", "Career", "Success"],
  },
     {
    id: 21,
    title: "MOE Bootcamp - Mrs. Gita Sanjay, Mentor at Wadhwani Foundation",
    description: "Discussing project and market with Gita Sanjay",
    image: "/gallery/gita_mam.jpg?height=600&width=800",
    category: "Summit",
    date: "2024-10-15",
    location: "JUET, Guna",
    tags: ["Placement", "Career", "Success"],
  },
     {
    id: 22,
    title: "Build Face Recognition Attendance System",
    description: "Developed a face recognition attendance system for JUET at JUET Builds Hackathon",
    image: "/gallery/juet-build.png?height=600&width=800",
    category: "Summit",
    date: "2024-10-15",
    location: "JUET, Guna",
    tags: ["Placement", "Career", "Success"],
  },
     {
    id: 23,
    title: "Realme Community Manager",
    description: "Meeting with Realme's community manager to discuss future collaborations",
    image: "/gallery/realme.jpg?height=600&width=800",
    category: "Summit",
    date: "2024-10-15",
    location: "JUET, Guna",
    tags: ["Placement", "Career", "Success"],
  },
]

const categories = [
  "All",
  "Hackathon",
  "Conference",
  "Work",
  "Demo",
  "Speaking",
  "Bootcamp",
  "Launch",
  "Milestone",
  "Competition",
]

// Lightbox Modal Component
function LightboxModal({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: {
  image: (typeof galleryImages)[0] | null
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) {
  if (!image) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all"
            >
              <ArrowLeft className="w-6 h-6 text-white rotate-180" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-pink-500/80 text-white backdrop-blur-sm">{image.category}</Badge>
                  <Badge className="bg-purple-500/80 text-white backdrop-blur-sm">{image.location}</Badge>
                  <Badge className="bg-cyan-500/80 text-white backdrop-blur-sm">
                    {new Date(image.date).toLocaleDateString()}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-gray-200 mb-3">{image.description}</p>
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag, index) => (
                    <Badge key={index} className="bg-gray-800/50 text-gray-300 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Filter images based on category
  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }

    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />
        {[...Array(30)].map((_, i) => (
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

              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Behind the Lens
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                A visual journey through my achievements, milestones, and memorable moments in technology and innovation
              </p>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Category Filter */}
                {/* <div className="flex flex-wrap gap-3">
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
                          ? "bg-pink-500 text-white"
                          : "bg-white/5 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div> */}

                {/* View Mode Toggle */}
                {/* <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "grid" ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("masonry")}
                    className={`p-2 rounded transition-all ${
                      viewMode === "masonry" ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div> */}
              </div>

              {/* Results Count */}
              <div className="text-center mt-6">
                <p className="text-gray-400">
                  Showing {filteredImages.length} {filteredImages.length === 1 ? "image" : "images"}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
              }`}
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`group cursor-pointer ${viewMode === "masonry" ? "break-inside-avoid mb-6" : ""}`}
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-pink-400/50 transition-all duration-300">
                    <div
                      className={`relative overflow-hidden ${viewMode === "grid" ? "aspect-square" : "aspect-auto"}`}
                    >
                      <img
                        src={image.image || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-pink-500/80 text-white backdrop-blur-sm text-xs">{image.category}</Badge>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-purple-500/80 text-white backdrop-blur-sm text-xs">
                          {new Date(image.date).getFullYear()}
                        </Badge>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/50"
                      >
                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                          >
                            <Camera className="w-6 h-6 text-white" />
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                          >
                            <Award className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Image Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors line-clamp-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{image.description}</p>

                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(image.date).toLocaleDateString()}
                        </div>
                        <span>{image.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {image.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} className="bg-gray-800/50 text-gray-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {image.tags.length > 2 && (
                          <Badge className="bg-gray-800/50 text-gray-300 text-xs">+{image.tags.length - 2}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg mb-4">No images found in this category.</p>
                <Button onClick={() => setSelectedCategory("All")} className="bg-pink-500 hover:bg-pink-600">
                  View All Images
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        image={selectedImage}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={() => navigateImage("next")}
        onPrev={() => navigateImage("prev")}
      />
    </div>
  )
}
