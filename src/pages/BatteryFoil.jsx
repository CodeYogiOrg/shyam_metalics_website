import ProductTemplate from '../components/ProductTemplate'

export default function BatteryFoil() {
  return (
    <ProductTemplate 
      title="Battery Foil"
      category="Aluminium"
      description="Advanced current collector foils for lithium-ion battery anodes and cathodes."
      specs={[
        { label: 'Thickness', value: '10 - 25 µ' },
        { label: 'Purity', value: '99.5% - 99.9%' },
        { label: 'Surface', value: 'Cleaned / Coated' },
        { label: 'Conductivity', value: 'High Electrical' },
      ]}
    />
  )
}
