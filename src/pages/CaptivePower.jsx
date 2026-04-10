import ProductTemplate from '../components/ProductTemplate'

export default function CaptivePower() {
  return (
    <ProductTemplate 
      title="Captive Power"
      category="Energy"
      description="In-house thermal and waste-heat recovery power plants for industrial independence."
      specs={[
        { label: 'Installed', value: '600+ MW' },
        { label: 'Plant Type', value: 'Thermal / WHR' },
        { label: 'Uptime', value: '99.8%' },
        { label: 'Technology', value: 'CFBC' },
      ]}
    />
  )
}
