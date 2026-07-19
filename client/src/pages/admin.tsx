import { useState, useEffect } from "react";
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
import {
  getWebsiteData,
  setWebsiteData,
  type WebsiteData,
  type Service,
  type Testimonial,
  type WhyChooseUsItem,
  type Staff,
  type JobOpportunity,
} from "@/lib/storage";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "YSMN@2025";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("services");
  const [data, setData] = useState<WebsiteData>(() => getWebsiteData());

  // Save data to localStorage whenever it changes
  useEffect(() => {
    setWebsiteData(data);
  }, [data]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === ADMIN_USERNAME && password.trim() === ADMIN_PASSWORD) {
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
            <CardDescription className="text-center text-sm">
              Enter your credentials to access the admin panel
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
          <TabsList className="grid w-full grid-cols-7 md:grid-cols-8">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="why-choose-us">Why Choose Us</TabsTrigger>
            <TabsTrigger value="staff">Staff Portal</TabsTrigger>
            <TabsTrigger value="jobs">Job Opportunities</TabsTrigger>
            <TabsTrigger value="about">About Page</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Services Management */}
          <TabsContent value="services">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Services Management</h2>
                <AddServiceDialog
                  onAdd={(service) => setData({ ...data, services: [...data.services, service] })}
                />
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Service Title</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Reviews</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.services.map((service) => (
                        <TableRow key={service.id}>
                          <TableCell className="font-medium">{service.title}</TableCell>
                          <TableCell>{service.rating}</TableCell>
                          <TableCell>{service.reviews}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                setData({
                                  ...data,
                                  services: data.services.filter((s) => s.id !== service.id),
                                })
                              }
                            >
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
                <AddTestimonialDialog
                  onAdd={(testimonial) =>
                    setData({ ...data, testimonials: [...data.testimonials, testimonial] })
                  }
                />
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
                      {data.testimonials.map((testimonial) => (
                        <TableRow key={testimonial.id}>
                          <TableCell className="font-medium">{testimonial.name}</TableCell>
                          <TableCell>{testimonial.title}</TableCell>
                          <TableCell>{testimonial.rating} Stars</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                setData({
                                  ...data,
                                  testimonials: data.testimonials.filter(
                                    (t) => t.id !== testimonial.id
                                  ),
                                })
                              }
                            >
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

          {/* Why Choose Us Management */}
          <TabsContent value="why-choose-us">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Why Choose Us Management</h2>
                <AddWhyChooseUsDialog
                  onAdd={(item) => setData({ ...data, whyChooseUs: [...data.whyChooseUs, item] })}
                />
              </div>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.whyChooseUs.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">{item.title}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                setData({
                                  ...data,
                                  whyChooseUs: data.whyChooseUs.filter((i) => i.id !== item.id),
                                })
                              }
                            >
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
                <AddStaffDialog
                  onAdd={(staff) => setData({ ...data, staff: [...data.staff, staff] })}
                />
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
                      {data.staff.map((member) => (
                        <TableRow key={member.id}>
                          <TableCell className="font-medium">{member.name}</TableCell>
                          <TableCell className="font-mono text-sm">{member.username}</TableCell>
                          <TableCell className="font-mono text-sm text-gray-600">
                            {member.password}
                          </TableCell>
                          <TableCell>{member.role}</TableCell>
                          <TableCell className="text-sm">{member.email}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                setData({
                                  ...data,
                                  staff: data.staff.filter((s) => s.id !== member.id),
                                })
                              }
                            >
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

          {/* Job Opportunities Management */}
          <TabsContent value="jobs">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Job Opportunities Management</h2>
                <AddJobDialog
                  onAdd={(job) =>
                    setData({ ...data, jobOpportunities: [...data.jobOpportunities, job] })
                  }
                />
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.jobOpportunities.map((job) => (
                        <TableRow key={job.id}>
                          <TableCell className="font-medium">{job.title}</TableCell>
                          <TableCell>{job.location}</TableCell>
                          <TableCell>{job.type}</TableCell>
                          <TableCell className="text-right space-x-2">
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                setData({
                                  ...data,
                                  jobOpportunities: data.jobOpportunities.filter(
                                    (j) => j.id !== job.id
                                  ),
                                })
                              }
                            >
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
                <Button className="w-full md:w-auto">Save Changes</Button>
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
                <Button className="w-full md:w-auto mt-4">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Add Service Dialog Component
function AddServiceDialog({ onAdd }: { onAdd: (service: Service) => void }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [iconName, setIconName] = useState("Home");
  const [image, setImage] = useState("");
  const [gradient, setGradient] = useState("gradient-primary");
  const [link, setLink] = useState("");
  const [rating, setRating] = useState(4.9);
  const [reviews, setReviews] = useState(100);

  const handleSave = () => {
    onAdd({
      id: title.toLowerCase().replace(/\s+/g, "-"),
      title,
      description,
      iconName,
      image,
      gradient,
      link,
      rating,
      reviews,
    });
    setOpen(false);
    setTitle("");
    setDescription("");
    setIconName("Home");
    setImage("");
    setGradient("gradient-primary");
    setLink("");
    setRating(4.9);
    setReviews(100);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Service</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Service</DialogTitle>
          <DialogDescription>Create a new service to display on your website</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="new-service-title">Service Title</Label>
            <Input id="new-service-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-service-desc">Description</Label>
            <Textarea
              id="new-service-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-service-icon">Icon</Label>
            <Select value={iconName} onValueChange={setIconName}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Home">Home</SelectItem>
                <SelectItem value="Building">Building</SelectItem>
                <SelectItem value="Leaf">Leaf</SelectItem>
                <SelectItem value="Waves">Waves</SelectItem>
                <SelectItem value="Sparkles">Sparkles</SelectItem>
                <SelectItem value="Users">Users</SelectItem>
                <SelectItem value="Heart">Heart</SelectItem>
                <SelectItem value="Activity">Activity</SelectItem>
                <SelectItem value="Stethoscope">Stethoscope</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="new-service-rating">Rating</Label>
              <Input
                id="new-service-rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-service-reviews">Reviews</Label>
              <Input
                id="new-service-reviews"
                type="number"
                min="0"
                value={reviews}
                onChange={(e) => setReviews(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>
            Save Service
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Add Testimonial Dialog Component
function AddTestimonialDialog({ onAdd }: { onAdd: (testimonial: Testimonial) => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState("");

  const handleSave = () => {
    onAdd({
      id: Date.now(),
      name,
      title,
      content,
      rating,
      image,
    });
    setOpen(false);
    setName("");
    setTitle("");
    setContent("");
    setRating(5);
    setImage("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Testimonial</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Testimonial</DialogTitle>
          <DialogDescription>Add a new client testimonial to your website</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="new-testimonial-name">Client Name</Label>
            <Input id="new-testimonial-name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-testimonial-title">Title</Label>
            <Input id="new-testimonial-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-testimonial-content">Testimonial</Label>
            <Textarea
              id="new-testimonial-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-testimonial-rating">Rating</Label>
            <Select value={rating.toString()} onValueChange={(v) => setRating(parseInt(v))}>
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
          <Button type="button" onClick={handleSave}>
            Save Testimonial
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Add Why Choose Us Dialog Component
function AddWhyChooseUsDialog({ onAdd }: { onAdd: (item: WhyChooseUsItem) => void }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [iconName, setIconName] = useState("Users");

  const handleSave = () => {
    onAdd({
      id: title.toLowerCase().replace(/\s+/g, "-"),
      title,
      description,
      iconName,
    });
    setOpen(false);
    setTitle("");
    setDescription("");
    setIconName("Users");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Why Choose Us Item</DialogTitle>
          <DialogDescription>Add a new item to the Why Choose Us section</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="new-why-title">Title</Label>
            <Input id="new-why-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-why-desc">Description</Label>
            <Textarea
              id="new-why-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-why-icon">Icon</Label>
            <Select value={iconName} onValueChange={setIconName}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Users">Users</SelectItem>
                <SelectItem value="Leaf">Leaf</SelectItem>
                <SelectItem value="Clock">Clock</SelectItem>
                <SelectItem value="DollarSign">DollarSign</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>
            Save Item
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Add Staff Dialog Component
function AddStaffDialog({ onAdd }: { onAdd: (staff: Staff) => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = () => {
    onAdd({
      id: Date.now(),
      name,
      username,
      password,
      role,
      email,
    });
    setOpen(false);
    setName("");
    setUsername("");
    setPassword("");
    setRole("");
    setEmail("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Staff</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Staff Member</DialogTitle>
          <DialogDescription>Add a new staff member with login credentials</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="new-staff-name">Full Name</Label>
            <Input id="new-staff-name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-staff-username">Username</Label>
            <Input id="new-staff-username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-staff-password">Password</Label>
            <Input
              id="new-staff-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-staff-role">Role</Label>
            <Input id="new-staff-role" value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-staff-email">Email</Label>
            <Input
              id="new-staff-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>
            Save Staff
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Add Job Dialog Component
function AddJobDialog({ onAdd }: { onAdd: (job: JobOpportunity) => void }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Full-time");
  const [requirements, setRequirements] = useState("");

  const handleSave = () => {
    onAdd({
      id: Date.now(),
      title,
      description,
      location,
      type,
      requirements,
    });
    setOpen(false);
    setTitle("");
    setDescription("");
    setLocation("");
    setType("Full-time");
    setRequirements("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add New Job</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Job Opportunity</DialogTitle>
          <DialogDescription>Create a new job opening</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="new-job-title">Job Title</Label>
            <Input id="new-job-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-job-desc">Description</Label>
            <Textarea
              id="new-job-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-job-location">Location</Label>
            <Input id="new-job-location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-job-type">Job Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Casual">Casual</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-job-requirements">Requirements</Label>
            <Textarea
              id="new-job-requirements"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>
            Save Job
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
