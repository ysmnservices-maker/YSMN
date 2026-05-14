import { motion } from "framer-motion";
import { Check, Mail, Upload, FileText, Send, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Careers() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    // Reset the file input
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <section id="careers" className="py-20 bg-muted/50" data-testid="careers-section">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-center">
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wide" data-testid="careers-label">
                Join Our Team
              </h2>
              <h3 className="text-4xl font-bold text-foreground" data-testid="careers-title">
                <span className="text-accent">Career Opportunities</span> at <span className="text-foreground">YSMN</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="careers-description">
                Are you looking to join a dedicated and professional cleaning team? YSMN Cleaners is always looking for hardworking, reliable, and motivated individuals to become part of our growing company. Whether you have years of experience or are just starting out, we offer a supportive environment with opportunities to learn and grow.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="space-y-4" data-testid="benefits-list">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Supportive environment with growth opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Flexible scheduling options available</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Comprehensive training provided</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Competitive compensation packages</span>
              </div>
            </div>
            
            {/* Apply CTA */}
            <div className="bg-card p-6 rounded-xl border border-border" data-testid="apply-cta">
              <h4 className="font-semibold text-foreground mb-4 text-lg">Apply Now</h4>
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                
                // Get form data
                const firstName = formData.get('firstName') as string;
                const lastName = formData.get('lastName') as string;
                const email = formData.get('email') as string;
                const phone = formData.get('phone') as string;
                const position = formData.get('position') as string;
                const experience = formData.get('experience') as string;
                const resumeFile = formData.get('resume') as File;
                
                try {
                  // Create FormData for file upload
                  const formData = new FormData();
                  formData.append('firstName', firstName);
                  formData.append('lastName', lastName);
                  formData.append('email', email);
                  formData.append('phone', phone);
                  formData.append('position', position);
                  formData.append('experience', experience);
                  formData.append('_subject', `Career Application: ${position} - ${firstName} ${lastName}`);
                  formData.append('_captcha', 'false');
                  
                  // Add resume file if present
                  if (resumeFile && resumeFile.size > 0) {
                    formData.append('resume', resumeFile);
                  }

                  // Use FormSubmit.co service with FormData for file uploads
                  const response = await fetch('https://formsubmit.co/ysmnmanpowerservices@gmail.com', {
                    method: 'POST',
                    body: formData
                  });

                  if (!response.ok) {
                    const data = await response.json().catch(() => ({}));
                    throw new Error(data.error || 'Failed to submit');
                  }

                  alert('Application submitted successfully! We will get back to you soon.');
                  form.reset();
                  setSelectedFile(null);
                } catch (err: any) {
                  alert(err.message || 'Submission failed. Please try again.');
                }
              }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" placeholder="John" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" className="mt-1" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" className="mt-1" required />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-1" required />
                </div>
                
                <div>
                  <Label htmlFor="position">Position Applying For *</Label>
                  <select 
                    id="position" name="position"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="domestic">Domestic Cleaner</option>
                    <option value="commercial">Commercial Cleaner</option>
                    <option value="garden">Garden Maintenance</option>
                    <option value="pool">Pool Cleaner</option>
                    <option value="care">Care Assistant</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="experience">Relevant Experience *</Label>
                  <Textarea 
                    id="experience" name="experience"
                    placeholder="Tell us about your experience..." 
                    className="mt-1 min-h-[100px]" 
                    required 
                  />
                </div>
                
                <div>
                  <Label>Upload Resume/CV (optional)</Label>
                  
                  {selectedFile ? (
                    // File Preview
                    <div className="mt-1 p-4 border-2 border-green-200 rounded-md bg-green-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-8 w-8 text-green-600" />
                          <div>
                            <p className="text-sm font-medium text-green-800">{selectedFile.name}</p>
                            <p className="text-xs text-green-600">
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={removeFile}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    // Upload Area
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-muted-foreground/25">
                      <div className="space-y-1 text-center">
                        <div className="flex justify-center">
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                        </div>
                        <div className="flex text-sm text-muted-foreground">
                          <label
                            htmlFor="resume"
                            className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
                          >
                            <span>Upload a file</span>
                            <input 
                              id="resume" 
                              name="resume" 
                              type="file" 
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="sr-only" 
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOCX up to 5MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button type="submit" className="w-full mt-4">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Or email your application to:
                </p>
                <a 
                  href="mailto:ysmnmanpowerservices@gmail.com" 
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors text-sm mt-1"
                  data-testid="email-apply"
                >
                  <Mail className="w-4 h-4" />
                  <span>ysmnmanpowerservices@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-card p-6 rounded-xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Open Positions Updated Weekly</span>
              </div>
              <Button className="hover:scale-[1.02] transition-transform">View Open Roles</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

