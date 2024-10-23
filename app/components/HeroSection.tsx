// app/components/HeroSection.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center text-center">
      {/* Фоновое изображение через Image */}
      <Image
        src="/images/hero.webp"  // Путь к изображению
        alt="Fancy LuckyLoop"
        layout="fill"            // Заполняет всю секцию
        objectFit="cover"        // Обрезка по размеру контейнера
        priority={true}          // Приоритетная загрузка изображения
        className="z-[-1]"       // Размещаем изображение за контентом
      />
      
      <div className="bg-black bg-opacity-50 text-white p-5 rounded-2xl md:p-20 mx-5">
        <h1 className="text-4xl font-bold uppercase">LuckyLoop Spilleautomat Gratis</h1>
        <p className="text-lg mt-2">Din favoritt sosiale kasinoopplevelse på nettstedet vårt!</p>
	   <Link href="/game" passHref>
        <button className="mt-4 px-9 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded uppercase">
          Spill Nå
	   </button>
	   </Link>
      </div>
    </section>
  )
}
