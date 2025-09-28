"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"

const equipment = [
  {
    id: 1,
    title: "프리미엄 덤벨 세트",
    price: "150,000원",
    originalPrice: "200,000원",
    condition: "거의 새것",
    location: "강남구",
    seller: "운동매니아",
    image: "/premium-dumbbell-set.jpg",
    likes: 24,
    isLiked: false,
  },
  {
    id: 2,
    title: "런닝머신 (가정용)",
    price: "800,000원",
    originalPrice: "1,200,000원",
    condition: "좋음",
    location: "서초구",
    seller: "헬스킹",
    image: "/home-treadmill.jpg",
    likes: 18,
    isLiked: true,
  },
  {
    id: 3,
    title: "요가매트 + 블록 세트",
    price: "35,000원",
    originalPrice: "50,000원",
    condition: "새것",
    location: "마포구",
    seller: "요가러버",
    image: "/yoga-mat-and-blocks.jpg",
    likes: 12,
    isLiked: false,
  },
  {
    id: 4,
    title: "파워랙 (홈짐용)",
    price: "450,000원",
    originalPrice: "600,000원",
    condition: "좋음",
    location: "송파구",
    seller: "홈트레이너",
    image: "/home-gym-power-rack.jpg",
    likes: 31,
    isLiked: false,
  },
]

export function EquipmentShowcase() {
  const router = useRouter()

  const handleViewAllEquipment = () => {
    router.push("/equipment")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">인기 운동용품</h2>
          <p className="text-lg text-muted-foreground">합리적인 가격으로 품질 좋은 운동용품을 만나보세요</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-white"
                >
                  <Heart className={`h-4 w-4 ${item.isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </Button>
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">{item.condition}</Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  {item.location} • {item.seller}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    {item.likes}
                  </div>
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    문의하기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={handleViewAllEquipment}>
            모든 용품 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
