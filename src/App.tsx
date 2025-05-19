import { BrowserRouter as Router, Routes, Route } from "react-router"
import { HomePage, CoursesPage, SingleCoursePage, ChapterPage, ProfilePage, AboutPage } from "./pages"
import { Cloud, Leaf, Bird } from "lucide-react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#a7d1c5] to-[#8ab7ab] relative overflow-hidden">
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-64 bg-[url('/clouds-bg.svg')] bg-repeat-x opacity-30 animate-float-slow"></div>
          <Cloud className="absolute top-24 left-[10%] text-white opacity-70 w-24 h-24 animate-float-slow" />
          <Cloud className="absolute top-40 right-[15%] text-white opacity-60 w-16 h-16 animate-float-medium" />
          <Cloud className="absolute top-60 left-[30%] text-white opacity-50 w-20 h-20 animate-float-medium" />
          <Leaf className="absolute top-[30%] left-[5%] text-[#5e8c61] w-12 h-12 rotate-45 animate-sway-slow" />
          <Leaf className="absolute top-[40%] right-[8%] text-[#5e8c61] w-10 h-10 -rotate-12 animate-sway-medium" />
          <Leaf className="absolute bottom-[20%] left-[20%] text-[#5e8c61] w-8 h-8 rotate-30 animate-sway-slow" />
          <Bird className="absolute top-[15%] right-[25%] text-[#4a7dbd] w-10 h-10 animate-float-fast" />
          <Bird className="absolute bottom-[30%] left-[40%] text-[#4a7dbd] w-8 h-8 animate-float-medium" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#8ab7ab] to-transparent"></div>
        </div>

        <Navbar />

        <div className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<SingleCoursePage />} />
            <Route path="/courses/:courseId/chapters/:chapterId" element={<ChapterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}