import Home from "./Pages/Home"
import Blob from "./Components/Blob"
import AboutMe from "./Pages/AboutMe"
import DrawerAppBar from "./Components/Navbar"
import FullWidthTabs from "./Pages/Tabs"
import ContactForm from "./Pages/ContactForm"
import Skills from './Components/uiverse/Skills'

function App() {

  return (
      <>
      <DrawerAppBar/>
        <Blob/>
        <Home/>
        <Skills/>
        <AboutMe/>
        <FullWidthTabs/>
        <ContactForm/>
      
      </>
  )
}

export default App
