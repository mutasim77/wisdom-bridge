import type { Course } from "@/types";
import algebraThumbnail from "@/assets/courses/algebra.jpg";
import trigonometryThumbnail from "@/assets/courses/trigonometry.jpg";
import precalculusThumbnail from "@/assets/courses/precalculus.jpg";
import calculusThumbnail from "@/assets/courses/calculus.jpg";
import physicsThumbnail from "@/assets/courses/physics.jpg";
import generalChemistryThumbnail from "@/assets/courses/general-chemistry.jpg";
import organicChemistryThumbnail from "@/assets/courses/organic-chemistry.jpg";
import statisticsThumbnail from "@/assets/courses/statistics.jpg";

export const courses: Course[] = [
    {
        id: "algebra",
        title: "Algebra",
        description: "Learn the fundamentals of algebra, equations, and functions.",
        thumbnail: algebraThumbnail,
        subject: "Mathematics",
    },
    {
        id: "trigonometry",
        title: "Trigonometry",
        description: "Explore trigonometric functions, identities, and applications.",
        thumbnail: trigonometryThumbnail,
        subject: "Mathematics",
    },
    {
        id: "precalculus",
        title: "Precalculus",
        description: "Prepare for calculus with advanced algebra and trigonometry.",
        thumbnail: precalculusThumbnail,
        subject: "Mathematics",
    },
    {
        id: "calculus",
        title: "Calculus",
        description: "Master derivatives, integrals, and their applications.",
        thumbnail: calculusThumbnail,
        subject: "Mathematics",
    },
    {
        id: "physics",
        title: "Physics",
        description: "Learn mechanics, thermodynamics, and electromagnetism.",
        thumbnail: physicsThumbnail,
        subject: "Physics",
    },
    {
        id: "general-chemistry",
        title: "General Chemistry",
        description: "Explore the fundamental principles of chemistry.",
        thumbnail: generalChemistryThumbnail,
        subject: "Chemistry",
    },
    {
        id: "organic-chemistry",
        title: "Organic Chemistry",
        description: "Study carbon compounds and their reactions.",
        thumbnail: organicChemistryThumbnail,
        subject: "Chemistry",
    },
    {
        id: "statistics",
        title: "Statistics",
        description: "Learn data analysis, probability, and statistical inference.",
        thumbnail: statisticsThumbnail,
        subject: "Mathematics",
    },
]

