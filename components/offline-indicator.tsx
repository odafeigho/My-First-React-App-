"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WifiOff, Wifi, AlertTriangle } from "lucide-react"

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    // Set initial online status
    setIsOnline(navigator.onLine)

    const handleOnline = () => {
      setIsOnline(true)
      setShowIndicator(true)
      // Hide the indicator after 3 seconds when back online
      setTimeout(() => setShowIndicator(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowIndicator(true)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!showIndicator && isOnline) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Card className={`${isOnline ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"}`}>
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            {isOnline ? (
              <>
                <Wifi className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">Back Online</span>
                <Badge variant="outline" className="text-xs">
                  Connected
                </Badge>
              </>
            ) : (
              <>
                <WifiOff className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Offline Mode</span>
                <Badge variant="outline" className="text-xs">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Limited
                </Badge>
              </>
            )}
          </div>
          {!isOnline && (
            <p className="text-xs text-orange-700 mt-1">
              Some features may be limited. Data will sync when connection is restored.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
