import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Home, TodoList, Timer, Profile } from "./pages";

/**
 * The App component, which renders the main content of the application.
 *
 * @returns {ReactElement} - The JSX representation of the App component.
 */
const App = () => {
  // A state variable to track whether the sidebar is currently open or not.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // A function to toggle the state of the sidebar (i.e. open or closed).
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <main>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Routes component to define different pages and their corresponding components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
