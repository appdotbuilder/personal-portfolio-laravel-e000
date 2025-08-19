import React from 'react';
import { Link, usePage } from '@inertiajs/react';

interface Props {
    children: React.ReactNode;
}

interface PageProps {
    auth: {
        user: {
            name: string;
            email: string;
        };
    };
    [key: string]: unknown;
}

export default function AppLayout({ children }: Props) {
    const { auth } = usePage<PageProps>().props;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-8">
                            <Link href="/dashboard" className="text-xl font-semibold text-gray-900 dark:text-white">
                                ✨ Portfolio Admin
                            </Link>
                            
                            <nav className="hidden md:flex space-x-6">
                                <Link 
                                    href="/dashboard" 
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    📊 Dashboard
                                </Link>
                                <Link 
                                    href="/admin/projects" 
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    🎨 Projects
                                </Link>
                                <Link 
                                    href="/admin/contacts" 
                                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    📬 Messages
                                </Link>
                            </nav>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link 
                                href="/" 
                                target="_blank"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                🌐 View Site
                            </Link>
                            
                            <div className="relative">
                                <span className="text-gray-700 dark:text-gray-300">
                                    👋 {auth.user.name}
                                </span>
                            </div>
                            
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                🚪 Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
}