import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- DEFINITION FOR DefaultAvatar ---
// This was missing from the previous response.
const DefaultAvatar = () => (
    <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
        <span className="material-icons text-gray-400" style={{ fontSize: '80px' }}>person</span>
    </div>
);

// --- DEFINITION FOR ArbitratorCard ---
// This was also missing from the previous response.
const ArbitratorCard = ({ arb }) => (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="w-full h-48 flex-shrink-0">
            {arb.profileImage ? (
                <img src={arb.profileImage} alt={arb.name} className="w-full h-full object-cover" />
            ) : (
                <DefaultAvatar />
            )}
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold text-custom-navy playfair-display">{arb.name}</h3>
                    <p className="text-sm text-gray-500">{arb.experience} years of experience</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center" title="Verified Professional">
                        <span className="material-icons text-base text-green-600">verified</span>
                    </div>
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center" title="Top Rated">
                        <span className="material-icons text-base text-yellow-600">military_tech</span>
                    </div>
                </div>
            </div>

            <div className="border-t my-4"></div>

            <div className="space-y-3 flex-grow text-gray-700">
                <div className="flex items-center">
                    <span className="material-icons text-gray-400 text-xl w-8">gavel</span>
                    <div>
                        <p className="text-xs text-gray-500">Arbitrator Type</p>
                        <p className="font-semibold text-custom-navy">{arb.arbitratorType}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="material-icons text-gray-400 text-xl w-8">school</span>
                    <div>
                        <p className="text-xs text-gray-500">Education</p>
                        <p className="font-semibold text-custom-navy">{arb.highestEducation}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="material-icons text-gray-400 text-xl w-8">work</span>
                    <div>
                        <p className="text-xs text-gray-500">Employment</p>
                        <p className="font-semibold text-custom-navy">{arb.employmentType}</p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <Link to={`#`} className="block w-full text-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-semibold text-white bg-custom-navy hover:bg-opacity-90 transition-all transform group-hover:scale-105">
                    View Full Profile
                </Link>
            </div>
        </div>
    </div>
);

// --- This is the updated page component with the search functionality ---
export default function FindArbitratorPage({ arbitrators }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [expertiseFilter, setExpertiseFilter] = useState('All');

    const filteredArbitrators = arbitrators.filter(arb => {
        const matchesExpertise = expertiseFilter === 'All' || arb.arbitratorType === expertiseFilter;
        const matchesSearch = arb.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesExpertise && matchesSearch;
    });

    return (
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-gray-50">
            <h2 className="text-4xl font-bold text-primary playfair-display mb-2">Find an Arbitrator</h2>
            <p className="text-gray-600 mb-8">Browse our panel of verified and experienced professionals.</p>

            <div className="sticky top-0 bg-gray-50/80 backdrop-blur-sm py-4 mb-8 z-10">
                <div className="bg-white p-4 rounded-xl shadow-md border flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:w-2/3">
                        <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input 
                            type="text"
                            placeholder="Search by arbitrator's name..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="relative w-full md:w-1/3">
                         <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">gavel</span>
                        <select
                            className="w-full appearance-none pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            value={expertiseFilter}
                            onChange={(e) => setExpertiseFilter(e.target.value)}
                        >
                            <option value="All">All Expertise</option>
                            <option value="Executive">Executive</option>
                            <option value="Judicial">Judicial</option>
                            <option value="Construction">Construction</option>
                            <option value="Maritime">Maritime</option>
                        </select>
                         <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                    </div>
                </div>
            </div>

            {arbitrators.length === 0 ? (
                <div className="text-center py-20 px-6 bg-white rounded-lg shadow-md border">
                    <span className="material-icons text-6xl text-gray-300">groups</span>
                    <p className="text-xl font-semibold text-gray-700 mt-4">No Arbitrators Registered</p>
                    <p className="text-gray-500 mt-1">Check back later or register to be the first professional on our panel.</p>
                </div>
            ) : filteredArbitrators.length === 0 ? (
                <div className="text-center py-20 px-6 bg-white rounded-lg shadow-md border">
                    <span className="material-icons text-6xl text-gray-300">search_off</span>
                    <p className="text-xl font-semibold text-gray-700 mt-4">No Arbitrators Found</p>
                    <p className="text-gray-500 mt-1">Please try adjusting your search terms or filters.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredArbitrators.map((arb) => (
                        <ArbitratorCard key={arb.id} arb={arb} />
                    ))}
                </div>
            )}
        </main>
    );
}