'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Game() {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [message, setMessage] = useState('');
  const slotSymbols = ['🧚‍♂️', '✨', '🐉', '🏰', '📜'];
  const placeholderImage = '/images/jack.png'; // Placeholder картинка
  const [slotValues, setSlotValues] = useState(Array(15).fill(placeholderImage)); // Изначальные значения
  const [isSpinning, setIsSpinning] = useState(false); // Состояние спиннера

  const handleSpin = () => {
    if (balance < betAmount) {
      alert('Not enough credits!');
      return;
    }

    setIsSpinning(true); // Запуск анимации
    setMessage('');

    const newBalance = balance - betAmount;
    setBalance(newBalance);

    // Имитация времени вращения
    setTimeout(() => {
      const newSlotValues = slotValues.map(() => {
        return slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
      });
      setSlotValues(newSlotValues);
      setIsSpinning(false); // Остановка анимации
      checkWin(newSlotValues);
    }, 2000); // Анимация длится 2 секунды
  };

  const checkWin = (newSlotValues: string[]) => {
    const firstRow = newSlotValues.slice(0, 5);
    const secondRow = newSlotValues.slice(5, 10);
    const thirdRow = newSlotValues.slice(10, 15);

    let winAmount = 0;

    if (firstRow.every((symbol) => symbol === firstRow[0])) winAmount += betAmount * 5;
    if (secondRow.every((symbol) => symbol === secondRow[0])) winAmount += betAmount * 5;
    if (thirdRow.every((symbol) => symbol === thirdRow[0])) winAmount += betAmount * 5;

    if (winAmount > 0) {
      setBalance(balance + winAmount);
      setMessage(`You won ${winAmount} credits! 🎉`);
    } else {
      setMessage('No win, try again!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div id="slot-container" className="text-center">
        <div id="balance" className="text-2xl mb-6">Balance: {balance}</div>

        <div id="bet-amount" className="mb-4 text-lg">
          Bet Amount: 
          <select
            id="bet-select"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="ml-2 p-2 bg-gray-700 text-white"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        <div id="slot-machine" className="grid grid-cols-5 grid-rows-3 gap-4">
          {slotValues.map((symbol, index) => (
            <div
              key={index}
              className={`p-5 slot-cell flex justify-center items-center bg-gray-600 text-white text-4xl rounded-lg ${isSpinning ? 'spinning' : ''}`} // Добавляем класс 'spinning' для анимации
            >
              {symbol.startsWith('/') ? (
                <Image src={symbol} alt="Placeholder" width={50} height={50} />
              ) : (
                symbol
              )}
            </div>
          ))}
        </div>

        <button
          id="spin-button"
          className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md"
          onClick={handleSpin}
          disabled={isSpinning} // Блокировка кнопки во время спина
        >
          {isSpinning ? 'Spinning...' : 'Spin'}
        </button>

        <div id="message" className="mt-4 text-lg">{message}</div>
      </div>

      <style jsx>{`
        .slot-cell {
          transition: transform 0.3s ease-in-out;
        }
        .spinning {
          animation: spin 0.6s infinite linear;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
