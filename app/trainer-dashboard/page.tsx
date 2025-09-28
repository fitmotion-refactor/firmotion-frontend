"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FitnessHeader } from "@/components/fitness-header"
import { FitnessFooter } from "@/components/fitness-footer"
import { MessageCircle, User, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function TrainerDashboard() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      userName: "김민수",
      userEmail: "minsu@email.com",
      requestType: "개인 트레이닝",
      message: "헬스장에서 근력 운동을 배우고 싶습니다. 초보자인데 기초부터 차근차근 배우고 싶어요.",
      location: "강남구",
      preferredTime: "평일 저녁",
      status: "pending",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      userName: "이지은",
      userEmail: "jieun@email.com",
      requestType: "요가",
      message: "요가 초보자입니다. 유연성을 기르고 스트레스 해소를 위해 요가를 배우고 싶습니다.",
      location: "서초구",
      preferredTime: "주말 오전",
      status: "pending",
      createdAt: "2024-01-14",
    },
    {
      id: 3,
      userName: "박준호",
      userEmail: "junho@email.com",
      requestType: "필라테스",
      message: "허리 통증 때문에 필라테스를 시작하려고 합니다. 재활 목적으로 운동하고 싶어요.",
      location: "송파구",
      preferredTime: "평일 오후",
      status: "accepted",
      createdAt: "2024-01-13",
    },
  ])

  const handleAcceptRequest = (requestId: number) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) => (request.id === requestId ? { ...request, status: "accepted" } : request)),
    )
  }

  const handleRejectRequest = (requestId: number) => {
    setRequests((prevRequests) => prevRequests.filter((request) => request.id !== requestId))
  }

  const pendingRequests = requests.filter((req) => req.status === "pending")
  const acceptedRequests = requests.filter((req) => req.status === "accepted")

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">트레이너 대시보드</h1>
          <p className="text-muted-foreground">회원들의 트레이닝 요청을 확인하고 관리하세요</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">새로운 요청</p>
                  <p className="text-2xl font-bold">{pendingRequests.length}</p>
                </div>
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">진행 중인 세션</p>
                  <p className="text-2xl font-bold">{acceptedRequests.length}</p>
                </div>
                <User className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Requests */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">새로운 요청</h2>
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <Card key={request.id} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{request.userName}</CardTitle>
                      <CardDescription>{request.userEmail}</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      대기중
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-muted-foreground mb-1">요청 내용</p>
                      <p className="text-sm">{request.message}</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Badge variant="secondary">{request.requestType}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {request.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {request.preferredTime}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-accent"
                        onClick={() => handleAcceptRequest(request.id)}
                      >
                        수락하기
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleRejectRequest(request.id)}>
                        거절하기
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accepted Requests */}
        <div>
          <h2 className="text-2xl font-bold mb-4">진행 중인 세션</h2>
          <div className="space-y-4">
            {acceptedRequests.map((request) => (
              <Card key={request.id} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{request.userName}</CardTitle>
                      <CardDescription>{request.userEmail}</CardDescription>
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200">수락됨</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Badge variant="secondary">{request.requestType}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {request.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {request.preferredTime}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Link href={`/chat/user-${request.id}`}>
                        <Button size="sm" className="bg-primary hover:bg-accent">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          채팅하기
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <FitnessFooter />
    </div>
  )
}
