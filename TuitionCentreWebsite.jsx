import { useState, useEffect, useRef } from "react";
import {
  BookOpen, Users, Award, Clock, Phone, Mail, MapPin,
  ChevronRight, Star, Menu, X, Facebook, Instagram, Youtube,
  CheckCircle, ArrowRight, MessageCircle, Navigation, Download,
  GraduationCap, FlaskConical, Calculator, Atom, Brain, Target,
  Calendar, ChevronDown, Send, Trophy, TrendingUp, Shield
} from "lucide-react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  :root {
    --blue: #1E40AF;
    --blue-light: #3B82F6;
    --sky: #0EA5E9;
    --green: #16A34A;
    --gold: #D97706;
    --navy: #0F172A;
    --slate: #64748B;
    --bg: #F8FAFC;
    --white: #FFFFFF;
    --card-shadow: 0 4px 24px rgba(15,23,42,0.08);
    --hover-shadow: 0 12px 40px rgba(15,23,42,0.15);
  }
  
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--navy); }
  
  .serif { font-family: 'Cormorant Garamond', serif; }
  
  .nav-glass {
    backdrop-filter: blur(20px);
    background: rgba(255,255,255,0.92);
    border-bottom: 1px solid rgba(30,64,175,0.08);
  }
  
  .hero-bg {
    background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 40%, #1E40AF 70%, #1D4ED8 100%);
    position: relative;
    overflow: hidden;
  }
  
  .hero-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      radial-gradient(ellipse 80% 60% at 70% 50%, rgba(59,130,246,0.25) 0%, transparent 70%),
      radial-gradient(ellipse 50% 80% at 20% 80%, rgba(14,165,233,0.15) 0%, transparent 60%);
  }
  
  .hero-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  
  .floating-card {
    animation: float 6s ease-in-out infinite;
  }
  .floating-card:nth-child(2) { animation-delay: -2s; }
  .floating-card:nth-child(3) { animation-delay: -4s; }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .stat-card {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 16px;
    padding: 20px 24px;
    text-align: center;
    color: white;
  }
  
  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(30,64,175,0.08);
    color: var(--blue);
    font-size: 13px;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 100px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  
  .course-card {
    background: white;
    border-radius: 20px;
    padding: 32px;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(15,23,42,0.06);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .course-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 4px;
    border-radius: 20px 20px 0 0;
  }
  
  .course-card:nth-child(1)::before { background: linear-gradient(90deg, #1E40AF, #3B82F6); }
  .course-card:nth-child(2)::before { background: linear-gradient(90deg, #0EA5E9, #38BDF8); }
  .course-card:nth-child(3)::before { background: linear-gradient(90deg, #16A34A, #4ADE80); }
  .course-card:nth-child(4)::before { background: linear-gradient(90deg, #D97706, #FCD34D); }
  .course-card:nth-child(5)::before { background: linear-gradient(90deg, #9333EA, #C084FC); }
  
  .course-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--hover-shadow);
    border-color: rgba(30,64,175,0.15);
  }
  
  .faculty-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(15,23,42,0.06);
    transition: all 0.3s ease;
  }
  
  .faculty-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--hover-shadow);
  }
  
  .faculty-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 32px;
    font-weight: 700;
    color: white;
    margin: 0 auto 16px;
  }
  
  .testimonial-card {
    background: white;
    border-radius: 20px;
    padding: 32px;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(15,23,42,0.06);
    position: relative;
  }
  
  .testimonial-card::before {
    content: '"';
    font-family: 'Cormorant Garamond', serif;
    font-size: 80px;
    color: var(--blue-light);
    opacity: 0.2;
    position: absolute;
    top: 16px;
    left: 24px;
    line-height: 1;
  }
  
  .schedule-row:nth-child(even) {
    background: rgba(30,64,175,0.04);
  }
  
  .schedule-row:hover {
    background: rgba(30,64,175,0.08);
  }
  
  .form-input {
    width: 100%;
    padding: 14px 16px;
    border: 1.5px solid rgba(15,23,42,0.12);
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--navy);
    background: white;
    transition: all 0.2s;
    outline: none;
  }
  
  .form-input:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 4px rgba(30,64,175,0.08);
  }
  
  .form-label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--navy);
    margin-bottom: 8px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #1E40AF, #2563EB);
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(30,64,175,0.35);
  }
  
  .btn-outline {
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.5);
    padding: 14px 28px;
    border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    backdrop-filter: blur(8px);
  }
  
  .btn-outline:hover {
    background: rgba(255,255,255,0.15);
    border-color: white;
  }
  
  .about-bg {
    background: linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%);
  }
  
  .contact-bg {
    background: linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%);
  }
  
  .footer-bg {
    background: #0B1120;
  }
  
  .nav-link {
    color: var(--navy);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
    cursor: pointer;
  }
  
  .nav-link:hover { color: var(--blue); }
  
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 100px;
  }
  
  .icon-box {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    flex-shrink: 0;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #1E40AF, #0EA5E9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .scroll-fade {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .scroll-fade.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    .hero-stats { flex-direction: column; gap: 12px; }
    .hero-btns { flex-direction: column; }
  }
