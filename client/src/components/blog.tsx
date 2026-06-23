import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, MessageCircle, ArrowUpRight, Bookmark } from "lucide-react";
import featuredImg from "@assets/woman-with-blue-blazer-meeting_144627-37639.jpg";
import cleanHomeBanner from "@assets/generated_images/Clean_modern_home_interior_413d0008.png";
import gardenGlossaryImg from "@assets/garden-glossary-potting-getty-0623-ecf762deed2a43bca2a90183cb03da31.jpg";
import deepCleaningPhoto from "@assets/f89be75a8db439aceac959fd0b54941eb1e08467255fa4293f60843915a6c66070f010025882564f1574adb9a9e27befd38389b09629252a2cb3cd_1280.jpg";
import officeCleaningStandardsImg from "@assets/generated_images/Professional_YSMN_cleaning_team_60cc2198.png";
import poolCleanerPhoto from "@assets/Kaercher-mobile-outdoor-cleaner-OC-6-Produktbild-5.jpg";
import deepCleaningImg from "@assets/generated_images/deep cleaning.png";
import gardenImg from "@assets/generated_images/garden.png";
import poolImg from "@assets/generated_images/Pool.png";
import commercialImg from "@assets/generated_images/Commercial.png";
import domesticImg from "@assets/generated_images/Domestic.png";
import companionshipImg from "@assets/Playful Learning Moment.png";
import communityImg from "@assets/community.png";

// Blog post data based on YSMN repository content
const blogPosts = [
  {
    id: 0,
    title: "Our Team In Action",
    excerpt: "A behind-the-scenes look at our professional cleaning crew delivering spotless results.",
    date: "Jun 01, 2024",
    author: "YSMN Team",
    category: "Company",
    image: featuredImg,
    content: "From residential deep cleans to commercial maintenance, our trained, insured professionals bring consistency and care to every job.",
    readTime: "2 min read"
  },
  {
    id: 1,
    title: "Professional Deep Cleaning Tips",
    excerpt: "Discover our professional deep cleaning techniques that make your home sparkle like new.",
    date: "May 31, 2024",
    author: "YSMN Team",
    category: "Cleaning Tips",
    image: deepCleaningPhoto,
    content: "Learn the secrets of professional deep cleaning with our expert techniques and proven methods that deliver exceptional results.",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "Garden Maintenance Essentials",
    excerpt: "Keep your outdoor space beautiful with our comprehensive garden maintenance services.",
    date: "May 30, 2024",
    author: "YSMN Team",
    category: "Garden Care",
    image: gardenGlossaryImg,
    content: "Our garden maintenance services ensure your outdoor spaces remain beautiful and well-maintained throughout the year.",
    readTime: "2 min read"
  },
  {
    id: 3,
    title: "Pool Cleaning Best Practices",
    excerpt: "Maintain crystal clear pool water with our professional pool cleaning and maintenance services.",
    date: "May 29, 2024",
    author: "YSMN Team",
    category: "Pool Care",
    image: poolCleanerPhoto,
    content: "Professional pool cleaning and maintenance services to keep your pool crystal clear and ready for enjoyment.",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Office Cleaning Standards",
    excerpt: "Create a productive work environment with our commercial office cleaning solutions.",
    date: "May 28, 2024",
    author: "YSMN Team",
    category: "Commercial",
    image: officeCleaningStandardsImg,
    content: "Our commercial cleaning services ensure your office environment is clean, healthy, and professional.",
    readTime: "2 min read"
  },
  {
    id: 5,
    title: "Domestic Cleaning Hacks",
    excerpt: "Simple and effective domestic cleaning hacks to keep your home tidy every day.",
    date: "May 27, 2024",
    author: "YSMN Team",
    category: "Cleaning Tips",
    image: domesticImg,
    content: "Simple and effective domestic cleaning hacks to keep your home tidy and organized every day of the week.",
    readTime: "3 min read"
  },
  {
    id: 6,
    title: "Companionship Care Insights",
    excerpt: "How companionship care can improve quality of life for seniors and individuals.",
    date: "May 26, 2024",
    author: "YSMN Team",
    category: "Care",
    image: companionshipImg,
    content: "Discover how companionship care can improve the quality of life for seniors and individuals in need of support.",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "Community Access Programs",
    excerpt: "Stay active and engaged with our community access and outings support.",
    date: "May 25, 2024",
    author: "YSMN Team",
    category: "Community",
    image: communityImg,
    content: "Our community access programs help individuals stay active, engaged, and connected with their local community.",
    readTime: "3 min read"
  }
];

const categories = ["All", "Cleaning Tips", "Garden Care", "Pool Care", "Commercial", "Care", "Community"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const toggleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  return (
    <section className="py-12 bg-background" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20" data-testid="badge-blog">
              Our Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-blog">
              Latest <span className="text-accent">Cleaning Tips</span> & <span className="text-foreground">Updates</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-description">
              Stay updated with the latest cleaning tips, maintenance guides, and industry insights from our expert team.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary" : "hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 relative overflow-hidden" data-testid={`blog-card-${post.id}`}>
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => toggleBookmark(post.id)}
                    className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
                  >
                    <Bookmark className={`w-5 h-5 ${bookmarkedPosts.includes(post.id) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                  </button>
                </div>
                <CardHeader className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      data-testid={`blog-image-${post.id}`}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20">
                    {post.category}
                  </Badge>
                  
                  <CardTitle className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2" data-testid={`blog-title-${post.id}`}>
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid={`blog-excerpt-${post.id}`}>
                    {post.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2" data-testid={`blog-date-${post.id}`}>
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1" data-testid={`blog-author-${post.id}`}>
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <Button variant="default" size="sm" className="w-full hover:opacity-90 transition-opacity group-hover:scale-105" data-testid={`blog-read-more-${post.id}`}>
                    Read More <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="gradient-accent text-accent-foreground hover:opacity-90 transition-opacity" data-testid="button-view-all-posts">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}