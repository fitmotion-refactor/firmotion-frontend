"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, ShoppingBag, Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function FitnessHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-xl">fitmotion</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              트레이너 매칭
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              운동용품 거래
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 max-w-sm">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="트레이너나 운동용품 검색..." className="pl-10" />
            </div>
          </div>

          <Button variant="outline" size="sm" asChild>
            <Link href="/login">로그인</Link>
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-accent" asChild>
            <Link href="/signup">회원가입</Link>
          </Button>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <nav className="flex flex-col gap-2">
            <Button variant="ghost" className="justify-start">
              <MessageCircle className="h-4 w-4 mr-2" />
              트레이너 매칭
            </Button>
            <Button variant="ghost" className="justify-start">
              <ShoppingBag className="h-4 w-4 mr-2" />
              운동용품 거래
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
