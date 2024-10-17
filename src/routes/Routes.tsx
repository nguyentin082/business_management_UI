import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Overview from '../pages/Overview';
import Employees from '../pages/Employees';
import Students from '../pages/Students';
import Courses from '../pages/Courses';
import Services from '../pages/Services';
import Finance from '../pages/Finance';
import JobDescription from '../pages/JobDescription';
import Absences from '../pages/Absences';
import Contracts from '../pages/Contracts';
import Policies from '../pages/Policies';

function AppRoutes() {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/overview" replace={true} />}
                />
                <Route path="/overview" element={<Overview />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/job-description" element={<JobDescription />} />
                <Route path="/students" element={<Students />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/services" element={<Services />} />
                <Route path="/absence" element={<Absences />} />
                <Route path="/contracts" element={<Contracts />} />
                <Route path="/policies" element={<Policies />} />

                <Route
                    path="*"
                    element={<Navigate to="/overview" replace={true} />}
                />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
