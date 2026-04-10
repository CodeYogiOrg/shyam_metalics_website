import ProductTemplate from '../components/ProductTemplate'
export default function WireRods() {
  return <ProductTemplate title="Wire Rods" category="Carbon Steel" description="High-quality carbon steel wire rods for downstream wire drawing and fastener manufacturing." specs={[{ label: 'Grade', value: 'SAE 1006 – 1080' }, { label: 'Diameter', value: '5.5mm – 16mm' }, { label: 'Coil Weight', value: '1.5 – 2.5 MT' }, { label: 'Surface', value: 'Descaled / As-rolled' }]} />
}
