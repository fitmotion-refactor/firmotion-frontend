"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FitnessHeader } from "@/components/fitness-header"
import { MapPin, Clock, ShoppingCart } from "lucide-react"

interface Equipment {
  id: number
  title: string
  price: number
  condition: string
  category: string
  location: string
  postedTime: string
  image: string
  seller: string
  description: string
}

export default function EquipmentPage() {
  const router = useRouter()
  const [equipmentList] = useState<Equipment[]>([
    {
      id: 1,
      title: "덤벨 세트 (5kg-20kg)",
      price: 150000,
      condition: "상급",
      category: "웨이트",
      location: "강남구",
      postedTime: "2시간 전",
      image: "/dumbbell-set.png",
      seller: "김헬스",
      description: "거의 새것 같은 덤벨 세트입니다. 이사로 인해 판매합니다.",
    },
    {
      id: 2,
      title: "런닝머신 (접이식)",
      price: 300000,
      condition: "중급",
      category: "유산소",
      location: "서초구",
      postedTime: "1일 전",
      image: "/folding-treadmill.jpg",
      seller: "러닝맨",
      description: "집에서 사용하던 접이식 런닝머신입니다. 정상 작동합니다.",
    },
    {
      id: 3,
      title: "요가매트 + 블록 세트",
      price: 25000,
      condition: "상급",
      category: "요가/필라테스",
      location: "마포구",
      postedTime: "3일 전",
      image: "/yoga-mat-and-blocks.jpg",
      seller: "요가러버",
      description: "고급 요가매트와 블록 세트입니다. 깨끗하게 관리했습니다.",
    },
    {
      id: 4,
      title: "벤치프레스 + 바벨 세트",
      price: 450000,
      condition: "중급",
      category: "웨이트",
      location: "송파구",
      postedTime: "5일 전",
      image: "/bench-press-barbell-set.jpg",
      seller: "벤치킹",
      description: "홈짐용 벤치프레스와 바벨 세트입니다. 직거래 선호합니다.",
    },
    {
      id: 5,
      title: "스피닝 바이크",
      price: 280000,
      condition: "상급",
      category: "유산소",
      location: "용산구",
      postedTime: "1주일 전",
      image: "/exercise-equipment.jpg",
      seller: "스피닝킹",
      description: "실내 스피닝 바이크입니다. 거의 사용하지 않아 새것 같습니다.",
    },
    {
      id: 6,
      title: "케틀벨 세트 (8kg, 12kg, 16kg)",
      price: 120000,
      condition: "중급",
      category: "웨이트",
      location: "성동구",
      postedTime: "3일 전",
      image: "/exercise-equipment.jpg",
      seller: "케틀벨마스터",
      description: "다양한 무게의 케틀벨 세트입니다. 기능성 운동에 최적입니다.",
    },
  ])

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(loginStatus === "true")
  }, [])

  const handlePurchase = (equipment: Equipment) => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.")
      localStorage.setItem("redirectAfterLogin", "/equipment")
      router.push("/login")
      return
    }

    // 선택된 상품 정보를 localStorage에 저장하고 결제 페이지로 이동
    localStorage.setItem("selectedEquipment", JSON.stringify(equipment))
    router.push("/checkout")
  }

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">운동용품 마켓플레이스</h1>
          <p className="text-muted-foreground">안전한 결제 시스템으로 운동용품을 구매하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipmentList.map((equipment) => (
            <Card key={equipment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={equipment.image || "/placeholder.svg"}
                  alt={equipment.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg line-clamp-1">{equipment.title}</CardTitle>
                  <Badge variant="secondary">{equipment.condition}</Badge>
                </div>
                <div className="text-2xl font-bold text-primary">{equipment.price.toLocaleString()}원</div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {equipment.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {equipment.postedTime}
                  </div>
                  <Badge variant="outline">{equipment.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{equipment.description}</p>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="w-full space-y-2">
                  <div className="text-sm font-medium">판매자: {equipment.seller}</div>
                  <Button className="w-full flex items-center gap-2" onClick={() => handlePurchase(equipment)}>
                    <ShoppingCart className="h-4 w-4" />
                    구매하기
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
