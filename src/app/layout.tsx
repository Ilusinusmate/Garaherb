import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'GaraHerb Natural Supplement',
    template: 'GaraHerb Natural Supplement | %s',
  },
  description: 'Discover GaraHerb, the premium natural supplement designed to help men reclaim vitality and improve performance. Choose from our starter, standard, or best seller packages with 60-day money-back guarantee and free shipping.',
  keywords: 'natural supplement, men vitality, performance enhancement, GaraHerb, herbal supplement, wellness, natural formula, energy boost, male health',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'GaraHerb Natural Supplement',
      template: 'GaraHerb Natural Supplement | %s',
    },
    description: 'Premium natural supplement for men seeking to reclaim vitality and boost performance. Secure payment, 60-day guarantee, and free shipping on select packages. Order now and transform your wellness journey!',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fgaraherbn4318back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}