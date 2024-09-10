import { ViewReferralRequest } from "@/components/view-referral-request"

export default function ReferralRequestPage({ params }: { params: { id: string } }) {
  return <ViewReferralRequest requestId={params.id} />
}