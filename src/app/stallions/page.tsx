import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, Dumbbell, Flame, Trophy } from "lucide-react"
import Header from "@/components/layout/Header"

const divisions = [
  { number: "01", title: "Strength", text: "Build the kind of power that changes how you move through the world.", image: "/images/stallion/first.png" },
  { number: "02", title: "Conditioning", text: "Engineered sessions for stamina, speed, and an unshakeable work ethic.", image: "/images/stallion/second.png" },
  { number: "03", title: "Performance", text: "Train with intent. Move better. Show up ready for whatever comes next.", image: "/images/stallion/third.png" },
]

const promises = ["Coaching that meets you where you are", "A floor built for focused work", "A community that raises your standard"]

export default function StallionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111310] text-[#f3f0e9]">
      <section className="relative flex min-h-[88vh] items-end overflow-hidden border-b border-white/10">
        <Image src="/images/stallion/hero.png" alt="Athlete training in a Stallion gym" fill priority className="object-cover object-center opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-[#111310]/40 to-[#111310]/20" />
        <Header />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-36 md:px-12 lg:px-20 lg:pb-24">
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.24em] text-[#c8d96b]"><span className="size-2 rounded-full bg-[#c8d96b]" /> Stallion performance system / 01</div>
          <h1 className="max-w-5xl font-display text-[clamp(4rem,12vw,11rem)] leading-[.78] tracking-[-.08em]">Train like<br /><span className="text-[#c8d96b]">you mean it.</span></h1>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 md:flex-row md:items-end"><p className="max-w-md text-lg leading-relaxed text-white/70">A deliberate training environment for people who are done negotiating with their potential.</p><Link href="/contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#c8d96b] px-6 py-4 text-sm font-bold text-[#111310] transition hover:bg-white">Start your run <ArrowUpRight className="size-4" /></Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 lg:px-20 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-28"><div><p className="font-mono text-[10px] uppercase tracking-[.24em] text-[#c8d96b]">01 / The method</p><h2 className="mt-6 max-w-lg font-display text-5xl leading-[.9] tracking-[-.06em] md:text-7xl">No shortcuts.<br />Just <span className="text-[#c8d96b]">standards.</span></h2></div><div className="max-w-xl self-end"><p className="text-2xl leading-tight text-white/85 md:text-4xl">Stallion is not a room full of equipment. It is a place to get honest about the work.</p><p className="mt-8 leading-relaxed text-white/50">Our programs combine clear coaching, serious equipment, and an atmosphere that makes showing up feel like a decision worth making every day.</p></div></div>
        <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">{divisions.map((item) => <article key={item.number} className="group relative min-h-[420px] overflow-hidden bg-[#191b16] p-7"><Image src={item.image} alt="" fill className="object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-55" /><div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-transparent to-transparent" /><div className="relative z-10 flex h-full flex-col justify-between"><span className="font-mono text-xs text-[#c8d96b]">{item.number}</span><div><h3 className="font-display text-4xl tracking-[-.05em]">{item.title}</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">{item.text}</p></div></div></article>)}</div>
      </section>

      <section className="bg-[#c8d96b] px-6 py-24 text-[#111310] md:px-12 lg:px-20 lg:py-32"><div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1fr_1fr] lg:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[.24em]">02 / Your edge</p><h2 className="mt-6 max-w-3xl font-display text-6xl leading-[.84] tracking-[-.08em] md:text-8xl">Your next level needs a place.</h2></div><div><ul className="flex flex-col gap-5 border-t border-[#111310]/25 pt-6">{promises.map((promise, index) => <li key={promise} className="flex items-center gap-4 border-b border-[#111310]/25 pb-5 text-lg"><span className="font-mono text-xs">0{index + 1}</span><span>{promise}</span><Check className="ml-auto size-5" /></li>)}</ul><Link href="/branches" className="mt-8 inline-flex items-center gap-3 text-sm font-bold underline underline-offset-4">Find your nearest floor <ArrowUpRight className="size-4" /></Link></div></div></section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 lg:px-20 lg:py-32"><div className="flex flex-col justify-between gap-12 border-b border-white/15 pb-16 md:flex-row md:items-end"><div><p className="font-mono text-[10px] uppercase tracking-[.24em] text-[#c8d96b]">03 / Start now</p><h2 className="mt-5 max-w-2xl font-display text-6xl leading-[.84] tracking-[-.07em] md:text-8xl">Make the<br /><span className="text-[#c8d96b]">first move.</span></h2></div><p className="max-w-sm text-lg leading-relaxed text-white/55">Tell us where you are starting from. We will help you map the way forward.</p></div><div className="grid gap-6 pt-8 text-sm text-white/60 md:grid-cols-3"><div className="flex items-center gap-3"><Dumbbell className="size-5 text-[#c8d96b]" /> Personal training</div><div className="flex items-center gap-3"><Flame className="size-5 text-[#c8d96b]" /> Group performance</div><div className="flex items-center gap-3"><Trophy className="size-5 text-[#c8d96b]" /> Athlete development</div></div><Link href="/contact" className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 text-sm font-bold transition hover:border-[#c8d96b] hover:text-[#c8d96b]">Book a conversation <ArrowUpRight className="size-4" /></Link></section>
    </main>
  )
}
