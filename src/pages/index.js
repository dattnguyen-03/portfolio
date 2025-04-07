import { Geist, Geist_Mono } from "next/font/google";
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { darkMode } = useTheme();
  
  return (
    <section
      className={`hero min-h-screen flex items-center justify-center text-center 
      ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-white'} 
      ${geistSans.variable}`}
    >
      <div className={`hero-content p-6 max-w-2xl rounded-xl shadow-xl 
        ${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/70 border-gray-200'} 
        backdrop-blur-md border`}>
        <h2 className={`hero-title text-4xl md:text-5xl font-bold mb-4 
          ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Hello, I’m Nguyễn Thành Đạt
        </h2>
        <p className={`hero-description text-lg md:text-xl mb-6 
          ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          A React developer passionate about creating beautiful web experiences.
          Currently learning frontend, and moving toward becoming a full-stack
          developer with Node.js.
        </p>
        <Link
          href="/projects"
          className="cta-button inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          🚀 View My Projects
        </Link>
      </div>
    </section>
  );
}
