#Scalable Real-Time Notification Center

## Overview
This project is a real-time Notification Center built with **Next.js App Router**, **TypeScript**, **TailwindCSS **, and **Zustand**.

It supports:
- 🔄 Real-time updates via mocked WebSocket
- 📦 Grouped notifications by type (likes, comments, system alerts)
- ✅ Toggle read/unread
- 🔧 Easily extensible for future types or delivery methods

---

## Component Structure

- `NotificationCenter` – Main component orchestrating the app
- `NotificationGroup` – Groups notifications by type
- `NotificationItem` – Displays individual notification
- `useNotificationStore` – Centralized state via Zustand
- `mockSocket.ts` – Simulates incoming notifications

---

## State Management

Used **Zustand** for simplicity + scalability:

All architectural answers and justifications are provided in the handwritten notes.

📎 See handwritten notes: [design.jfif](./design.jfif) ,[design1.jfif](./design1.jfif) 
