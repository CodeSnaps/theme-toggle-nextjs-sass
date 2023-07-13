'use client';

import Card from '@/components/Card';
import ThemeToggleBtn from '@/components/ThemeToggleBtn';

export default function Home() {
  return (
    <main className="container">
      <div className="content">
        <h1 className="title">Theme Toggle in React/Next.js with Sass</h1>

        <ThemeToggleBtn />

        <Card />
      </div>
    </main>
  );
}
