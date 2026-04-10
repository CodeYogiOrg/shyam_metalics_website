import ProductTemplate from '../components/ProductTemplate'

export default function FinStock() {
  return (
    <ProductTemplate 
      title="Fin Stock"
      category="Aluminium"
      description="Heat exchanger fins for automotive and HVAC (Heating, Ventilation, and Air Conditioning) systems."
      specs={[
        { label: 'Alloy', value: '3003 / 7072' },
        { label: 'Thickness', value: '0.05 - 0.20 mm' },
        { label: 'Surface', value: 'Hydrophilic / Epoxy' },
        { label: 'Formability', value: 'Excellent' },
      ]}
    />
  )
}
