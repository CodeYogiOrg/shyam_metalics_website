import ProductTemplate from '../components/ProductTemplate'

export default function RailwayWagons() {
  return (
    <ProductTemplate 
      title="Railway Wagons"
      category="Logistics & Others"
      description="Advanced wagon manufacturing for freight transportation and industrial logistics."
      specs={[
        { label: 'Type', value: 'BOXN-HL / BCACM' },
        { label: 'Capacity', value: '70+ Tonnes' },
        { label: 'Standards', value: 'RDSO Certified' },
        { label: 'Design', value: 'High Tensile Steel' },
      ]}
    />
  )
}
