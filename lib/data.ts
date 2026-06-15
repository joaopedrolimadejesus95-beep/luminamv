import type { LucideIcon } from "lucide-react"
import {
  Flame,
  Trophy,
  Target,
  Sparkles,
  BookOpen,
  Compass,
  Shield,
  Crown,
  Star,
  Zap,
  Award,
  Medal,
  Gem,
  Brain,
  Sunrise,
  CalendarCheck,
} from "lucide-react"



export const user = {
  name: "João",
  title: "Explorador",
  level: 0,
  xp: 0,
  xpToNext: 100,
  totalXp: 0,
  streak: 0,
  completedMissions: 0,
  avatar: "/lumina-avatar.png",
}

export type JourneyStage = {
  name: string
  icon: LucideIcon
  minLevel: number
}

export const journeyStages: JourneyStage[] = [
  { name: "Iniciante", icon: Sunrise, minLevel: 1 },
  { name: "Aprendiz", icon: BookOpen, minLevel: 5 },
  { name: "Explorador", icon: Compass, minLevel: 10 },
  { name: "Guardião", icon: Shield, minLevel: 20 },
  { name: "Mestre", icon: Crown, minLevel: 35 },
  { name: "Lenda", icon: Star, minLevel: 50 },
]

export type Mission = {
  id: string
  title: string
  description: string
  xp: number
  done: boolean
  tag: "Estudo" | "Saúde" | "Foco" | "Pessoal"
}

export const missions: Mission[] = [
  {
    id: "m1",
    title: "Resolver 10 exercícios de Cálculo",
    description: "Lista de derivadas — capítulo 4",
    xp: 120,
    done: true,
    tag: "Estudo",
  },
  {
    id: "m2",
    title: "Sessão de foco de 50 minutos",
    description: "Técnica Pomodoro sem distrações",
    xp: 80,
    done: true,
    tag: "Foco",
  },
  {
    id: "m3",
    title: "Revisar anotações de Física",
    description: "Resumo da aula de hoje",
    xp: 90,
    done: false,
    tag: "Estudo",
  },
  {
    id: "m4",
    title: "Caminhada de 20 minutos",
    description: "Recarregar a mente",
    xp: 60,
    done: false,
    tag: "Saúde",
  },
  {
    id: "m5",
    title: "Ler 15 páginas do livro",
    description: "Leitura fora da grade curricular",
    xp: 70,
    done: false,
    tag: "Pessoal",
  },
]

export const boss = {
  name: "Passar em Cálculo",
  subtitle: "Boss do Semestre",
  maxHp: 100,
  hp: 60,
  icon: Brain,
}

export const auroraMessages = [
  "Boa noite, João. Cada pequena vitória de hoje constrói a sua lenda de amanhã.",
  "Você está a apenas duas missões de subir de nível. Vamos nessa?",
  "Foco não é sobre intensidade, é sobre constância. Sua sequência de 14 dias prova isso.",
]

export type Achievement = {
  id: string
  name: string
  description: string
  icon: LucideIcon
  unlocked: boolean
  rarity: "Comum" | "Raro" | "Épico" | "Lendário"
}

export const achievements: Achievement[] = [
  {
    id: "a1",
    name: "Primeira Chama",
    description: "Complete sua primeira missão",
    icon: Flame,
    unlocked: true,
    rarity: "Comum",
  },
  {
    id: "a2",
    name: "Maratona Mental",
    description: "Complete 100 missões",
    icon: Brain,
    unlocked: true,
    rarity: "Raro",
  },
  {
    id: "a3",
    name: "Inabalável",
    description: "Mantenha 14 dias de sequência",
    icon: Zap,
    unlocked: true,
    rarity: "Épico",
  },
  {
    id: "a4",
    name: "Caçador de Bosses",
    description: "Derrote seu primeiro grande objetivo",
    icon: Trophy,
    unlocked: true,
    rarity: "Épico",
  },
  {
    id: "a5",
    name: "Disciplina de Aço",
    description: "Mantenha 30 dias de sequência",
    icon: Shield,
    unlocked: false,
    rarity: "Lendário",
  },
  {
    id: "a6",
    name: "Madrugador",
    description: "Complete uma missão antes das 7h",
    icon: Sunrise,
    unlocked: true,
    rarity: "Comum",
  },
  {
    id: "a7",
    name: "Colecionador de XP",
    description: "Acumule 25.000 de XP total",
    icon: Gem,
    unlocked: false,
    rarity: "Lendário",
  },
  {
    id: "a8",
    name: "Foco Absoluto",
    description: "Complete 50 sessões de foco",
    icon: Target,
    unlocked: false,
    rarity: "Raro",
  },
]

export const rarityIcon: Record<Achievement["rarity"], LucideIcon> = {
  Comum: Medal,
  Raro: Award,
  Épico: Star,
  Lendário: Crown,
}

export const tagStyles: Record<Mission["tag"], string> = {
  Estudo: "bg-primary/15 text-primary border-primary/30",
  Saúde: "bg-accent/15 text-accent border-accent/30",
  Foco: "bg-secondary/15 text-secondary border-secondary/30",
  Pessoal: "bg-chart-4/15 text-chart-4 border-chart-4/30",
}

export { Sparkles, CalendarCheck }
