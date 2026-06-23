import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServiceDetail from "@/pages/service-detail";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import BlogsPage from "@/pages/blogs";
import CareersPage from "@/pages/careers";
import ContactPage from "@/pages/contact";
import StaffPortal from "@/pages/staff-portal";
import Admin from "@/pages/admin";
import FloatingContact from "@/components/FloatingContact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/staff-portal" component={StaffPortal} />
      <Route path="/admin" component={Admin} />
      <Route path="/domestic-cleaning-perth" component={() => <ServiceDetail id="domestic" />} />
      <Route path="/commercial-cleaning-perth" component={() => <ServiceDetail id="commercial" />} />
      <Route path="/deep-cleaning-perth" component={() => <ServiceDetail id="deep-cleaning" />} />
      <Route path="/pool-cleaning-perth" component={() => <ServiceDetail id="pool" />} />
      <Route path="/household-assistance-perth" component={() => <ServiceDetail id="household-tasks" />} />
      <Route path="/companionship-perth" component={() => <ServiceDetail id="companionship" />} />
      <Route path="/community-access-perth" component={() => <ServiceDetail id="community-outings" />} />
      <Route path="/elderly-care-perth" component={() => <ServiceDetail id="elderly-care" />} />
      <Route path="/healthcare-support-perth" component={() => <ServiceDetail id="healthcare-support" />} />
      <Route path="/rehabilitation-support-perth" component={() => <ServiceDetail id="rehabilitation-care" />} />
      <Route path="/service/:id">{({ id }) => <ServiceDetail id={id} />}</Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <FloatingContact />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
