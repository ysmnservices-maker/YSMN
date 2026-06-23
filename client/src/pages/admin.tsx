import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
}

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
}

interface AboutFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Staff {
  id: number;
  username: string;
  password: string;
  name: string;
  role: string;
  email: string;
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("services");

  // Sample data
  const [services, setServices] = useState<Service[]>([
    {
      id: "domestic",
      title: "Domestic Cleaning Perth",
      description: "Professional domestic cleaning services in Perth",
      rating: 4.9,
      reviews: 120,
    },
    {
      id: "commercial",
      title: "Commercial Cleaning Services Perth",
      description: "Professional commercial cleaning services in Perth",
      rating: 4.8,
      reviews: 85,
    },
  ]);

  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Michael Chen",
      title: "Business Owner",
      content: "YSMN completely transformed our office space!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Homeowner",
      content: "From the moment they arrived, I knew I was in good hands!",
      rating: 5,
    },
  ]);

  const [aboutFeatures, setAboutFeatures] = useState<AboutFeature[]>([
    {
      id: "family-owned",
      title: "Family-Owned Business",
      description: "We treat every client like family",
      icon: "Users",
    },
  ]);

  const [staff, setStaff] = useState<Staff[]>([
    {
      id: 1,
      username: "john.staff",
      password: "Staff@123",
      name: "John Smith",
      role: "Cleaning Supervisor",
      email: "john@ysmn.com",
    },
    {
      id: 2,
      username: "sarah.staff",
      password: "Staff@123",
      name: "Sarah Johnson",
      role: "Care Coordinator",
      email: "sarah@ysmn.com",
    },
  ]);

  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "YSMN@2025";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
            <CardDescription className="text-center text-sm space-y-1">
              <p>Enter your credentials to access the admin panel</p>
              <p className="text-xs text-gray-500 font-medium">Default: Username "admin" / Password "YSMN@2025"</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="YSMN@2025"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Admin Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <Button variant="destructive" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="services" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-6 md:grid-cols-7">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="staff">Staff Portal</TabsTrigger>
            <TabsTrigger value="about">About Page</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Services Management */}
          <TabsContent value="services">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Services Management</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add New Service</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Service</DialogTitle>
                      <DialogDescription>
                        Create a new service to display on your website
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="new-service-title">Service Title</Label>
                        <Input id="new-service-title" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-service-desc">Description</Label>
                        <Textarea id="new-service-desc" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="new-service-rating">Rating</Label>
                          <Input id="new-service-rating" type="number" step="0.1" min="0" max="5" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="new-service-reviews">Reviews</Label>
                          <Input id="new-service-reviews" type="number" min="0" />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Service</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Service Name</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Reviews</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {services.map((service) => (
                        <TableRow key={service.id}>
                          <TableCell className="font-medium">{service.title}</TableCell>
                          <TableCell>{service.rating}</TableCell>
                          <TableCell>{service.reviews}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive">
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Testimonials Management */}
          <TabsContent value="testimonials">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Testimonials Management</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add New Testimonial</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Testimonial</DialogTitle>
                      <DialogDescription>
                        Add a new client testimonial to your website
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="new-testimonial-name">Client Name</Label>
                        <Input id="new-testimonial-name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-testimonial-title">Title</Label>
                        <Input id="new-testimonial-title" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-testimonial-content">Testimonial</Label>
                        <Textarea id="new-testimonial-content" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-testimonial-rating">Rating</Label>
                        <Select defaultValue="5">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Stars</SelectItem>
                            <SelectItem value="4">4 Stars</SelectItem>
                            <SelectItem value="3">3 Stars</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Testimonial</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {testimonials.map((testimonial) => (
                        <TableRow key={testimonial.id}>
                          <TableCell className="font-medium">{testimonial.name}</TableCell>
                          <TableCell>{testimonial.title}</TableCell>
                          <TableCell>{testimonial.rating} Stars</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive">
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Staff Management */}
          <TabsContent value="staff">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Staff Portal Management</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Add New Staff</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Staff Member</DialogTitle>
                      <DialogDescription>
                        Add a new staff member with login credentials
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="new-staff-name">Full Name</Label>
                        <Input id="new-staff-name" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-staff-username">Username</Label>
                        <Input id="new-staff-username" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-staff-password">Password</Label>
                        <Input id="new-staff-password" type="password" placeholder="Staff@123" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-staff-role">Role</Label>
                        <Input id="new-staff-role" placeholder="e.g., Cleaning Supervisor" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-staff-email">Email</Label>
                        <Input id="new-staff-email" type="email" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Staff</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Staff Credentials</CardTitle>
                  <CardDescription>Current staff and their login details</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Password</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {staff.map((member) => (
                        <TableRow key={member.id}>
                          <TableCell className="font-medium">{member.name}</TableCell>
                          <TableCell className="font-mono text-sm">{member.username}</TableCell>
                          <TableCell className="font-mono text-sm text-gray-600">{member.password}</TableCell>
                          <TableCell>{member.role}</TableCell>
                          <TableCell className="text-sm">{member.email}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button size="sm" variant="destructive">
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* About Page Management */}
          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Page Content</CardTitle>
                <CardDescription>Edit the content shown on the About page</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="about-title">Main Title</Label>
                    <Input id="about-title" defaultValue="Our Trusted Partner for a Clean, Healthy Space" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="about-desc1">Description Paragraph 1</Label>
                    <Textarea id="about-desc1" defaultValue="YSMN Complete Care and Support Services is a proud, family-owned business serving Perth and surrounding areas." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="about-desc2">Description Paragraph 2</Label>
                    <Textarea id="about-desc2" defaultValue="Our team of experienced professionals is dedicated to creating spotless, healthy environments." />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Feature Title</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aboutFeatures.map((feature) => (
                        <TableRow key={feature.id}>
                          <TableCell className="font-medium">{feature.title}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">Edit</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <Button className="mt-4">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Images Management */}
          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Manage Images</CardTitle>
                <CardDescription>Upload and change images used on the website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="heroImage">Hero Background</Label>
                    <Input id="heroImage" type="file" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="aboutImage">About Page Image</Label>
                    <Input id="aboutImage" type="file" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="logoImage">Logo</Label>
                    <Input id="logoImage" type="file" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="teamImage">Team Photo</Label>
                    <Input id="teamImage" type="file" />
                  </div>
                  <Button className="w-full md:w-auto">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Management */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
                <CardDescription>Update contact info and business details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" defaultValue="YSMN Complete Care and Support Services" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessEmail">Email</Label>
                    <Input id="businessEmail" defaultValue="ysmnmanpowerservices@gmail.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessPhone">Phone</Label>
                    <Input id="businessPhone" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="businessAddress">Address</Label>
                    <Input id="businessAddress" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <Input id="primaryColor" type="color" defaultValue="#800080" />
                  </div>
                </div>
                <Button className="w-full md:w-auto mt-4">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
