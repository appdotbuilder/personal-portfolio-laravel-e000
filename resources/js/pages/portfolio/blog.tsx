import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    published_at: string;
    content: string;
}

interface Props {
    blogPosts: BlogPost[];
    [key: string]: unknown;
}

export default function Blog({ blogPosts }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title="Blog - Portfolio" />
            
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                {/* Navigation */}
                <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-40">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-white">
                            ✨ Portfolio
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                            <Link href="/projects" className="text-white/90 hover:text-white transition-colors">Projects</Link>
                            <Link href="/blog" className="text-white font-semibold">Blog</Link>
                            <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>
                </nav>

                <div className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-white mb-4">Latest Thoughts 💭</h1>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Sharing insights, tutorials, and thoughts about development, design, and technology.
                            </p>
                        </div>

                        {/* Blog Posts */}
                        <div className="space-y-8">
                            {blogPosts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                                    <article className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-2xl">📚</div>
                                            <div className="text-white/60 text-sm">
                                                📅 {formatDate(post.published_at)}
                                            </div>
                                        </div>
                                        
                                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                                            {post.title}
                                        </h2>
                                        
                                        <p className="text-white/80 text-lg mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center gap-2 text-white/60">
                                                    <span>⏱️</span>
                                                    <span className="text-sm">{Math.ceil(post.content.length / 200)} min read</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-white/60">
                                                    <span>💬</span>
                                                    <span className="text-sm">Development</span>
                                                </div>
                                            </div>
                                            
                                            <div className="text-white/90 group-hover:text-white transition-colors flex items-center gap-2">
                                                Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>

                        {blogPosts.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">✍️</div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Coming Soon</h3>
                                <p className="text-white/80">I'm working on some amazing content. Check back soon!</p>
                            </div>
                        )}

                        {/* Newsletter Signup */}
                        <div className="mt-16 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-semibold text-white mb-4">Stay Updated 📫</h3>
                            <p className="text-white/80 mb-6">
                                Get notified when I publish new articles about web development and design.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all">
                                    Subscribe ✨
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}