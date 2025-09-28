import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, MapPin } from "lucide-react"

const trainers = [
  {
    id: 1,
    name: "김민수",
    specialty: "웨이트 트레이닝",
    rating: 4.9,
    reviews: 127,
    location: "강남구",
    price: "50,000원/회",
    image: "/professional-male-fitness-trainer.png",
    badges: ["NSCA 인증", "5년 경력"],
  },
  {
    id: 2,
    name: "박지영",
    specialty: "요가 & 필라테스",
    rating: 4.8,
    reviews: 89,
    location: "서초구",
    price: "40,000원/회",
    image: "/professional-female-yoga-instructor.png",
    badges: ["RYT 200", "3년 경력"],
  },
  {
    id: 3,
    name: "이준호",
    specialty: "크로스핏",
    rating: 4.9,
    reviews: 156,
    location: "마포구",
    price: "60,000원/회",
    image: "/professional-crossfit-trainer.jpg",
    badges: ["CF-L2", "7년 경력"],
  },
  {
    id: 4,
    name: "최수진",
    specialty: "다이어트 코칭",
    rating: 4.7,
    reviews: 203,
    location: "송파구",
    price: "45,000원/회",
    image: "/professional-female-fitness-coach.png",
    badges: ["영양사", "4년 경력"],
  },
]

export function FeaturedTrainers() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">인기 트레이너</h2>
          <p className="text-lg text-muted-foreground">검증된 전문 트레이너들과 함께 목표를 달성하세요</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={trainer.image || "/placeholder.svg"}
                    alt={trainer.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{trainer.name}</h3>
                  <p className="text-sm text-muted-foreground">{trainer.specialty}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{trainer.rating}</span>
                    <span className="text-sm text-muted-foreground">({trainer.reviews})</span>
                  </div>

                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {trainer.location}
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {trainer.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-primary">{trainer.price}</p>
                  </div>

                  <Button className="w-full" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    상담하기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            모든 트레이너 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
