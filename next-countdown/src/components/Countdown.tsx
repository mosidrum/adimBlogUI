"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  targetDate: string | number | Date;
};

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

function getTimeParts(distanceMs: number): TimeParts {
  const totalSeconds = Math.max(0, Math.floor(distanceMs / 1000));
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const parts = getTimeParts(target - now);
  const items = [
    { label: "Days", value: pad(parts.days) },
    { label: "Hours", value: pad(parts.hours) },
    { label: "Days", value: pad(parts.minutes) },
    { label: "Seconds", value: pad(parts.seconds) }
  ];
  const images: string[] = [
    "https://pngimg.com/uploads/businessman/businessman_PNG6567.png",
    "https://pngimg.com/uploads/woman/woman_PNG101.png",
    "https://pngimg.com/uploads/girl/girl_PNG100169.png",
    "https://pngimg.com/uploads/boy/boy_PNG115.png",
    "https://pngimg.com/uploads/man/man_PNG6530.png"
  ];

  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 pt-6 sm:grid-cols-4 sm:pt-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white p-8 text-center shadow-soft ring-1 ring-black/5"
          >
            <div className="text-5xl font-semibold tracking-tight text-black">
              {item.value}
            </div>
            <div className="mt-3 text-lg text-gray-700">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-3xl px-6 py-8 text-center sm:py-10">
        <p className="text-gray-800">Thank you for your patience</p>
        <p className="mt-2 text-gray-600">
          Follow us on social media for real time updates
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-red-300 text-red-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M18 2h3l-7 9 8 11h-6l-5-7-5 7H0l8-11L1 2h6l4 6 7-6z"/>
            </svg>
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-300 text-red-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4a4 4 0 0 1-1.5-1c-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.1A6.7 6.7 0 1 0 12 19.8 6.7 6.7 0 0 0 12 5.3zm0 11a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6z"/>
            </svg>
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-300 text-red-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm3 4H5v8h2V8zm5 0H10v1.9h.1a2.6 2.6 0 0 1 2.3-1.2c2.3 0 2.6 1.5 2.6 3.4V16h-2v-3.4c0-.8 0-1.8-1.1-1.8s-1.3.9-1.3 1.8V16h-2V8z"/>
            </svg>
          </span>
        </div>
      </div>

      <div className="relative hidden w-full md:block">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-6 pb-4">
          {images.map((src, index) => (
            <div key={index} className="flex-1">
              <div className="relative mx-auto h-[240px] w-[180px]">
                <Image
                  src={src}
                  alt="person"
                  fill
                  sizes="180px"
                  className="object-contain drop-shadow-2xl"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

