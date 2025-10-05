import { lazy } from "react";

// Lazy-load all pages
export const HomePage = lazy(() => import("./HomePage"));
export const CoursesPage = lazy(() => import("./CoursesPage"));
export const SingleCoursePage = lazy(() => import("./SingleCoursePage"));
export const ChapterPage = lazy(() => import("./ChapterPage"));
export const ProfilePage = lazy(() => import("./ProfilePage"));
export const AboutPage = lazy(() => import("./AboutPage"));
