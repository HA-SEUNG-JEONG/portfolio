import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    // About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Works,
    // StarsCanvas,
    Etc,
    ProjectDetail
} from "./components";

function App() {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                                    <Navbar />
                                    <Hero />
                                </div>
                                {/* <About /> */}
                                <Experience />
                                <Tech />
                                <Works />
                                <Etc />
                                <div className="relative z-0">
                                    <Contact />
                                    {/* <StarsCanvas /> */}
                                </div>
                            </>
                        }
                    />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
