"use client"

import { Search, Heart, ShoppingBag, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function MarketplaceHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl text-primary">Vinted</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm">
              여성
            </Button>
            <Button variant="ghost" size="sm">
              남성
            </Button>
            <Button variant="ghost" size="sm">
              아동
            </Button>
            <Button variant="ghost" size="sm">
              홈
            </Button>
            <Button variant="ghost" size="sm">
              엔터테인먼트
            </Button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="아이템 검색하기" className="pl-10 bg-muted/50 border-0 focus-visible:ring-1" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Heart className="h-4 w-4 mr-2" />
            찜목록
          </Button>

          <Button variant="ghost" size="sm" className="relative">
            <ShoppingBag className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>

          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>

          <Button className="hidden md:flex">판매하기</Button>
        </div>
      </div>
    </header>
  )
}
