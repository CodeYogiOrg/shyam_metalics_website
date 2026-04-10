import ProductTemplate from '../components/ProductTemplate'
export default function TmtBar() {
  return <ProductTemplate title="TMT Bar" category="Carbon Steel" description="Thermo-mechanically treated bars for seismic-resistant RCC construction." specs={[{ label: 'Grade', value: 'Fe-415 / Fe-500 / Fe-600' }, { label: 'Diameter', value: '8mm – 40mm' }, { label: 'Elongation', value: '14.5%+' }, { label: 'Certifications', value: 'ISI / BIS' }]} />
}
