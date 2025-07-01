'use client';

import Profile from '../components/Profile/Profile';
import Portfolio from '../components/Portfolio/Portfolio';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <Portfolio />
    </>
  );
}