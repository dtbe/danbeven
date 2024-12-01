import { useState, useMemo, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, Skull, RefreshCw, X, ArrowDown } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

const funMessages = [
  "Merlin's beard, we need help! 🧙‍♂️",
  "Wands at the ready! 🪄",
  "Mischief needs managing! 🗺️",
  "Blimey, another magical emergency! 🌟",
  "Crikey, things are getting wild! 🔮",
  "Bloody hell, not again! 😱",
  "Accio help! 🚨",
  "Lumos! Trouble brewing! 💡",
  "Great Scott, magical mayhem incoming! 🌪️",
  "Expecto problem! 🛡️",
  "Oi, magical chaos alert! 🧨",
  "Merlin's sparkly socks, we're in trouble! 🧦",
  "By the Sorting Hat, this is urgent! 🎩",
  "Sweet Butterbeer, here we go! 🍺",
  "Galloping gargoyles, brace yourself! 🏰"
];


export default function QuestGenerator() {
  const [quests, setQuests] = useState([])
  const [selectedLocations, setSelectedLocations] = useState({
    hogwarts: true,
    ministry: true,
    orderOfPhoenix: true,
    magicalCreatures: true,
    gringotts: true
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [currentMessage, setCurrentMessage] = useState(funMessages[0]);
  
const formatLocationName = (key) => {
    const nameMap = {
      hogwarts: "Hogwarts School",
      ministry: "Ministry of Magic",
      orderOfPhoenix: "Order of the Phoenix",
      magicalCreatures: "Magical Creatures Division",
      gringotts: "Gringotts Bank",
      forbiddenForest: "Forbidden Forest",
      hogsmeade: "Hogsmeade Village"
    }
    return nameMap[key] || key.split(/(?=[A-Z])/).join(" ")
  }
  
const colorMap = {
  purple: 'bg-purple-500/20 border-purple-500 text-purple-300',
  blue: 'bg-blue-500/20 border-blue-500 text-blue-300',
  pink: 'bg-pink-500/20 border-pink-500 text-pink-300',
  orange: 'bg-orange-500/20 border-orange-500 text-orange-300',
  emerald: 'bg-emerald-500/20 border-emerald-500 text-emerald-300',
  yellow: 'bg-yellow-500/20 border-yellow-500 text-yellow-300',
  red: 'bg-red-500/20 border-red-500 text-red-300'
}

const themesData = useMemo(() => ({
  hogwarts: { difficulty: 1, colour: 'purple', type: '🔮', scenarios: [
    "Disable enchanted armour duelling in the Gryffindor Tower hallway",
    "Rescue Dobby from a time-locked staircase segment",
    "Intercept a rogue Bludger targeting student groups",
    "Capture a rampaging three-headed magical creature in the courtyard",
    "Round up multiplying Nifflers before they ransack the kitchen",
    "Prevent the Giant Squid from breaching the dungeon walls",
    "Break the charm trapping a baby unicorn in a magical bubble",
    "Extinguish a baby dragon's magical fire in the restricted library",
    "Silence cursed musical instruments in the common room",
    "Contain magical pest infestation in Professor Longbottom's greenhouse",
    "Help house-elves neutralise a magical chaos outbreak",
    "Rescue an injured phoenix from the Forbidden Forest",
    "Corral escaped magical creatures around Hagrid's hut",
    "Save a first-year student trapped in a vanishing cabinet",
    "Neutralise Peeves' magical prank devices in the Great Hall",
    "Protect Fawkes from a tracking enchantment",
    "Melt magical frost blocking the Astronomy Tower",
    "Guide a lost unicorn out of the Forbidden Forest",
    "Capture enchanted quills writing uncontrollably",
    "Break Dobby free from a magical restraining spell",
    "Contain a miniature dragon outbreak in the potions classroom",
    "Reverse a shrinking spell threatening Hagrid's magical creatures"
  ]},
  ministry: { difficulty: 2, colour: 'blue', type: '☔', scenarios: [
    "Neutralise a swarm of explosive Howlers hunting Hermione",
    "Detect and apprehend an invisible intruder in the memorial hall",
    "Protect Minister Granger-Weasley from a multi-layered security curse",
    "Rescue Arthur Weasley from a magical transportation mishap",
    "Intercept magical memos attacking Luna Scamander",
    "Contain a baby dragon loose in the Ministry lobby",
    "Deactivate contaminated wands causing magical disruptions",
    "Locate and extract a miniaturised Auror near a magical artifact",
    "Secure critical magical creature documentation",
    "Stabilise enchanted windows projecting dangerous magical scenes",
    "Clear magical barriers trapping Ministry workers",
    "Neutralise experimental spells threatening magical life",
    "Break Dobby out of a magical identification trap",
    "Suppress a phoenix feather causing widespread magical interference",
    "Defend magical creature archives from dark enchantments",
    "Extract Hermione from a time-locked office dimension",
    "Quarantine a spreading magical creature disease",
    "Track an invisible magical entity through Ministry corridors",
    "Contain a dragon outbreak in the research wing",
    "Disable an enchanted security system protecting ancient artifacts",
    "Neutralise Peeves' chaos in classified zones",
    "Rescue a unicorn from secure Ministry holding cells",
    "Calm magically agitated creatures in research areas",
    "Close an unstable magical portal in the main atrium",
    "Disrupt a tracking spell targeting Order of the Phoenix members"
  ]},
  magicalCreatures: { difficulty: 3, colour: 'pink', type: '🦄', scenarios: [
    "Help Newt Scamander recapture experimental magical creatures",
    "Manage an expanding Occamy near Dobby's sanctuary",
    "Prevent Nifflers from looting Grawp's hidden treasure",
    "Divert Kelpies threatening a magical creature migration",
    "Rescue phoenix chicks from dark wizard poachers",
    "Redirect a Thunderbird away from a magical creature reserve",
    "Defend a unicorn grove from illegal dragon hunters",
    "Quarantine a magical disease near the Forbidden Forest",
    "Clear magical pests from Luna's research sanctuary",
    "Guide lost magical creatures along a memorial path",
    "Capture escaped Blast-Ended Skrewts endangering a unicorn herd",
    "Intercept a Sphinx wandering through a magical museum",
    "Rescue a baby dragon from illegal magical traders",
    "Relocate displaced Hippogriffs from a construction zone",
    "Defend a magical creature caravan from attacking Firecrabs",
    "Protect magical creature families from dark enchantments",
    "Assist Hermione in tracking a rare magical species",
    "Contain a magical creature outbreak near Hagrid's habitat",
    "Liberate Luna's creatures from an enchanted trap",
    "Prevent a dragon egg from hatching in a populated area",
    "Help Dobby shield magical creatures from poachers",
    "Stop a unicorn stampede in protected magical preserves",
    "Rescue magical creatures from a time-locked dimension",
    "Neutralise a magical plague affecting rare species",
    "Reunite separated magical creature families"
  ]},
  gringotts: { difficulty: 4, colour: 'yellow', type: '💰', scenarios: [
    "Escape a vault continuously filling with magically generated gold",
    "Pacify a guardian Ukrainian Ironbelly dragon",
    "Navigate an intricate vault trap system",
    "Contain a spreading curse in a high-security deposit zone",
    "Intercept magical thieves targeting rare artifacts",
    "Protect a rare phoenix feather collection",
    "Bypass ancient goblin security guarding a dragon egg",
    "Rescue Grawp from malfunctioning vault defences",
    "Interrupt a coordinated magical vault heist",
    "Neutralise cursed artifacts threatening magical beings",
    "Traverse collapsing tunnels with a trapped magical creature",
    "Disable malfunctioning security golems",
    "Break a possession curse on magical treasure",
    "Clear dangerous magical gas from a restricted vault",
    "Prevent automated defences from harming magical creatures",
    "Extract Hermione from a magically sealed vault",
    "Stop magical forgeries of rare creature documents",
    "Neutralise unstable magical currency near a dragon nest",
    "Retrieve a rare magical artifact for Hagrid",
    "Disrupt a magical tracking spell in the vault network",
    "Rescue a lost phoenix from a high-security vault",
    "Protect a unique unicorn-related magical artifact",
    "Interrupt a dragon scale smuggling operation",
    "Help Luna decode a mysterious vault inscription",
    "Rescue a magical creature accidentally locked in a vault"
  ]},
  orderOfPhoenix: { difficulty: 5, colour: 'red', type: '🐦‍🔥', scenarios: [
    "Secure a powerful artifact protecting magical creatures",
    "Protect Luna during a covert raid on dark wizard strongholds",
    "Infiltrate a vault hiding a rare magical artifact",
    "Rescue Harry from a strategic dark wizard ambush",
    "Provide security for Teddy Lupin during a creature rescue mission",
    "Coordinate defence of a unicorn sanctuary",
    "Contain a dark magic outbreak near a magical creature reserve",
    "Break through a magical barrier trapping Order members",
    "Defend Hogwarts from an imminent dark magical threat",
    "Prevent dark wizards from accessing a phoenix breeding ground",
    "Protect magical transportation infrastructure",
    "Clear dark enchantments from a unicorn protection zone",
    "Neutralise dark artifacts threatening magical beings",
    "Rescue Hermione from an advanced dark wizard trap",
    "Restore magical creature communication networks",
    "Establish a secure sanctuary for endangered magical beings",
    "Defend Luna's critical magical research",
    "Extract Dobby from a dark magical containment facility",
    "Disrupt dark wizard tracking of magical creature migrations",
    "Rescue a phoenix from dark magical experimental site",
    "Protect a hidden unicorn sanctuary from Dementor invasion",
    "Prevent a dragon egg from falling into dark wizard hands",
    "Help Luna counter a magically engineered creature disease",
    "Defend a magical creature sanctuary from a coordinated dark invasion"
  ]}
}), [])


  const getRandomElement = useCallback((array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    // Ensure we don't repeat the last quest if possible
    if (array.length > 1 && quests.length > 0 && quests[0]?.scenario === array[randomIndex]) {
      return array[(randomIndex + 1) % array.length]
    }
    return array[randomIndex]
  }, [quests])

  const generateQuest = useCallback(() => {
    const activeThemes = Object.entries(selectedLocations)
      .filter(([, isSelected]) => isSelected)
      .map(([key]) => themesData[key])

    if (activeThemes.length === 0) {
      return null
    }

    const theme = getRandomElement(activeThemes)
    return {
      scenario: getRandomElement(theme.scenarios),
      colour: theme.colour,
      type: theme.type,
      difficulty: theme.difficulty,
      location: Object.keys(themesData).find(key => themesData[key] === theme)
    }
  }, [themesData, selectedLocations, getRandomElement])

  const generateQuests = useCallback(async () => {
    setIsGenerating(true)
    setFeedback('')
    
    // Select a new random message
    const newMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
    setCurrentMessage(newMessage);
    
    // Simulate async operation for UI feedback
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const newQuests = Array.from({ length: 5 }, generateQuest).filter(Boolean)
    
    if (newQuests.length === 0) {
      setFeedback('Please select at least one magical location!')
    } else {
      setQuests(newQuests)
      //setFeedback(`${newQuests.length} new magical adventures await...`)
    }
    
    setIsGenerating(false)
  }, [generateQuest])

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setFeedback('Copied to clipboard!')
        setTimeout(() => setFeedback(''), 2000)
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        setFeedback('Failed to copy. Please try again.')
        setTimeout(() => setFeedback(''), 2000)
      })
  }, [])

  const toggleLocation = useCallback((location) => {
    setSelectedLocations(prev => ({
      ...prev,
      [location]: !prev[location]
    }))
  }, [])

  const removeQuest = useCallback((index: number) => {
    setQuests(prevQuests => prevQuests.filter((_, i) => i !== index))
  }, [])

  const moveQuestToBottom = useCallback((index: number) => {
    setQuests(prevQuests => {
      const newQuests = [...prevQuests]
      const [removed] = newQuests.splice(index, 1)
      newQuests.push(removed)
      return newQuests
    })
  }, [])


  return (
  <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-900 to-blue-900">
    <Card className="w-full max-w-4xl mx-auto bg-gray-800/90 border-0 text-white">
      <CardHeader className="space-y-4">
        <CardTitle className="text-2xl md:text-3xl font-bold text-center text-yellow-400">
          Wizarding-world Crisis Monitor ⚡📻
        </CardTitle>
        {feedback && (
          <Alert 
            variant={feedback.includes('Please select') ? 'destructive' : 'default'}
            className={`${
              feedback.includes('Please select') 
                ? 'bg-red-900/50 border-red-500 text-red-500' 
                : 'bg-green-900/50 border-green-500 text-green-500'
            }`}
          >
            <AlertDescription>{feedback}</AlertDescription>
          </Alert>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1   md:grid-cols-2 gap-1">
          {Object.entries(themesData)
            .sort(([,a], [,b]) => a.difficulty - b.difficulty)
            .map(([key, value]) => (
              <div key={key} 
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  selectedLocations[key] ? 'bg-gray-700/70' : 'bg-gray-700/10'
                }`}
              >
                <Checkbox 
                  id={key} 
                  checked={selectedLocations[key]}
                  onCheckedChange={() => toggleLocation(key)}
                  className={`border-2 ${colorMap[value.colour].split(' ')[1]}`}
                />
                <label className="flex-1 flex justify-between items-center" htmlFor={key}>
                  <span className={`font-semibold ${colorMap[value.colour].split(' ')[2]}`}>
                    {value.type} {formatLocationName(key)}
                  </span>
                  <span className="text-xs ml-2">
                    {value.difficulty}×💀
                  </span>
                </label>
              </div>
            ))}
        </div>

        <Button 
          size="lg" 
          onClick={generateQuests}
          disabled={isGenerating || Object.values(selectedLocations).every(v => !v)}
          className="w-full bg-gradient-to-l from-purple-800 border border-purple-500 to-purple-500 font-semibold text-lg border-2"
        >
          {isGenerating ? (
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {isGenerating ? "Searching..." : "🐈👉 Get New Missions"}
        </Button>     

        {quests.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-bold text-yellow-400 text-lg text-center">
              {currentMessage}
            </h2>
            
            <div className="space-y-2">
              {quests.map((quest, index) => (
                <Card key={index} 
                  className={`border-0 ${colorMap[quest.colour]}`}
                >
                    <div className="flex  justify-between gap-0 px-3 py-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => copyToClipboard(quest.scenario)}
                          className="hover:bg-white/10"
                        >
                          <Copy className="" />
                        </Button>
                        
                        <div>
                          <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => moveQuestToBottom(index)}
                          className="hover:bg-white/10"
                        >
                          <ArrowDown className="" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeQuest(index)}
                          className="hover:bg-white/10"
                        >
                          <X className="" />
                        </Button>

                      </div>
                      
                    </div>
                    <CardContent className="pt-0">

  
                      
                    <p className="font-serif mb-3 text-2xl font-semibold">
                      {quest.scenario}
                    </p>
                    {quest.type}
                    <span className="text-sm ml-2">
                      {formatLocationName(quest.location)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
)}