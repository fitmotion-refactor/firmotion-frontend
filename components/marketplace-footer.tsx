import { Heart } from "lucide-react"

export function MarketplaceFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Vinted 소개</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  언론
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  지속가능성
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  도움말 센터
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  판매 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  구매 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">법적 고지</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
                  쿠키 정책
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  분쟁해결
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">소셜 미디어</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">V</span>
            </div>
            <span className="font-bold text-primary">Vinted</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            지속 가능한 패션으로 만드는 더 나은 세상
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </p>

          <p className="text-sm text-muted-foreground">© 2025 Vinted. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
