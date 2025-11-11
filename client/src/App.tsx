import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import InventorySolutions from "@/pages/InventorySolutions";
import ManpowerSolutions from "@/pages/ManpowerSolutions";
import FranchiseDistribution from "@/pages/FranchiseDistribution";
import About from "@/pages/About";
import Industries from "@/pages/Industries";
import ContactPage from "@/pages/ContactPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/inventory-solutions" component={InventorySolutions} />
      <Route path="/services/manpower-solutions" component={ManpowerSolutions} />
      <Route path="/services/franchise-distribution" component={FranchiseDistribution} />
      <Route path="/industries" component={Industries} />
      <Route path="/contact" component={ContactPage} />
      {/* Fallback to 404 */}
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
