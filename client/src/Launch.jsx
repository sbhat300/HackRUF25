import { About } from './components/launchPage.jsx/About'
import { Features } from './components/launchPage.jsx/Features'
import { Footer } from './components/launchPage.jsx/Footer'
import { Header } from './components/launchPage.jsx/Header'
import { Hero } from './components/launchPage.jsx/Hero'
import { HowItWorks } from './components/launchPage.jsx/HowItWorks'
import './index.css'


function Launch() {
  return (
    <>
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
        <Header />
        <main>
            <Hero />
            <Features />
            <About />
            <HowItWorks />
        </main>
        <Footer />
        </div>
    </>
  )
}

export default Launch
