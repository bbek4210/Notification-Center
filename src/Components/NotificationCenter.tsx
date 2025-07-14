"use client";
import { useEffect } from "react";
import { useNotificationStore } from "@/store/useNotificationStore";
import { startMockNotifications } from "@/utils/mockSocket";
import NotificationGroup from "./NotificationGroup";
import { Notification } from "@/types/notification";

function groupByType(notifications: Notification[]) {
  const grouped: Record<string, Notification[]> = {};
  notifications.forEach((n) => {
    if (!grouped[n.type]) grouped[n.type] = [];
    grouped[n.type].push(n);
  });
  return grouped;
}

export default function NotificationCenter() {
  const notifications = useNotificationStore((s) => s.notifications);
  const addNotification = useNotificationStore((s) => s.addNotification);

  useEffect(() => {
    startMockNotifications(addNotification);
  }, []);

  const grouped = groupByType(notifications);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="mb-6 text-3xl font-bold">🔔 Notification Center</h1>
      {Object.entries(grouped).map(([type, items]) => (
        <NotificationGroup key={type} title={type} notifications={items} />
      ))}
    </div>
  );
}
