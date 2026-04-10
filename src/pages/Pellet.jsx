import ProductTemplate from '../components/ProductTemplate'

export default function Pellet() {
  return (
    <ProductTemplate 
      title="Pellet"
      category="Iron & Steel"
      description="High-grade iron ore pellets for blast furnaces and DRI plants."
      specs={[
        { label: 'Fe Content', value: '45% - 65%' },
        { label: 'Hardness', value: '250 kg/p' },
        { label: 'Size', value: '6 - 16 mm' },
        { label: 'Porosity', value: '18% - 22%' },
      ]}
    />
  )
}
