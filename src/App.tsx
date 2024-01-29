import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import ScrollUp from './utils/ScrollUp'
import styled from "styled-components"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/TypeFamily'


const Container = styled.div`
`;

const SideMenu = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  gap:1%;
  margin-top:3%;
`;


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <Navbar />
      </section>
      <Container>
      <SideMenu>
        <div>
          <section>
            <MyAvatar />
          </section>
        </div>
        <div>
          <section id='about'>
            <About />
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='works'>
            <Works />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </div>
        </SideMenu>
      </Container>
    <ScrollUp />
    </ThemeProvider>
  );
}

export default App;
