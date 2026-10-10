"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [["About", "/about-us"], ["Programs", "/stallions"], ["Events", "/events"], ["Locations", "/branches"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#111310]/90 backdrop-blur-md" : ""}`}>
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <Link href="/" className="font-display text-3xl tracking-[-.06em] text-[#f3f0e9]">STALLION<span className="text-[#c8d96b]">.</span></Link>
        <nav className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="font-mono text-[10px] uppercase tracking-[.2em] text-white/70 transition hover:text-[#c8d96b]">{label}</Link>)}</nav>
        <div className="flex items-center gap-3"><Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#c8d96b] px-4 py-2.5 text-xs font-bold text-[#111310] transition hover:bg-white md:flex">Get started <ArrowUpRight className="size-3" /></Link><button onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} className="rounded-full border border-white/25 p-2 text-white md:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button></div>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-30 flex flex-col justify-center bg-[#111310] px-8 text-[#f3f0e9]"><div className="flex flex-col gap-5">{links.map(([label, href], index) => <motion.div key={href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .07 }}><Link onClick={() => setOpen(false)} href={href} className="font-display text-6xl tracking-[-.05em]">{label}<span className="text-[#c8d96b]">.</span></Link></motion.div>)}</div><Link onClick={() => setOpen(false)} href="/contact" className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-[#c8d96b] px-6 py-4 text-sm font-bold text-[#111310]">Book a tour <ArrowUpRight className="size-4" /></Link></motion.div>}</AnimatePresence>
  </>;
}
