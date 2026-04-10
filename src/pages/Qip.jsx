import InvestorPortal from '../components/InvestorPortal'
export default function Qip() {
  return <InvestorPortal title="QIP" description="Qualified Institutional Placement documents, prospectus, and offering circulars." categories={[{ name: 'QIP Documents', links: [{ label: 'QIP Preliminary Placement Document' }, { label: 'QIP Floor Price Notice' }, { label: 'QIP Basis of Allotment' }, { label: 'QIP Post-Issue Report' }] }]} />
}
