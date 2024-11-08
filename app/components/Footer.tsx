"use client";  // Указываем, что это клиентский компонент

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const links = [
    { name: 'Disclaimer', url: '/about' },
    { name: 'Contacts', url: '/contact' },
    { name: 'Cookie policy', url: '/cookies' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms and conditions', url: '/terms' },
  ];
	
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Логотип (слева) */}
          <div className="w-full md:w-[250px] flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/images/logo.png"  // Путь к логотипу
                alt="Logo"
                width={250}               // Ширина логотипа
                height={150}              // Высота логотипа
              />
            </Link>
          </div>

          {/* Дисклеймер (по центру) */}
          <div className="flex-grow px-5 mx-5 text-sm text-center text-gray-400">
            <p>
            This site is intended for users over the age of 18 and offers only social casino games. There is no possibility to win Real Money in our games.
            </p>
          </div>

          {/* Ссылки (справа в колонку) */}
          <div className="flex-shrink-0 w-full md:w-auto md:text-left text-center">
			<ul className="space-y-2">
			{links.map((link, index) => (
				<li key={index}>
				<Link href={link.url} className="text-white hover:underline">
				{link.name}
				</Link>
				</li>
			))}
			</ul>
		</div>
        </div>
      </div>
    </footer>
  );
}
