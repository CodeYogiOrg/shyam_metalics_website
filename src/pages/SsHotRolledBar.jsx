import ProductTemplate from '../components/ProductTemplate'
export default function SsHotRolledBar() {
  return <ProductTemplate title="SS Hot Rolled Bar" category="Stainless Steel" description="Hot rolled stainless steel bars for machining, forging, and precision engineering." specs={[{ label: 'Grade', value: '304 / 316 / 410' }, { label: 'Diameter', value: '12mm – 250mm' }, { label: 'Tolerance', value: 'H11 / H12' }, { label: 'Surface', value: 'Black / Peeled' }]} />
}
