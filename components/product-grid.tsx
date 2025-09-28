"use client"

import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    title: "빈티지 데님 재킷",
    price: "45,000원",
    originalPrice: "89,000원",
    size: "M",
    brand: "Levi's",
    condition: "매우 좋음",
    seller: "패션러버",
    rating: 4.8,
    image: "/vintage-denim-jacket.png",
    liked: false,
  },
  {
    id: 2,
    title: "캐시미어 니트 스웨터",
    price: "32,000원",
    originalPrice: "120,000원",
    size: "S",
    brand: "Uniqlo",
    condition: "좋음",
    seller: "미니멀리스트",
    rating: 4.9,
    image: "/cashmere-knit-sweater-beige.jpg",
    liked: true,
  },
  {
    id: 3,
    title: "레오파드 프린트 스커트",
    price: "28,000원",
    originalPrice: "65,000원",
    size: "M",
    brand: "Zara",
    condition: "매우 좋음",
    seller: "스타일리시",
    rating: 4.7,
    image: "/leopard-print-skirt-fashion.jpg",
    liked: false,
  },
  {
    id: 4,
    title: "클래식 트렌치 코트",
    price: "85,000원",
    originalPrice: "180,000원",
    size: "L",
    brand: "Burberry",
    condition: "좋음",
    seller: "클래식러버",
    rating: 5.0,
    image: "/classic-trench-coat-beige.jpg",
    liked: false,
  },
  {
    id: 5,
    title: "스니커즈 화이트",
    price: "55,000원",
    originalPrice: "95,000원",
    size: "250",
    brand: "Nike",
    condition: "매우 좋음",
    seller: "슈즈콜렉터",
    rating: 4.6,
    image: "/white-sneakers-nike-clean.jpg",
    liked: true,
  },
  {
    id: 6,
    title: "실크 블라우스",
    price: "38,000원",
    originalPrice: "78,000원",
    size: "S",
    brand: "COS",
    condition: "매우 좋음",
    seller: "오피스룩",
    rating: 4.8,
    image: "/silk-blouse-elegant-white.jpg",
    liked: false,
  },
]

export function ProductGrid() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">인기 아이템</h2>
            <p className="text-muted-foreground">지금 가장 많이 찾는 아이템들을 만나보세요</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              전체
            </Button>
            <Button variant="ghost" size="sm">
              여성
            </Button>
            <Button variant="ghost" size="sm">
              남성
            </Button>
            <Button variant="ghost" size="sm">
              아동
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-0 bg-card/50"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />

                  <Button
                    size="sm"
                    variant="ghost"
                    className={`absolute top-2 right-2 h-8 w-8 p-0 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background ${
                      product.liked ? "text-red-500" : "text-muted-foreground"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${product.liked ? "fill-current" : ""}`} />
                  </Button>

                  <Badge className="absolute bottom-2 left-2 bg-background/90 text-foreground">
                    {product.condition}
                  </Badge>
                </div>

                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>{product.brand}</span>
                    <span>•</span>
                    <span>사이즈 {product.size}</span>
                  </div>

                  <h3 className="font-medium text-sm line-clamp-2 leading-tight">{product.title}</h3>

                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{product.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{product.seller}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            더 많은 아이템 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
