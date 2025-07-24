import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard({ user }) {
  return (
    <main className="flex-1 p-10 overflow-y-auto">
      <header className="flex justify-between items-center pb-8">
        <h2 className="text-4xl font-bold text-primary playfair-display">Dashboard</h2>
        <div className="flex items-center space-x-6">
          <button className="p-3 rounded-full hover:bg-gray-200 transition-colors duration-300">
            <span className="material-icons text-secondary text-2xl">notifications</span>
          </button>

          {/* This login/user profile logic in the header is correct */}
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-semibold text-primary text-lg">{user.name}</p>
                <p className="text-sm text-gray-500 capitalize">{user.role}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
                <span>{user.name.slice(0, 1).toUpperCase()}</span>
              </div>
            </div>
          ) : (
            <Link to="/login" className="px-6 py-2 text-white bg-primary hover-bg-primary-dark rounded-lg font-medium transition-colors text-lg shadow-md">
              Login / Register
            </Link>
          )}
        </div>
      </header>

      {/* --- WELCOME BANNER --- */}
      <section className="mt-4">
        <div className="bg-white p-12 rounded-2xl shadow-lg">
          <p className="text-xl text-secondary">Welcome to,</p>
          <h3 className="text-5xl font-bold text-primary playfair-display mt-1">eNyay Setu</h3>
          <p className="mt-4 text-gray-600 max-w-xl text-lg">Your trusted platform for fair and efficient arbitration. Get started by filing a new case or registering as an arbitrator.</p>
        </div>
      </section>

      {/* --- ORIGINAL DASHBOARD CARDS AND IMAGES --- */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* CARD 1: FILE A NEW CASE (This is correct) */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col items-center text-center">
            <div className="p-5 bg-indigo-100 rounded-full mb-6">
              <img alt="Illustration of legal documents" className="w-28 h-28" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqNYE1dpXO7JMRBQi1u9Pp2qsuSOw6afabyBlkJtNdqiYAwUfpxcJlgpsh8zs7V4ElIb7r7U3LkA9MOwxPM4Qrt635QYpwspfzzISFErCn8-t2Ro3rlSB5ZI7Mnho-uEhAJtAUMo_pj_RxB8gBChlVPVdCHSp2gVtT8SdhOzfblYp_AoftYdLxKw5zjSDFyRDMMs-v9mWcW1vFQZ2AmoI4XlFYVatTPgDGb6AZMZMGExl1cbR1su4QXP6eUSiypJdh1zjwDfXXCrI" />
            </div>
            <h4 className="text-3xl font-bold text-primary playfair-display mb-3">File a New Case</h4>
            <p className="text-gray-600 mb-8 text-lg">Initiate the arbitration process by submitting the details of your case.</p>
            <Link to="/file-a-case" className="flex items-center justify-center px-8 py-4 text-white bg-primary hover-bg-primary-dark rounded-xl font-medium transition-colors text-lg shadow-md hover:shadow-lg">
              <span>File a new case</span>
              <span className="material-icons ml-3">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* CARD 2: REGISTER AS ARBITRATOR (This is updated) */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col items-center text-center">
            <div className="p-5 bg-indigo-100 rounded-full mb-6">
              <img alt="Illustration of a judge's gavel" className="w-28 h-28" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG0MkHGshNGkWpBi_XaJ0Ur60b2HlwaZEguuNctIKH90hqpQK2ERT0fBlkYww69CKk8rAwYuforxS2lHBNRXM4J8lCuSDXMiukplE5kJH1sYuX-cAzCi3ow1C7IU5gxok3h8GT2PspOLUHsvJKQVvsfgXdgMhpDxTGzU8AyvIfQlaSImfKi_z3GH5OrxqMb1pFGY5aUQyY5OO_f8ckU70ZJZFgKW5Xy9qWmm17B0a5LA6a1eLSm6u10Qwl_BmzO2itK58p8PGbPkw" />
            </div>
            <h4 className="text-3xl font-bold text-primary playfair-display mb-3">Register as Arbitrator</h4>
            <p className="text-gray-600 mb-8 text-lg">Join our panel of esteemed arbitrators and contribute to resolving disputes.</p>
            
            {/* THIS IS THE UPDATED LINK */}
            <Link to="/register-arbitrator" className="flex items-center justify-center px-8 py-4 text-white bg-primary hover-bg-primary-dark rounded-xl font-medium transition-colors text-lg shadow-md hover:shadow-lg">
              <span>Register or Login</span>
              <span className="material-icons ml-3">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}