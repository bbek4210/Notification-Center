"use client";
import { Notification } from "@/types/notification";
import { useNotificationStore } from "@/store/useNotificationStore";
import clsx from "classnames";

interface Props {
  notif: Notification;
}

const iconMap = {
  comment: "💬",
  like: "❤️",
  system: "⚙️",
};

export default function NotificationItem({ notif }: Props) {
  const toggleRead = useNotificationStore((s) => s.toggleRead);

  return (
    <div
      className={clsx(
        "p-4 border rounded mb-2 cursor-pointer shadow-sm",
        notif.read ? "bg-gray-100" : "bg-white"
      )}
      onClick={() => toggleRead(notif.id)}
    >
      <p className="font-semibold text-gray-800 capitalize">
        {iconMap[notif.type]} {notif.type}
      </p>

      <p className="text-gray-700">{notif.message}</p>
      <p className="text-sm text-gray-500">
        {new Date(notif.timestamp).toLocaleTimeString()}
      </p>
    </div>
  );
}
