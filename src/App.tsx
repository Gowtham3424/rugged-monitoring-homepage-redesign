import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import HealthPlatform from './components/HealthPlatform/HealthPlatform'
import SignalJourney from './components/SignalJourney/SignalJourney'
import AssetDashboard from './components/AssetDashboard/AssetDashboard'
import AssetCards from './components/AssetCards/AssetCards'
import TechnologyPipeline from './components/TechnologyPipeline/TechnologyPipeline'
import MaintenanceJourney from './components/MaintenanceJourney/MaintenanceJourney'
import IndustrySelector from './components/IndustrySelector/IndustrySelector'
import CaseStudy from './components/CaseStudy/CaseStudy'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <HealthPlatform />
        <SignalJourney />
        <AssetDashboard />
        <AssetCards />
        <TechnologyPipeline />
        <MaintenanceJourney />
        <IndustrySelector />
        <CaseStudy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
