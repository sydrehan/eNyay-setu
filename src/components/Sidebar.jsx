import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ user, onLogout }) {
  return (
    <aside className="w-72 bg-white shadow-2xl flex flex-col">
      <div className="flex items-center justify-center p-8 border-b border-gray-200">
        <span className="material-icons text-4xl text-primary mr-3">gavel</span>
        <h1 className="text-3xl font-bold text-primary playfair-display">eNyay Setu</h1>
      </div>

      <nav className="flex-1 px-6 py-8 space-y-3">
        {/* --- ORIGINAL NAV ITEMS ARE RESTORED --- */}
        <Link to="/" className="flex items-center px-4 py-3 text-white bg-primary rounded-xl shadow-md">
          <span className="material-icons mr-4">home</span>
          <span className="font-medium text-lg">Home</span>
        </Link>
        
        {/* --- THIS IS THE FUNCTIONAL, CONDITIONAL LINK --- */}
        {/* It only appears if a user is logged in */}
      

        {/* --- THE REST OF THE ORIGINAL NAV ITEMS ARE RESTORED --- */}
        <Link to="/history" className="flex items-center px-4 py-3 text-secondary hover:bg-secondary rounded-xl transition-colors duration-300">
          <span className="material-icons mr-4">history</span>
          <span className="font-medium text-lg">History</span>
        </Link>
        <Link to="/find-arbitrator" className="flex items-center px-4 py-3 text-secondary hover:bg-secondary rounded-xl transition-colors duration-300">
          <span className="material-icons mr-4">person_search</span>
          <span className="font-medium text-lg">Find Arbitrator</span>
        </Link>
        <Link to="/settings" className="flex items-center px-4 py-3 text-secondary hover:bg-secondary rounded-xl transition-colors duration-300">
          <span className="material-icons mr-4">settings</span>
          <span className="font-medium text-lg">Settings</span>
        </Link>
        <Link to="#" className="flex items-center px-4 py-3 text-secondary hover:bg-secondary rounded-xl transition-colors duration-300">
          <span className="material-icons mr-4">description</span>
          <span className="font-medium text-lg">Lorem</span>
        </Link>
      </nav>

      {/* The logout button logic is correct and stays */}
      <div className="p-6 border-t border-gray-200">
        {user && (
          <button onClick={onLogout} className="w-full flex items-center justify-center px-4 py-3 text-secondary bg-white hover:bg-secondary rounded-xl border-2 border-secondary transition-colors duration-300">
            <span className="material-icons mr-2">logout</span>
            <span className="font-medium text-lg">Logout</span>
          </button>
        )}
      </div>
    </aside>
  );
}