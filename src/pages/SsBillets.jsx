import ProductTemplate from '../components/ProductTemplate'
export default function SsBillets() {
  return <ProductTemplate title="Stainless Steel Billets" category="Stainless Steel" description="Premium stainless steel billets for forging, rolling, and extrusion applications." specs={[{ label: 'Grade', value: '200 / 300 / 400 Series' }, { label: 'Size', value: '100mm – 180mm sq.' }, { label: 'Length', value: '3m – 6m' }, { label: 'Ni Content', value: '8 – 10.5%' }]} />
}
