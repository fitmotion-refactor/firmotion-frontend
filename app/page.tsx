import { FitnessHeader } from "@/components/fitness-header"
import { FitnessHero } from "@/components/fitness-hero"
import { DualPlatformSection } from "@/components/dual-platform-section"
import { FitnessFooter } from "@/components/fitness-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <FitnessHeader />
      <main>
        <FitnessHero />
        <DualPlatformSection />
      </main>
      <FitnessFooter />
    </div>
  )
}
