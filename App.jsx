import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const studentName = "Sakshi Patel";

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C++",
    "GitHub"
  ];

  return (
    <div className="container">
      <Header name={studentName} />
      <About />
      <Skills skills={skills} />
      <Footer name={studentName} />
    </div>
  );
}

export default App;