"use client";
import { useEffect, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

import { useRouter } from 'next/navigation'

type Message = {
  sender: string;
  content: string;
  sentTime: Date;
};

const Chat = () => {
  const router = useRouter()
  const [newMessage, setNewMessage] = useState("");
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("http://localhost:5266/hub")
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Information)
      .build();

    setConnection(connect);

    connect
      .start()
      .then(() => {
        connect.on("ReceiveMessage", (sender, content, sentTime) => {
          console.log("Message received", { sender, content, sentTime }); // Log when a message is received
          routerPush(content);
        });
        connect.invoke("RetrieveMessageHistory");

      })
      
      .catch((err) =>
        console.error("Error while connecting to SignalR Hub:", err)
      );


    return () => {
      if (connection) {
        connection.off("ReceiveMessage");
      }
    };
  }, []);

  const sendMessage = async () => {
    if (connection && newMessage.trim()) {
      await connection.send("PostMessage", newMessage);
      setNewMessage("");
    }
  };

  const routerPush = (rute: string) => {
    return router.push(rute);
  }

  return (
    <main>
        <div className="relative">
            <input
            type="text"
            className="border p-2 mr-2 rounded w-[300px]"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 rounded"
            >
            Send
            </button>
        </div>
    </main>
  );
};

export default Chat;