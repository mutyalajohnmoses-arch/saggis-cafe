import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowUpRight, Instagram, MapPin, Menu as MenuIcon, MessageCircle, Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP = '918317428385';
const INSTAGRAM = 'https://www.instagram.com/saggis_cafe/';
const MAPS = 'https://www.google.com/maps/search/?api=1&query=Saggi%27s%20Cafe';

const nav = [
  ['/', 'Home'], ['/menu', 'Menu'], ['/gallery', 'Gallery'], ['/about', 'About'], ['/contact', 'Contact']
];

function ScrollTop() { const { pathname } = useLocation(); useEffect(() => window.scrollTo(0, 0), [pathname]); return null; }

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link className="brand" to="/" onClick={() => setOpen(false)}><span>SAGGI'S</span><small>CAFE</small></Link>
    <nav className="desktop-nav">{nav.map(([to, label]) => <NavLink key={to} to={to} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav>
    <div className="header-actions"><a className="icon-link" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a><a className="book-btn" href={`https://wa.me/${WHATSAPP}?text=Hi%20Saggi's%20Cafe`} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15}/></a><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <MenuIcon/>}</button></div>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>{nav.map(([to,label]) => <NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}<a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">Start a conversation ↗</a></motion.nav>}</AnimatePresence>
  </header>
}

function Grain(){ return <div className="grain" aria-hidden="true"/> }
function SectionTag({children}:{children:string}){ return <div className="section-tag"><i/> {children}</div> }
function Reveal({children,delay=0,className=''}:{children:React.ReactNode,delay?:number,className?:string}){ return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div> }

