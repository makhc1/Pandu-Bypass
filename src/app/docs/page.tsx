"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Record<string, string>>({
    res: "ok",
    req: "curl"
  });

  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const spies = document.querySelectorAll('.spy');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((es) => {
        es.forEach(e => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
          }
        });
      }, { rootMargin: '-42% 0px -52% 0px', threshold: 0 });
      spies.forEach(s => obs.observe(s));
    }
  }, []);

  const handleCopy = async (text: string, e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    try {
      await navigator.clipboard.writeText(text);
      btn.classList.add("ok");
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Copied';
      setTimeout(() => {
        btn.classList.remove("ok");
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy';
      }, 1300);
    } catch (err) {}
  };

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "auth", label: "Authentication" },
    { id: "params", label: "Parameters" },
    { id: "response", label: "Response" },
    { id: "errors", label: "Error codes" },
    { id: "examples", label: "Examples" },
    { id: "notes", label: "Notes" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="page-layout">
     <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
     <aside className={`side ${isMobileMenuOpen ? 'open' : ''}`}>
      <Link href="/" className="brand" style={{textDecoration: "none"}}><span className="dot"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Pandu<b>Bypass</b></Link>
      <div className="brandsub">API Reference</div>
      <nav className="nav">
       <div className="nlabel">Guide</div>
       {navLinks.map(link => (
         <a key={link.id} className={`navlink ${activeSection === link.id ? 'active' : ''}`} href={`#${link.id}`} onClick={() => handleNavClick(link.id)}><span className="nd"></span>{link.label}</a>
       ))}
      </nav>
      <div className="sfoot"><span className="stat"><span className="live"></span>API operational</span><br/>Pandu Bypass</div>
     </aside>
     <main className="main-content">
      <div className="mobile-header">
        <Link href="/" className="brand" style={{textDecoration: "none"}}><span className="dot"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>Pandu<b>Bypass</b></Link>
        <button className="menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </div>
      <header className="hero spy" id="overview">
       <span className="eyebrow"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>REST API</span>
       <h1>Pandu Bypass API</h1>
       <p className="lead">Turn a get-key link into a working key over plain HTTP. Send the link with your API key, get a <code className="icode">FREE_</code> key back in about 7–10 seconds.</p>
       <div className="chips">
        <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" strokeLinecap="round"/></svg>API-key auth</span>
        <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8 0h3a2 2 0 002-2v-3m0-8V5a2 2 0 00-2-2h-3"/></svg>JSON response</span>
        <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><b>~7–10s</b> latency</span>
        <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12h18" transform="rotate(45 12 12)"/><circle cx="12" cy="12" r="9"/></svg>Key valid <b>24h</b></span>
       </div>
       <div className="endpoint">
        <div className="methods"><span className="m get">GET</span><span className="m post">POST</span></div>
        <div className="url"><span className="p">https://bypass.panduhub.com</span>/bypass</div>
        <button className="copy" onClick={(e) => handleCopy("https://bypass.panduhub.com/bypass", e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
       </div>
      </header>
   
      <section className="section spy" id="auth">
       <h2><span className="bar"></span>Authentication</h2>
       <p className="desc">Every request must carry your API key. Send it as a header (recommended) or a query parameter.</p>
       <div className="card pad">
        <table>
         <tbody>
          <tr><th>Method</th><th>How</th></tr>
          <tr><td><b>Header</b> <span className="req">recommended</span></td><td><code className="icode">x-api-key: YOUR_KEY</code></td></tr>
          <tr><td><b>Query</b></td><td><code className="icode">?key=YOUR_KEY</code></td></tr>
         </tbody>
        </table>
       </div>
      </section>
   
      <section className="section spy" id="params">
       <h2><span className="bar"></span>Parameters</h2>
       <p className="desc">The endpoint accepts two inputs — your key and the link to bypass.</p>
       <div className="card">
        <table>
         <tbody>
          <tr><th>Parameter</th><th>In</th><th>Description</th></tr>
          <tr><td><code className="icode">key</code><span className="req">required</span></td><td>header / query</td><td>Your API key, issued by the provider. Send via <code className="icode">x-api-key</code> header or <code className="icode">?key=</code>.</td></tr>
          <tr><td><code className="icode">url</code><span className="req">required</span></td><td>query / body</td><td>The target URL, e.g. <code className="icode">https://target.com/link...</code></td></tr>
         </tbody>
        </table>
       </div>
      </section>
   
      <section className="section spy" id="response">
       <h2><span className="bar"></span>Response</h2>
       <p className="desc">Always <code className="icode">application/json</code>. On success the key sits in <code className="icode">key</code>; on failure read <code className="icode">code</code>.</p>
       <div className="card pad">
        <div className="tabs">
         <div className="tabbar" role="tablist">
          <button className={`tab ${activeTab.res === 'ok' ? 'active' : ''}`} onClick={() => setActiveTab(p => ({...p, res: 'ok'}))}>200 · Success</button>
          <button className={`tab ${activeTab.res === 'fail' ? 'active' : ''}`} onClick={() => setActiveTab(p => ({...p, res: 'fail'}))}>Failure</button>
         </div>
         <div className={`tabpane ${activeTab.res === 'ok' ? 'active' : ''}`}>
          <div className="codebox">
           <button className="copy" onClick={(e) => handleCopy('{\n  "status": "success",\n  "key": "FREE_xxxxxxxxxxxx",\n  "minutesLeft": 1439\n}', e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
           <pre><span className="tp">{`{`}</span>{`\n`}  <span className="tk">"status"</span>: <span className="ts">"success"</span>,{`\n`}  <span className="tk">"key"</span>: <span className="ts">"FREE_xxxxxxxxxxxx"</span>,{`\n`}  <span className="tk">"minutesLeft"</span>: <span className="tn">1439</span>{`\n`}<span className="tp">{`}`}</span></pre>
          </div>
         </div>
         <div className={`tabpane ${activeTab.res === 'fail' ? 'active' : ''}`}>
          <div className="codebox">
           <button className="copy" onClick={(e) => handleCopy('{\n  "status": "failed",\n  "code": "EXPIRED",\n  "result": "expired"\n}', e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
           <pre><span className="tp">{`{`}</span>{`\n`}  <span className="tk">"status"</span>: <span className="ts">"failed"</span>,{`\n`}  <span className="tk">"code"</span>: <span className="ts">"EXPIRED"</span>,{`\n`}  <span className="tk">"result"</span>: <span className="ts">"expired"</span>{`\n`}<span className="tp">{`}`}</span></pre>
          </div>
         </div>
        </div>
       </div>
      </section>
   
      <section className="section spy" id="errors">
       <h2><span className="bar"></span>Error codes</h2>
       <p className="desc">Failures return a machine-readable <code className="icode">code</code> with a matching HTTP status.</p>
       <div className="card">
        <table>
         <tbody>
          <tr><th>Code</th><th>HTTP</th><th>Meaning</th></tr>
          <tr><td><code className="icode">INVALID_KEY</code></td><td><span className="hp err">401</span></td><td>Key not found.</td></tr>
          <tr><td><code className="icode">REVOKED</code></td><td><span className="hp err">401</span></td><td>Key disabled by the seller.</td></tr>
          <tr><td><code className="icode">EXPIRED</code></td><td><span className="hp err">401</span></td><td>Subscription period ended.</td></tr>
          <tr><td><code className="icode">DAILY_LIMIT</code></td><td><span className="hp warn">429</span></td><td>Daily quota reached — resets at midnight UTC.</td></tr>
          <tr><td><code className="icode">RATE</code></td><td><span className="hp warn">429</span></td><td>Too many requests — slow down a few seconds.</td></tr>
          <tr><td><code className="icode">NO_URL</code></td><td><span className="hp warn">400</span></td><td>Missing or invalid <code className="icode">url</code>.</td></tr>
          <tr><td><code className="icode">FAILED</code> / <code className="icode">PROXY</code></td><td><span className="hp warn">200 / 502</span></td><td>Bypass could not complete (stale link, etc.) — retry with a fresh link.</td></tr>
         </tbody>
        </table>
       </div>
      </section>
   
      <section className="section spy" id="examples">
       <h2><span className="bar"></span>Examples</h2>
       <p className="desc">Replace <code className="icode">YOUR_KEY</code> and <code className="icode">TARGET_LINK</code> with your own values.</p>
       <div className="card pad">
        <div className="tabs">
         <div className="tabbar" role="tablist">
          <button className={`tab ${activeTab.req === 'curl' ? 'active' : ''}`} onClick={() => setActiveTab(p => ({...p, req: 'curl'}))}>cURL</button>
          <button className={`tab ${activeTab.req === 'python' ? 'active' : ''}`} onClick={() => setActiveTab(p => ({...p, req: 'python'}))}>Python</button>
          <button className={`tab ${activeTab.req === 'node' ? 'active' : ''}`} onClick={() => setActiveTab(p => ({...p, req: 'node'}))}>Node.js</button>
          <button className={`tab ${activeTab.req === 'luau' ? 'active' : ''}`} onClick={() => setActiveTab(p => ({...p, req: 'luau'}))}>Luau</button>
         </div>
         
         <div className={`tabpane ${activeTab.req === 'curl' ? 'active' : ''}`}>
          <div className="codebox">
           <div className="cbtop"><span className="cbtag">query param</span></div>
           <button className="copy" onClick={(e) => handleCopy('curl "https://bypass.panduhub.com/bypass?key=YOUR_KEY&url=TARGET_LINK"', e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
           <pre>curl "https://bypass.panduhub.com/bypass?key=YOUR_KEY&amp;url=TARGET_LINK"</pre>
          </div>
          <div className="codebox">
           <div className="cbtop"><span className="cbtag">header auth</span></div>
           <button className="copy" onClick={(e) => handleCopy('curl -H "x-api-key: YOUR_KEY" \\\n  "https://bypass.panduhub.com/bypass?url=TARGET_LINK"', e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
           <pre>curl -H "x-api-key: YOUR_KEY" \{`\n`}  "https://bypass.panduhub.com/bypass?url=TARGET_LINK"</pre>
          </div>
         </div>
         
         <div className={`tabpane ${activeTab.req === 'python' ? 'active' : ''}`}>
          <div className="codebox">
           <button className="copy" onClick={(e) => handleCopy('import requests\n\nr = requests.get("https://bypass.panduhub.com/bypass",\n    params={"url": TARGET_LINK},\n    headers={"x-api-key": "YOUR_KEY"},\n    timeout=90).json()\n\nprint(r["key"])', e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
           <pre><span className="tk">import</span> requests{`\n\n`}r = requests.get(<span className="ts">"https://bypass.panduhub.com/bypass"</span>,{`\n`}    params={`{`}<span className="ts">"url"</span>: TARGET_LINK{`}`},{`\n`}    headers={`{`}<span className="ts">"x-api-key"</span>: <span className="ts">"YOUR_KEY"</span>{`}`},{`\n`}    timeout=<span className="tn">90</span>).json(){`\n\n`}<span className="tk">print</span>(r[<span className="ts">"key"</span>])</pre>
          </div>
         </div>
         
         <div className={`tabpane ${activeTab.req === 'node' ? 'active' : ''}`}>
          <div className="codebox">
           <button className="copy" onClick={(e) => handleCopy('const r = await fetch(\n  "https://bypass.panduhub.com/bypass?url=" + encodeURIComponent(link),\n  { headers: { "x-api-key": "YOUR_KEY" } }\n).then(x => x.json());\n\nconsole.log(r.key);', e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
           <pre><span className="tk">const</span> r = <span className="tk">await</span> fetch({`\n`}  <span className="ts">"https://bypass.panduhub.com/bypass?url="</span> + encodeURIComponent(link),{`\n`}  {`{`} headers: {`{`} <span className="ts">"x-api-key"</span>: <span className="ts">"YOUR_KEY"</span> {`}`} {`}`}{`\n`}).then(x =&gt; x.json());{`\n\n`}console.log(r.key);</pre>
          </div>
         </div>
         
         <div className={`tabpane ${activeTab.req === 'luau' ? 'active' : ''}`}>
          <div className="codebox">
           <div className="cbtop"><span className="cbtag">in-game</span></div>
           <button className="copy" onClick={(e) => handleCopy('local Http = game:GetService("HttpService")\nlocal url = "https://bypass.panduhub.com/bypass?key=YOUR_KEY&url=" .. Http:UrlEncode(LINK)\nlocal res = Http:JSONDecode(game:HttpGet(url))\n\nprint(res.key)', e)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h10"/></svg>Copy</button>
           <pre><span className="tk">local</span> Http = game:GetService(<span className="ts">"HttpService"</span>){`\n`}<span className="tk">local</span> url = <span className="ts">"https://bypass.panduhub.com/bypass?key=YOUR_KEY&url="</span> .. Http:UrlEncode(LINK){`\n`}<span className="tk">local</span> res = Http:JSONDecode(game:HttpGet(url)){`\n\n`}<span className="tk">print</span>(res.key)</pre>
          </div>
         </div>
        </div>
       </div>
      </section>
   
      <section className="section spy" id="notes">
       <h2><span className="bar"></span>Notes</h2>
       <div className="card pad">
        <ul className="notes">
         <li><span className="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></span><span>Each request needs a <b>fresh</b> get-key link.</span></li>
         <li><span className="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span><span>Keys carry an <b>expiry</b> (rented days) and an optional <b>daily limit</b>, both set by the seller.</span></li>
         <li><span className="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></span><span>A per-key rate limit applies. If you hit <code className="icode">RATE</code>, wait a few seconds and retry.</span></li>
         <li><span className="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span>The returned key is valid for <b>24 hours</b> once generated.</span></li>
        </ul>
       </div>
      </section>
   
      <footer className="foot"><span>© 2026 Pandu Bypass</span><span><a href="#">Privacy</a> · <a href="#">Terms</a></span></footer>
     </main>
    </div>
  );
}

