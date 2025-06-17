"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Bell,
  BellOff,
  Trash2,
  CheckCircle,
  AlertCircle,
  Info,
  Upload,
  TrendingUp,
  Database,
  Download,
} from "lucide-react"
import { notificationService, type ProcessingNotification } from "../lib/notifications/notification-service"

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<ProcessingNotification[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    // Load notifications from localStorage
    const savedNotifications = localStorage.getItem("notification-history")
    if (savedNotifications) {
      try {
        const parsed = JSON.parse(savedNotifications)
        setNotifications(parsed)
        setUnreadCount(parsed.filter((n: ProcessingNotification & { read?: boolean }) => !n.read).length)
      } catch (error) {
        console.error("Failed to load notification history:", error)
      }
    }

    // Subscribe to new notifications
    const handleNewNotification = (notification: ProcessingNotification) => {
      setNotifications((prev) => {
        const updated = [{ ...notification, read: false }, ...prev.slice(0, 49)] // Keep last 50
        localStorage.setItem("notification-history", JSON.stringify(updated))
        return updated
      })
      setUnreadCount((prev) => prev + 1)
    }

    notificationService.subscribe("notification-center", handleNewNotification)

    return () => {
      notificationService.unsubscribe("notification-center")
    }
  }, [])

  const markAsRead = (index: number) => {
    setNotifications((prev) => {
      const updated = [...prev]
      if (!updated[index].read) {
        updated[index] = { ...updated[index], read: true }
        localStorage.setItem("notification-history", JSON.stringify(updated))
        setUnreadCount((count) => Math.max(0, count - 1))
      }
      return updated
    })
  }

  const markAllAsRead = () => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, read: true }))
      localStorage.setItem("notification-history", JSON.stringify(updated))
      return updated
    })
    setUnreadCount(0)
  }

  const clearAll = () => {
    setNotifications([])
    setUnreadCount(0)
    localStorage.removeItem("notification-history")
  }

  const getNotificationIcon = (type: ProcessingNotification["type"]) => {
    switch (type) {
      case "upload":
        return <Upload className="h-4 w-4 text-blue-600" />
      case "normalize":
        return <TrendingUp className="h-4 w-4 text-orange-600" />
      case "integrate":
        return <Database className="h-4 w-4 text-purple-600" />
      case "export":
        return <Download className="h-4 w-4 text-green-600" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Info className="h-4 w-4 text-gray-600" />
    }
  }

  const getNotificationColor = (type: ProcessingNotification["type"]) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "upload":
        return "bg-blue-50 border-blue-200"
      case "normalize":
        return "bg-orange-50 border-orange-200"
      case "integrate":
        return "bg-purple-50 border-purple-200"
      case "export":
        return "bg-green-50 border-green-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="relative">
        {unreadCount > 0 ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
        {unreadCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
          >
            {unreadCount > 99 ? "99+" : unreadCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <Card className="absolute right-0 top-12 w-96 z-50 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Notifications</CardTitle>
              <div className="flex gap-2">
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                    Mark all read
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={clearAll}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {notifications.length > 0 && (
              <CardDescription>
                {unreadCount} unread of {notifications.length} total
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="p-0">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground">
                <BellOff className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No notifications yet</p>
                <p className="text-sm">You'll see data processing updates here</p>
              </div>
            ) : (
              <ScrollArea className="h-96">
                <div className="space-y-1 p-2">
                  {notifications.map((notification, index) => (
                    <div
                      key={`${notification.timestamp}-${index}`}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors hover:bg-gray-50 ${getNotificationColor(
                        notification.type,
                      )} ${!notification.read ? "border-l-4 border-l-blue-500" : ""}`}
                      onClick={() => markAsRead(index)}
                    >
                      <div className="flex items-start gap-3">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {notification.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {formatTimestamp(notification.timestamp)}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-900 mb-1">{notification.stage}</p>
                          <p className="text-sm text-gray-600 break-words">{notification.message}</p>
                          {notification.datasetName && (
                            <p className="text-xs text-muted-foreground mt-1">Dataset: {notification.datasetName}</p>
                          )}
                          {notification.progress !== undefined && (
                            <div className="mt-2">
                              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                <span>Progress</span>
                                <span>{notification.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                                  style={{ width: `${notification.progress}%` }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                        {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" />}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
