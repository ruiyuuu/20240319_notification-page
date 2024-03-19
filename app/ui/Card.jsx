"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../api/user.json";
import clsx from "clsx";

export function Cards({ setUnRead }) {
  const path = "/avatar/";
  const [updatedData, setUpdatedData] = useState();
  

  useEffect(() => {
    //計算未讀數量
    const isReads = data.map((item) => item.isRead);
    const result = isReads.filter((item) => item === false);
    setUnRead(result.length);
  }, []);

  const handleClick = (index) => {
    if(data){
      const newData = [...data];
      newData[index].isRead = true
      setUpdatedData(newData);


      const isReads = newData.map((item) => item.isRead);
      const result = isReads.filter((item) => item === false);
      setUnRead(result.length);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {data.map((item, index) => (
        <Card
          key={item.id}
          name={item.user.username}
          action={item.details.action}
          time={item.time}
          isRead={item.isRead}
          message={item.details.pvtMessage}
          post={item.details.post}
          group={item.details.group}
          pic={`${path}${item.user.userPic}`}
          postPic={`${path}${item.details.picture}`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
export function Card({
  name,
  action,
  post,
  message,
  avatar,
  isRead,
  time,
  group,
  pic,
  postPic,
  onClick,
}) {
  return (
    <button
      className={clsx("flex gap-4 px-[20px] py-[16px] rounded-[8px]", {
        "bg-veryLightGrayishBlue": isRead === false,
      })}
      onClick={onClick}
    >
      <Image
        src={pic}
        alt={pic}
        width={42}
        height={42}
        className="w-[42px] h-[42px]"
      />
      <div className="flex flex-col gap-2 w-full items-start text-start">
        <div className="flex gap-2 justify-between w-full">
          <div className="flex flex-col gap-3">
            <p>
              <a href="#" className="me-1">
                {name}
              </a>
              {action}
              <a href="#" className="ms-1">
                {post}
                {group}
              </a>
            </p>
            <Image
              src={postPic}
              alt={postPic}
              width={42}
              height={42}
              className={clsx({
                "w-[40px] h-[40px]": postPic !== "/avatar/",
                hidden: postPic === "/avatar/",
              })}
            />
            <div
              className={clsx({
                "border-[1px] rounded-[8px] px-3 py-2 border-lightGrayishBlue2":
                  message !== "",
              })}
            >
              <p className="text-darkGrayishBlue">{message}</p>
            </div>
          </div>
          <div
            className={clsx({
              "w-[8px] h-[8px] min-w-[8px] min-h-[8px] bg-red rounded-full mt-2":
                isRead === false,
              "": isRead == true,
            })}
          ></div>
        </div>
        <p className="text-grayishBlue">{time}</p>
      </div>
    </button>
  );
}
