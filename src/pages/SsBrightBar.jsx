import ProductTemplate from '../components/ProductTemplate'
export default function SsBrightBar() {
  return <ProductTemplate title="SS Bright Bar" category="Stainless Steel" description="Cold-finished stainless bright bars with tight tolerances for precision components." specs={[{ label: 'Grade', value: '303 / 304 / 316' }, { label: 'Diameter', value: '4mm – 100mm' }, { label: 'Tolerance', value: 'h8 / h9 / h10' }, { label: 'Finish', value: 'Ground / Polished' }]} />
}
