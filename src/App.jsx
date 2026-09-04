import Cursor   from './components/Cursor'
import Nav       from './components/Nav'
import Hero      from './components/Hero'
import Marquee   from './components/Marquee'
import About     from './components/About'
import Content   from './components/Content'
import Featured  from './components/Featured'
import Offer     from './components/Offer'
import Statement from './components/Statement'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Content />
        <Featured />
        <Offer />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
