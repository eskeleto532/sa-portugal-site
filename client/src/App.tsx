import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import SouSexolico from "./pages/SouSexolico";
import DozePassos from "./pages/12Passos";
import ScrollToTop from "@/components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Resources = lazy(() => import("./pages/Resources"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const NotFound = lazy(() => import("@/pages/NotFound"));


function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/sou-sexolico" component={SouSexolico} />
      <Route path="/12-passos" component={DozePassos} />
      <Route path="/recursos" component={Resources} />
      <Route path="/faq" component={FAQ} />
      <Route path="/testemunhos" component={Testimonials} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Router />
            </Layout>
          </Suspense>
          <FloatingWhatsApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
