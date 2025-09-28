"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ShoppingBag, Camera } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function FitnessHero() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(loginStatus === "true")
  }, [])

  const handleTrainerSearch = () => {
    if (!isLoggedIn) {
      localStorage.setItem("redirectAfterLogin", "/trainers")
      router.push("/login")
    } else {
      router.push("/trainers")
    }
  }

  const handleEquipmentBrowse = () => {
    router.push("/equipment")
  }

  const handleMotionDetection = () => {
    window.open("https://jisuuuuu.github.io/mediapipe_js/", "_blank")
  }

  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
            운동의 모든 것을
            <br />
            <span className="text-accent">한 곳에서</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">
            전문 트레이너와 실시간으로 소통하고, 운동용품을 구매하며, 건강한 라이프스타일을 함께 만들어가세요.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" onClick={handleTrainerSearch}>
              <MessageCircle className="mr-2 h-5 w-5" />
              트레이너 찾기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              onClick={handleEquipmentBrowse}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              용품 둘러보기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              onClick={handleMotionDetection}
            >
              <Camera className="mr-2 h-5 w-5" />
              모션인식
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">1,200+</div>
              <div className="text-sm text-primary-foreground/70">전문 트레이너</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">15,000+</div>
              <div className="text-sm text-primary-foreground/70">활성 사용자</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">8,500+</div>
              <div className="text-sm text-primary-foreground/70">운동용품 거래</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground">98%</div>
              <div className="text-sm text-primary-foreground/70">만족도</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
    </section>
  )
}
