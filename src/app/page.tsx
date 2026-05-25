import { Metadata } from 'next';
 import GaraHerbLandingPage from'./GaraHerbLandingPage';

export const metadata: Metadata = {
  title: 'GaraHerb - Natural Solution for Men\'s Vitality & Performance',
  description: 'Experience renewed energy, confidence, and performance with GaraHerb\'s powerful natural formula. 60-day guarantee, 100% natural ingredients, fast shipping. Order now and reclaim your vitality!',
  keywords: 'natural supplement, men vitality, performance enhancement, energy boost, libido booster, natural formula, GaraHerb, wellness supplement, male health',
  
  openGraph: {
    title: 'GaraHerb - Natural Solution for Men\'s Vitality & Performance',
    description: 'Experience renewed energy, confidence, and performance with GaraHerb\'s powerful natural formula. 60-day guarantee, 100% natural ingredients, fast shipping. Order now and reclaim your vitality!',
  }
}

export default function Page() {
  return <GaraHerbLandingPage />
}