'use client';

import { useState } from 'react';
import { messages, OmikujiResult } from '../data/omikuji';

export default function Omikuji() {
  const [result, setResult] = useState<OmikujiResult | null>(null);

  const drawOmikuji = () => {
    const rand = messages[Math.floor(Math.random() * messages.length)];
    setResult(rand);
  };
  return (
     <main className="flex flex-col items-center justify-center mt-40 bg-white">
        <h1 className="text-3xl font-bold text-main mb-8">おみくじ</h1>
        {result ? (
            <div className="flex flex-col items-center">
                <p className="text-main text-2xl font-bold">♡ 大吉 ♡</p>
                <p className="text-main text-xl mt-4">{result.message}</p>
                <img src={result.image} alt={result.message} className="w-1/3 mt-8" />
            </div>
        ) : (
            <button
                onClick={drawOmikuji}
                className="px-6 py-3 bg-main text-white rounded-lg shadow hover:cursor-pointer transition">
                おみくじを引く
            </button>
        )}
    </main>
  )
}
