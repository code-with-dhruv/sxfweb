"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, Play, Plus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";

const programs = [
  { number: "01", title: "Strength lab", copy: "Build real strength with progressive programming, expert coaching, and the right room to focus.", image: "/images/transformation/strength.png" },
  { number: "02", title: "Athletic conditioning", copy: "Move faster, recover better, and train for the life you actually want to live.", image: "/images/transformation/boxing.png" },
  { number: "03", title: "Mobility & reset", copy: "Make space for better movement with guided mobility, recovery, and everyday consistency.", image: "/images/transformation/mobility.png" },
];

const stats = [["12", "locations across Hyderabad"], ["18k+", "members in motion"], ["42", "coaches who care"]];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f0e9] text-[#111310]">
      <Header />
      <section className="relative min-h-[780px] bg-[#111310] text-[#f3f0e9]">
        <div className="mx-auto grid min-h-[780px] max-w-[1600px] grid-cols-1 items-end gap-10 px-6 pb-16 pt-32 md:px-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-20 lg:pb-24">
          <div className="relative z-10 max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.28em] text-[#c8d96b]"><span className="size-2 rounded-full bg-[#c8d96b]" /> Hyderabad / Est. 2012</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="font-display text-[clamp(4.5rem,11vw,10.5rem)] leading-[.78] tracking-[-.07em]">Make your <span className="text-[#c8d96b]">strong</span> move.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-9 max-w-md text-lg leading-relaxed text-white/65">A different kind of training club. Less noise. Better coaching. A community that keeps showing up.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-4 rounded-full bg-[#c8d96b] px-6 py-4 text-sm font-semibold text-[#111310] transition-transform hover:-translate-y-1">Start your trial <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
              <Link href="#programs" className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-4 text-sm font-semibold transition-colors hover:bg-white/10"><Play className="size-4 fill-current" /> Explore the club</Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative h-[420px] overflow-hidden rounded-[2rem] lg:h-[560px]">
            <Image src="/images/hero/hero.png" alt="Athlete training at Stallion Xtreme Fitness" fill priority className="object-cover object-center grayscale-[.15]" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111310]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between"><span className="max-w-[160px] text-sm leading-snug text-white/80">Train with intent.<br />Leave with energy.</span><span className="rounded-full border border-white/30 px-3 py-2 font-mono text-[10px] uppercase tracking-widest">01 / 04</span></div>
          </motion.div>
        </div>
        <div className="absolute bottom-7 left-6 hidden font-mono text-[10px] uppercase tracking-[.3em] text-white/30 md:left-12 lg:block">Scroll to find your edge ↓</div>
      </section>

      <section className="border-b border-[#111310]/15 bg-[#c8d96b] px-6 py-5 md:px-12"><div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4"><p className="font-mono text-[11px] font-bold uppercase tracking-[.22em]">Not a gym. Your new baseline.</p><p className="text-sm font-medium">Personal training · open gym · recovery · community</p></div></section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 lg:px-20 lg:py-36"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="eyebrow">01 / The approach</p><h2 className="mt-5 max-w-md font-display text-6xl leading-[.9] tracking-[-.05em] md:text-8xl">Train for <em className="font-display text-[#67732f]">more.</em></h2></div><div className="max-w-2xl pt-2"><p className="text-2xl leading-tight tracking-tight md:text-4xl">The best version of you is not hiding in a mirror. It is built in the small choices you make, week after week.</p><p className="mt-8 max-w-lg text-base leading-relaxed text-black/60">We pair world-class facilities with coaches who listen. Whether you are here to lift heavier, move freely, or simply feel at home in your body, your plan starts where you are.</p><Link href="/about-us" className="mt-9 inline-flex items-center gap-2 border-b border-black pb-2 text-sm font-bold uppercase tracking-wider">Why Stallion <ArrowUpRight className="size-4" /></Link></div></div></section>

      <section id="programs" className="bg-[#111310] px-6 py-24 text-[#f3f0e9] md:px-12 lg:px-20 lg:py-32"><div className="mx-auto max-w-[1600px]"><div className="flex flex-wrap items-end justify-between gap-8"><div><p className="eyebrow text-[#c8d96b]">02 / Find your practice</p><h2 className="mt-5 font-display text-6xl leading-[.85] tracking-[-.05em] md:text-8xl">Your kind<br /><span className="text-white/45">of strong.</span></h2></div><Link href="/stallions" className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm hover:bg-white/10">View all programs <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div><div className="mt-16 grid gap-5 md:grid-cols-3">{programs.map((program) => <motion.article whileHover={{ y: -8 }} transition={{ duration: .25 }} key={program.number} className="group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5"><div className="relative h-72 overflow-hidden"><Image src={program.image} alt={program.title} fill className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#111310] to-transparent" /></div><div className="p-6"><div className="flex justify-between font-mono text-xs text-[#c8d96b]"><span>{program.number}</span><Plus className="size-4" /></div><h3 className="mt-12 font-display text-4xl tracking-tight">{program.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/55">{program.copy}</p></div></motion.article>)}</div></div></section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 lg:px-20 lg:py-36"><div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]"><div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-[#ded9ce]"><Image src="/images/aboutus/about.png" alt="Stallion community training together" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute bottom-5 left-5 rounded-full bg-[#c8d96b] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-widest">Built for showing up</div></div><div><p className="eyebrow">03 / The club effect</p><h2 className="mt-5 font-display text-6xl leading-[.86] tracking-[-.05em] md:text-8xl">Good energy<br /><span className="text-[#67732f]">is contagious.</span></h2><div className="mt-10 grid gap-6 border-t border-black/15 pt-6">{["Coaches who know your name", "A plan that adapts with you", "A space you actually want to return to"].map((item) => <div key={item} className="flex items-center gap-4"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#111310] text-[#c8d96b]"><Check className="size-4" /></span><span className="text-lg">{item}</span></div>)}</div></div></div></section>

      <section className="bg-[#d9d4c8] px-6 py-20 md:px-12 lg:px-20"><div className="mx-auto max-w-[1600px]"><div className="grid grid-cols-1 gap-8 border-y border-black/20 py-8 md:grid-cols-3">{stats.map(([value, label]) => <div key={label}><p className="font-display text-6xl tracking-[-.06em] md:text-8xl">{value}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-black/55">{label}</p></div>)}</div></div></section>

      <section className="bg-[#c8d96b] px-6 py-24 md:px-12 lg:px-20 lg:py-36"><div className="mx-auto max-w-[1600px] text-center"><Sparkles className="mx-auto size-7" /><h2 className="mx-auto mt-7 max-w-4xl font-display text-6xl leading-[.83] tracking-[-.06em] md:text-9xl">Ready to feel<br />like yourself?</h2><p className="mx-auto mt-8 max-w-md text-base">Your first session is on us. Come see what a better training routine feels like.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#111310] px-7 py-4 text-sm font-semibold text-[#f3f0e9] transition-transform hover:-translate-y-1">Book a free tour <ArrowUpRight className="size-4" /></Link></div></section>

      <footer className="bg-[#111310] px-6 py-12 text-[#f3f0e9] md:px-12 lg:px-20"><div className="mx-auto flex max-w-[1600px] flex-col gap-12 md:flex-row md:items-end md:justify-between"><div><p className="font-display text-5xl tracking-[-.05em]">STALLION<span className="text-[#c8d96b]">.</span></p><p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/40">Train different / Live stronger</p></div><div className="flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-widest text-white/60"><Link href="/about-us" className="hover:text-[#c8d96b]">About</Link><Link href="/events" className="hover:text-[#c8d96b]">Events</Link><Link href="/branches" className="hover:text-[#c8d96b]">Locations</Link><Link href="/contact" className="hover:text-[#c8d96b]">Contact</Link></div><p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40"><MapPin className="size-3" /> Hyderabad, India</p></div></footer>
    </main>
  );
}

// Keep this page intentionally self-contained so the new landing experience has a clear visual system.
