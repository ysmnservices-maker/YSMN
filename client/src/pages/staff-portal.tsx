import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ysmnLogo from "@assets/4927272A-D193-435F-A5B0-4F2E306C9D55 (1)_1756472323570.png";

export default function StaffPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {!isLoggedIn ? (
            <div className="flex items-center justify-center min-h-[70vh]">
              <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img src={ysmnLogo} alt="YSMN Logo" className="w-16 h-16" />
                  </div>
                  <CardTitle className="text-2xl">Staff Portal</CardTitle>
                  <CardDescription>Sign in to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button 
                      className="w-full gradient-accent" 
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Sign In
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center space-y-4 pt-8">
                <h1 className="text-4xl font-bold text-foreground">Welcome to Staff Portal</h1>
                <p className="text-muted-foreground text-lg">Manage your schedule, view payslips, and more</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>My Schedule</CardTitle>
                    <CardDescription>View your upcoming shifts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">View Schedule</Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>Payslips</CardTitle>
                    <CardDescription>Access your payment history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">View Payslips</Button>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Edit Profile</Button>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                  Sign Out
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
