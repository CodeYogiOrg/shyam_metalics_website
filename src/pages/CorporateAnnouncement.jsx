import InvestorPortal from '../components/InvestorPortal'
export default function CorporateAnnouncement() {
  return <InvestorPortal title="Corporate Announcements" description="Board meeting notices, outcome disclosures, changes in directors, and regulatory announcements." categories={[{ name: 'Board Meetings', links: [{ label: 'Board Meeting – Q3 FY24 Outcome' }, { label: 'Board Meeting – Q2 FY24 Outcome' }, { label: 'Board Meeting – Q1 FY24 Outcome' }] }, { name: 'Other Announcements', links: [{ label: 'Intimation of Record Date' }, { label: 'Change in Director / KMP' }, { label: 'Change in Registered Office' }] }]} />
}
