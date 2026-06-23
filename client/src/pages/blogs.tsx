import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogComponent from "@/components/blog";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Load Instagram script
    const instagramScript = document.createElement('script');
    instagramScript.src = 'https://www.instagram.com/embed.js';
    instagramScript.async = true;
    instagramScript.defer = true;
    instagramScript.onload = () => {
      setScriptsLoaded(true);
    };
    document.body.appendChild(instagramScript);

    return () => {
      // Cleanup
      const existingInstagram = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingInstagram) document.body.removeChild(existingInstagram);
    };
  }, []);

  useEffect(() => {
    if (scriptsLoaded && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [scriptsLoaded]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-6">
        <BlogComponent />
        
        {/* Social Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Us on Instagram</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See our latest work and behind-the-scenes moments
              </p>
            </motion.div>

            {/* Instagram Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center max-w-lg mx-auto"
            >
              <a
                href="https://www.instagram.com/ysmnhomecare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                @ysmnhomecare
              </a>
              <blockquote 
                className="instagram-media w-full" 
                data-instgrm-permalink="https://www.instagram.com/ysmnhomecare" 
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '300px',
                  padding: '0',
                  width: '100%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a 
                    href="https://www.instagram.com/ysmnhomecare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      background: '#FFFFFF',
                      lineHeight: '0',
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          flexGrow: '0',
                          height: '40px',
                          marginRight: '14px',
                          width: '40px'
                        }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                          <div style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: '0',
                            height: '14px',
                            marginBottom: '6px',
                            width: '100px'
                          }} />
                          <div style={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '4px',
                            flexGrow: '0',
                            height: '14px',
                            width: '60px'
                          }} />
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }} />
                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }} />
                    <div style={{ paddingTop: '8px' }}>
                      <div style={{
                        color: '#3897f0',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '550',
                        lineHeight: '18px'
                      }}>
                        View this profile on Instagram
                      </div>
                    </div>
                    <div style={{ padding: '12.5% 0' }} />
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginBottom: '14px',
                      alignItems: 'center'
                    }}>
                      <div style={{ marginLeft: '8px' }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '12.5px',
                          width: '12.5px',
                          transform: 'translateX(0px) translateY(7px)'
                        }} />
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          height: '12.5px',
                          transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                          width: '12.5px',
                          flexGrow: '0',
                          marginRight: '14px',
                          marginLeft: '2px'
                        }} />
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '12.5px',
                          width: '12.5px',
                          transform: 'translateX(9px) translateY(-18px)'
                        }} />
                      </div>
                      <div style={{ marginLeft: 'auto' }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: '0',
                          height: '20px',
                          width: '60px'
                        }} />
                      </div>
                    </div>
                    <div style={{ marginTop: '9px' }}>
                      <div style={{
                        color: '#000000',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        lineHeight: '18px',
                        textAlign: 'center'
                      }}>
                        <a 
                          href="https://www.instagram.com/ysmnhomecare" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          @ysmnhomecare
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
