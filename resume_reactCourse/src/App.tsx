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
import Projects from "./components/Projects";
function App() {
  console.log("ฅ^•ﻌ•^ฅ hi there!");

  return (
    <AppWrapper>
      <Header>
        <Navigation></Navigation>
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
            <Skills></Skills>
            <Projects></Projects>
          </InfoContainer>
        </MainContainer>
      </main>
    </AppWrapper>
  );
}

export default App;
