"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FitnessHeader } from "@/components/fitness-header"
import { CheckCircle, Package, Home, Calendar } from "lucide-react"

interface Equipment {
  id: number
  title: string
  price: number
  condition: string
  category: string
  location: string
  image: string
  seller: string
  description: string
}

export default function PaymentSuccessPage() {
  const router = useRouter()
  const [equipment, setEquipment] = useState<Equipment | null>(null)
  const [orderNumber] = useState(() => `ORD${Date.now().toString().slice(-8)}`)

  useEffect(() => {
    const purchasedEquipment = localStorage.getItem("purchasedEquipment")
    if (purchasedEquipment) {
      setEquipment(JSON.parse(purchasedEquipment))
      // 결제 완료 후 구매 정보 삭제
      localStorage.removeItem("purchasedEquipment")
    } else {
      // 직접 접근한 경우 메인 페이지로 리다이렉트
      router.push("/")
    }
  }, [router])

  const handleGoHome = () => {
    router.push("/")
  }

  if (!equipment) {
    return <div>로딩 중...</div>
  }

  const deliveryFee = 3000
  const totalPrice = equipment.price + deliveryFee
  const expectedDelivery = new Date()
  expectedDelivery.setDate(expectedDelivery.getDate() + 3)

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          {/* 성공 메시지 */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">결제가 완료되었습니다!</h1>
            <p className="text-muted-foreground">주문 확인 메일을 발송했습니다. 빠른 시일 내에 배송해드리겠습니다.</p>
          </div>

          {/* 주문 정보 */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                주문 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">주문번호</span>
                <span className="font-mono font-semibold">{orderNumber}</span>
              </div>

              <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                <img
                  src={equipment.image || "/placeholder.svg"}
                  alt={equipment.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-2">{equipment.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary">{equipment.condition}</Badge>
                    <Badge variant="outline">{equipment.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">판매자: {equipment.seller}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{equipment.price.toLocaleString()}원</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t">
                <div className="flex justify-between text-sm">
                  <span>상품 금액</span>
                  <span>{equipment.price.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>배송비</span>
                  <span>{deliveryFee.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>총 결제 금액</span>
                  <span className="text-primary">{totalPrice.toLocaleString()}원</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 배송 정보 */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                배송 안내
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-semibold">예상 배송일</p>
                  <p className="text-sm text-muted-foreground">
                    {expectedDelivery.toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      weekday: "short",
                    })}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">배송 상황은 마이페이지에서 확인하실 수 있습니다.</p>
            </CardContent>
          </Card>

          {/* 홈으로 가기 버튼 */}
          <Button className="w-full" size="lg" onClick={handleGoHome}>
            <Home className="h-4 w-4 mr-2" />
            메인 페이지로 이동
          </Button>
        </div>
      </div>
    </div>
  )
}
