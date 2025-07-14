"use client";
import { Notification } from "@/types/notification";
import NotificationItem from "./NotificationItem";

interface Props {
  title: string;
  notifications: Notification[];
}

export default function NotificationGroup({ title, notifications }: Props) {
  return (
    <div className="mb-6">
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      {notifications.map((notif) => (
        <NotificationItem key={notif.id} notif={notif} />
      ))}
    </div>
  );
}
