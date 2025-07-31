import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Layout({ user, onLogout }) {
  // This is the SINGLE SOURCE OF TRUTH for your application's layout.
  // It guarantees that every page has a sidebar and the correct background.
  return (
    <div className="flex h-screen bg-brand-dark">
      <Sidebar user={user} onLogout={onLogout} />
      
      {/* The <Outlet/> component is provided by react-router-dom.
          It renders whichever page you are currently on (Dashboard, FindArbitratorPage, etc.) */}
      <Outlet />
    </div>
  );
}