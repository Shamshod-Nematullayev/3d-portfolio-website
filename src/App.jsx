import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import { ThemeProvider, styled } from 'styled-components'
import { darkTheme } from './utils/Themes'

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  height: 90vh;
`

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Navbar />
      <Body>
      <Hero />
      </Body>
     </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
