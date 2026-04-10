import ProductTemplate from '../components/ProductTemplate'
export default function PigIron() {
  return <ProductTemplate title="Pig Iron" category="Carbon Steel" description="High-quality pig iron produced in our blast furnaces for foundries and steel plants." specs={[{ label: 'Total Fe', value: '95%+' }, { label: 'Carbon', value: '3.5 - 4.5%' }, { label: 'Silicon', value: '0.5 - 2.5%' }, { label: 'Capacity', value: '0.8 MTPA' }]} />
}
