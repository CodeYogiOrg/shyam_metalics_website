import InvestorPortal from '../components/InvestorPortal'
export default function FinancialInformation() {
  return <InvestorPortal title="Financial Information" description="Quarterly and annual financial reports, balance sheets, profit & loss statements, and auditor reports." categories={[{ name: 'Annual Reports', links: [{ label: 'Annual Report FY 2023–24' }, { label: 'Annual Report FY 2022–23' }, { label: 'Annual Report FY 2021–22' }, { label: 'Annual Report FY 2020–21' }] }, { name: 'Quarterly Results', links: [{ label: 'Q3 FY 2023–24' }, { label: 'Q2 FY 2023–24' }, { label: 'Q1 FY 2023–24' }, { label: 'Q4 FY 2022–23' }] }]} />
}
