import ProductTemplate from '../components/ProductTemplate'

export default function FlatProducts() {
  return (
    <ProductTemplate 
      title="Flat Products"
      category="Iron & Steel"
      description="Modern hot-rolled and cold-rolled flat steel for consumer durables and automotive."
      specs={[
        { label: 'Thickness', value: '0.15 - 3.0 mm' },
        { label: 'Surface', value: 'Galvanised / Cold-Rolled' },
        { label: 'Width', value: '1250 mm Max' },
        { label: 'Standards', value: 'IS 503 / AISI' },
      ]}
    />
  )
}
