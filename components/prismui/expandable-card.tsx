"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Trophy, Sword, Shield, Zap, Gift, Gem, Target, Circle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

interface Reward {
  name: string
  amount: number
  icon: React.ReactNode
}

interface Mission {
  title: string
  completed: boolean
  xp: number
}

interface DailyMissionCardProps {
  title: string
  progress: number
  expiresIn: string
  rewards: Reward[]
  missions: Mission[]
  totalXp: number
  difficulty: "easy" | "medium" | "hard"
}

export function DailyMissionCard({
  title,
  progress,
  expiresIn,
  rewards,
  missions,
  totalXp,
  difficulty,
}: DailyMissionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const completedMissions = missions.filter((mission) => mission.completed).length
  const totalMissions = missions.length

  const difficultyIcon = {
    easy: <Shield className="h-4 w-4 text-green-500" />,
    medium: <Sword className="h-4 w-4 text-blue-500" />,
    hard: <Zap className="h-4 w-4 text-purple-500" />,
  }

  return (
    <Card
      className={`w-full max-w-md cursor-pointer transition-all duration-500 ease-in-out bg-card hover:shadow-md`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          </div>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-500 ease-in-out ${isExpanded ? "rotate-180" : "rotate-0"}`}
            aria-hidden="true"
          />
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2.5 bg-background/50" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                {completedMissions}/{totalMissions} Completed
              </span>
            </div>
            <Badge variant="outline" className="text-xs bg-background/50">
              Expires in {expiresIn}
            </Badge>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <Separator className="my-2" />

            <div className="space-y-3">
              <h3 className="text-sm font-medium flex items-center gap-1.5">
                <Sword className="h-4 w-4 text-primary" />
                Daily Missions
              </h3>
              <ul className="space-y-3">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-center justify-between text-sm bg-background/30 p-2 rounded-md">
                    <div className="flex items-center">
                      {mission.completed ? (
                        <div className="mr-2 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <Trophy className="h-3 w-3 text-primary" />
                        </div>
                      ) : (
                        <div className="mr-2 h-5 w-5 rounded-full border-2 border-muted flex items-center justify-center">
                          <Circle className="h-3 w-3 text-muted-foreground" />
                        </div>
                      )}
                      <span className={mission.completed ? "text-muted-foreground" : ""}>{mission.title}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {mission.xp} XP
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-3" />

            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-1.5">
                <Gift className="h-4 w-4 text-primary" />
                Rewards
              </h3>
              <div className="flex gap-2 flex-wrap">
                {rewards.map((reward, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1 py-1.5 bg-background/50">
                    {reward.icon}
                    <span>
                      {reward.amount} {reward.name}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex w-full justify-between text-sm">
          <div className="flex items-center gap-1">
            {difficultyIcon[difficulty]}
            <span className="capitalize">{difficulty}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gem className="h-4 w-4 text-indigo-500" />
            <span>{totalXp} XP</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

