import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/components/app-layout';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            
            <div className="p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Portfolio Dashboard 📊
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your portfolio content and monitor visitor interactions
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Total Projects
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    4
                                </p>
                            </div>
                            <div className="text-3xl">🎨</div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Blog Posts
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    3
                                </p>
                            </div>
                            <div className="text-3xl">📚</div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Contact Messages
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    2
                                </p>
                            </div>
                            <div className="text-3xl">📬</div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Skills Listed
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    5
                                </p>
                            </div>
                            <div className="text-3xl">🛠️</div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Actions ⚡
                        </h2>
                        <div className="space-y-3">
                            <Link href="/admin/projects/create" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <span className="mr-2">✨</span>
                                    Add New Project
                                </Button>
                            </Link>
                            <Link href="/admin/projects" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <span className="mr-2">🎨</span>
                                    Manage Projects
                                </Button>
                            </Link>
                            <Link href="/admin/contacts" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <span className="mr-2">📬</span>
                                    View Messages
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Portfolio Links 🌐
                        </h2>
                        <div className="space-y-3">
                            <Link href="/" target="_blank" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <span className="mr-2">🏠</span>
                                    View Homepage
                                </Button>
                            </Link>
                            <Link href="/projects" target="_blank" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <span className="mr-2">🎯</span>
                                    View Projects
                                </Button>
                            </Link>
                            <Link href="/blog" target="_blank" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <span className="mr-2">📖</span>
                                    View Blog
                                </Button>
                            </Link>
                            <Link href="/contact" target="_blank" className="block">
                                <Button className="w-full justify-start" variant="outline">
                                    <span className="mr-2">💬</span>
                                    View Contact
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Recent Activity 📈
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="text-2xl">🎨</div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    Portfolio seeded with sample projects
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    4 projects added with sample data
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="text-2xl">📚</div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    Blog posts created
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    3 sample blog posts added
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div className="text-2xl">🛠️</div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    Skills and expertise added
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    5 skills with proficiency levels
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Welcome Message */}
                <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                    <h2 className="text-xl font-semibold mb-2">Welcome to Your Portfolio! 🎉</h2>
                    <p className="mb-4">
                        Your modern portfolio is ready to showcase your work. Sample data has been loaded 
                        to help you get started. You can now customize projects, add new content, and 
                        manage visitor messages through this admin panel.
                    </p>
                    <Link href="/admin/projects" className="inline-block">
                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                            Start Customizing ✨
                        </Button>
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}