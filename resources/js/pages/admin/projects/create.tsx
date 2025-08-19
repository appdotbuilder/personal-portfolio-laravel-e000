import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/components/app-layout';
import { Button } from '@/components/ui/button';

interface ProjectFormData {
    title: string;
    type: string;
    description: string;
    url: string;
    tech_stack: string;
    image_path: string;
    [key: string]: string;
}

export default function CreateProject() {
    const { data, setData, post, processing, errors } = useForm<ProjectFormData>({
        title: '',
        type: 'Web',
        description: '',
        url: '',
        tech_stack: '',
        image_path: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/projects');
    };

    return (
        <AppLayout>
            <Head title="Create Project" />
            
            <div className="p-6">
                <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                        <Link href="/admin/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            ← Projects
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create New Project ✨</h1>
                    <p className="text-gray-600 dark:text-gray-400">Add a new project to your portfolio</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Project Title *
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="My Awesome Project"
                                    required
                                />
                                {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Project Type *
                                </label>
                                <select
                                    value={data.type}
                                    onChange={e => setData('type', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                    required
                                >
                                    <option value="Web">🌐 Web Application</option>
                                    <option value="Mobile">📱 Mobile App</option>
                                    <option value="Design">🎨 Design Project</option>
                                </select>
                                {errors.type && <div className="text-red-500 text-sm mt-1">{errors.type}</div>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Description *
                            </label>
                            <textarea
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                placeholder="Describe your project..."
                                required
                            />
                            {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Project URL *
                                </label>
                                <input
                                    type="url"
                                    value={data.url}
                                    onChange={e => setData('url', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="https://example.com"
                                    required
                                />
                                {errors.url && <div className="text-red-500 text-sm mt-1">{errors.url}</div>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tech Stack *
                                </label>
                                <input
                                    type="text"
                                    value={data.tech_stack}
                                    onChange={e => setData('tech_stack', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="React, TailwindCSS, Laravel"
                                    required
                                />
                                {errors.tech_stack && <div className="text-red-500 text-sm mt-1">{errors.tech_stack}</div>}
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Separate technologies with commas
                                </p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Image Path (Optional)
                            </label>
                            <input
                                type="text"
                                value={data.image_path}
                                onChange={e => setData('image_path', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                placeholder="/images/project-screenshot.jpg"
                            />
                            {errors.image_path && <div className="text-red-500 text-sm mt-1">{errors.image_path}</div>}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Path to project screenshot or logo
                            </p>
                        </div>

                        <div className="flex justify-end space-x-3">
                            <Link href="/admin/projects">
                                <Button variant="outline">
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? '⏳ Creating...' : '✨ Create Project'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}