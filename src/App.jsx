import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Navbar />
      Hello App.js
     </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
