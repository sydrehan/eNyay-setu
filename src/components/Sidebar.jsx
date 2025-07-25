import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ user, onLogout }) {
    // This styling logic will now match the new theme automatically
    const getNavLinkClass = ({ isActive }) => isActive
        ? "flex items-center px-4 py-3 text-brand-dark bg-brand-accent rounded-xl shadow-lg"
        : "flex items-center px-4 py-3 text-brand-light hover:bg-brand-secondary rounded-xl transition-colors duration-300";

  return (
    <aside className="w-72 bg-brand-secondary shadow-2xl flex-col hidden md:flex">
      <div className="flex items-center justify-center p-8 border-b border-brand-gray">
        <span className="material-icons text-4xl text-brand-accent mr-3">gavel</span>
        <h1 className="text-3xl font-bold text-brand-light playfair-display">eNyay Setu</h1>
      </div>

      <nav className="flex-1 px-6 py-8 space-y-3">
        <NavLink to="/" className={getNavLinkClass} end> {/* `end` prop for exact matching */}
          <span className="material-icons mr-4">home</span>
          <span className="font-medium text-lg">Home</span>
        </NavLink>
        {user && user.role === 'user' && (
          <NavLink to="/file-a-case" className={getNavLinkClass}><span className="material-icons mr-4">add_box</span><span className="font-medium text-lg">File a New Case</span></NavLink>
        )}
        {user && (
          <NavLink to="/history" className={getNavLinkClass}><span className="material-icons mr-4">history</span><span className="font-medium text-lg">Case History</span></NavLink>
        )}
        <NavLink to="/find-arbitrator" className={getNavLinkClass}><span className="material-icons mr-4">person_search</span><span className="font-medium text-lg">Find Arbitrator</span></NavLink>
        
        {/* SETTINGS AND LOREM ARE NOW REMOVED */}
      </nav>

      <div className="p-6 border-t border-brand-gray">
        {user && (
          <button onClick={onLogout} className="w-full flex items-center justify-center px-4 py-3 text-brand-light bg-transparent hover:bg-brand-gray rounded-xl border-2 border-brand-gray transition-colors duration-300">
            <span className="material-icons mr-2">logout</span><span className="font-medium text-lg">Logout</span>
          </button>
        )}
      </div>
    </aside>
  );
}