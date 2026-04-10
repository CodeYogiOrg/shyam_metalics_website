import ProductTemplate from '../components/ProductTemplate'
export default function SsRebar() {
  return <ProductTemplate title="SS Rebar" category="Stainless Steel" description="Stainless steel rebars for marine, coastal, and high-corrosion infrastructure projects." specs={[{ label: 'Grade', value: 'SS 316L / 2205' }, { label: 'Diameter', value: '10mm – 32mm' }, { label: 'Standard', value: 'ASTM A955' }, { label: 'Corrosion', value: '100yr+ life' }]} />
}
