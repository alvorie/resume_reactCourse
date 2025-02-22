import { useState } from "react";
import Navigation from "./components/Navigation";
import AppWrapper from "./containers/AppWrapper";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import MainContainer from "./containers/MainContainer";
import Education from "./components/Education";
import InfoContainer from "./containers/InfoContainer";
import Work from "./components/Work";
import Skills from "./components/Skills";
import { Skill } from "./components/Skill";

function App() {
  const [count, setCount] = useState(0);

  const navElements = [
    "about",
    "education",
    "work experience",
    "skills",
    "projects"
  ];

  const skills: Skill[] = [
    {
      skillGroup: "frontend",
      skillName: "JavaScript"
    },
    {
      skillGroup: "frontend",
      skillName: "CSS"
    },
    {
      skillGroup: "frontend",
      skillName: "SASS"
    },
    {
      skillGroup: "frontend",
      skillName: "CSS Modules"
    },
    {
      skillGroup: "frontend",
      skillName: "HTML"
    },
    {
      skillGroup: "frontend",
      skillName: "TypeScript"
    },
    {
      skillGroup: "frontend",
      skillName: "React"
    },
    {
      skillGroup: "misc",
      skillName: "Figma"
    },
    {
      skillGroup: "misc",
      skillName: "English C1"
    },
  ]

  return (
    <AppWrapper>
      <Header>
        <Navigation navElements={navElements}></Navigation>
      </Header>
      <main>
        <MainContainer>
          <aside>
            <Profile></Profile>
          </aside>
          <InfoContainer>
          <About></About>
          <Education></Education>
          <Work></Work>
          <Skills skills={skills}></Skills>
          </InfoContainer>
        </MainContainer>
      </main>
    </AppWrapper>
  );
}

export default App;
