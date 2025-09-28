"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, ShoppingBag, Users, Clock, Shield, Star, Camera } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function DualPlatformSection() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(loginStatus === "true")
  }, [])

  const handleTrainerSearch = () => {
    if (!isLoggedIn) {
      router.push("/login")
    } else {
      router.push("/trainers")
    }
  }

  const handleMotionDetection = () => {
    window.open("https://jisuuuuu.github.io/mediapipe_js/", "_blank")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">세 가지 핵심 서비스</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            전문 트레이너와의 실시간 매칭부터 운동용품 거래, 그리고 AI 모션인식까지 모든 피트니스 니즈를 한 번에
            해결하세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Trainer Matching */}
          <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl">트레이너 매칭</CardTitle>
              </div>
              <CardDescription className="text-base">
                전문 트레이너와 실시간으로 소통하며 맞춤형 운동 계획을 세워보세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>1:1 맞춤 상담</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>실시간 채팅</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>검증된 전문가</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-primary" />
                  <span>평점 시스템</span>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg" onClick={handleTrainerSearch}>
                트레이너 찾기
              </Button>
            </CardContent>
          </Card>

          {/* Equipment Marketplace */}
          <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="text-xl">운동용품 거래</CardTitle>
              </div>
              <CardDescription className="text-base">
                새 제품부터 중고까지, 다양한 운동용품을 합리적인 가격에 거래하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-accent" />
                  <span>안전한 거래</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-accent" />
                  <span>품질 보증</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MessageCircle className="h-4 w-4 text-accent" />
                  <span>실시간 채팅</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-accent" />
                  <span>커뮤니티 리뷰</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                size="lg"
                onClick={() => router.push("/equipment")}
              >
                용품 둘러보기
              </Button>
            </CardContent>
          </Card>

          {/* Motion Detection */}
          <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Camera className="h-5 w-5 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl">모션인식</CardTitle>
              </div>
              <CardDescription className="text-base">
                AI 기반 모션인식으로 운동 자세를 실시간으로 분석하고 교정받으세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Camera className="h-4 w-4 text-secondary-foreground" />
                  <span>실시간 분석</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-secondary-foreground" />
                  <span>정확한 피드백</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-secondary-foreground" />
                  <span>AI 기반 교정</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-secondary-foreground" />
                  <span>개인 맞춤형</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-6 border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                size="lg"
                onClick={handleMotionDetection}
              >
                모션인식 시작
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
