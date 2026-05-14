import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, MessageCircle } from "lucide-react";
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
    content: "From residential deep cleans to commercial maintenance, our trained, insured professionals bring consistency and care to every job."
  },
  {
    id: 1,
    title: "Professional Deep Cleaning Tips",
    excerpt: "Discover our professional deep cleaning techniques that make your home sparkle like new.",
    date: "May 31, 2024",
    author: "YSMN Team",
    category: "Cleaning Tips",
    image: deepCleaningPhoto,
    content: "Learn the secrets of professional deep cleaning with our expert techniques and proven methods that deliver exceptional results."
  },
  {
    id: 2,
    title: "Garden Maintenance Essentials",
    excerpt: "Keep your outdoor space beautiful with our comprehensive garden maintenance services.",
    date: "May 30, 2024",
    author: "YSMN Team",
    category: "Garden Care",
    image: gardenGlossaryImg,
    content: "Our garden maintenance services ensure your outdoor spaces remain beautiful and well-maintained throughout the year."
  },
  {
    id: 3,
    title: "Pool Cleaning Best Practices",
    excerpt: "Maintain crystal clear pool water with our professional pool cleaning and maintenance services.",
    date: "May 29, 2024",
    author: "YSMN Team",
    category: "Pool Care",
    image: poolCleanerPhoto,
    content: "Professional pool cleaning and maintenance services to keep your pool crystal clear and ready for enjoyment."
  },
  {
    id: 4,
    title: "Office Cleaning Standards",
    excerpt: "Create a productive work environment with our commercial office cleaning solutions.",
    date: "May 28, 2024",
    author: "YSMN Team",
    category: "Commercial",
    image: officeCleaningStandardsImg,
    content: "Our commercial cleaning services ensure your office environment is clean, healthy, and professional."
  }
];

export default function Blog() {
  return (
    <section className="py-16 bg-background" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20" data-testid="badge-blog">
            Our Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="heading-blog">
            Latest <span className="text-accent">Cleaning Tips</span> & <span className="text-foreground">Updates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-description">
            Stay updated with the latest cleaning tips, maintenance guides, and industry insights from our expert team.
          </p>
          {/* Banner removed per request */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20" data-testid={`blog-card-${post.id}`}>
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`blog-image-${post.id}`}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* category badge removed per request */}
                
                <CardTitle className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2" data-testid={`blog-title-${post.id}`}>
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid={`blog-excerpt-${post.id}`}>
                  {post.excerpt}
                </CardDescription>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1" data-testid={`blog-date-${post.id}`}>
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1" data-testid={`blog-author-${post.id}`}>
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors" data-testid={`blog-read-more-${post.id}`}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="gradient-accent text-accent-foreground hover:opacity-90 transition-opacity" data-testid="button-view-all-posts">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}