import ProductTemplate from '../components/ProductTemplate'

export default function BareAluminium() {
  return (
    <ProductTemplate 
      title="Bare Aluminium Foil"
      category="Aluminium"
      description="Versatile plain aluminium foils for flexible packaging and pharmaceutical industries."
      specs={[
        { label: 'Micron Range', value: '6 - 200 µ' },
        { label: 'Surface', value: 'Bright / Matt' },
        { label: 'Alloy', value: '1235 / 8011' },
        { label: 'Tensile', value: '60 - 110 MPa' },
      ]}
    />
  )
}
