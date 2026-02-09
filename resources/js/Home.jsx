import { createRoot } from "react-dom/client";
import Base from "./Components/Tailwind/Base";
import CreateReactScript from "./Utils/CreateReactScript";
import { CarritoProvider } from "./context/CarritoContext.jsx";

// Landing Components
import Hero from "./Components/Landing/Hero";
import ProgramInfo from "./Components/Landing/ProgramInfo";
import WhyStudyFashion from "./Components/Landing/WhyStudyFashion";
import WhatMakesUsUnique from "./Components/Landing/WhatMakesUsUnique";
import PrestigeConnections from "./Components/Landing/PrestigeConnections";
import VanguardTraining from "./Components/Landing/VanguardTraining";
import InfrastructureInnovation from "./Components/Landing/InfrastructureInnovation";
import Conventions from "./Components/Landing/Conventions";
import InternationalConventions from "./Components/Landing/InternationalConventions";
import FacultyLeaders from "./Components/Landing/FacultyLeaders";
import CurriculumSection from "./Components/Landing/CurriculumSection";
import CareerField from "./Components/Landing/CareerField";
import StrategicImpactUnits from "./Components/Landing/StrategicImpactUnits";
import AcademicContinuity from "./Components/Landing/AcademicContinuity";
import StudentWork from "./Components/Landing/StudentWork";
import FromClassToRunway from "./Components/Landing/FromClassToRunway";
import AboutUs from "./Components/Landing/AboutUs";
import WhyStudyWithUs from "./Components/Landing/WhyStudyWithUs";
import AcademicStructure from "./Components/Landing/AcademicStructure";
import VideoGallery from "./Components/Landing/VideoGallery";
import Testimonials from "./Components/Landing/Testimonials";
import FinalCTA from "./Components/Landing/FinalCTA";
import Footer from "./Components/Landing/Footer";
import FloatingWhatsApp from "./Components/Landing/FloatingWhatsApp";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Lead Form */}
            <Hero />

            {/* Program Information */}
            <ProgramInfo />

            {/* Why Study Fashion   <WhyStudyFashion />*/}

            {/* What Makes Us Unique - Horizontal Scroll      <WhatMakesUsUnique />*/}

            {/* Prestige Connections */}
            <PrestigeConnections />

            {/* Vanguard Training */}
            <VanguardTraining />

            {/* Infrastructure Innovation */}
            <InfrastructureInnovation />

            {/* Conventions Section */}
            <Conventions />

            {/* International Conventions      <InternationalConventions />*/}

            {/* Faculty Leaders       <FacultyLeaders /> */}

            {/* Curriculum Section */}
            <CurriculumSection />

            {/* Career Field */}
            <CareerField />

            {/* Strategic Impact Units        <StrategicImpactUnits />*/}

            {/* Academic Continuity <AcademicContinuity /> */}

            {/* Student Work Gallery */}
            <StudentWork />

            {/* From Class to Runway */}
            <FromClassToRunway />

            {/* About Us    <AboutUs />*/}

            {/* Why Study With Us   <WhyStudyWithUs />*/}

            {/* Academic Structure        <AcademicStructure />*/}

            {/* Video Gallery */}
            <VideoGallery />

            {/* Testimonials */}
            <Testimonials />

            {/* Final CTA */}
            <FinalCTA />

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp Button */}
            <FloatingWhatsApp />
        </div>
    );
};

CreateReactScript((el, properties) => {
    createRoot(el).render(
        <CarritoProvider>
            <Base {...properties}>
                <Home {...properties} />
            </Base>
        </CarritoProvider>,
    );
});
