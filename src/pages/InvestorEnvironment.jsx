import InvestorPortal from '../components/InvestorPortal'
export default function InvestorEnvironment() {
  return <InvestorPortal title="Environment" description="Investor-facing environmental disclosures, sustainability ratings, and green initiative reports." categories={[{ name: 'Disclosures', links: [{ label: 'Business Responsibility Report FY24' }, { label: 'BRSR FY23' }, { label: 'Carbon Footprint Disclosure' }] }, { name: 'Green Initiatives', links: [{ label: 'Renewable Energy Targets' }, { label: 'Water Management Report' }] }]} />
}
