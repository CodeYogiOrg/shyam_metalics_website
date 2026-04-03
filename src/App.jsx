import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Sustainability from './pages/Sustainability'
import Community from './pages/Community'
import Leadership from './pages/Leadership'
import Manufacturing from './pages/Manufacturing'
import News from './pages/News'
import IronAndSteel from './pages/IronAndSteel'
import Aluminium from './pages/Aluminium'
import StainlessSteel from './pages/StainlessSteel'
import Energy from './pages/Energy'
import SelTiger from './pages/SelTiger'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/community" element={<Community />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/news" element={<News />} />
        <Route path="/iron-and-steel" element={<IronAndSteel />} />
        <Route path="/aluminium" element={<Aluminium />} />
        <Route path="/stainless-steel" element={<StainlessSteel />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/seltiger" element={<SelTiger />} />
      </Routes>
    </Layout>
  )
}
