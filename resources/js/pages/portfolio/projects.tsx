import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Project {
    id: number;
    title: string;
    type: string;
    description: string;
    url: string;
    tech_stack: string;
    image_path: string | null;
}

interface Props {
    projects: Project[];
    [key: string]: unknown;
}

export default function Projects({ projects }: Props) {
    const [selectedType, setSelectedType] = useState<string>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    const types = ['All', ...Array.from(new Set(projects.map(p => p.type)))];
    const filteredProjects = selectedType === 'All' 
        ? projects 
        : projects.filter(p => p.type === selectedType);

    return (
        <>
            <Head title="Projects - Portfolio" />
            
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                {/* Navigation */}
                <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-40">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-white">
                            ✨ Portfolio
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                            <Link href="/projects" className="text-white font-semibold">Projects</Link>
                            <Link href="/blog" className="text-white/90 hover:text-white transition-colors">Blog</Link>
                            <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>
                </nav>

                <div className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-white mb-4">All Projects 🎨</h1>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Explore my complete portfolio of web applications, mobile apps, and design projects.
                            </p>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {types.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`px-6 py-2 rounded-full backdrop-blur-sm border transition-all ${
                                        selectedType === type
                                            ? 'bg-white/30 border-white/50 text-white'
                                            : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20'
                                    }`}
                                >
                                    {type === 'All' && '🎯 '}
                                    {type === 'Web' && '🌐 '}
                                    {type === 'Mobile' && '📱 '}
                                    {type === 'Design' && '🎨 '}
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <div 
                                    key={project.id} 
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                                                {project.type}
                                            </span>
                                            <div className="text-2xl">
                                                {project.type === 'Web' && '🌐'}
                                                {project.type === 'Mobile' && '📱'}
                                                {project.type === 'Design' && '🎨'}
                                            </div>
                                        </div>
                                        
                                        <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-4 flex items-center justify-center">
                                            <div className="text-4xl opacity-50">
                                                {project.type === 'Web' && '🌐'}
                                                {project.type === 'Mobile' && '📱'}
                                                {project.type === 'Design' && '🎨'}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech_stack.split(', ').map((tech, index) => (
                                                <span key={index} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/90">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="text-white/90 group-hover:text-white transition-colors">
                                            View Details →
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-semibold text-white mb-2">No projects found</h3>
                                <p className="text-white/80">Try selecting a different category.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
                                                {selectedProject.type}
                                            </span>
                                            <div className="text-2xl">
                                                {selectedProject.type === 'Web' && '🌐'}
                                                {selectedProject.type === 'Mobile' && '📱'}
                                                {selectedProject.type === 'Design' && '🎨'}
                                            </div>
                                        </div>
                                        <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="text-white/60 hover:text-white text-2xl"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl mb-6 flex items-center justify-center">
                                    <div className="text-6xl opacity-50">
                                        {selectedProject.type === 'Web' && '🌐'}
                                        {selectedProject.type === 'Mobile' && '📱'}
                                        {selectedProject.type === 'Design' && '🎨'}
                                    </div>
                                </div>

                                <p className="text-white/90 mb-6 text-lg leading-relaxed">{selectedProject.description}</p>

                                <div className="mb-6">
                                    <h3 className="text-white font-semibold mb-3">🛠️ Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech_stack.split(', ').map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a 
                                        href={selectedProject.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1"
                                    >
                                        <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                                            🚀 View Live Project
                                        </Button>
                                    </a>
                                    <Button 
                                        variant="outline" 
                                        onClick={() => setSelectedProject(null)}
                                        className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                                    >
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}