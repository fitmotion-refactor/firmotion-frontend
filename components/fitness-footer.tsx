import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Youtube, Facebook } from "lucide-react"

export function FitnessFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl">FitConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              트레이너 매칭과 운동용품 거래를 통해 건강한 라이프스타일을 만들어가는 플랫폼
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">서비스</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  트레이너 찾기
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  운동용품 거래
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  실시간 채팅
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  커뮤니티
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">고객지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  고객센터
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">뉴스레터</h3>
            <p className="text-sm text-muted-foreground">최신 피트니스 정보와 특별 혜택을 받아보세요</p>
            <div className="flex gap-2">
              <Input placeholder="이메일 주소" className="flex-1" />
              <Button size="sm">구독</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 FitConnect. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              이용약관
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              쿠키 정책
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