`;

const courses = [
  {
    icon: <Calculator size={24} />,
    title: "Mathematics Coaching",
    level: "Class 8–12",
    desc: "Master algebra, trigonometry, calculus, and statistics with structured problem-solving approaches and regular practice sessions.",
    color: "#1E40AF",
    bg: "#EFF6FF",
    topics: ["Algebra", "Calculus", "Statistics"]
  },
  {
    icon: <Atom size={24} />,
    title: "Physics & Chemistry",
    level: "Class 10–12",
    desc: "Conceptual clarity and numerical practice for board exams. Covers mechanics, thermodynamics, organic chemistry, and more.",
    color: "#0EA5E9",
    bg: "#F0F9FF",
    topics: ["Mechanics", "Thermodynamics", "Organic Chem"]
  },
  {
    icon: <BookOpen size={24} />,
    title: "Foundation Classes",
    level: "Class 6–8",
    desc: "Build a rock-solid academic foundation with interactive learning methods that make core subjects engaging and easy to understand.",
    color: "#16A34A",
    bg: "#F0FDF4",
    topics: ["Maths", "Science", "English"]
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Board Exam Preparation",
    level: "Class 10 & 12",
    desc: "Dedicated CBSE / ICSE / State Board preparation with full-length mock tests, past papers, and expert revision techniques.",
    color: "#D97706",
    bg: "#FFFBEB",
    topics: ["Mock Tests", "Past Papers", "Revision"]
  },
  {
    icon: <Target size={24} />,
    title: "Competitive Exam Prep",
    level: "JEE / NEET / Olympiad",
    desc: "Specialized coaching for entrance exams with speed-accuracy training, concept mapping, and personalized performance tracking.",
    color: "#9333EA",
    bg: "#FAF5FF",
    topics: ["JEE", "NEET", "Olympiad"]
  },
];

const faculty = [
  { name: "Mr. Rahul Sharma", subject: "Mathematics", exp: "12 Years", qual: "M.Sc. Mathematics, BEd", initial: "RS", color: "#1E40AF" },
  { name: "Ms. Priya Debnath", subject: "Chemistry", exp: "9 Years", qual: "M.Sc. Chemistry", initial: "PD", color: "#0EA5E9" },
  { name: "Mr. Anil Das", subject: "Physics", exp: "15 Years", qual: "M.Sc. Physics, BEd", initial: "AD", color: "#16A34A" },
  { name: "Ms. Rupa Chakma", subject: "Biology", exp: "7 Years", qual: "M.Sc. Botany, BEd", initial: "RC", color: "#D97706" },
];

const testimonials = [
  { name: "Supriya Roy", class: "Class 12 – 2024", score: "94%", text: "This tuition centre transformed my understanding of Mathematics. The teaching style is exceptional and the mock test series really helped me score 94% in boards.", stars: 5 },
  { name: "Arjun Datta", class: "Class 10 – 2024", score: "91%", text: "The faculty here explains every concept from scratch. I was struggling with Physics but now it's my strongest subject. Cleared boards with flying colours!", stars: 5 },
  { name: "Mrs. Kaveri Nath", class: "Parent", score: "", text: "As a parent, I'm extremely satisfied. Teachers are dedicated, disciplined, and genuinely care about each student's progress. Highly recommend to all parents.", stars: 5 },
  { name: "Ritesh Majumdar", class: "JEE Aspirant", score: "Top 5%", text: "The competitive exam coaching here is outstanding. The doubt-clearing sessions saved me hours of confusion. Got into NIT with their guidance!", stars: 5 },
];

const schedule = [
  { day: "Monday", subject: "Mathematics", time: "7:00 AM – 9:00 AM", level: "Class 10–12", color: "#EFF6FF", tc: "#1E40AF" },
  { day: "Tuesday", subject: "Physics", time: "7:00 AM – 9:00 AM", level: "Class 11–12", color: "#F0F9FF", tc: "#0EA5E9" },
  { day: "Wednesday", subject: "Chemistry", time: "7:00 AM – 9:00 AM", level: "Class 11–12", color: "#F0FDF4", tc: "#16A34A" },
  { day: "Thursday", subject: "Practice Tests", time: "7:00 AM – 10:00 AM", level: "All Classes", color: "#FFFBEB", tc: "#D97706" },
  { day: "Friday", subject: "Doubt Clearing", time: "7:00 AM – 9:00 AM", level: "All Classes", color: "#FAF5FF", tc: "#9333EA" },
  { day: "Saturday", subject: "Foundation Batch", time: "10:00 AM – 12:00 PM", level: "Class 6–9", color: "#FFF1F2", tc: "#E11D48" },
];

function useScrollFade() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.classList.add("visible");
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ScrollSection({ children, style = {}, className = "" }) {
  const ref = useScrollFade();
  return <div ref={ref} className={`scroll-fade ${className}`} style={style}>{children}</div>;
}

export default function TuitionCentreWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", grade: "", subject: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", grade: "", subject: "", phone: "", email: "", message: "" });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F8FAFC" }}>
      <style>{styles}</style>

      {/* NAVBAR */}
      <nav className={scrolled ? "nav-glass" : ""} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 24px",
        transition: "all 0.3s ease",
        background: scrolled ? undefined : "transparent",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#1E40AF,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GraduationCap size={22} color="white" />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: scrolled ? "#0F172A" : "white", lineHeight: 1 }}>Vidya Academy</div>
              <div style={{ fontSize: 11, color: scrolled ? "#64748B" : "rgba(255,255,255,0.7)", lineHeight: 1.2 }}>Agartala, Tripura</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden-mobile" id="nav-links">
            {["home", "about", "courses", "faculty", "schedule", "contact"].map(n => (
              <span key={n} className="nav-link" onClick={() => scrollTo(n)}
                style={{ color: scrolled ? "#0F172A" : "rgba(255,255,255,0.85)", textTransform: "capitalize" }}>
                {n}
              </span>
            ))}
            <button className="btn-primary" onClick={() => scrollTo("enroll")} style={{ padding: "10px 20px", fontSize: 14 }}>
              Enroll Now
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: scrolled ? "#0F172A" : "white" }} id="menu-btn">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "white", borderTop: "1px solid #E2E8F0", padding: "16px 24px 24px", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
            {["home", "about", "courses", "faculty", "schedule", "contact"].map(n => (
              <div key={n} onClick={() => scrollTo(n)} style={{ padding: "12px 0", borderBottom: "1px solid #F1F5F9", cursor: "pointer", color: "#0F172A", fontWeight: 500, textTransform: "capitalize" }}>{n}</div>
            ))}
            <button className="btn-primary" onClick={() => scrollTo("enroll")} style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>Enroll Now</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 72 }}>
        <div className="hero-grid" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#93C5FD", padding: "8px 16px", borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 28, backdropFilter: "blur(8px)" }}>
                <Star size={14} fill="currentColor" /> Tripura's Most Trusted Coaching Centre
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 24 }}>
                Helping Students<br />
                <span style={{ color: "#93C5FD" }}>Achieve Academic</span><br />
                Excellence
              </h1>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
                Quality coaching for Mathematics, Science, and competitive exams in Agartala. Expert faculty, proven results, and personalized attention for every student.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
                <button className="btn-primary" onClick={() => scrollTo("enroll")} style={{ background: "white", color: "#1E40AF", fontSize: 16, padding: "16px 32px" }}>
                  Enroll Now <ArrowRight size={18} />
                </button>
                <button className="btn-outline" onClick={() => scrollTo("courses")} style={{ fontSize: 16, padding: "16px 32px" }}>
                  View Courses <ChevronRight size={18} />
                </button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { n: "500+", l: "Students Trained" },
                  { n: "10+", l: "Years Experience" },
                  { n: "95%", l: "Success Rate" },
                ].map(s => (
                  <div key={s.l} className="stat-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 700, color: "white", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
              <div className="floating-card" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: 28, width: "100%", maxWidth: 340 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(99,179,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Trophy size={24} color="#93C5FD" />
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: 16 }}>Top Results 2024</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>Board Exam Season</div>
                  </div>
                </div>
                {[["Mathematics", "97%", "#93C5FD"], ["Physics", "94%", "#86EFAC"], ["Chemistry", "92%", "#FCD34D"]].map(([s, p, c]) => (
                  <div key={s} style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>{s}</span>
                      <span style={{ color: "white", fontWeight: 600, fontSize: 13 }}>{p}</span>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 4, height: 6 }}>
                      <div style={{ background: c, borderRadius: 4, height: 6, width: p }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="floating-card" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: 20, width: "75%", maxWidth: 260, alignSelf: "flex-start", marginLeft: 24 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(134,239,172,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle size={22} color="#86EFAC" />
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 700, fontSize: 15 }}>New Batch Starting</div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12 }}>April 2025 – Limited Seats</div>
                  </div>
                </div>
              </div>

              <div className="floating-card" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 20, padding: 20, width: "80%", maxWidth: 280, alignSelf: "flex-end" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#FCD34D" color="#FCD34D" />)}
                  <span style={{ color: "white", fontWeight: 600, fontSize: 14 }}>4.9/5</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.5 }}>"Best coaching in Agartala. My daughter scored 94% in boards!"</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 8 }}>— Mrs. Sutapa Roy, Parent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-bg" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollSection style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-tag"><BookOpen size={14} /> About Us</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#0F172A", marginBottom: 20 }}>
              Nurturing Excellence Since 2014
            </h2>
            <p style={{ fontSize: 18, color: "#64748B", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Vidya Academy has been Agartala's most trusted coaching centre, helping hundreds of students unlock their academic potential through personalized mentorship and rigorous academic training.
            </p>
          </ScrollSection>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <ScrollSection>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {[
                  { icon: <Users size={22} />, n: "500+", l: "Students Trained", c: "#1E40AF", bg: "#EFF6FF" },
                  { icon: <Clock size={22} />, n: "10+", l: "Years Experience", c: "#0EA5E9", bg: "#F0F9FF" },
                  { icon: <Trophy size={22} />, n: "95%", l: "Board Exam Success", c: "#16A34A", bg: "#F0FDF4" },
                  { icon: <GraduationCap size={22} />, n: "8", l: "Expert Faculty", c: "#D97706", bg: "#FFFBEB" },
                ].map(s => (
                  <div key={s.l} style={{ background: "white", borderRadius: 20, padding: "28px 24px", boxShadow: "0 4px 20px rgba(15,23,42,0.07)", border: "1px solid rgba(15,23,42,0.06)" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", color: s.c, marginBottom: 16 }}>{s.icon}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 700, color: "#0F172A", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: 14, color: "#64748B", marginTop: 6 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </ScrollSection>

            <ScrollSection>
              <div style={{ paddingLeft: 24 }}>
                <div className="section-tag"><Shield size={14} /> Our Promise</div>
                <h3 className="serif" style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, color: "#0F172A", marginBottom: 24, lineHeight: 1.2 }}>
                  Why Students Choose Vidya Academy
                </h3>
                {[
                  ["Personalized Attention", "Small batch sizes ensure every student gets individual focus and mentorship from expert teachers."],
                  ["Proven Track Record", "Our students consistently score above 90% in board exams and crack competitive entrance tests."],
                  ["Modern Teaching Methods", "Interactive sessions, digital tools, and concept-mapping techniques make learning effective and enjoyable."],
                  ["Regular Assessments", "Weekly tests and monthly mock exams with detailed performance analysis and parent feedback."],
                ].map(([title, desc]) => (
                  <div key={title} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <CheckCircle size={16} color="#1E40AF" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: "#0F172A", marginBottom: 4 }}>{title}</div>
                      <div style={{ fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollSection style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-tag"><BookOpen size={14} /> Our Courses</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#0F172A", marginBottom: 20 }}>
              Courses Designed for Excellence
            </h2>
            <p style={{ fontSize: 18, color: "#64748B", maxWidth: 560, margin: "0 auto" }}>
              Comprehensive coaching programs tailored for every stage of a student's academic journey.
            </p>
          </ScrollSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
            {courses.map((c, i) => (
              <ScrollSection key={c.title} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="course-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", color: c.color }}>{c.icon}</div>
                    <span style={{ background: c.bg, color: c.color, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>{c.level}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0F172A", marginBottom: 12 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.7, marginBottom: 20 }}>{c.desc}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                    {c.topics.map(t => (
                      <span key={t} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#475569", fontSize: 12, fontWeight: 500, padding: "4px 10px", borderRadius: 6 }}>{t}</span>
                    ))}
                  </div>
                  <button onClick={() => scrollTo("enroll")} style={{ display: "flex", alignItems: "center", gap: 6, color: c.color, fontWeight: 600, fontSize: 14, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                    Enroll in this course <ArrowRight size={16} />
                  </button>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section id="faculty" style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollSection style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-tag"><Users size={14} /> Our Faculty</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#0F172A", marginBottom: 20 }}>
              Learn from the Best
            </h2>
            <p style={{ fontSize: 18, color: "#64748B", maxWidth: 500, margin: "0 auto" }}>
              Our dedicated faculty brings years of teaching expertise and genuine passion for student success.
            </p>
          </ScrollSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            {faculty.map((f, i) => (
              <ScrollSection key={f.name} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="faculty-card">
                  <div style={{ padding: "40px 28px 32px", textAlign: "center", background: `linear-gradient(135deg, ${f.color}12, ${f.color}04)` }}>
                    <div className="faculty-avatar" style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}CC)` }}>
                      {f.initial}
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{f.name}</h3>
                    <div style={{ fontSize: 14, color: f.color, fontWeight: 600, marginBottom: 4 }}>{f.subject}</div>
                    <div style={{ fontSize: 13, color: "#64748B" }}>{f.qual}</div>
                  </div>
                  <div style={{ padding: "20px 28px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <Clock size={14} color="#64748B" />
                      <span style={{ fontSize: 13, color: "#64748B" }}>{f.exp}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#FCD34D" color="#FCD34D" />)}
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollSection style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-tag"><Star size={14} /> Success Stories</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#0F172A", marginBottom: 20 }}>
              What Our Students Say
            </h2>
          </ScrollSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
            {testimonials.map((t, i) => (
              <ScrollSection key={t.name} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="testimonial-card">
                  <div style={{ display: "flex", marginBottom: 16 }}>
                    {Array(t.stars).fill(0).map((_, i) => <Star key={i} size={16} fill="#FCD34D" color="#FCD34D" />)}
                  </div>
                  <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 24, paddingTop: 8 }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#1E40AF,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: 18 }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#0F172A" }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: "#64748B" }}>{t.class} {t.score && `• ${t.score}`}</div>
                    </div>
                  </div>
                </div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollSection style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-tag"><Calendar size={14} /> Class Schedule</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#0F172A", marginBottom: 20 }}>
              Weekly Class Timetable
            </h2>
            <p style={{ fontSize: 18, color: "#64748B" }}>Morning batches for school students, flexible timings available on request.</p>
          </ScrollSection>

          <ScrollSection>
            <div style={{ background: "white", borderRadius: 24, overflow: "hidden", boxShadow: "0 4px 32px rgba(15,23,42,0.1)", border: "1px solid rgba(15,23,42,0.06)" }}>
              <div style={{ background: "linear-gradient(135deg,#1E40AF,#2563EB)", padding: "20px 32px", display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr 1fr", gap: 16 }}>
                {["Day", "Subject", "Time", "Level"].map(h => (
                  <div key={h} style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</div>
                ))}
              </div>
              {schedule.map((row, i) => (
                <div key={row.day} className="schedule-row" style={{ padding: "20px 32px", display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr 1fr", gap: 16, borderBottom: i < schedule.length - 1 ? "1px solid #F1F5F9" : "none", alignItems: "center", transition: "background 0.2s" }}>
                  <div style={{ fontWeight: 700, color: "#0F172A", fontSize: 15 }}>{row.day}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: row.tc, flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, color: row.tc, fontSize: 15 }}>{row.subject}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#64748B" }}>{row.time}</div>
                  <span style={{ background: row.color, color: row.tc, fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 100, width: "fit-content" }}>{row.level}</span>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#64748B", fontSize: 14, marginTop: 20 }}>
              📞 Call us for special batch timings or weekend sessions.
            </p>
          </ScrollSection>
        </div>
      </section>

      {/* CTA BANNER */}
      <div style={{ background: "linear-gradient(135deg,#1E3A8A,#1E40AF,#2563EB)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, color: "white", marginBottom: 16 }}>
            New Batch Starting April 2025
          </div>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 18, marginBottom: 36 }}>Limited seats available. Enroll today to secure your spot and begin your journey to academic excellence.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("enroll")} style={{ background: "white", color: "#1E40AF", border: "none", padding: "16px 32px", borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              Reserve Your Seat <ArrowRight size={18} />
            </button>
            <a href="https://wa.me/919876543210" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", color: "white", border: "2px solid rgba(255,255,255,0.3)", padding: "16px 32px", borderRadius: 12, fontWeight: 600, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ENROLLMENT FORM */}
      <section id="enroll" style={{ padding: "100px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <ScrollSection style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag"><Send size={14} /> Enrollment</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#0F172A", marginBottom: 16 }}>
              Start Your Journey Today
            </h2>
            <p style={{ fontSize: 18, color: "#64748B" }}>Fill in your details and our team will get back to you within 24 hours to confirm enrollment.</p>
          </ScrollSection>

          <ScrollSection>
            <div style={{ background: "white", borderRadius: 28, padding: "48px", boxShadow: "0 8px 48px rgba(15,23,42,0.1)", border: "1px solid rgba(15,23,42,0.06)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#F0FDF4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                    <CheckCircle size={36} color="#16A34A" />
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 700, color: "#0F172A", marginBottom: 12 }}>Enrollment Request Sent!</h3>
                  <p style={{ color: "#64748B", fontSize: 16 }}>Our team will contact you within 24 hours. Welcome to Vidya Academy!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
                    <div>
                      <label className="form-label">Student Name *</label>
                      <input className="form-input" placeholder="Enter full name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                    </div>
                    <div>
                      <label className="form-label">Class / Grade *</label>
                      <select className="form-input" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})} required>
                        <option value="">Select class</option>
                        {["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Competitive Exam"].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Subject / Course *</label>
                      <select className="form-input" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} required>
                        <option value="">Select subject</option>
                        {["Mathematics", "Physics", "Chemistry", "Biology", "All Subjects", "Board Exam Prep", "JEE / NEET Coaching"].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input className="form-input" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label className="form-label">Email Address</label>
                      <input className="form-input" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label className="form-label">Message (Optional)</label>
                      <textarea className="form-input" placeholder="Tell us about your learning goals or any specific requirements..." rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ resize: "vertical" }} />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "18px", fontSize: 16 }}>
                    Submit Enrollment Request <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </ScrollSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-bg" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollSection style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#93C5FD", padding: "6px 14px", borderRadius: 100, fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
              <MapPin size={14} /> Contact & Location
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "white", marginBottom: 20 }}>
              Visit Us in Agartala
            </h2>
          </ScrollSection>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>
            <ScrollSection>
              <div>
                {[
                  { icon: <MapPin size={20} />, title: "Address", val: "Vidya Academy, Near Central Bus Stand, Agartala, Tripura – 799001", color: "#60A5FA" },
                  { icon: <Phone size={20} />, title: "Phone", val: "+91 98765 43210", color: "#34D399" },
                  { icon: <Mail size={20} />, title: "Email", val: "info@vidyaacademy.in", color: "#FCD34D" },
                  { icon: <Clock size={20} />, title: "Hours", val: "Mon–Sat: 6:30 AM – 8:00 PM", color: "#F87171" },
                ].map(c => (
                  <div key={c.title} style={{ display: "flex", gap: 16, marginBottom: 28, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: c.color, flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{c.title}</div>
                      <div style={{ color: "white", fontSize: 15, lineHeight: 1.5 }}>{c.val}</div>
                    </div>
                  </div>
                ))}

                <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
                  <a href="tel:+919876543210" className="btn-primary" style={{ background: "#16A34A", fontSize: 14, padding: "12px 20px" }}>
                    <Phone size={16} /> Call Now
                  </a>
                  <a href="https://wa.me/919876543210" className="btn-primary" style={{ background: "#25D366", fontSize: 14, padding: "12px 20px" }}>
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: 14, padding: "12px 20px" }}>
                    <Navigation size={16} /> Get Directions
                  </a>
                </div>
              </div>
            </ScrollSection>

            <ScrollSection>
              <div style={{ borderRadius: 24, overflow: "hidden", height: 400, border: "2px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.3!2d91.2!3d23.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375346f7a0a0a0a0%3A0x0!2sAgartala%2C+Tripura!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Vidya Academy Location"
                />
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-bg" style={{ padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#1E40AF,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GraduationCap size={22} color="white" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: "white" }}>Vidya Academy</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Agartala, Tripura</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.8, maxWidth: 280, marginBottom: 28 }}>
                Empowering students across Agartala with quality education and personalized mentorship since 2014.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { icon: <Facebook size={16} />, label: "Facebook" },
                  { icon: <Instagram size={16} />, label: "Instagram" },
                  { icon: <Youtube size={16} />, label: "YouTube" },
                ].map(s => (
                  <a key={s.label} href="#" style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.target.style.background = "#1E40AF"; e.target.style.color = "white"; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.06)"; e.target.style.color = "rgba(255,255,255,0.6)"; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {[
              { title: "Quick Links", links: ["Home", "About Us", "Courses", "Faculty", "Schedule", "Contact"] },
              { title: "Courses", links: ["Mathematics", "Physics & Chemistry", "Foundation Batch", "Board Exam Prep", "JEE / NEET"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ color: "white", fontWeight: 700, fontSize: 15, marginBottom: 20 }}>{col.title}</div>
                {col.links.map(l => (
                  <div key={l} style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 12, cursor: "pointer", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#93C5FD"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>
                    {l}
                  </div>
                ))}
              </div>
            ))}

            <div>
              <div style={{ color: "white", fontWeight: 700, fontSize: 15, marginBottom: 20 }}>Stay Updated</div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>Get exam tips and batch announcements in your inbox.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input placeholder="Your email address" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "white", fontSize: 14, fontFamily: "'DM Sans',sans-serif", outline: "none" }} />
                <button style={{ background: "linear-gradient(135deg,#1E40AF,#2563EB)", color: "white", border: "none", padding: "12px", borderRadius: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>© 2025 Vidya Academy, Agartala. All rights reserved.</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>Designed for academic excellence in Tripura.</div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          #nav-links { display: none !important; }
          #menu-btn { display: flex !important; }
          .hero-bg > div > div { grid-template-columns: 1fr !important; }
          .hero-bg > div > div > div:last-child { display: none !important; }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="grid-template-columns: 1fr 1.5fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; }
          .form-input + .form-input { margin-top: 0; }
          div[style*="grid-template-columns: 1fr 1fr"][style*="gap: 24px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
