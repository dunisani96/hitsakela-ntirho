// components/OutlineButton.tsx
"use client";

import React from "react";
import Link from "next/link";

interface OutlineButtonProps {
  name: string;
  url: string;
  color?: "blue" | "red" | "green" | "yellow" | "gray";
}

const colorClasses = {
  blue: "text-sky-400 border-sky-400 hover:bg-blue-600 hover:text-white",
  red: "text-red-600 border-red-600 hover:bg-red-600 hover:text-white",
  green: "text-green-600 border-green-600 hover:bg-green-600 hover:text-white",
  yellow: "text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white",
  gray: "text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white",
};

export default function OutlineButton({
  name,
  url,
  color = "blue",
}: OutlineButtonProps) {
  return (
    <div className="h-[300px] w-full flex items-center justify-center bg-white">
      <Link
        href={url}
        className={`border-6 px-6 py-3 rounded-md font-medium transition-colors duration-300 ${colorClasses[color]}`}
      >
        {name}
      </Link>
    </div>
  );
}
