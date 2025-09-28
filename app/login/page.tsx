"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FitnessHeader } from "@/components/fitness-header"
import { FitnessFooter } from "@/components/fitness-footer"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mock login logic - in real app, this would be an API call
    console.log("Login data:", formData)

    // Mock user data - in real app, this would come from API response
    const mockUsers = [
      { email: "trainer@test.com", password: "123456", userType: "trainer" },
      { email: "user@test.com", password: "123456", userType: "user" },
    ]

    const user = mockUsers.find((u) => u.email === formData.email && u.password === formData.password)

    if (user) {
      // Store user info in localStorage (in real app, use proper auth state management)
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("isLoggedIn", "true")

      const redirectUrl = localStorage.getItem("redirectAfterLogin")
      if (redirectUrl) {
        localStorage.removeItem("redirectAfterLogin")
        router.push(redirectUrl)
      } else {
        // Default redirect based on user type
        if (user.userType === "trainer") {
          router.push("/trainer-dashboard")
        } else {
          router.push("/")
        }
      }
    } else {
      alert("이메일 또는 비밀번호가 올바르지 않습니다.")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">fitmotion 로그인</CardTitle>
              <CardDescription>계정에 로그인하여 트레이너와 만나고 운동용품을 거래해보세요</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="비밀번호를 입력해주세요"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
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

                {/* Forgot Password Link */}
                <div className="text-right">
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    비밀번호를 잊으셨나요?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-accent">
                  로그인
                </Button>
              </form>

              <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
                <p className="font-medium mb-1">데모 계정:</p>
                <p>트레이너: trainer@test.com / 123456</p>
                <p>일반회원: user@test.com / 123456</p>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">또는</span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-2">
                <Button variant="outline" className="w-full bg-transparent">
                  Google로 로그인
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  카카오로 로그인
                </Button>
              </div>

              {/* Signup Link */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">아직 계정이 없으신가요? </span>
                <Link href="/signup" className="text-primary hover:underline font-medium">
                  회원가입
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
