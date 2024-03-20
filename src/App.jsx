import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, TodoList, WorkTimer, Profile } from "./pages";

// Main component representing the entire application
const App = () => {
  return (
    <main>
      {/* Router component to handle navigation */}
      <Router>
        <Navbar />
        {/* Routes component to define different pages and their corresponding components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/work-timer" element={<WorkTimer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
