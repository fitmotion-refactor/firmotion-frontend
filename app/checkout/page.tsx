"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { FitnessHeader } from "@/components/fitness-header"
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react"

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

export default function CheckoutPage() {
  const router = useRouter()
  const [equipment, setEquipment] = useState<Equipment | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    detailAddress: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  })

  useEffect(() => {
    const selectedEquipment = localStorage.getItem("selectedEquipment")
    if (selectedEquipment) {
      setEquipment(JSON.parse(selectedEquipment))
    } else {
      router.push("/equipment")
    }
  }, [router])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handlePayment = async () => {
    if (!equipment) return

    // 필수 필드 검증
    const requiredFields = ["name", "phone", "address", "cardNumber", "expiryDate", "cvv", "cardHolder"]
    const emptyFields = requiredFields.filter((field) => !formData[field])

    if (emptyFields.length > 0) {
      alert("모든 필수 정보를 입력해주세요.")
      return
    }

    setIsProcessing(true)

    // 결제 처리 시뮬레이션
    setTimeout(() => {
      setIsProcessing(false)
      localStorage.setItem("purchasedEquipment", JSON.stringify(equipment))
      localStorage.removeItem("selectedEquipment")
      router.push("/checkout/success")
    }, 2000)
  }

  if (!equipment) {
    return <div>로딩 중...</div>
  }

  const deliveryFee = 3000
  const totalPrice = equipment.price + deliveryFee

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <div className="container py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            뒤로가기
          </Button>
          <h1 className="text-3xl font-bold">결제하기</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 주문 정보 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  배송 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">받는 분 이름 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">주소 *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="서울시 강남구 테헤란로 123"
                  />
                </div>
                <div>
                  <Label htmlFor="detailAddress">상세주소</Label>
                  <Input
                    id="detailAddress"
                    value={formData.detailAddress}
                    onChange={(e) => handleInputChange("detailAddress", e.target.value)}
                    placeholder="101동 1001호"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  결제 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cardHolder">카드 소유자명 *</Label>
                  <Input
                    id="cardHolder"
                    value={formData.cardHolder}
                    onChange={(e) => handleInputChange("cardHolder", e.target.value)}
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">카드번호 *</Label>
                  <Input
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    placeholder="1234-5678-9012-3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">유효기간 *</Label>
                    <Input
                      id="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input
                      id="cvv"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 주문 요약 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>주문 상품</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <img
                    src={equipment.image || "/placeholder.svg"}
                    alt={equipment.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-2">{equipment.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{equipment.condition}</Badge>
                      <Badge variant="outline">{equipment.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">판매자: {equipment.seller}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>결제 금액</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>상품 금액</span>
                  <span>{equipment.price.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between">
                  <span>배송비</span>
                  <span>{deliveryFee.toLocaleString()}원</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>총 결제 금액</span>
                  <span className="text-primary">{totalPrice.toLocaleString()}원</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Shield className="h-4 w-4" />
                  <span>안전한 결제 시스템으로 보호됩니다</span>
                </div>
                <Button className="w-full" size="lg" onClick={handlePayment} disabled={isProcessing}>
                  {isProcessing ? "결제 처리 중..." : `${totalPrice.toLocaleString()}원 결제하기`}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
