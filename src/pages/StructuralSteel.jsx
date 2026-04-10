import ProductTemplate from '../components/ProductTemplate'
export default function StructuralSteel() {
  return <ProductTemplate title="Structural Steel" category="Carbon Steel" description="Wide range of angles, channels, beams, and joists for industrial and civil structures." specs={[{ label: 'Grades', value: 'IS 2062 E250-E450' }, { label: 'Profiles', value: 'Angles / Channels / Beams' }, { label: 'Yield Strength', value: '250–450 MPa' }, { label: 'Capacity', value: '1.5 MTPA' }]} />
}
