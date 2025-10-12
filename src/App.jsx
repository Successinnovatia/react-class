import { useState } from "react";
import Greeting from "./conditional-rendering/Greeting";
import UserStatus from "./conditional-rendering/UserStatus";
import Warning from "./conditional-rendering/Warning";
import Login from "./conditional-rendering/Login";
import NameList from "./lists-in-react/NameList";
import ProductList from "./lists-in-react/ProductList";
import FilteredLists from "./lists-in-react/FilteredLists";
import FindList from "./lists-in-react/FindList";
import NameForm from "./controlled-inputs/NameForm";
import Todo from "./todo-app/Todo";
import Counter from "./use-effect/Counter";
import PostList from "./use-effect/PostList";
import CountRef from "./use-ref/CountRef";
import ExpensiveCalculation from "./use-memo/ExpensiveCalculation";
import Note from "./note-app/Note";
import Header from "./use-context/Header";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./use-context/HomePage";
import Home from "./react-router/pages/Home";
import AboutUs from "./react-router/pages/AboutUs";
import ContactUs from "./react-router/pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./react-router/pages/Navbar";

//React Router
// Brouser Router -> wrap the app to enable routing
// Routes -> to define all the routes eg /home , /aboutus
// Route -> to define a single route
// Link -> to navigate between routes

function App() {
  const [count, setCount] = useState(0);

  // const [page, setPage] = useState("landing");

  // function Landing() {
  //   return (
  //     <div className="text-center space-x-4 my-4">
  //       <button
  //         className="bg-blue-500 text-white px-4 py-2 rounded"
  //         onClick={() => setPage("home")}
  //       >
  //         Home
  //       </button>
  //       <button
  //         className="bg-blue-500 text-white px-4 py-2 rounded"
  //         onClick={() => setPage("about")}
  //       >
  //         AboutUs
  //       </button>
  //       <button
  //         className="bg-blue-500 text-white px-4 py-2 rounded"
  //         onClick={() => setPage("contact")}
  //       >
  //         ContactUs
  //       </button>
  //     </div>
  //   );
  // }

  // if (page === "home") {
  //   return <Home />;
  // } else if (page === "about") {
  //   return <AboutUs />;
  // } else if (page === "contact") {
  //   return <ContactUs />;
  // } else if (page === "landing") {
  //   return <Landing />;
  // }

  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Router>
        {/* <HomePage/> */}
        {/* <Greeting/>
        <UserStatus/>
        <Warning/> */}
        {/* <Login/> */}
        {/* <NameList/> */}
        {/* <ProductList/> */}
        {/* <FilteredLists/> */}
        {/* <FindList/> */}
        {/* <NameForm/> */}
        {/* <Todo/> */}
        {/* <Counter/> */}
        {/* <PostList/> */}
        {/* <CountRef/> */}
        {/* <ExpensiveCalculation/> */}
        {/* <Note/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
