import ProductTemplate from '../components/ProductTemplate'

export default function CarbonSteel() {
  return (
    <ProductTemplate 
      title="Carbon Steel"
      category="Iron & Steel"
      description="High-performance carbon steel for structural, industrial, and construction applications."
      specs={[
        { label: 'Grade', value: 'AISI 1018-1045' },
        { label: 'Hardness', value: '120-220 HB' },
        { label: 'Yield Strength', value: '350+ MPa' },
        { label: 'Elongation', value: '15-25%' },
      ]}
    />
  )
}
