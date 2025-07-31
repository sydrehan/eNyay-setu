import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// DefaultAvatar is now themed for a dark background
const DefaultAvatar = () => (
    <div className="w-full h-48 bg-brand-secondary flex items-center justify-center overflow-hidden">
        <span className="material-icons text-brand-gray" style={{ fontSize: '80px' }}>person</span>
    </div>
);

// ArbitratorCard is now fully themed for a dark UI
const ArbitratorCard = ({ arb }) => (
    <div className="bg-brand-secondary rounded-xl shadow-lg border border-brand-gray overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:border-brand-accent hover:-translate-y-2">
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
                    <h3 className="text-2xl font-bold text-brand-light playfair-display">{arb.name}</h3>
                    <p className="text-sm text-brand-gray">{arb.experience} years of experience</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-900/50 rounded-full flex items-center justify-center" title="Verified Professional">
                        <span className="material-icons text-base text-green-400">verified</span>
                    </div>
                    <div className="w-6 h-6 bg-yellow-900/50 rounded-full flex items-center justify-center" title="Top Rated">
                        <span className="material-icons text-base text-yellow-400">military_tech</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-brand-gray my-4"></div>

            <div className="space-y-3 flex-grow text-brand-light">
                <div className="flex items-center">
                    <span className="material-icons text-brand-gray text-xl w-8">gavel</span>
                    <div>
                        <p className="text-xs text-brand-gray">Arbitrator Type</p>
                        <p className="font-semibold text-brand-light">{arb.arbitratorType}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="material-icons text-brand-gray text-xl w-8">school</span>
                    <div>
                        <p className="text-xs text-brand-gray">Education</p>
                        <p className="font-semibold text-brand-light">{arb.highestEducation}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="material-icons text-brand-gray text-xl w-8">work</span>
                    <div>
                        <p className="text-xs text-brand-gray">Employment</p>
                        <p className="font-semibold text-brand-light">{arb.employmentType}</p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <Link to={`#`} className="block w-full text-center py-3 px-4 rounded-lg shadow-sm font-semibold text-brand-dark bg-brand-accent hover:bg-opacity-90 transition-all transform group-hover:scale-105">
                    View Full Profile
                </Link>
            </div>
        </div>
    </div>
);

// The main page is now fully themed
export default function FindArbitratorPage({ arbitrators }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [expertiseFilter, setExpertiseFilter] = useState('All');

    const filteredArbitrators = arbitrators.filter(arb => {
        const matchesExpertise = expertiseFilter === 'All' || arb.arbitratorType === arb.expertiseFilter;
        const matchesSearch = arb.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesExpertise && matchesSearch;
    });

    return (
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-brand-dark">
            <h2 className="text-4xl font-bold text-brand-light playfair-display mb-2">Find an Arbitrator</h2>
            <p className="text-brand-gray mb-8">Browse our panel of verified and experienced professionals.</p>

            <div className="sticky top-0 bg-brand-dark/80 backdrop-blur-sm py-4 mb-8 z-10">
                <div className="bg-brand-secondary p-4 rounded-xl shadow-lg border border-brand-gray flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:w-2/3">
                        <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray">search</span>
                        <input 
                            type="text"
                            placeholder="Search by name..."
                            className="w-full pl-12 pr-4 py-3 bg-brand-dark border border-brand-gray text-brand-light rounded-lg focus:ring-2 focus:ring-brand-accent transition"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="relative w-full md:w-1/3">
                         <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray">gavel</span>
                        <select
                            className="w-full appearance-none pl-12 pr-4 py-3 bg-brand-dark border border-brand-gray text-brand-light rounded-lg focus:ring-2 focus:ring-brand-accent transition"
                            value={expertiseFilter}
                            onChange={(e) => setExpertiseFilter(e.target.value)}
                        >
                            <option value="All">All Expertise</option>
                            <option>Executive</option>
                            <option>Judicial</option>
                            <option>Construction</option>
                            <option>Maritime</option>
                        </select>
                         <span className="material-icons absolute right-4 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none">expand_more</span>
                    </div>
                </div>
            </div>

            {arbitrators.length === 0 ? (
                <div className="text-center py-20 px-6 bg-brand-secondary rounded-lg shadow-md border border-brand-gray">
                    <span className="material-icons text-6xl text-brand-gray">groups</span>
                    <p className="text-xl font-semibold text-brand-light mt-4">No Arbitrators Registered</p>
                    <p className="text-brand-gray mt-1">Check back later or register to be the first professional on our panel.</p>
                </div>
            ) : filteredArbitrators.length === 0 ? (
                <div className="text-center py-20 px-6 bg-brand-secondary rounded-lg shadow-md border border-brand-gray">
                    <span className="material-icons text-6xl text-brand-gray">search_off</span>
                    <p className="text-xl font-semibold text-brand-light mt-4">No Arbitrators Found</p>
                    <p className="text-brand-gray mt-1">Please try adjusting your search terms or filters.</p>
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