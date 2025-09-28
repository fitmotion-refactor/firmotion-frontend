import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "여성 의류",
    count: "12,450개",
    image: "/women-fashion-clothes-collection.jpg",
    color: "from-pink-100 to-rose-100",
  },
  {
    name: "남성 의류",
    count: "8,230개",
    image: "/men-fashion-clothes-collection.jpg",
    color: "from-blue-100 to-indigo-100",
  },
  {
    name: "아동 의류",
    count: "5,670개",
    image: "/kids-children-clothes-collection.jpg",
    color: "from-yellow-100 to-orange-100",
  },
  {
    name: "신발",
    count: "4,890개",
    image: "/shoes-sneakers-collection-display.jpg",
    color: "from-green-100 to-emerald-100",
  },
  {
    name: "가방",
    count: "3,210개",
    image: "/bags-handbags-collection-display.jpg",
    color: "from-purple-100 to-violet-100",
  },
  {
    name: "액세서리",
    count: "6,540개",
    image: "/fashion-accessories-jewelry-collection.jpg",
    color: "from-teal-100 to-cyan-100",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">카테고리별 쇼핑</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            원하는 카테고리에서 완벽한 아이템을 찾아보세요. 매일 새로운 상품들이 업데이트됩니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="ghost"
              className="h-auto p-0 flex-col bg-card hover:bg-card/80 border rounded-xl overflow-hidden group"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.count}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
