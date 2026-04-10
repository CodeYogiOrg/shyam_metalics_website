import ProductTemplate from '../components/ProductTemplate'

export default function RenewablePower() {
  return (
    <ProductTemplate 
      title="Renewable Power"
      category="Energy"
      description="Sustainable energy solutions through solar, wind, and industrial heat recovery systems."
      specs={[
        { label: 'Installed', value: '450+ MW' },
        { label: 'Solar Farm', value: '100+ Acres' },
        { label: 'Offset', value: 'Zero Carbon' },
        { label: 'Efficiency', value: 'High recovery' },
      ]}
    />
  )
}
