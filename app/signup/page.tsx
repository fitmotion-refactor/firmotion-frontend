"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FitnessHeader } from "@/components/fitness-header"
import { FitnessFooter } from "@/components/fitness-footer"
import { useState } from "react"
import { Eye, EyeOff, User, Dumbbell } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("user")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userType === "trainer") {
      // Redirect to trainer additional info page
      router.push("/signup/trainer-info")
    } else {
      // Handle regular user signup
      console.log("User signup data:", { ...formData, userType })
      router.push("/login")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">fitmotion 가입하기</CardTitle>
              <CardDescription>트레이너와 만나고 운동용품을 거래해보세요</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password">비밀번호</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="8자 이상 입력해주세요"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      minLength={8}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>

                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label>가입 유형을 선택해주세요</Label>
                  <RadioGroup value={userType} onValueChange={setUserType}>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="user" id="user" />
                      <Label htmlFor="user" className="flex items-center gap-2 cursor-pointer flex-1">
                        <User className="h-4 w-4" />
                        <div>
                          <div className="font-medium">일반 사용자</div>
                          <div className="text-sm text-muted-foreground">트레이너를 찾고 운동용품을 거래합니다</div>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="trainer" id="trainer" />
                      <Label htmlFor="trainer" className="flex items-center gap-2 cursor-pointer flex-1">
                        <Dumbbell className="h-4 w-4" />
                        <div>
                          <div className="font-medium">트레이너</div>
                          <div className="text-sm text-muted-foreground">회원들에게 운동 지도를 제공합니다</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent">
                  회원가입
                </Button>
              </form>

              {/* Login Link */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">이미 계정이 있으신가요? </span>
                <Link href="/login" className="text-primary hover:underline font-medium">
                  로그인
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <FitnessFooter />
    </div>
  )
}
