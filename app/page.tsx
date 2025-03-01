import { DailyMissionCard } from "@/components/prismui/expandable-card"
import { Gem, Coins, Swords } from "lucide-react"

export default function ExpandableCardBasic() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-background">
      <DailyMissionCard
        title="Dragon Slayer Challenge"
        progress={60}
        expiresIn="12h 30m"
        rewards={[
          { name: "Gems", amount: 250, icon: <Gem className="h-3 w-3 text-indigo-500" /> },
          { name: "Coins", amount: 1500, icon: <Coins className="h-3 w-3 text-amber-500" /> },
          { name: "XP Boost", amount: 1, icon: <Swords className="h-3 w-3 text-red-500" /> },
        ]}
        missions={[
          { title: "Defeat 5 Fire Dragons", completed: true, xp: 150 },
          { title: "Collect Dragon Scales", completed: true, xp: 100 },
          { title: "Craft Dragon Armor", completed: false, xp: 200 },
          { title: "Defeat Dragon Lord", completed: false, xp: 300 },
        ]}
        totalXp={750}
        difficulty="medium"
      />
    </div>
  )
}