const gallery = [
  {src:'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1400&q=85', label:'The room'},
  {src:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85', label:'Coffee ritual'},
  {src:'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85', label:'Slow mornings'},
  {src:'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=85', label:'Gather here'},
  {src:'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85', label:'Little details'},
  {src:'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85', label:'After hours'}
];

function Home(){ return <>
  <section className="hero"><div className="hero-bg"/><div className="hero-overlay"/><div className="hero-content"><SectionTag>WELCOME TO SAGGI'S</SectionTag><h1>A place for<br/><em>good</em> things.</h1><p>A considered cafe experience made for slow mornings, good conversations and moments worth lingering over.</p><div className="hero-buttons"><Link className="primary-btn" to="/menu">Explore the menu <ArrowUpRight size={16}/></Link><Link className="text-btn" to="/gallery">See the space <span>↗</span></Link></div></div><div className="hero-note">EST. — SAGGI'S CAFE <span>•</span> EVERYDAY MOMENTS</div><div className="scroll-cue">SCROLL <span/></div></section>
  <section className="intro section"><div className="intro-grid"><Reveal><SectionTag>THE SAGGI'S FEELING</SectionTag><h2>More than coffee.<br/><span>A little pause.</span></h2></Reveal><Reveal delay={.1}><p className="large-copy">Some places ask you to hurry. We made ours to do the opposite. Come in, settle down, and make a little room for the moment.</p><Link className="arrow-link" to="/about">Discover our story <ArrowUpRight size={17}/></Link></Reveal></div></section>
  <section className="feature-image"><img src={gallery[3].src} alt="Cafe interior"/><div className="feature-caption"><span>01</span><strong>A space designed to linger.</strong><span>Explore →</span></div></section>
  <section className="menu-teaser section"><div className="section-head"><div><SectionTag>THE MENU</SectionTag><h2>Simple. Thoughtful.<br/><em>Delicious.</em></h2></div><p>Our menu is built around the things that make a cafe worth returning to. <Link to="/menu">View menu →</Link></p></div><div className="menu-cards"><div><span>01</span><h3>Coffee</h3><p>For the first cup, the second cup, and everything between.</p></div><div><span>02</span><h3>Food</h3><p>Comforting plates and small bites made for the table.</p></div><div><span>03</span><h3>Moments</h3><p>A good seat, a familiar face, nowhere else to be.</p></div></div></section>
  <section className="marquee"><div>COFFEE • CONVERSATIONS • COMMUNITY • SLOW MOMENTS • </div><div>COFFEE • CONVERSATIONS • COMMUNITY • SLOW MOMENTS • </div></section>
  <section className="visit section"><div><SectionTag>COME BY</SectionTag><h2>Your next favourite<br/><em>corner.</em></h2></div><div className="visit-card"><p>Find us, say hello, and stay awhile.</p><a href={MAPS} target="_blank" rel="noreferrer"><MapPin size={18}/> Open in Google Maps <ArrowUpRight size={15}/></a><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp us <ArrowUpRight size={15}/></a></div></section>
</> }

function MenuPage(){ return <main className="page"><div className="page-hero"><SectionTag>SAGGI'S MENU</SectionTag><h1>Made for<br/><em>the moment.</em></h1><p>A beautiful placeholder structure for your real menu. Add confirmed items and prices here without changing the design.</p></div><section className="menu-list section"><div className="menu-warning">MENU CONTENT <span>—</span> READY FOR YOUR FINAL ITEMS & PRICES</div>{['Coffee & Tea','Food & Bites','Something Sweet'].map((cat,i)=><Reveal key={cat} delay={i*.08}><div className="menu-category"><div className="category-title"><span>0{i+1}</span><h2>{cat}</h2></div><div className="empty-menu"><p>Curated selection</p><span>Add your confirmed menu items here</span></div></div></Reveal>)}</section></main> }

function Gallery(){ return <main className="page"><div className="page-hero gallery-hero"><SectionTag>THE SPACE</SectionTag><h1>Come for the coffee.<br/><em>Stay for the feeling.</em></h1></div><section className="gallery-grid section">{gallery.map((item,i)=><Reveal key={item.src} delay={(i%3)*.06} className={i===0||i===3?'tall':''}><figure><img src={item.src} alt={item.label}/><figcaption><span>0{i+1}</span>{item.label}<b>↗</b></figcaption></figure></Reveal>)}</section></main> }

function About(){ return <main className="page"><div className="page-hero"><SectionTag>ABOUT SAGGI'S</SectionTag><h1>Built around<br/><em>belonging.</em></h1><p>SAGGI'S is a space for everyday rituals — the kind that become part of your week before you even notice.</p></div><section className="about-story section"><div className="story-number">01</div><div><h2>A cafe can be a<br/><em>feeling.</em></h2><p>We believe the best cafes aren't only about what's in the cup. They're about the light on the table, the music in the background, the friend who stayed longer than planned.</p><p>This page is intentionally built without invented claims about the cafe. Your real story, history, team and values can be dropped into this structure when confirmed.</p></div></section><section className="about-image"><img src={gallery[0].src} alt="Warm cafe table"/></section></main> }

function Contact(){ return <main className="page contact-page"><div className="page-hero"><SectionTag>LET'S CONNECT</SectionTag><h1>See you<br/><em>soon.</em></h1><p>Questions, directions, collaborations or simply saying hello — we're one message away.</p></div><section className="contact-grid section"><div className="contact-main"><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="contact-row"><span>WhatsApp</span><strong>+91 83174 28385</strong><ArrowUpRight/></a><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="contact-row"><span>Instagram</span><strong>@saggis_cafe</strong><ArrowUpRight/></a><a href={MAPS} target="_blank" rel="noreferrer" className="contact-row"><span>Location</span><strong>Open Google Maps</strong><ArrowUpRight/></a></div><div className="contact-aside"><div className="map-art"><MapPin size={30}/><span>SAGGI'S CAFE</span></div><p>Use the map link for the latest location details. Exact address and opening hours can be added once confirmed.</p></div></section></main> }

function Footer(){ return <footer><div className="footer-top"><Link className="brand footer-brand" to="/"><span>SAGGI'S</span><small>CAFE</small></Link><p>Good things happen<br/>when you slow down.</p><div className="footer-links"><Link to="/menu">Menu</Link><Link to="/gallery">Gallery</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SAGGI'S CAFE</span><span>Made with intention.</span><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram ↗</a></div></footer> }

export default function App(){ return <><ScrollTop/><Grain/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/menu" element={<MenuPage/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/></Routes><Footer/></> }
