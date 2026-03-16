/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#4A0404] to-[#000000] selection:bg-white/30">
      {/* Grainy overlay */}
      <div className="bg-grain" />
      
      {/* Floating background elements */}
      <FloatingElements />

      <main className="relative z-10 container mx-auto px-6 py-12 md:py-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
      </main>
      
      <Footer />
    </div>
  );
}
