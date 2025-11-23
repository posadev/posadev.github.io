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
import SpeakerInfo from "@/components/SpeakerInfo.tsx";
import {AppProvider, useAppContext} from "@/context/AppContext.tsx";
import TicketsPage from "@/pages/TicketsPage.tsx";
import CodeOfConductSpeakers from "@/pages/CodeOfConductSpeakers.tsx";
import Agenda from "@/pages/Agenda.tsx";
import MediaKit from "@/pages/MediaKit.tsx";
import SessionPage from "@/pages/SessionPage.tsx";
import {AppStatus} from "@/types/types.ts";
import Loading from "@/pages/Loading.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";

const queryClient = new QueryClient();

const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <AppProvider>
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
                <Route path="/codigo-de-conducta-speakers" element={<CodeOfConductSpeakers />}/>
                <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                <Route path="/speaker/:speakerId" element={<SpeakerInfo/>}/>
                  <Route path="/boletos" element={<TicketsPage />} />
                  <Route path="/agenda" element={<Agenda/>} />
                <Route path="/boletos" element={<TicketsPage />} />
                <Route path="/media-kit" element={<MediaKit />} />
                  <Route path="session/:sessionId" element={<SessionPage />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
        </AppProvider>
      </QueryClientProvider>
  )
};

export default App;
