import React, { useState, useEffect } from 'react';
import { database } from './Firebase';
import { ref, onValue } from 'firebase/database';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ProjectsHorizontal = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const projectsRef = ref(database, 'projects');
        
        const unsubscribe = onValue(projectsRef, (snapshot) => {
            try {
                const data = snapshot.val();
                if (data) {
                    const projectsArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key]
                    }));
                    projectsArray.sort((a, b) => {
                        if (a.featured && !b.featured) return -1;
                        if (!a.featured && b.featured) return 1;
                        return (b.year || '').localeCompare(a.year || '');
                    });
                    setProjects(projectsArray);
                } else {
                    setProjects([]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects: ", error);
                setLoading(false);
            }
        }, (error) => {
            console.error("Firebase error: ", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    const getCategoryColor = (category) => {
        switch(category) {
            case 'Residential': return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30';
            case 'Commercial': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
            case 'Institutional': return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
            default: return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
        }
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Completed': return 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30';
            case 'In Progress': return 'bg-amber-500/20 text-amber-500 border-amber-500/30';
            case 'Planned': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
            default: return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
        }
    };

    // Display first 9 projects for the grid
    const displayProjects = projects.slice(0, 9);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200">
            <Helmet>
                <title>Our Projects | Vastushobha Construction</title>
                <meta 
                    name="description" 
                    content="Explore our portfolio of residential, commercial, and institutional projects. View completed works and ongoing developments by Vastushobha Construction." 
                />
            </Helmet>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 to-gray-900/90 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                <div className="relative z-20 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
                            Our Portfolio
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Showcasing excellence in construction across residential, commercial, and institutional sectors.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="flex flex-wrap gap-2 justify-center">
                                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                    <span className="text-white font-medium">{projects.length}+ Projects</span>
                                </div>
                                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                    <span className="text-white font-medium">Multiple Categories</span>
                                </div>
                                <div className="px-4 py-2 bg-red-600/90 backdrop-blur-sm rounded-full border border-red-500/30">
                                    <span className="text-white font-medium">Award Winning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Explore our latest and most notable construction projects with cutting-edge design and engineering
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="relative">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-red-100/20"></div>
                        </div>
                    </div>
                ) : displayProjects.length === 0 ? (
                    <div className="text-center py-20 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-12">
                        <div className="mx-auto h-24 w-24 text-gray-700 mb-4">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
                        <p className="text-gray-600">No projects have been added yet</p>
                    </div>
                ) : (
                    <>
                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayProjects.map((project) => (
                                <div 
                                    key={project.id} 
                                    className="group relative rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                                >
                                    {/* Glass Background */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group-hover:bg-white/10 transition-all duration-500"></div>
                                    
                                    {/* Project Content */}
                                    <div className="relative h-full flex flex-col">
                                        {/* Project Image */}
                                        <div className="relative h-56 overflow-hidden rounded-t-2xl">
                                            <img
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                src={project.imageUrl || 'https://via.placeholder.com/600x400?text=Vastushobha'}
                                                alt={project.title}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = 'https://via.placeholder.com/600x400?text=Vastushobha';
                                                }}
                                            />
                                            
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                            
                                            {/* Featured Badge */}
                                            {project.featured && (
                                                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-700 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                                    ⭐ Featured
                                                </div>
                                            )}
                                            
                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)} backdrop-blur-sm border`}>
                                                    {project.category}
                                                </span>
                                            </div>
                                            
                                            {/* Year Badge */}
                                            {project.year && (
                                                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-gray-200 text-xs font-semibold px-3 py-1 rounded-full border border-white/70">
                                                    {project.year}
                                                </div>
                                            )}
                                        </div>

                                        {/* Project Details */}
                                        <div className="flex-1 p-6 flex flex-col">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-700 mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                
                                                {project.client && (
                                                    <p className="text-sm text-gray-700 mb-3 font-medium">
                                                        For {project.client}
                                                    </p>
                                                )}
                                                
                                                <p className="text-gray-700 line-clamp-3 mb-4 leading-relaxed">
                                                    {project.shortDescription || 'No description available.'}
                                                </p>
                                            </div>

                                            {/* Status and Quick View Button */}
                                            <div className="flex items-center justify-between mt-4">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} backdrop-blur-sm border`}>
                                                    {project.status}
                                                </span>
                                                
                                                <Link to={`/projects/${project.id}`}>
                                                <button
                                                    // onClick={() => openModal(project)}
                                                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                                                >
                                                    Quick View
                                                </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All Button */}
                        {projects.length > 9 && (
                            <div className="mt-12 text-center">
                                <Link
                                    to="/all"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                                >
                                    View All Projects
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Project Modal */}
            {showModal && selectedProject && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-4 z-50">
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 relative">
                        <div className="relative">
                            {/* Modal Header Image */}
                            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                                <img
                                    src={selectedProject.imageUrl || 'https://via.placeholder.com/800x400?text=Vastushobha'}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent"></div>
                                
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 bg-white/80 hover:bg-red-600/90 text-gray-700 hover:text-white p-2 rounded-full transition-all duration-200 border border-gray-300 shadow-lg"
                                    aria-label="Close"
                                >
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                
                                {/* Modal Title Overlay */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">
                                        <span className="text-red-600">{selectedProject.title}</span>
                                    </h2>
                                    {selectedProject.client && (
                                        <p className="text-lg text-gray-500">For <span className="text-red-500">{selectedProject.client}</span></p>
                                    )}
                                </div>
                            </div>
                            
                            {/* Modal Content */}
                            <div className="p-6 md:p-8">
                                {/* Status and Category Badges */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(selectedProject.category)} bg-white/60 text-gray-700`}>
                                        {selectedProject.category}
                                    </span>
                                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(selectedProject.status)} bg-white/60 text-gray-700`}>
                                        {selectedProject.status}
                                    </span>
                                    {selectedProject.featured && (
                                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500 to-red-700 text-white shadow">
                                            ⭐ Featured Project
                                        </span>
                                    )}
                                </div>
                                
                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-700 mb-3">
                                        <span className="text-red-600">Project Description</span>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {selectedProject.shortDescription || selectedProject.description || 'No description available.'}
                                    </p>
                                </div>
                                
                                {/* Project Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {selectedProject.totalArea && (
                                        <div className="bg-white/70 backdrop-blur p-4 rounded-xl border border-gray-200">
                                            <div className="flex items-center mb-2">
                                                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                                </svg>
                                                <span className="font-semibold text-gray-700">Total Area</span>
                                            </div>
                                            <p className="text-gray-600">{selectedProject.totalArea}</p>
                                        </div>
                                    )}
                                    
                                    {selectedProject.timeline && (
                                        <div className="bg-white/70 backdrop-blur p-4 rounded-xl border border-gray-200">
                                            <div className="flex items-center mb-2">
                                                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="font-semibold text-gray-700">Timeline</span>
                                            </div>
                                            <p className="text-gray-600">{selectedProject.timeline}</p>
                                        </div>
                                    )}
                                    
                                    {selectedProject.budget && (
                                        <div className="bg-white/70 backdrop-blur p-4 rounded-xl border border-gray-200">
                                            <div className="flex items-center mb-2">
                                                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                </svg>
                                                <span className="font-semibold text-gray-700">Budget</span>
                                            </div>
                                            <p className="text-gray-600">{selectedProject.budget}</p>
                                        </div>
                                    )}
                                    
                                    {selectedProject.address && (
                                        <div className="bg-white/70 backdrop-blur p-4 rounded-xl border border-gray-200">
                                            <div className="flex items-center mb-2">
                                                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="font-semibold text-gray-700">Location</span>
                                            </div>
                                            <p className="text-gray-600">{selectedProject.address}</p>
                                        </div>
                                    )}
                                    
                                    {selectedProject.year && (
                                        <div className="bg-white/70 backdrop-blur p-4 rounded-xl border border-gray-200">
                                            <div className="flex items-center mb-2">
                                                <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="font-semibold text-gray-700">Year</span>
                                            </div>
                                            <p className="text-gray-600">{selectedProject.year}</p>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={closeModal}
                                        className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                                    >
                                        Close
                                    </button>
                                    <Link
                                        to={`/projects/${selectedProject.id}`}
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 text-center shadow"
                                    >
                                        View Full Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsHorizontal;