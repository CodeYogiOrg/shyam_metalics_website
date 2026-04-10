import ProductTemplate from '../components/ProductTemplate'
export default function SsWires() {
  return <ProductTemplate title="SS Wires" category="Stainless Steel" description="Stainless steel wires for springs, fasteners, rope, and industrial mesh applications." specs={[{ label: 'Grade', value: '304 / 316 / 430' }, { label: 'Diameter', value: '0.1mm – 12mm' }, { label: 'Tensile', value: '700 – 2100 MPa' }, { label: 'Finish', value: 'Bright / Matte / Coated' }]} />
}
