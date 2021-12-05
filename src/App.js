import "./App.css";
import { Route } from "react-router-dom";

import MainPaige from "./components/Contents/MainPage/MainPaige";
import Header from "./components/Header/Header";
import GraduateWork from "./components/Contents/GraduateWork/GraduateWork";
import CourseWork from "./components/Contents/CourseWork/CourseWork";
import Report from "./components/Contents/Report/Report";
import OnlineTest from "./components/Contents/OnlineTest/OnlineTest";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Route path="/" component={Header} exact />
      <Route path="/graduate" component={Header} exact />
      <Route path="/graduate" component={Footer} exact />
      <Route path="/course" component={Header} exact />
      <Route path="/report" component={Header} exact />
      <Route path="/test" component={Header} exact />
      <Route path="/" component={MainPaige} exact />
      <Route path="/graduate" component={GraduateWork} exact />
      <Route path="/course" component={CourseWork} exact />
      <Route path="/report" component={Report} exact />
      <Route path="/test" component={OnlineTest} exact />
    </>
  );
}

export default App;
