import { NotificationType, Notification } from "@/types/notification";
import { v4 as uuid } from "uuid";

const sampleData: Record<NotificationType, string[]> = {
  comment: [
    "Bibek commented on your post.",
    "Hari replied to your photo.",
    "Shyam mentioned you in a comment.",
  ],
  like: [
    "Alisha liked your photo.",
    "Babita liked your comment.",
    "Ram liked your story.",
  ],
  system: [
    "System update completed successfully.",
    "New version available. Update now!",
    "Backup finished without errors.",
  ],
};

export function startMockNotifications(cb: (n: Notification) => void) {
  const types: NotificationType[] = ["comment", "like", "system"];

  setInterval(() => {
    const type = types[Math.floor(Math.random() * types.length)];
    const messages = sampleData[type];
    const message = messages[Math.floor(Math.random() * messages.length)];

    cb({
      id: uuid(),
      type,
      message,
      read: false,
      timestamp: new Date().toISOString(),
    });
  }, 3000);
}
