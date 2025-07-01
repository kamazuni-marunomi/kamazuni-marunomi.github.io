 'use client';

import { messages } from '../data/omikuji';
import { useState } from 'react';

export default function Nav() {
  const [result, setResult] = useState<string | null>(null);

  const drawOmikuji = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setResult(random);
  };
  return (
     <main className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-main mb-8">おみくじ</h1>
      <button
        onClick={drawOmikuji}
        className="px-6 py-3 bg-main text-white rounded-lg shadow hover:cursor-pointer transition"
      >
        おみくじを引く
      </button>

      {result && (
        <div className="mt-10">
          <p className="text-main">🎉 {result} 🎉 </p>
        </div>
      )}
    </main>
  )
}
