import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-primary/5">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              지속 가능한 패션의 시작
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              옷장을 정리할
              <br />
              <span className="text-primary">준비가 되셨나요?</span>
            </h1>

            <p className="text-lg text-muted-foreground text-pretty max-w-md">
              더 이상 입지 않는 옷들을 새로운 주인에게 전해주고, 특별한 아이템들을 발견해보세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8">
                지금 시작하기
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 bg-transparent">
                작동 방식 알아보기
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20">
              <img src="/stylish-woman-in-sustainable-fashion-outfit.jpg" alt="지속 가능한 패션" className="w-full h-full object-cover" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">♻️</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">친환경 패션</p>
                  <p className="text-xs text-muted-foreground">지구를 생각하는 선택</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
