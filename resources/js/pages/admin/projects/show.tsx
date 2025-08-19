import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AppLayout from '@/components/app-layout';
import { Button } from '@/components/ui/button';

interface Project {
    id: number;
    title: string;
    type: string;
    description: string;
    url: string;
    tech_stack: string;
    image_path: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    project: Project;
    [key: string]: unknown;
}

export default function ShowProject({ project }: Props) {
    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${project.id}`);
        }
    };

    return (
        <AppLayout>
            <Head title={`${project.title} - Projects`} />
            
            <div className="p-6">
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                        <Link href="/admin/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            ← Projects
                        </Link>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {project.title}
                            </h1>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    {project.type === 'Web' && '🌐 '}
                                    {project.type === 'Mobile' && '📱 '}
                                    {project.type === 'Design' && '🎨 '}
                                    {project.type}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Created {new Date(project.created_at).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <a 
                                href={project.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline">
                                    🌐 View Live
                                </Button>
                            </a>
                            <Link href={`/admin/projects/${project.id}/edit`}>
                                <Button>
                                    ✏️ Edit
                                </Button>
                            </Link>
                            <Button 
                                variant="outline" 
                                onClick={handleDelete}
                                className="text-red-600 border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20"
                            >
                                🗑️ Delete
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Details */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Project Details 📋
                        </h2>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                    Description
                                </label>
                                <p className="text-gray-900 dark:text-white leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                    Project URL
                                </label>
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 break-all"
                                >
                                    {project.url}
                                </a>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                                    Tech Stack
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech_stack.split(', ').map((tech, index) => (
                                        <span key={index} className="inline-flex px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.image_path && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                        Image Path
                                    </label>
                                    <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-900 dark:text-white">
                                        {project.image_path}
                                    </code>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                        Created
                                    </label>
                                    <p className="text-gray-900 dark:text-white text-sm">
                                        {new Date(project.created_at).toLocaleString()}
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                                        Last Updated
                                    </label>
                                    <p className="text-gray-900 dark:text-white text-sm">
                                        {new Date(project.updated_at).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Preview 👁️
                        </h2>
                        
                        {/* Project Card Preview */}
                        <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                                    {project.type}
                                </span>
                                <div className="text-2xl">
                                    {project.type === 'Web' && '🌐'}
                                    {project.type === 'Mobile' && '📱'}
                                    {project.type === 'Design' && '🎨'}
                                </div>
                            </div>
                            
                            {/* Placeholder Image */}
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl mb-4 flex items-center justify-center">
                                <div className="text-4xl opacity-50">
                                    {project.type === 'Web' && '🌐'}
                                    {project.type === 'Mobile' && '📱'}
                                    {project.type === 'Design' && '🎨'}
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech_stack.split(', ').slice(0, 3).map((tech, index) => (
                                    <span key={index} className="px-2 py-1 bg-white/80 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                View Project →
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            This is how your project will appear on the portfolio homepage and projects page.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}