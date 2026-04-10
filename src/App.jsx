import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CareerAtShyam from './pages/CareerAtShyam'
import LifeAtShyam from './pages/LifeAtShyam'
import ESG from './pages/ESG'
import CSR from './pages/CSR'
import Blogs from './pages/Blogs'
import Leadership from './pages/Leadership'
import Manufacturing from './pages/Manufacturing'
import NewsAndEvents from './pages/NewsAndEvents'
import IronAndSteel from './pages/IronAndSteel'
import Aluminium from './pages/Aluminium'
import StainlessSteel from './pages/StainlessSteel'
import Energy from './pages/Energy'
import SelTiger from './pages/SelTiger'
import EnvironmentCompliance from './pages/EnvironmentCompliance'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'
import CompanyLocation from './pages/CompanyLocation'
import AboutOverview from './pages/AboutOverview'
import Accreditations from './pages/Accreditations'
import CarbonSteel from './pages/CarbonSteel'
import FerroAlloys from './pages/FerroAlloys'
import FlatProducts from './pages/FlatProducts'
import KitchenFoil from './pages/KitchenFoil'
import BatteryFoil from './pages/BatteryFoil'
import BareAluminium from './pages/BareAluminium'
import FinStock from './pages/FinStock'
import RenewablePower from './pages/RenewablePower'
import CaptivePower from './pages/CaptivePower'
import RailwayWagons from './pages/RailwayWagons'
import News from './pages/News'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<CareerAtShyam />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sustainability" element={<ESG />} />
        <Route path="/community" element={<CSR />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/news" element={<NewsAndEvents />} />
        <Route path="/iron-and-steel" element={<IronAndSteel />} />
        <Route path="/aluminium" element={<Aluminium />} />
        <Route path="/stainless-steel" element={<StainlessSteel />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/seltiger" element={<SelTiger />} />
        <Route path="/environment-compliance" element={<EnvironmentCompliance />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/company-location" element={<CompanyLocation />} />
        <Route path="/career-at-shyam" element={<CareerAtShyam />} />
        <Route path="/life-at-shyam" element={<LifeAtShyam />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-overview" element={<AboutOverview />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="/news" element={<News />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/carbon-steel" element={<CarbonSteel />} />
        <Route path="/ferro-alloys" element={<FerroAlloys />} />
        <Route path="/flat-products" element={<FlatProducts />} />
        <Route path="/kitchen-foil" element={<KitchenFoil />} />
        <Route path="/battery-foil" element={<BatteryFoil />} />
        <Route path="/bare-aluminium" element={<BareAluminium />} />
        <Route path="/fin-stock" element={<FinStock />} />
        <Route path="/renewable-power" element={<RenewablePower />} />
        <Route path="/captive-power" element={<CaptivePower />} />
        <Route path="/railway-wagons" element={<RailwayWagons />} />
      </Routes>
    </Layout>
  )
}
