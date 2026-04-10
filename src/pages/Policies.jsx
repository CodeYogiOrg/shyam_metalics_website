import InvestorPortal from '../components/InvestorPortal'
export default function Policies() {
  return <InvestorPortal title="Corporate Policies" description="Governance, compliance, and ethical conduct policies adopted by the Board of Directors." categories={[{ name: 'Core Policies', links: [{ label: 'Code of Conduct' }, { label: 'Whistle Blower Policy' }, { label: 'Anti-Bribery & Corruption Policy' }, { label: 'Related Party Transaction Policy' }] }, { name: 'HR & ESG Policies', links: [{ label: 'Nomination & Remuneration Policy' }, { label: 'CSR Policy' }, { label: 'Risk Management Policy' }] }]} />
}
