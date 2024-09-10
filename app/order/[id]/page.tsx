import { ViewOrder } from "@/components/view-order"

export default function OrderPage({ params }: { params: { id: string } }) {
  return <ViewOrder orderId={params.id} />
}