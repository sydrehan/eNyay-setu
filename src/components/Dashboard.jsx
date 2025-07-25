import React from 'react';
import { Link } from 'react-router-dom';

// A helper component for the "Why Choose Us" cards
const FeatureCard = ({ number, title, description, delay }) => (
    <div className="bg-brand-secondary p-8 rounded-2xl border border-brand-gray transition-all duration-300 hover:border-brand-accent hover:-translate-y-2" style={{ animationDelay: delay }}>
        <div className="relative">
            <h3 className="text-2xl font-bold text-brand-light mb-2">{title}</h3>
            <span className="absolute -top-12 -left-4 text-6xl font-bold text-brand-gray opacity-20 playfair-display">{number}</span>
        </div>
        <p className="text-brand-light opacity-70">{description}</p>
    </div>
);


export default function Dashboard({ user }) {
  return (
    <main className="flex-1 overflow-y-auto bg-brand-dark">
      {/* Header section remains for user profile/login */}
      <header className="flex justify-between items-center p-6 md:p-10 sticky top-0 bg-brand-dark/80 backdrop-blur-sm z-20">
        <h2 className="text-4xl font-bold text-brand-light playfair-display">Home</h2>
        {/* User profile / login button */}
        <div className="flex items-center space-x-6">{user ? (<div className="flex items-center space-x-4"><div className="text-right hidden sm:block"><p className="font-semibold text-brand-light text-lg">{user.name}</p><p className="text-sm text-brand-gray capitalize">{user.role}</p></div><div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark font-bold text-xl shadow-lg"><span>{user.name.slice(0, 1).toUpperCase()}</span></div></div>) : (<Link to="/login" className="px-6 py-2 text-brand-dark bg-brand-accent hover:bg-opacity-90 rounded-lg font-semibold transition-colors text-lg shadow-md">Login / Register</Link>)}</div>
      </header>

      {/* --- 1. NEW HERO SECTION --- */}
      <section className="px-6 md:px-10 py-20 text-center animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-light playfair-display leading-tight">Resolve Legal Disputes</h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-brand-accent playfair-display leading-tight mt-2">Faster, Cheaper & Digitally</h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-gray">Welcome to eNyay Setu, India's leading platform for online dispute resolution. We empower businesses and individuals to settle disputes efficiently and securely.</p>
      </section>

      {/* --- 2. REORDERED CARDS SECTION --- */}
      <section className="px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Card 1: Register as Arbitrator (now on the left) */}
        <div className="bg-brand-secondary rounded-2xl p-8 text-center border border-brand-gray animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="p-5 bg-brand-dark rounded-full inline-block mb-6"><img alt="Gavel Icon" className="w-28 h-28" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG0MkHGshNGkWpBi_XaJ0Ur60b2HlwaZEguuNctIKH90hqpQK2ERT0fBlkYww69CKk8rAwYuforxS2lHBNRXM4J8lCuSDXMiukplE5kJH1sYuX-cAzCi3ow1C7IU5gxok3h8GT2PspOLUHsvJKQVvsfgXdgMhpDxTGzU8AyvIfQlaSImfKi_z3GH5OrxqMb1pFGY5aUQyY5OO_f8ckU70ZJZFgKW5Xy9qWmm17B0a5LA6a1eLSm6u10Qwl_BmzO2itK58p8PGbPkw" /></div>
          <h4 className="text-3xl font-bold text-brand-light playfair-display mb-3">Become an Arbitrator</h4>
          <p className="text-brand-gray mb-8 text-lg">Join our esteemed panel and help shape the future of justice.</p>
          <Link to="/register-arbitrator" className="inline-flex items-center justify-center px-8 py-4 text-brand-dark bg-brand-accent rounded-xl font-semibold transition-transform hover:scale-105 text-lg shadow-lg"><span>Register Now</span><span className="material-icons ml-3">arrow_forward</span></Link>
        </div>

        {/* Card 2: File a New Case (now on the right) */}
        <div className="bg-brand-secondary rounded-2xl p-8 text-center border border-brand-gray animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="p-5 bg-brand-dark rounded-full inline-block mb-6"><img alt="Legal Documents Icon" className="w-28 h-28" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqNYE1dpXO7JMRBQi1u9Pp2qsuSOw6afabyBlkJtNdqiYAwUfpxcJlgpsh8zs7V4ElIb7r7U3LkA9MOwxPM4Qrt635QYpwspfzzISFErCn8-t2Ro3rlSB5ZI7Mnho-uEhAJtAUMo_pj_RxB8gBChlVPVdCHSp2gVtT8SdhOzfblYp_AoftYdLxKw5zjSDFyRDMMs-v9mWcW1vFQZ2AmoI4XlFYVatTPgDGb6AZMZMGExl1cbR1su4QXP6eUSiypJdh1zjwDfXXCrI" /></div>
          <h4 className="text-3xl font-bold text-brand-light playfair-display mb-3">File a New Case</h4>
          <p className="text-brand-gray mb-8 text-lg">Initiate the arbitration process with our guided, secure system.</p>
          <Link to="/file-a-case" className="inline-flex items-center justify-center px-8 py-4 text-brand-dark bg-brand-accent rounded-xl font-semibold transition-transform hover:scale-105 text-lg shadow-lg"><span>Start Filing</span><span className="material-icons ml-3">arrow_forward</span></Link>
        </div>
      </section>

      {/* --- 3. NEW "WHY CHOOSE US" SECTION --- */}
      <section className="px-6 md:px-10 py-20">
          <div className="text-center mb-12 animate-fadeInUp">
              <h2 className="text-4xl font-bold text-brand-light playfair-display">Why Choose eNyay Setu?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">A modern platform built on principles of efficiency, security, and accessibility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
              <FeatureCard number="01" title="Live Chatbot" description="Connect with mediators and discuss your case." delay="0.2s" />
              <FeatureCard number="02" title="Digital Summons" description="Notifications via WhatsApp, SMS, & Email." delay="0.4s" />
              <FeatureCard number="03" title="Secure Document Vault" description="Maintain all your dispute-related documents securely." delay="0.6s" />
              <FeatureCard number="04" title="Affordable" description="Connect with numerous Arbitrators based on your budget." delay="0.8s" />
          </div>
      </section>

    </main>
  );
}