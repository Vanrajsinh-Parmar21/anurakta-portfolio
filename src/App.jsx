import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Activity, Award, Mail, Phone, Download, MapPin } from 'lucide-react';

const Portfolio = () => {
  // --- ANIMATION VARIANTS ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2C3531] font-sans selection:bg-[#8E7C93] selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full top-0 bg-[#F9F8F6]/90 backdrop-blur-sm z-50 border-b border-[#EFEBE4]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-serif text-xl tracking-wide text-[#4A5D4E]">AR.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#4A5D4E]/80">
            <a href="#about" className="hover:text-[#4A5D4E] transition-colors">About</a>
            <a href="#clinical" className="hover:text-[#4A5D4E] transition-colors">Clinical Experience</a>
            <a href="#research" className="hover:text-[#4A5D4E] transition-colors">Research & Skills</a>
          </div>
          <button className="flex items-center gap-2 bg-[#4A5D4E] text-[#F9F8F6] px-4 py-2 rounded-full text-sm hover:bg-[#3A4A3E] transition-colors duration-300">
            <Download size={16} /> CV
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.p variants={fadeIn} className="text-[#8E7C93] font-medium tracking-widest uppercase text-sm mb-4">
            Empathy • Rigor • Resilience
          </motion.p>
          <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl text-[#4A5D4E] mb-6 leading-tight">
            Anurakta Ray
          </motion.h1>
          <motion.h2 variants={fadeIn} className="text-xl md:text-2xl text-[#4A5D4E]/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Clinical Psychology student seeking to deepen the understanding of psychological assessment, treatment, and human-centric patient care.
          </motion.h2>
          <motion.div variants={fadeIn} className="flex justify-center gap-6">
            <a href="#contact" className="border border-[#4A5D4E] text-[#4A5D4E] px-8 py-3 rounded-full hover:bg-[#4A5D4E] hover:text-[#F9F8F6] transition-all duration-500">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- ACADEMIC EXCELLENCE --- */}
      <section id="about" className="py-20 px-6 bg-[#EFEBE4]/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <BookOpen className="mx-auto text-[#8E7C93] mb-4" size={32} />
            <h2 className="font-serif text-3xl text-[#4A5D4E]">Academic Foundation</h2>
            <div className="h-px w-24 bg-[#8E7C93]/30 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Education Cards */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#4A5D4E]/5 hover:shadow-md transition-shadow duration-500">
              <span className="text-[#8E7C93] text-sm font-bold tracking-wider">2024 - 2026</span>
              <h3 className="font-serif text-xl text-[#4A5D4E] mt-2 mb-1">M.Sc. Clinical Psychology</h3>
              <p className="text-[#4A5D4E]/70 mb-4">National Forensic Sciences University (INI)</p>
              <div className="inline-block bg-[#EFEBE4] text-[#4A5D4E] px-3 py-1 rounded-md text-sm font-medium">CGPA: 8.79/10</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#4A5D4E]/5 hover:shadow-md transition-shadow duration-500">
              <span className="text-[#8E7C93] text-sm font-bold tracking-wider">2021 - 2024</span>
              <h3 className="font-serif text-xl text-[#4A5D4E] mt-2 mb-1">B.Sc. (Hons) Psychology</h3>
              <p className="text-[#4A5D4E]/70 mb-4">Sarojini Naidu College for Women</p>
              <div className="inline-block bg-[#EFEBE4] text-[#4A5D4E] px-3 py-1 rounded-md text-sm font-medium">CGPA: 9.45/10</div>
            </div>
            
            <div className="md:col-span-2 bg-[#4A5D4E] text-[#F9F8F6] p-8 rounded-2xl flex items-center justify-between">
               <div>
                 <h3 className="font-serif text-xl mb-2">UGC NET Qualified</h3>
                 <p className="text-[#F9F8F6]/80 text-sm">Qualified for Assistant Professorship</p>
               </div>
               <div className="text-3xl font-light">91st Percentile</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CLINICAL & VOLUNTEER EXPERIENCE --- */}
      <section id="clinical" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
          <Activity className="mx-auto text-[#8E7C93] mb-4" size={32} />
          <h2 className="font-serif text-3xl text-[#4A5D4E]">Clinical Dedication & Impact</h2>
          <p className="text-[#4A5D4E]/70 mt-4 max-w-2xl mx-auto">Committed to rigorous hands-on practice in high-intensity psychiatric and community settings.</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#EFEBE4]">
          
          {/* Experience Item 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#F9F8F6] bg-[#8E7C93] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm"></div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-[#EFEBE4] transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
              <div className="flex flex-col mb-2">
                <span className="text-[#8E7C93] text-sm font-bold">Jan 2026 - Mar 2026</span>
                <h3 className="font-serif text-lg text-[#4A5D4E]">Clinical Psychology Intern</h3>
              </div>
              <p className="text-[#4A5D4E]/70 text-sm">Calcutta Pavlov Medical Hospital, Park Circus</p>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#F9F8F6] bg-[#4A5D4E] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm"></div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-[#EFEBE4] transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
              <div className="flex flex-col mb-2">
                <span className="text-[#8E7C93] text-sm font-bold">May 2025 - Jun 2025</span>
                <h3 className="font-serif text-lg text-[#4A5D4E]">Clinical Psychology Intern</h3>
              </div>
              <p className="text-[#4A5D4E]/70 text-sm">Antara Psychiatric Hospital, Baruipur</p>
            </div>
          </div>

          {/* Volunteer Item */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#F9F8F6] bg-[#D9D0C1] text-[#4A5D4E] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm">
                <Heart size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-[#EFEBE4] transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
              <div className="flex flex-col mb-2">
                <span className="text-[#8E7C93] text-sm font-bold">Mar 2026 - Present</span>
                <h3 className="font-serif text-lg text-[#4A5D4E]">Volunteer</h3>
              </div>
              <p className="text-[#4A5D4E]/70 text-sm mb-2">Sujata Child NGO, Belgachia & Prodigal's Home, Dimapur</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- SKILLS & RESEARCH --- */}
      <section id="research" className="py-20 px-6 bg-[#4A5D4E] text-[#F9F8F6]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-serif text-3xl mb-8">Research Focus</h2>
            <div className="p-8 rounded-2xl border border-[#F9F8F6]/20 bg-white/5 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-[#F9F8F6]/90 mb-6">
                    Primary research interests lie at the intersection of <span className="text-[#D9D0C1] font-semibold">Social Psychology</span> and <span className="text-[#D9D0C1] font-semibold">Minority Studies</span>, focusing on structural inequalities and community-level psychological well-being.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-[#F9F8F6]/10 rounded-full text-sm">SPSS</span>
                    <span className="px-3 py-1 bg-[#F9F8F6]/10 rounded-full text-sm">Clinical Report Writing</span>
                    <span className="px-3 py-1 bg-[#F9F8F6]/10 rounded-full text-sm">Scientific Writing</span>
                </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-8">Clinical Toolkit</h2>
            <div className="grid grid-cols-2 gap-4">
                {[
                    "DSM-5 Diagnostics", 
                    "Art Therapy Interventions", 
                    "Clinical Observation", 
                    "Active Listening", 
                    "Interpersonal Dynamics", 
                    "Guidance Counseling",
                    "Graphology",
                    "Proofreading"
                ].map(skill => (
                    <div key={skill} className="p-4 rounded-xl bg-[#F9F8F6]/5 border border-[#F9F8F6]/10 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8E7C93]"></div>
                        <span className="text-sm font-medium">{skill}</span>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer id="contact" className="py-20 px-6 text-center">
        <h2 className="font-serif text-3xl text-[#4A5D4E] mb-8">Let's Connect</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a href="mailto:anuraktaray03@gmail.com" className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white shadow-sm text-[#4A5D4E] hover:shadow-md transition-shadow">
                <Mail size={18} className="text-[#8E7C93]" /> anuraktaray03@gmail.com
            </a>
            <a href="tel:+918961391389" className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white shadow-sm text-[#4A5D4E] hover:shadow-md transition-shadow">
                <Phone size={18} className="text-[#8E7C93]" /> +91 8961391389
            </a>
            <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white shadow-sm text-[#4A5D4E]">
                <MapPin size={18} className="text-[#8E7C93]" /> Kolkata, India
            </div>
        </div>
        <p className="text-sm text-[#4A5D4E]/50">© 2026 Anurakta Ray. Clinical Psychology Portfolio.</p>
      </footer>

    </div>
  );
};

export default Portfolio;