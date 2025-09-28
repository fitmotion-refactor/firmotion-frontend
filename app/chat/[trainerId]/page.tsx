"use client"

import type React from "react"

import { FitnessHeader } from "@/components/fitness-header"
import { FitnessFooter } from "@/components/fitness-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Phone, Video, MoreVertical, Star } from "lucide-react"
import { useState } from "react"
import { useParams } from "next/navigation"

// Mock trainer data (same as trainers page)
const trainers = [
  {
    id: 1,
    name: "김민수",
    email: "minsu.kim@fitmotion.com",
    specialties: ["웨이트 트레이닝", "다이어트"],
    rating: 4.9,
    status: "온라인",
  },
  {
    id: 2,
    name: "박지영",
    email: "jiyoung.park@fitmotion.com",
    specialties: ["요가", "필라테스"],
    rating: 4.8,
    status: "온라인",
  },
  {
    id: 3,
    name: "이준호",
    email: "junho.lee@fitmotion.com",
    specialties: ["크로스핏", "기능성 운동"],
    rating: 4.9,
    status: "오프라인",
  },
]

// Mock chat messages
const initialMessages = [
  {
    id: 1,
    sender: "trainer",
    message: "안녕하세요! 운동 목표가 무엇인지 알려주시겠어요?",
    timestamp: "오후 2:30",
  },
  {
    id: 2,
    sender: "user",
    message: "안녕하세요! 다이어트와 근력 강화가 목표입니다.",
    timestamp: "오후 2:32",
  },
  {
    id: 3,
    sender: "trainer",
    message: "좋습니다! 현재 운동 경험은 어느 정도이신가요?",
    timestamp: "오후 2:33",
  },
]

export default function ChatPage() {
  const params = useParams()
  const trainerId = Number.parseInt(params.trainerId as string)
  const trainer = trainers.find((t) => t.id === trainerId) || trainers[0]

  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "user" as const,
        message: newMessage,
        timestamp: new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      }
      setMessages([...messages, message])
      setNewMessage("")

      // Simulate trainer response
      setTimeout(() => {
        const trainerResponse = {
          id: messages.length + 2,
          sender: "trainer" as const,
          message: "네, 알겠습니다! 맞춤형 운동 계획을 세워드릴게요.",
          timestamp: new Date().toLocaleTimeString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
        }
        setMessages((prev) => [...prev, trainerResponse])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Trainer Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-4">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                      {trainer.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{trainer.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{trainer.email}</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{trainer.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${trainer.status === "온라인" ? "bg-green-500" : "bg-gray-400"}`}
                    />
                    <span className="text-xs text-muted-foreground">{trainer.status}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">전문 분야</h4>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="text-lg">{trainer.name}님과의 채팅</CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg px-4 py-2 ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="메시지를 입력하세요..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <FitnessFooter />
    </div>
  )
}
