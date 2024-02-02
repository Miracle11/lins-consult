import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin } from "../pages/admin/Admin";
import { AdminCourse } from "../pages/admin/AdminCourse";
import { NewCourse } from "../pages/admin/NewCourse";
import { Training } from "../pages/admin/Training";
import { NewTraining } from "../pages/admin/NewTraining";
import { IceBreaker } from "../pages/admin/IceBreaker";
import { NewIceBreaker } from "../pages/admin/NewIceBreaker";
import { Quiz } from "../pages/admin/Quiz";
import { NewQuiz } from "../pages/admin/NewQuiz";
import { NotFound } from "./NotFound";
import { Home } from "../pages/web/Home";
import { Program } from "../pages/web/Program";
import { About } from "../pages/web/About";
import { Contact } from "../pages/web/Contact";
import { CourseQuiz } from "../pages/course/CoursQuiz";
import { CourseIceBreaker } from "../pages/course/CourseIceBreaker";
import { CourseEvaluation } from "../pages/course/CourseEvaluation";
import { FacilitatorsRating } from "../pages/course/FacilitatorsRating";
import { Course } from "../pages/course/Course";

export const NavigationRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="program" element={<Program />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />

                <Route path="course" element={<Course />} />
                <Route path="course/quiz" element={<CourseQuiz />} />
                <Route path="course/icebreaker" element={<CourseIceBreaker />} />
                <Route path="course/facilitatorsratin" element={<FacilitatorsRating />} />
                <Route path="course/courseevaluation" element={<CourseEvaluation />} />

                <Route path="admin" element={<Admin />} />
                <Route path="admin/course" element={<AdminCourse />} />
                <Route path="admin/course/newcourse" element={<NewCourse />} />
                <Route path="admin/training" element={<Training />} />
                <Route path="admin/training/newtraining" element={<NewTraining />} />
                <Route path="admin/icebreaker" element={<IceBreaker />} />
                <Route path="admin/icebreaker/newicebreaker" element={<NewIceBreaker />} />
                <Route path="admin/quiz" element={<Quiz />} />
                <Route path="admin/quiz/newquiz" element={<NewQuiz />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
};