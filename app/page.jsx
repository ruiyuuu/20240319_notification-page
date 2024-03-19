"use client";
import Image from "next/image";
import { Cards } from "./ui/Card";
import Badge from "./ui/badge";
import React, { useState } from "react";
import data from "./api/user.json";

export default function Home() {
  const [unRead, setUnRead] = useState("--");
  const handleClick = () => {
    setUnRead(0);
    data.map((item) => (item.isRead = true));
  };
  return (
    <main className="container mx-auto px-4 mt-10 mb-14">
      <div className="px-[32px] py-[30px] bg-white rounded-[24px] flex flex-col gap-4 w-full lg:w-[40%] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <h1>Notifications</h1>
            <Badge unRead={unRead} />
          </div>
          <button className="font-bold" onClick={handleClick}>
            Mark all as read
          </button>
        </div>
        <div className="flex flex-col">
          <Cards setUnRead={setUnRead} />
        </div>
      </div>
    </main>
  );
}
