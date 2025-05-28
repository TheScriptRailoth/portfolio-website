"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, ArrowLeft, Search, Filter, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Blog data
const allBlogs = [
  {
    id: 1,
    title: "Building CI/CD Pipelines on GitHub Actions: A Step-by-Step Guide",
    excerpt:
      "Automating Builds, Tests, and Deployments for Your Applications.",
    content: "Full blog content would go here...",
    date: "2024-09-16",
    readTime: "11 min read",
    tags: ["CI/CD", "Github Workflow", "Scalability", "YAML"],
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1726501975561/2360a378-f608-48f7-8552-c68f5c167d9d.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp?height=400&width=600",
    category: "DevOps",
    link:"https://thescriptrailoth.hashnode.dev/building-cicd-pipelines-on-github-actions-a-step-by-step-guide",
    featured: false,
  },
  {
    id: 2,
    title: "Building and Publishing Your First Flutter Package: A Beginner’s Guide",
    excerpt:
      "Getting Started with Your Flutter Package Journey: A Comprehensive Guide for Novice Users",
    content: "Full blog content would go here...",
    date: "2024-02-05",
    readTime: "14 min read",
    tags: ["Flutter", "Mobile", "Packages", "Development"],
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707138885560/4d8e86e7-6504-4ced-9ef0-277b5c202073.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp?height=400&width=600",
    category: "Mobile Development",
    link:"https://thescriptrailoth.hashnode.dev/building-and-publishing-your-first-flutter-package-a-beginners-guide",
    featured: false,
  },
]

const categories = [
  "All",
  "DevOps",
  "Mobile Development",
]

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags
  const allTags = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags)))

  // Filter blogs based on search, category, and tags
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => blog.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured)
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
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

              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Blog & Insights
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                Sharing knowledge, experiences, and insights from my journey in technology, AI/ML, and software
                development
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-6">
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
                        ? "bg-cyan-500 text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Tag Filter */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 text-gray-400 mr-4">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm">Tags:</span>
                </div>
                {allTags.slice(0, 10).map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                      selectedTags.includes(tag)
                        ? "bg-purple-500 text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <section className="pb-12">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8"
              >
                Featured Posts
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {featuredBlogs.map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl hover:bg-white/10 transition-all duration-300 h-full">
                      <div className="relative overflow-hidden rounded-lg mb-6 h-64">
                        <img
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-cyan-500/80 text-white backdrop-blur-sm">
                          Featured
                        </Badge>
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
                        <Badge className="bg-purple-900/50 text-purple-300 text-xs">{blog.category}</Badge>
                      </div>

                      <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge key={tagIndex} className="bg-gray-800/50 text-gray-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {blog.tags.length > 3 && (
                          <Badge className="bg-gray-800/50 text-gray-300 text-xs">+{blog.tags.length - 3} more</Badge>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Blogs */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-purple-400 mb-8"
            >
              All Posts ({filteredBlogs.length})
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl hover:bg-white/10 transition-all duration-300 h-full">
                    <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

                    <Badge className="bg-purple-900/50 text-purple-300 text-xs mb-3">{blog.category}</Badge>

                    <h3 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">{blog.excerpt}</p>

                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} className="bg-gray-800/50 text-gray-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 2 && (
                        <Badge className="bg-gray-800/50 text-gray-300 text-xs">+{blog.tags.length - 2}</Badge>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No blogs found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                    setSelectedTags([])
                  }}
                  className="mt-4 bg-cyan-500 hover:bg-cyan-600"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
