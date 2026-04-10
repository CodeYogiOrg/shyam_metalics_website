import InvestorPortal from '../components/InvestorPortal'
export default function StockExchangeCompliances() {
  return <InvestorPortal title="Stock Exchange Compliances" description="BSE and NSE compliance filings under SEBI LODR and other applicable regulations." categories={[{ name: 'BSE Filings', links: [{ label: 'Shareholding Pattern Q3 FY24' }, { label: 'Shareholding Pattern Q2 FY24' }, { label: 'Reconciliation of Share Capital Audit Q3' }] }, { name: 'NSE Filings', links: [{ label: 'Corporate Governance Report Q3' }, { label: 'Compliance Certificate – Listing' }, { label: 'Statement of Investor Complaints' }] }]} />
}
