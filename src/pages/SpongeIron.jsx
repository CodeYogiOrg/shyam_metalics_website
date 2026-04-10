import ProductTemplate from '../components/ProductTemplate'
export default function SpongeIron() {
  return <ProductTemplate title="Sponge Iron" category="Carbon Steel" description="Direct Reduced Iron (DRI) with high metalisation for electric arc furnaces and induction furnaces." specs={[{ label: 'Metallisation', value: '90%+' }, { label: 'Fe (Total)', value: '92%+' }, { label: 'Carbon', value: '0.1 - 0.4%' }, { label: 'Capacity', value: '2.0 MTPA' }]} />
}
