import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { database } from './Firebase';
import { ref, onValue } from 'firebase/database';
import { Helmet } from 'react-helmet';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProjects, setRelatedProjects] = useState([]);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const projectRef = ref(database, `projects/${id}`);
        const projectsRef = ref(database, 'projects');

        const unsubscribeProject = onValue(projectRef, (snapshot) => {
            try {
                const data = snapshot.val();
                if (data) {
                    setProject({
                        id: id,
                        ...data
                    });
                } else {
                    setProject(null);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching project: ", error);
                setLoading(false);
            }
        }, (error) => {
            console.error("Firebase error: ", error);
            setLoading(false);
        });

        const unsubscribeProjects = onValue(projectsRef, (snapshot) => {
            try {
                const data = snapshot.val();
                if (data) {
                    const projectsArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key]
                    }));
                    // Filter out the current project and get 3 random related projects
                    const filtered = projectsArray.filter(p => p.id !== id);
                    const shuffled = filtered.sort(() => 0.5 - Math.random());
                    setRelatedProjects(shuffled.slice(0, 3));
                }
            } catch (error) {
                console.error("Error fetching related projects: ", error);
            }
        });

        return () => {
            unsubscribeProject();
            unsubscribeProjects();
        };
    }, [id]);

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

    const handlePrevImage = () => {
        setActiveImageIndex(prev => 
            prev === 0 ? (project.images ? project.images.length - 1 : 0) : prev - 1
        );
    };

    const handleNextImage = () => {
        setActiveImageIndex(prev => 
            project.images ? (prev === project.images.length - 1 ? 0 : prev + 1) : 0
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200 flex justify-center items-center">
                <div className="relative">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-red-100/20"></div>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200 flex justify-center items-center">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-12 max-w-2xl mx-4">
                    <div className="mx-auto h-24 w-24 text-gray-700 mb-4">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Project not found</h3>
                    <p className="text-gray-600 mb-6">The requested project could not be found in our database</p>
                    <Link 
                        to="/projects" 
                        className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 inline-block"
                    >
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-100 to-gray-200">
            <Helmet>
                <title>{project.title} | Vastushobha Construction</title>
                <meta 
                    name="description" 
                    content={project.shortDescription || `Details about ${project.title} project by Vastushobha Construction`} 
                />
            </Helmet>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
                <div className="relative z-20 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-6">
                            {project.title}
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {project.shortDescription || 'A showcase of our construction excellence'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Project Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
                            <img
                                src={project.images?.[activeImageIndex] || project.imageUrl || 'https://via.placeholder.com/800x600?text=Vastushobha'}
                                alt={`${project.title} - ${activeImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Navigation Arrows */}
                            {project.images && project.images.length > 1 && (
                                <>
                                    <button 
                                        onClick={handlePrevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-red-600/90 text-gray-700 hover:text-white p-2 rounded-full transition-all duration-200 border border-gray-300 shadow-lg z-10"
                                        aria-label="Previous image"
                                    >
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={handleNextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-red-600/90 text-gray-700 hover:text-white p-2 rounded-full transition-all duration-200 border border-gray-300 shadow-lg z-10"
                                        aria-label="Next image"
                                    >
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                            
                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
                            
                            {/* Image Counter */}
                            {project.images && project.images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full border border-white/20">
                                    {activeImageIndex + 1} / {project.images.length}
                                </div>
                            )}
                        </div>
                        
                        {/* Thumbnail Gallery */}
                        {project.images && project.images.length > 1 && (
                            <div className="flex gap-3 mt-4 overflow-x-auto py-2">
                                {project.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImageIndex(index)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === index ? 'border-red-500' : 'border-transparent'}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Project Info */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(project.category)} backdrop-blur-sm border`}>
                                {project.category}
                            </span>
                            <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)} backdrop-blur-sm border`}>
                                {project.status}
                            </span>
                            {project.featured && (
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500 to-red-700 text-white shadow">
                                    ⭐ Featured Project
                                </span>
                            )}
                        </div>
                        
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            <span className="text-red-600">{project.title}</span>
                        </h2>
                        
                        {project.client && (
                            <p className="text-lg text-gray-700 mb-6">
                                <span className="font-medium">Client:</span> {project.client}
                            </p>
                        )}
                        
                        <div className="prose max-w-none text-gray-700 mb-8">
                            <p className="text-lg leading-relaxed">
                                {project.description || project.shortDescription || 'No detailed description available for this project.'}
                            </p>
                        </div>
                        
                        {/* Project Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {project.year && (
                                <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="font-semibold text-gray-700">Year</span>
                                    </div>
                                    <p className="text-gray-600">{project.year}</p>
                                </div>
                            )}
                            
                            {project.totalArea && (
                                <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                        </svg>
                                        <span className="font-semibold text-gray-700">Total Area</span>
                                    </div>
                                    <p className="text-gray-600">{project.totalArea}</p>
                                </div>
                            )}
                            
                            {project.timeline && (
                                <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="font-semibold text-gray-700">Timeline</span>
                                    </div>
                                    <p className="text-gray-600">{project.timeline}</p>
                                </div>
                            )}
                            
                            {project.budget && (
                                <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200">
                                    <div className="flex items-center mb-2">
                                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                        <span className="font-semibold text-gray-700">Budget</span>
                                    </div>
                                    <p className="text-gray-600">{project.budget}</p>
                                </div>
                            )}
                            
                            {project.address && (
                                <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200 sm:col-span-2">
                                    <div className="flex items-center mb-2">
                                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="font-semibold text-gray-700">Location</span>
                                    </div>
                                    <p className="text-gray-600">{project.address}</p>
                                </div>
                            )}
                        </div>
                        
                        {/* Back Button */}
                        <Link
                            to="/all"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                        >
                            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Projects
                        </Link>
                    </div>
                </div>
                
                {/* Additional Content Section */}
                {project.additionalDetails && (
                    <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                            <span className="text-red-600">Project</span> Highlights
                        </h3>
                        <div className="prose max-w-none text-gray-700">
                            {project.additionalDetails}
                        </div>
                    </div>
                )}
                
                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">
                            <span className="text-red-600">Related</span> Projects
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProjects.map((project) => (
                                <div 
                                    key={project.id} 
                                    className="group relative rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                                >
                                    {/* Glass Background */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group-hover:bg-white/10 transition-all duration-500"></div>
                                    
                                    <div className="relative h-full flex flex-col">
                                        {/* Project Image */}
                                        <div className="relative h-48 overflow-hidden rounded-t-2xl">
                                            <img
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                src={project.imageUrl || 'https://via.placeholder.com/600x400?text=Vastushobha'}
                                                alt={project.title}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        </div>

                                        {/* Project Details */}
                                        <div className="flex-1 p-5 flex flex-col">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-700 mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-gray-700 line-clamp-2 text-sm mb-4">
                                                    {project.shortDescription || 'No description available.'}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} backdrop-blur-sm border`}>
                                                    {project.status}
                                                </span>
                                                
                                                <Link
                                                    to={`/projects/${project.id}`}
                                                    className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                                                >
                                                    View Details →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;