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
      <h1 className="text-4xl font-bold mb-6">Contact us</h1>
      
      <p className="mb-6 text-gray-300">
      If you have any questions or would like to contact us, please fill out the form below and we will get back to you as soon as possible.
      </p>

      {successMessage && (
        <div className="mb-6 p-4 text-green-800 bg-green-100 rounded-lg">
          Your message was successfully sent! We will get back to you as soon as possible.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Theme</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Theme of the message"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="text-gray-700 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Send message
        </button>
      </form>
    </section>
  );
}
