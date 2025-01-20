import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import { ThemeProvider, styled } from 'styled-components'
import { darkTheme } from './utils/Themes'

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  min-height: 100vh;
  padding: 0 100px;
  @media (max-width: 960px){
    padding: 0 10px;
  };
  overflow: hidden;
`

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Body>
      <Navbar />
      <Hero />
      </Body>
     </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
