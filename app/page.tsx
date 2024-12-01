import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-900 to-blue-900">
      <Card className="w-full max-w-4xl mx-auto bg-gray-800/90 border-0 text-white">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold text-center text-yellow-400">
            Magical Tools Collection 🧙‍♂️✨
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-lg mb-6">
            Welcome to our collection of magical tools! Explore the wizarding world with these enchanting applications.
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/crisis-monitor" className="block p-3 bg-purple-700/50 hover:bg-purple-600/50 rounded-lg transition-colors">
                Wizarding-world Crisis Monitor ⚡📻
              </Link>
            </li>
            <li>
              <span className="block p-3 bg-gray-700/50 rounded-lg text-gray-400 cursor-not-allowed">
                Magical Creature Compendium 🦄📚 (Coming Soon)
              </span>
            </li>
            <li>
              <span className="block p-3 bg-gray-700/50 rounded-lg text-gray-400 cursor-not-allowed">
                Potion Brewing Simulator 🧪🔮 (Coming Soon)
              </span>
            </li>
            <li>
              <span className="block p-3 bg-gray-700/50 rounded-lg text-gray-400 cursor-not-allowed">
                Quidditch Strategy Planner 🧹📊 (Coming Soon)
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}