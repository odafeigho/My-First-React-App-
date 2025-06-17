"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Smartphone, Monitor, X, Check } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showInstallCard, setShowInstallCard] = useState(false)
  const [platform, setPlatform] = useState<string>("")

  useEffect(() => {
    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes("android")) {
      setPlatform("Android")
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      setPlatform("iOS")
    } else if (userAgent.includes("mac")) {
      setPlatform("macOS")
    } else if (userAgent.includes("win")) {
      setPlatform("Windows")
    } else {
      setPlatform("Desktop")
    }

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setIsInstallable(true)
      setShowInstallCard(true)
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setIsInstallable(false)
      setShowInstallCard(false)
      setDeferredPrompt(null)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    // Show install card after a delay if installable
    const timer = setTimeout(() => {
      if (isInstallable && !isInstalled) {
        setShowInstallCard(true)
      }
    }, 10000) // Show after 10 seconds

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
      clearTimeout(timer)
    }
  }, [isInstallable, isInstalled])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }

      setDeferredPrompt(null)
      setIsInstallable(false)
      setShowInstallCard(false)
    } catch (error) {
      console.error("Error during installation:", error)
    }
  }

  const getInstallInstructions = () => {
    switch (platform) {
      case "iOS":
        return {
          title: "Install on iOS",
          steps: [
            "Tap the Share button in Safari",
            'Scroll down and tap "Add to Home Screen"',
            'Tap "Add" to install the app',
          ],
        }
      case "Android":
        return {
          title: "Install on Android",
          steps: ["Tap the menu button (⋮) in Chrome", 'Select "Add to Home screen"', 'Tap "Add" to install the app'],
        }
      default:
        return {
          title: "Install on Desktop",
          steps: [
            "Click the install button in the address bar",
            "Or use the install button below",
            "Follow the prompts to install",
          ],
        }
    }
  }

  if (isInstalled) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="w-80 bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">App Installed Successfully!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!showInstallCard || !isInstallable) {
    return null
  }

  const instructions = getInstallInstructions()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {platform === "iOS" || platform === "Android" ? (
                <Smartphone className="h-5 w-5 text-blue-600" />
              ) : (
                <Monitor className="h-5 w-5 text-blue-600" />
              )}
              <CardTitle className="text-lg">Install App</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowInstallCard(false)} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>Get the full experience with offline access and native performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{platform}</Badge>
            <Badge variant="outline">PWA</Badge>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">{instructions.title}</h4>
            <ol className="text-xs text-muted-foreground space-y-1">
              {instructions.steps.map((step, index) => (
                <li key={index} className="flex gap-2">
                  <span className="font-medium">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {deferredPrompt && (
            <Button onClick={handleInstallClick} className="w-full" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Install Now
            </Button>
          )}

          <div className="text-xs text-muted-foreground">
            <strong>Benefits:</strong> Offline access, faster loading, native notifications
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
