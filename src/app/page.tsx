"use client";

import Link from "next/link";
import { ArrowRight, Zap, Shield, Clock, Terminal, CheckCircle2, ChevronRight, Activity, Globe } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const dict = {
  id: {
    badge: "API v2 kini live",
    title1: "Bypass Delta.",
    title2: "Tanpa ribet.",
    desc: "API untuk mem-bypass sistem key Delta Executor di Roblox. Pasang langsung di bot Discord atau website kamu.",
    readDocs: "Baca Dokumentasi",
    viewRef: "Lihat Referensi",
    reqProcessed: "// Diproses dalam 720ms",
    integrates: "MENDUKUNG",
    scaleTitle: "Dibuat untuk trafik tinggi.",
    scaleDesc: "Tidak lagi menggunakan headless browser yang rentan error. Kami memproses token secara langsung lewat HTTP.",
    bento1Title: "~7-10s Latensi Global",
    bento1Desc: "Sistem routing kami menekan waktu tunggu. Link diselesaikan via pool request terdistribusi.",
    bento2Title: "Validitas 24 Jam Penuh",
    bento2Desc: "Token tidak dibuat berulang kali. Setiap token yang dihasilkan akan aktif selama 24 jam penuh.",
    bento3Title: "Menangani Rate-Limit",
    bento3Desc: "Sistem antrean dan pengulangan otomatis kami menahan blokir dari vendor.",
    bento4Title: "SDK Asli",
    bento4Desc: "Tersedia package siap pakai untuk Python, Node.js, dan Luau (Roblox).",
    ctaTitle: "Mulai sekarang.",
    ctaDesc: "Baca dokumentasi dan jalankan request pertamamu hari ini.",
    startBuilding: "Mulai Build",
    reference: "Referensi",
  },
  en: {
    badge: "API v2 is live",
    title1: "Bypass Delta.",
    title2: "Zero latency.",
    desc: "The developer API for bypassing the Delta Executor key system in Roblox. Drop it into your Discord bot or website.",
    readDocs: "Read Documentation",
    viewRef: "View API Reference",
    reqProcessed: "// Processed in 720ms",
    integrates: "SUPPORTS",
    scaleTitle: "Built for high volume.",
    scaleDesc: "We skip flaky headless browsers and resolve tokens directly over HTTP.",
    bento1Title: "~7-10s Global Latency",
    bento1Desc: "Our routed request pool minimizes TTFB. Your links are solved through optimized pathways.",
    bento2Title: "24-Hour Lifecycle",
    bento2Desc: "Tokens aren't generated on the fly. They are locked and valid for a full 24 hours.",
    bento3Title: "Rate Limit Handling",
    bento3Desc: "Automatic backoff and retry logic handles vendor rate limits for you.",
    bento4Title: "Native SDKs",
    bento4Desc: "Official libraries for Python, Node.js, and Luau (Roblox).",
    ctaTitle: "Start sending requests.",
    ctaDesc: "Read the reference documentation and make your first call today.",
    startBuilding: "Start Building",
    reference: "Reference",
  }
};

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<"id" | "en">("id");
  const t = dict[lang];

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  useGSAP(() => {
    gsap.from(".gsap-nav", { y: -20, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(".gsap-hero-el", { y: 30, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 });
    gsap.from(".gsap-hero-code", { y: 50, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });
    gsap.from(".gsap-hero-card", { y: 40, opacity: 0, scale: 0.95, duration: 1, ease: "back.out(1.2)", delay: 0.9 });
    
    gsap.from(".gsap-logo", {
      scrollTrigger: { trigger: ".gsap-logo-section", start: "top 85%" },
      y: 20, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out"
    });

    gsap.from(".gsap-bento-title", {
      scrollTrigger: { trigger: ".gsap-bento-section", start: "top 80%" },
      y: 30, opacity: 0, duration: 1, ease: "power3.out"
    });

    gsap.from(".gsap-bento-card", {
      scrollTrigger: { trigger: ".gsap-bento-section", start: "top 65%" },
      y: 50, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out"
    });

    gsap.from(".gsap-cta", {
      scrollTrigger: { trigger: ".gsap-cta-section", start: "top 80%" },
      y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: "power3.out"
    });
  }, { scope: container });

  const toggleLang = () => setLang(l => l === "id" ? "en" : "id");

  return (
    <div ref={container} className="min-h-[100dvh] bg-[#050505] text-zinc-100 font-sans selection:bg-violet-500/30 overflow-hidden">
      {/* Background Noise & Gradients */}
      <div className="fixed inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none" style={{ backgroundImage: 'url("https://framerusercontent.com/images/rR6HYXBrMmX4cTwEXZGW4WEspko.png")', backgroundRepeat: 'repeat' }}></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-900/20 blur-[120px] pointer-events-none -z-10"></div>
      
      {/* Navigation */}
      <nav className="gsap-nav fixed top-0 left-0 right-0 z-50 border-b border-white/[0.05] bg-[#050505]/60 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/40">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 tracking-tight hover:opacity-80 transition-opacity">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white !text-black">
              <Zap className="h-3.5 w-3.5" fill="currentColor" />
            </div>
            <span className="text-[15px] font-bold text-white">Pandu<span className="text-violet-400 drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]">Bypass</span></span>
          </button>
          
          <div className="flex items-center gap-4 lg:gap-6 text-sm font-medium">
            <Link href="/docs" className="text-zinc-500 hover:text-zinc-200 transition-colors hidden sm:block">{t.reference}</Link>
            
            {/* Lang Switcher */}
            <button onClick={toggleLang} className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors" aria-label="Toggle Language">
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase">{lang}</span>
            </button>
            
            <Link 
              href="/docs" 
              className="group relative flex h-8 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
            >
              {t.startBuilding}
              <ChevronRight className="h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-24 lg:pt-48 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="max-w-2xl">
                <div className="gsap-hero-el mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-300 uppercase tracking-widest">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-500"></span>
                  </span>
                  {t.badge}
                </div>
                
                <h1 
                  className="gsap-hero-el font-extrabold tracking-[-0.05em] text-white leading-[0.92] mb-6"
                  style={{ fontSize: "clamp(3.5rem, 12vw, 7rem)" }}
                >
                  {t.title1}<br />
                  <span className="text-zinc-600">{t.title2}</span>
                </h1>
                
                <p className="gsap-hero-el text-zinc-400 leading-relaxed max-w-[42ch] mb-10 font-medium" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}>
                  {t.desc}
                </p>
                
                <div className="gsap-hero-el flex flex-wrap items-center gap-4">
                  <Link 
                    href="/docs"
                    className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold !text-black transition-all hover:scale-[0.98] hover:bg-zinc-200"
                  >
                    {t.readDocs}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link 
                    href="/docs#examples"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-zinc-300 transition-all hover:bg-white/5 hover:text-white"
                  >
                    {t.viewRef}
                  </Link>
                </div>
              </div>

              {/* Right Column - Premium Code Window Overlap */}
              <div className="relative w-full h-[400px] lg:h-auto lg:aspect-square max-w-[600px] mx-auto lg:ml-auto mt-8 lg:mt-0">
                {/* Main Code Editor */}
                <div className="gsap-hero-code absolute right-0 top-0 w-full lg:w-[110%] rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl shadow-2xl overflow-hidden z-10 transform transition-transform hover:-translate-y-1 duration-500">
                  <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                    </div>
                    <span className="ml-2 flex-1 text-center text-[10px] font-medium tracking-widest text-zinc-500 uppercase">request.ts</span>
                  </div>
                  <div className="p-4 sm:p-6 text-[11px] sm:text-[13px] font-mono leading-loose text-zinc-400 overflow-x-auto">
                    <span className="text-violet-400">const</span> response = <span className="text-violet-400">await</span> fetch(<span className="text-zinc-100">"https://bypass.panduhub.com/bypass"</span>, {`{`}<br/>
                    &nbsp;&nbsp;method: <span className="text-zinc-100">"POST"</span>,<br/>
                    &nbsp;&nbsp;headers: {`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-100">"x-api-key"</span>: <span className="text-zinc-100">"pk_live_..."</span><br/>
                    &nbsp;&nbsp;{`}`},<br/>
                    &nbsp;&nbsp;body: JSON.stringify({`{`}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;url: <span className="text-zinc-100">"https://gateway.delta.../getkey"</span><br/>
                    &nbsp;&nbsp;{`}`})<br/>
                    {`}`});<br/><br/>
                    <span className="text-zinc-600">{t.reqProcessed}</span><br/>
                    <span className="text-violet-400">const</span> {`{`} key {`}`} = <span className="text-violet-400">await</span> response.json();
                  </div>
                </div>

                {/* Overlapping Response Card */}
                <div className="gsap-hero-card absolute bottom-0 right-4 sm:-bottom-8 sm:-left-8 lg:-left-16 w-[85%] sm:w-[80%] rounded-xl border border-violet-500/20 bg-[#0A0A0A]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(139,92,246,0.15)] p-4 sm:p-5 z-20 transform transition-transform hover:-translate-y-2 duration-500">
                  <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                      <span className="text-[11px] sm:text-xs font-semibold text-green-400 tracking-wide">200 OK</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500">720ms</span>
                  </div>
                  <pre className="text-[10px] sm:text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto">
{`{
  "status": "success",
  "key": "FREE_8a9b2c4...",
  "validity_hours": 24
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Strip with Real Icons */}
        <section className="gsap-logo-section py-14 border-y border-white/[0.05] bg-white/[0.01] overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="gsap-logo text-center text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-8">{t.integrates}</p>
            <div className="gsap-logo flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-16 gap-y-8">
              
              {/* Node.js */}
              <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
                <svg viewBox="0 0 128 128" width="28" height="28">
                  <path fill="#5FA04E" d="M106.879 26.697l-39.736-22.955c-1.956-1.129-4.331-1.129-6.287 0l-39.736 22.955c-1.956 1.129-3.144 3.187-3.144 5.445v45.91c0 2.257 1.188 4.315 3.144 5.445l39.736 22.955c1.956 1.129 4.331 1.129 6.287 0l39.736-22.955c1.956-1.129 3.144-3.187 3.144-5.445v-45.91c0-2.258-1.188-4.316-3.144-5.445zM67.067 87.584l-22.183-12.809v-25.617l22.183-12.809 22.183 12.809v25.617l-22.183 12.809z"/>
                  <path fill="#ffffff" d="M67.067 52.883v21.579l-13.439-7.756v-21.579l13.439 7.756z"/>
                  <path fill="#ffffff" d="M67.067 52.883v-15.511l13.439 7.756v15.511l-13.439-7.756z"/>
                </svg>
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Node.js</span>
              </div>
              
              {/* Python */}
              <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
                <svg viewBox="0 0 128 128" width="28" height="28">
                  <path fill="#387EB8" d="M63.856 14.86c-21.905 0-21.144 9.5-21.144 9.5l-.014 9.948h21.61v3.076H43.102S23.702 36.315 23.702 59.505c0 23.189 16.924 22.046 16.924 22.046h7.79v-11.03s-.086-13.336 13.51-13.336c13.595 0 21.666 0 21.666 0s12.56-.23 12.56-12.06c0-11.832 0-20.73 0-20.73s.772-12.656-12.862-12.656h-14.89l.012-7.165s1.258-9.712-14.557-9.712zM52.023 23.013c2.316 0 4.195 1.876 4.195 4.194a4.193 4.193 0 0 1-4.195 4.192 4.192 4.192 0 0 1-4.192-4.192c0-2.318 1.876-4.194 4.192-4.194z"/>
                  <path fill="#FFE052" d="M64.673 113.14c21.905 0 21.146-9.5 21.146-9.5l.012-9.948H64.223v-3.076h21.206s19.4-1.07 19.4-24.26c0-23.189-16.924-22.046-16.924-22.046h-7.792v11.03s.087 13.335-13.509 13.335c-13.595 0-21.666 0-21.666 0s-12.559.23-12.559 12.06c0 11.832 0 20.73 0 20.73s-.772 12.656 12.861 12.656h14.89l-.011 7.165s-1.258 9.712 14.556 9.712zM76.505 104.986a4.191 4.191 0 0 1-4.194-4.192 4.193 4.193 0 0 1 4.194-4.194 4.195 4.195 0 0 1 4.194 4.194 4.193 4.193 0 0 1-4.194 4.192z"/>
                </svg>
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Python</span>
              </div>
              
              {/* Golang */}
              <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
                <svg viewBox="0 0 128 128" width="34" height="28">
                  <path fill="#00ADD8" d="M37.3 64.9c1.9 1 3.5 2.5 5 4.4L53.7 58c-4-4.9-9.5-8.6-16.4-10.2-12.2-2.9-25.2 1.3-33 11-4 5.3-6 12.1-5.6 18.9.2 6.5 3 12.8 7.5 17.5 8 8.6 20.3 12 31.6 8.5 7.9-2.3 14.5-7.6 19-14.7l-9.1-8.3c-2.8 4.7-7.4 8.2-12.8 9.2-8.5 1.7-17-2.6-20.7-10.3-3.6-7.5-1.9-16.7 4.1-22.4 4.7-4.4 11.5-6 17.9-4.4 3.9.7 7.5 2.7 10 5.6zM88.9 50.1c-15.6.7-27.4 14.1-26.6 29.7.7 15.6 14 27.4 29.6 26.6 15.6-.7 27.4-14.1 26.6-29.6-.8-15.5-14.1-27.3-29.6-26.7zm2.4 45.6c-10 1.2-19.1-5.7-20.6-15.6-1.5-10.1 5.3-19.4 15.4-21 9.9-1.5 19.3 5.3 20.9 15.3 1.5 10.1-5.3 19.4-15.3 21 0 .2-.2.3-.4.3zm-63-31c3.5 1.1 6.1-1.3 7-4.1.9-2.9-1.2-5.9-4.8-7.1-3.6-1.1-7.3 0-8.2 2.9-1 2.8 1.5 6.4 5 8.1zm21.4-17c3.5 1.1 6.1-1.3 7-4.1.9-2.9-1.2-5.9-4.8-7.1-3.6-1.1-7.3 0-8.2 2.9-1 2.8 1.5 6.4 5 8.1zm33.4 3.5c-3.1-.7-6.2.7-7 3.3-.8 2.6 1 5.5 4.1 6.3 3.1.8 6.3-.7 7-3.3s-.9-5.5-4-6.3zm19.9-22c1.7-2.8 1-6.1-1.6-7.3-2.6-1.2-6 .1-7.7 2.9-1.7 2.8-1 6.1 1.5 7.3 2.7 1.2 6.1-.1 7.8-2.9zM76.9 13.9c1.7-2.8 1-6.1-1.6-7.3C72.8 5.4 69.4 6.7 67.7 9.5c-1.7 2.8-1 6.1 1.6 7.3 2.6 1.3 5.9 0 7.6-2.9zm-38 31c1.7-2.8 1-6.1-1.6-7.3-2.6-1.2-6 .1-7.7 2.9-1.7 2.8-1 6.1 1.6 7.3 2.6 1.3 6 0 7.7-2.9z"/>
                </svg>
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Golang</span>
              </div>
              
              {/* Luau */}
              <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Luau</span>
              </div>
              
              {/* cURL */}
              <div className="flex flex-col items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
                <Terminal className="w-7 h-7 text-zinc-300" strokeWidth={2.5} />
                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">cURL</span>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="gsap-bento-section py-32 lg:py-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="gsap-bento-title mb-20 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">{t.scaleTitle}</h2>
              <p className="text-lg text-zinc-400 font-medium">{t.scaleDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              
              <div className="gsap-bento-card md:col-span-2 rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-10 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute right-0 top-0 w-[60%] h-full opacity-20 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cTwEXZGW4WEspko.png')] mix-blend-screen pointer-events-none transition-opacity group-hover:opacity-40"></div>
                <div className="relative z-10 mb-24">
                  <div className="h-12 w-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-8">
                    <Activity className="h-6 w-6" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.bento1Title}</h3>
                  <p className="text-zinc-400 max-w-md">{t.bento1Desc}</p>
                </div>
              </div>

              <div className="gsap-bento-card rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-10 flex flex-col justify-between">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-24">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{t.bento2Title}</h3>
                  <p className="text-sm text-zinc-400">{t.bento2Desc}</p>
                </div>
              </div>

              <div className="gsap-bento-card rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-10 flex flex-col justify-between">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 mb-24">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{t.bento3Title}</h3>
                  <p className="text-sm text-zinc-400">{t.bento3Desc}</p>
                </div>
              </div>

              <div className="gsap-bento-card md:col-span-2 lg:col-span-2 rounded-[2rem] border border-white/5 bg-gradient-to-br from-violet-500/10 to-transparent p-10 flex flex-col sm:flex-row gap-8 items-center justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300 mb-6">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{t.bento4Title}</h3>
                  <p className="text-sm text-zinc-400 max-w-sm">{t.bento4Desc}</p>
                </div>
                <div className="w-full sm:w-auto">
                  <Link 
                    href="/docs"
                    className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold !text-black transition-all hover:bg-zinc-200"
                  >
                    {t.readDocs}
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gsap-cta-section py-32 relative border-t border-white/5 bg-[#050505]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="gsap-cta text-4xl lg:text-6xl font-bold tracking-[-0.02em] text-white mb-8">{t.ctaTitle}</h2>
            <p className="gsap-cta text-xl text-zinc-400 mb-12 max-w-[40ch] mx-auto font-medium">{t.ctaDesc}</p>
            <div className="gsap-cta">
              <Link 
                href="/docs"
                className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-10 text-base font-semibold !text-black transition-all hover:scale-[0.98] hover:bg-zinc-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                {t.readDocs}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.05] bg-[#000] py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-medium tracking-tight opacity-50">
              <Zap className="h-4 w-4" />
              <span className="text-sm">PanduBypass</span>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6 text-zinc-500">
              <Link href="#" className="hover:text-violet-400 transition-colors" aria-label="Discord">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
              </Link>
              <Link href="#" className="hover:text-white transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0011.14 4.15c.18-.21.34-.44.49-.69V9.65a8.23 8.23 0 005.37 2v-3.45a4.7 4.7 0 01-2.41-1.51z"/></svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-600 font-medium mt-4 md:mt-0">
            <Link href="/docs" className="hover:text-zinc-300 transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <p className="text-zinc-600">© 2026 Pandu Bypass.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
