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
    created_at: string;
}

interface PaginatedProjects {
    data: Project[];
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

interface Props {
    projects: PaginatedProjects;
    [key: string]: unknown;
}

export default function ProjectsIndex({ projects }: Props) {
    const handleDelete = (project: Project) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${project.id}`);
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Projects" />
            
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects 🎨</h1>
                        <p className="text-gray-600 dark:text-gray-400">Manage your portfolio projects</p>
                    </div>
                    <Link href="/admin/projects/create">
                        <Button>
                            ✨ Add New Project
                        </Button>
                    </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Project
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Tech Stack
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Created
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {projects.data.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {project.title}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                                    {project.description}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                                {project.type === 'Web' && '🌐 '}
                                                {project.type === 'Mobile' && '📱 '}
                                                {project.type === 'Design' && '🎨 '}
                                                {project.type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech_stack.split(', ').slice(0, 3).map((tech, index) => (
                                                    <span key={index} className="inline-flex px-2 py-1 text-xs rounded bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                            {new Date(project.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                            <Link 
                                                href={`/admin/projects/${project.id}`}
                                                className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                                            >
                                                👁️ View
                                            </Link>
                                            <Link 
                                                href={`/admin/projects/${project.id}/edit`}
                                                className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                                            >
                                                ✏️ Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project)}
                                                className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                                            >
                                                🗑️ Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {projects.data.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🎨</div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                No projects yet
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-4">
                                Get started by creating your first project.
                            </p>
                            <Link href="/admin/projects/create">
                                <Button>
                                    ✨ Create First Project
                                </Button>
                            </Link>
                        </div>
                    )}

                    {/* Pagination */}
                    {projects.links.length > 3 && (
                        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3">
                            <div className="flex justify-center space-x-2">
                                {projects.links.map((link, index) => (
                                    <div key={index}>
                                        {link.url ? (
                                            <Link
                                                href={link.url}
                                                className={`px-3 py-2 text-sm rounded-md ${
                                                    link.active
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                                }`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        ) : (
                                            <span
                                                className="px-3 py-2 text-sm text-gray-400 dark:text-gray-600"
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}