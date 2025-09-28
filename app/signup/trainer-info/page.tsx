"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FitnessHeader } from "@/components/fitness-header"
import { FitnessFooter } from "@/components/fitness-footer"
import { useState } from "react"
import { ArrowLeft, MapPin, Clock, DollarSign, Award } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TrainerInfoPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    specialties: [] as string[],
    experience: "",
    location: "",
    hourlyRate: "",
    bio: "",
    certifications: "",
  })

  const specialtyOptions = [
    "웨이트 트레이닝",
    "요가",
    "필라테스",
    "크로스핏",
    "복싱",
    "수영",
    "러닝",
    "스트레칭",
    "재활 운동",
    "다이어트",
    "근력 강화",
    "유연성 향상",
  ]

  const handleSpecialtyToggle = (specialty: string) => {
    setFormData((prev) => ({
      ...prev,
      specialties: prev.specialties.includes(specialty)
        ? prev.specialties.filter((s) => s !== specialty)
        : [...prev.specialties, specialty],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Trainer info:", formData)
    // Handle trainer registration completion
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <FitnessHeader />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              뒤로 가기
            </Link>
          </div>

          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">트레이너 추가 정보</CardTitle>
              <CardDescription>회원들에게 보여질 프로필 정보를 입력해주세요</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Specialties */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    전문 분야 (최대 3개 선택)
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {specialtyOptions.map((specialty) => (
                      <Button
                        key={specialty}
                        type="button"
                        variant={formData.specialties.includes(specialty) ? "default" : "outline"}
                        size="sm"
                        className="justify-start"
                        onClick={() => handleSpecialtyToggle(specialty)}
                        disabled={!formData.specialties.includes(specialty) && formData.specialties.length >= 3}
                      >
                        {specialty}
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">선택된 분야: {formData.specialties.length}/3</p>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <Label htmlFor="experience" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    경력
                  </Label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData({ ...formData, experience: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="경력을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1년 미만">1년 미만</SelectItem>
                      <SelectItem value="1-2년">1-2년</SelectItem>
                      <SelectItem value="3-5년">3-5년</SelectItem>
                      <SelectItem value="5-10년">5-10년</SelectItem>
                      <SelectItem value="10년 이상">10년 이상</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    활동 지역
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="예: 서울 강남구, 부산 해운대구"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>

                {/* Hourly Rate */}
                <div className="space-y-2">
                  <Label htmlFor="hourlyRate" className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    시간당 레슨 비용 (원)
                  </Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    placeholder="50000"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                    required
                    min="10000"
                    step="5000"
                  />
                  <p className="text-sm text-muted-foreground">권장 가격: 30,000원 - 100,000원</p>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">자기소개</Label>
                  <Textarea
                    id="bio"
                    placeholder="회원들에게 자신을 소개해주세요. 운동 철학, 지도 스타일 등을 포함해주세요."
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                    maxLength={500}
                  />
                  <p className="text-sm text-muted-foreground text-right">{formData.bio.length}/500</p>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <Label htmlFor="certifications">자격증 (선택사항)</Label>
                  <Textarea
                    id="certifications"
                    placeholder="보유하신 자격증이나 수료증을 입력해주세요. (예: 생활스포츠지도사, NSCA-CPT 등)"
                    value={formData.certifications}
                    onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-accent"
                  disabled={
                    formData.specialties.length === 0 ||
                    !formData.experience ||
                    !formData.location ||
                    !formData.hourlyRate
                  }
                >
                  트레이너 등록 완료
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <FitnessFooter />
    </div>
  )
}
