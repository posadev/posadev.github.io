import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CodeOfConduct from "@/pages/CodeOfConduct.tsx";
import NotFound from "@/pages/NotFound.tsx";
import Index from "@/pages/Index.tsx";
import Header from "@/components/Header.tsx";
import React from "react";
import PrivacyPolicy from "@/pages/PrivacyPolicy.tsx";
import Footer from "@/components/Footer.tsx";

const queryClient = new QueryClient();

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Header />
            <main className="flex flex-col flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/code-of-conduct" element={<CodeOfConduct />}/>
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
  )
};

export default App;
