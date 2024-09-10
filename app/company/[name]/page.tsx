import { CompanyPage } from "@/components/company-page"

export default function CompanyPageRoute({ params }: { params: { name: string } }) {
  return <CompanyPage companyName={params.name} />
}