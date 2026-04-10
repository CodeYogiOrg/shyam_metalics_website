import ProductTemplate from '../components/ProductTemplate'

export default function KitchenFoil() {
  return (
    <ProductTemplate 
      title="SEL TIGER FOIL"
      category="Aluminium"
      description="Premium kitchen foil for fresh and healthy food preservation. Part of our high-end domestic consumer range."
      specs={[
        { label: 'Micron', value: '11 - 18 µ' },
        { label: 'Length', value: '9m - 72m' },
        { label: 'Quality', value: 'Food Grade 8011' },
        { label: 'Texture', value: 'Single / Dual Side' },
      ]}
    />
  )
}
