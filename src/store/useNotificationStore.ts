import { create } from "zustand";
import { Notification } from "@/types/notification";

interface NotificationStore {
  notifications: Notification[];
  addNotification: (n: Notification) => void;
  toggleRead: (id: string) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (n) =>
    set((state) => ({ notifications: [n, ...state.notifications] })),
  toggleRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      ),
    })),
}));
