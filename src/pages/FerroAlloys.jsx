import ProductTemplate from '../components/ProductTemplate'

export default function FerroAlloys() {
  return (
    <ProductTemplate 
      title="Ferro Alloys"
      category="Iron & Steel"
      description="One of the largest producers in India, supplying high-grade ferro-manganese and silico-manganese."
      specs={[
        { label: 'Capacity', value: '1.5 MTPA' },
        { label: 'Grades', value: '70% / 65% Mn' },
        { label: 'Application', value: 'Steel Making' },
        { label: 'Market Share', value: 'Top 5 India' },
      ]}
    />
  )
}
