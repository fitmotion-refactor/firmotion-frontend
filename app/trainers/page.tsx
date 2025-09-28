"use client"

import { FitnessHeader } from "@/components/fitness-header"
import { FitnessFooter } from "@/components/fitness-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Clock, MapPin, Award } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const trainers = [
  {
    id: 1,
    name: "김민수",
    email: "minsu.kim@fitmotion.com",
    specialties: ["웨이트 트레이닝", "다이어트", "근력 강화"],
    experience: "5-10년",
    location: "서울 강남구",
    price: "50,000",
    bio: "10년간의 경험을 바탕으로 개인별 맞춤 운동 프로그램을 제공합니다. 건강한 다이어트와 근력 향상에 특화되어 있으며, 초보자부터 고급자까지 모든 레벨의 회원을 지도합니다.",
    certifications: "생활스포츠지도사 2급, NSCA-CPT, 스포츠영양사",
    image: "/professional-male-fitness-trainer.png",
  },
  {
    id: 2,
    name: "박지영",
    email: "jiyoung.park@fitmotion.com",
    specialties: ["요가", "필라테스", "스트레칭"],
    experience: "5-10년",
    location: "서울 서초구",
    price: "45,000",
    bio: "요가와 필라테스를 통해 몸과 마음의 균형을 찾아드립니다. 부상 예방과 재활에 중점을 두며, 개인의 체형과 상태에 맞는 맞춤형 수업을 진행합니다.",
    certifications: "요가지도자 자격증, 필라테스 지도자 자격증, 재활운동 전문가",
    image: "/professional-female-yoga-instructor.png",
  },
  {
    id: 3,
    name: "이준호",
    email: "junho.lee@fitmotion.com",
    specialties: ["크로스핏", "복싱", "유연성 향상"],
    experience: "3-5년",
    location: "서울 마포구",
    price: "55,000",
    bio: "고강도 운동을 통해 짧은 시간에 최대 효과를 얻을 수 있도록 도와드립니다. 크로스핏과 복싱을 결합한 독특한 운동법으로 재미있게 운동할 수 있습니다.",
    certifications: "크로스핏 레벨1 트레이너, 복싱 지도자 자격증",
    image: "/professional-male-fitness-trainer.png",
  },
  {
    id: 4,
    name: "최수연",
    email: "suyeon.choi@fitmotion.com",
    specialties: ["재활 운동", "스트레칭", "유연성 향상"],
    experience: "5-10년",
    location: "서울 송파구",
    price: "40,000",
    bio: "물리치료사 출신으로 부상 회복과 예방에 전문성을 가지고 있습니다. 안전하고 체계적인 운동을 통해 건강한 몸을 만들어 드립니다.",
    certifications: "물리치료사 면허, 재활운동 전문가, 스포츠마사지 자격증",
    image: "/professional-female-yoga-instructor.png",
  },
  {
    id: 5,
    name: "정태현",
    email: "taehyun.jung@fitmotion.com",
    specialties: ["웨이트 트레이닝", "근력 강화", "다이어트"],
    experience: "10년 이상",
    location: "서울 강서구",
    price: "60,000",
    bio: "보디빌딩 대회 입상 경력을 바탕으로 체계적인 근력 운동을 지도합니다. 목표 달성을 위한 강한 의지와 전문적인 노하우를 제공합니다.",
    certifications: "생활스포츠지도사 1급, ACSM-CPT, 보디빌딩 심판 자격증",
    image: "/professional-male-fitness-trainer.png",
  },
  {
    id: 6,
    name: "한소희",
    email: "sohee.han@fitmotion.com",
    specialties: ["요가", "필라테스", "스트레칭"],
    experience: "3-5년",
    location: "서울 노원구",
    price: "35,000",
    bio: "젊은 에너지와 열정으로 즐겁고 활기찬 수업을 진행합니다. 댄스와 운동을 결합한 창의적인 프로그램으로 운동의 재미를 느끼실 수 있습니다.",
    certifications: "댄스스포츠 지도자, 에어로빅 지도자, 그룹피트니스 자격증",
    image: "/professional-female-yoga-instructor.png",
  },
]

export default function TrainersPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // In real app, this would come from auth context
  const router = useRouter()

  useEffect(() => {
    // Check login status from localStorage
    const loginStatus = localStorage.getItem("isLoggedIn")
    setIsLoggedIn(loginStatus === "true")
  }, [])

  const handleChatStart = (trainerId: number) => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.push("/login")
    } else {
      // Navigate to chat if logged in
      router.push(`/chat/${trainerId}`)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">전문 트레이너 찾기</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            검증된 전문 트레이너들과 실시간으로 소통하며 맞춤형 운동 계획을 세워보세요
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">{trainer.name.charAt(0)}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">{trainer.name}</CardTitle>
                    <CardDescription className="text-sm">{trainer.email}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Specialties */}
                <div>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>경력 {trainer.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{trainer.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span className="line-clamp-1">{trainer.certifications}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-primary">
                    {Number(trainer.price).toLocaleString()}원/회
                  </span>
                </div>

                {/* Action Button */}
                <Button className="w-full" size="sm" onClick={() => handleChatStart(trainer.id)}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  채팅 시작하기
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <FitnessFooter />
    </div>
  )
}
