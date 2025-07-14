export type NotificationType = "comment" | "like" | "system";

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  read: boolean;
  timestamp: string;
}
