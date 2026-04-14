'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BALLOON_IMAGES = [
  'https://cdn.ri0n.dev/balloons/balloon_blue.png',
  'https://cdn.ri0n.dev/balloons/balloon_green.png',
  'https://cdn.ri0n.dev/balloons/balloon_purple.png',
  'https://cdn.ri0n.dev/balloons/balloon_yellow.png',
  'https://cdn.ri0n.dev/balloons/balloon_red.png',
] as const;

interface BalloonProps {
  src: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  swayX: number[];
}

function Balloon({ src, left, delay, duration, size, swayX }: BalloonProps) {
  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none"
      style={{ left: `${left}%` }}
      initial={{ y: 300, opacity: 1 }}
      animate={{
        y: '-120vh',
        x: swayX,
        opacity: [1, 1, 1, 0.9, 0],
      }}
      transition={{
        y: { duration, delay, ease: 'easeOut' },
        x: { duration, delay, ease: 'easeInOut', times: [0, 0.25, 0.5, 0.75, 1] },
        opacity: { duration, delay, times: [0, 0.55, 0.7, 0.85, 1] },
      }}
    >
      <Image
        src={src}
        alt={`balloon`}
        width={size}
        height={Math.round(size * 1.3)}
        className="drop-shadow-md select-none opacity-80"
        draggable={false}
      />
    </motion.div>
  );
}

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

function getBalloonCount(): number {
  const w = window.innerWidth;
  if (w < 640) return 10; // Phone
  if (w < 1024) return 14; // Tablet
  return 20; // PC
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateBalloons(count: number): BalloonProps[] {
  const margin = 3;
  const usable = 100 - margin * 2;
  const slotWidth = usable / count;

  const slotOrder = shuffle(Array.from({ length: count }, (_, i) => i));

  return slotOrder.map((slot, i) => {
    const slotCenter = margin + slot * slotWidth + slotWidth / 2;
    const left = slotCenter + rand(-slotWidth * 0.3, slotWidth * 0.3);
    const duration = rand(4.0, 6.5);
    const delay = rand(0, 3.5);
    const sway = rand(16, 28) * (Math.random() < 0.5 ? 1 : -1);
    return {
      src: BALLOON_IMAGES[i % BALLOON_IMAGES.length],
      left: Math.min(Math.max(left, margin), 100 - margin),
      delay,
      duration,
      size: Math.round(rand(60, 100)),
      swayX: [0, sway, -sway * 0.6, sway * 0.35, 0],
    };
  });
}

export function HappyBalloon() {
  const [balloons, setBalloons] = useState<BalloonProps[] | null>(null);

  useEffect(() => {
    const now = new Date();
    if (now.getMonth() !== 3 || now.getDate() !== 10) return; // April 11th only

    const generated = generateBalloons(getBalloonCount());
    setBalloons(generated);

    const maxEnd = Math.max(...generated.map((b) => b.delay + b.duration)) + 0.5;
    const timer = setTimeout(() => setBalloons(null), maxEnd * 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!balloons) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {balloons.map((props, i) => (
        <Balloon key={i} {...props} />
      ))}
    </div>
  );
}
