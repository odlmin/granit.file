'use client';  // Директива для клиентского компонента

import React, { useState } from 'react';

export default function Contacts() {
  // Состояние для полей формы
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Состояние для отображения успешного сообщения
  const [successMessage, setSuccessMessage] = useState(false);

  // Обработчик изменения полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно реализовать логику отправки формы на сервер или API
    console.log(formData);

    // Показать сообщение об успешной отправке
    setSuccessMessage(true);

    // Очистка формы после отправки
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Убрать сообщение через 5 секунд
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-left">
      <h1 className="text-4xl font-bold mb-6">Kontakter oss</h1>
      
      <p className="mb-6 text-gray-300">
        Hvis du har spørsmål eller ønsker å kontakte oss, fyll ut skjemaet nedenfor, så svarer vi deg så raskt som mulig.
      </p>

      {successMessage && (
        <div className="mb-6 p-4 text-green-800 bg-green-100 rounded-lg">
          Meldingen din ble sendt! Vi svarer deg så raskt som mulig.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">Navn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ditt navn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Din e-postadresse"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Tema</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tema for meldingen"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Melding</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Din melding"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Send melding
        </button>
      </form>
    </section>
  );
}
