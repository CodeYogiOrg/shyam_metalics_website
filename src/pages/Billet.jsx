import ProductTemplate from '../components/ProductTemplate'
export default function Billet() {
  return <ProductTemplate title="Billet" category="Carbon Steel" description="Precision-cast carbon steel billets for rolling mills and downstream processors." specs={[{ label: 'Grade', value: 'IS 2831' }, { label: 'Size', value: '100mm – 200mm sq.' }, { label: 'Length', value: '3m – 12m' }, { label: 'Capacity', value: '3.5 MTPA' }]} />
}
