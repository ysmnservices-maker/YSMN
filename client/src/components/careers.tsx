import { motion } from "framer-motion";
import { Check, Mail, Upload, FileText, Send, X, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type FileUploadState = {
  resume: File | null;
  passport: File | null;
  visa: File | null;
  drivingLicence: File | null;
  policeClearance: File | null;
  addressProof: File | null;
};

type OpenPosition = {
  title: string;
  location: string;
  type: string;
  description: string;
};

const openPositions: OpenPosition[] = [
  {
    title: "Domestic Cleaner",
    location: "Perth, WA",
    type: "Full-time / Part-time",
    description: "Join our team as a domestic cleaner and help keep homes in Perth clean and comfortable. We offer flexible schedules and comprehensive training."
  },
  {
    title: "Commercial Cleaner",
    location: "Perth Metro",
    type: "Full-time",
    description: "Looking for experienced commercial cleaners to service offices, retail spaces, and community facilities in Perth."
  },
  {
    title: "Care Assistant",
    location: "Perth, WA",
    type: "Part-time / Casual",
    description: "Provide compassionate care and support to clients in their homes. Experience preferred but not essential - training provided."
  }
];

export default function Careers() {
  const [files, setFiles] = useState<FileUploadState>({
    resume: null,
    passport: null,
    visa: null,
    drivingLicence: null,
    policeClearance: null,
    addressProof: null,
  });

  const [isInternational, setIsInternational] = useState<string>("no");

  const handleFileChange = (field: keyof FileUploadState, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({ ...prev, [field]: file }));
    }
  };

  const removeFile = (field: keyof FileUploadState) => {
    setFiles(prev => ({ ...prev, [field]: null }));
    // Reset the file input
    const fileInput = document.getElementById(field) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const renderUploadField = (
    field: keyof FileUploadState,
    label: string,
    accept: string = ".pdf,.jpg,.jpeg,.png",
    required: boolean = false
  ) => (
    <div>
      <Label htmlFor={field}>{label} *</Label>
      
      {files[field] ? (
        // File Preview
        <div className="mt-1 p-4 border-2 border-green-200 rounded-md bg-green-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-green-800">{files[field]!.name}</p>
                <p className="text-xs text-green-600">
                  {(files[field]!.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeFile(field)}
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
                htmlFor={field}
                className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
              >
                <span>Upload a file</span>
                <input 
                  id={field} 
                  name={field} 
                  type="file" 
                  accept={accept}
                  onChange={(e) => handleFileChange(field, e)}
                  className="sr-only" 
                  required
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-muted-foreground">
              PDF, JPG, PNG up to 5MB
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id="careers" className="py-12" data-testid="careers-section">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide">
            Join Our Team
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            <span className="text-accent">Career Opportunities</span> at <span className="text-foreground">YSMN</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Are you looking to join a dedicated and professional team? YSMN is always looking for hardworking, reliable, and motivated individuals to become part of our growing company.
          </p>
        </motion.div>

        {/* Open Positions */}
        <div className="mb-16">
          <motion.h4 
            className="text-2xl font-bold text-foreground mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Open Positions
          </motion.h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{position.title}</CardTitle>
                    <CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{position.description}</p>
                    <Button className="w-full">Apply Now</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits List */}
        <motion.div 
          className="space-y-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-3xl font-bold text-foreground text-center">Why Join YSMN?</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <h5 className="text-xl font-semibold text-foreground">Supportive Environment</h5>
              </div>
              <p className="text-muted-foreground">We foster a positive and encouraging workplace where every team member feels valued and has clear pathways for career advancement and personal growth.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <h5 className="text-xl font-semibold text-foreground">Flexible Scheduling</h5>
              </div>
              <p className="text-muted-foreground">We understand work-life balance is important. Choose from full-time, part-time, or casual shifts that fit perfectly with your lifestyle and commitments.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <h5 className="text-xl font-semibold text-foreground">Comprehensive Training</h5>
              </div>
              <p className="text-muted-foreground">No experience? No problem! We provide thorough, hands-on training to all new team members to ensure you feel confident and skilled in your role.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
                <h5 className="text-xl font-semibold text-foreground">Competitive Pay</h5>
              </div>
              <p className="text-muted-foreground">We offer attractive hourly rates, regular performance reviews, and opportunities for pay increases as you gain experience and take on more responsibilities.</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h5 className="text-xl font-semibold text-foreground">Friendly & Diverse Team</h5>
              </div>
              <p className="text-muted-foreground">Join a warm, inclusive team that celebrates diversity. We believe our differences make us stronger, and we're committed to creating a welcoming space for everyone.</p>
            </div>
          </div>
        </motion.div>
        
        {/* Application Form */}
        <motion.div
          className="bg-card p-8 rounded-xl border border-border max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            <h4 className="font-bold text-2xl text-foreground mb-6">Apply Now</h4>
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const formData = new FormData(form);
              
              // Check all required files are present
              const requiredFields: (keyof FileUploadState)[] = ['resume', 'passport', 'visa', 'drivingLicence', 'policeClearance', 'addressProof'];
              const missingFields = requiredFields.filter(field => !files[field]);
              if (missingFields.length > 0) {
                alert(`Please upload the following required files: ${missingFields.map(field => {
                  const labels: Record<string, string> = {
                    resume: 'CV / Resume',
                    passport: 'Passport Copy',
                    visa: 'Visa Copy',
                    drivingLicence: 'Driving Licence',
                    policeClearance: 'Police Clearance',
                    addressProof: 'Residential Address Proof'
                  };
                  return labels[field] || field;
                }).join(', ')}`);
                return;
              }
              
              try {
                // Create FormData for file upload
                const submitFormData = new FormData();
                submitFormData.append('firstName', formData.get('firstName') as string);
                submitFormData.append('lastName', formData.get('lastName') as string);
                submitFormData.append('email', formData.get('email') as string);
                submitFormData.append('phone', formData.get('phone') as string);
                submitFormData.append('position', formData.get('position') as string);
                submitFormData.append('experience', formData.get('experience') as string);
                submitFormData.append('internationalStatus', formData.get('internationalStatus') as string);
                submitFormData.append('_subject', `Career Application: ${formData.get('position')} - ${formData.get('firstName')} ${formData.get('lastName')}`);
                submitFormData.append('_captcha', 'false');
                
                // Add all files
                Object.entries(files).forEach(([key, file]) => {
                  if (file) {
                    submitFormData.append(key, file);
                  }
                });

                // Use FormSubmit.co service with FormData for file uploads
                const response = await fetch('https://formsubmit.co/ysmnmanpowerservices@gmail.com', {
                  method: 'POST',
                  body: submitFormData
                });

                if (!response.ok) {
                  const data = await response.json().catch(() => ({}));
                  throw new Error(data.error || 'Failed to submit');
                }

                alert('Application submitted successfully! We will get back to you soon.');
                form.reset();
                setFiles({
                  resume: null,
                  passport: null,
                  visa: null,
                  drivingLicence: null,
                  policeClearance: null,
                  addressProof: null,
                });
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
                  <option value="healthcare">Healthcare Support</option>
                  <option value="rehabilitation">Rehabilitation Support</option>
                  <option value="household">Household Assistant</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="experience">Relevant Experience *</Label>
                <Textarea 
                  id="experience" name="experience"
                  placeholder="Tell us about your experience..." 
                  className="mt-1 min-h-[120px]" 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="internationalStatus">Are you an international applicant or currently on a visa in Australia? *</Label>
                <select 
                  id="internationalStatus" 
                  name="internationalStatus"
                  value={isInternational}
                  onChange={(e) => setIsInternational(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  required
                >
                  <option value="no">No, I am an Australian citizen or permanent resident</option>
                  <option value="yes">Yes, I am an international applicant or on a visa</option>
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {renderUploadField('resume', 'CV / Resume', '.pdf,.doc,.docx', true)}
                {renderUploadField('passport', 'Passport Copy', '.pdf,.jpg,.jpeg,.png', isInternational === "yes")}
                {renderUploadField('visa', 'Visa Copy', '.pdf,.jpg,.jpeg,.png', isInternational === "yes")}
                {renderUploadField('drivingLicence', 'Driving Licence')}
                {renderUploadField('policeClearance', 'Police Clearance')}
                {renderUploadField('addressProof', 'Residential Address Proof')}
              </div>
              
              <Button type="submit" className="w-full mt-6">
                <Send className="mr-2 h-5 w-5" />
                Submit Application
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Or email your application to:
              </p>
              <a 
                href="mailto:ysmnmanpowerservices@gmail.com" 
                className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors text-lg mt-2"
                data-testid="email-apply"
              >
                <Mail className="w-5 h-5" />
                <span>ysmnmanpowerservices@gmail.com</span>
              </a>
            </div>
          </motion.div>
      </div>
    </section>
  );
}
