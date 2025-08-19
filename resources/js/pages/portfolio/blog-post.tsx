import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface BlogPost {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    published_at: string;
}

interface Props {
    blogPost: BlogPost;
    [key: string]: unknown;
}

export default function BlogPost({ blogPost }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Head title={`${blogPost.title} - Blog`} />
            
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
                        {/* Back Button */}
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8 group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span>
                            <span className="ml-2">Back to Blog</span>
                        </Link>

                        {/* Article */}
                        <article className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
                            {/* Header */}
                            <div className="p-8 pb-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-3xl">📚</div>
                                    <div>
                                        <div className="text-white/60 text-sm">
                                            📅 {formatDate(blogPost.published_at)}
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <div className="flex items-center gap-2 text-white/60">
                                                <span>⏱️</span>
                                                <span className="text-sm">{Math.ceil(blogPost.content.length / 200)} min read</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/60">
                                                <span>💬</span>
                                                <span className="text-sm">Development</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                                    {blogPost.title}
                                </h1>
                                
                                <p className="text-xl text-white/80 leading-relaxed">
                                    {blogPost.excerpt}
                                </p>
                            </div>

                            {/* Featured Image Placeholder */}
                            <div className="mx-8 my-8 aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                                <div className="text-6xl opacity-30">📝</div>
                            </div>

                            {/* Content */}
                            <div className="px-8 pb-8">
                                <div className="prose prose-lg prose-invert max-w-none">
                                    <div className="text-white/90 text-lg leading-relaxed whitespace-pre-wrap">
                                        {blogPost.content}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="mt-12 pt-8 border-t border-white/20">
                                    <h3 className="text-white font-semibold mb-4">🏷️ Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                            Web Development
                                        </span>
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                            Tutorial
                                        </span>
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                            React
                                        </span>
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                            JavaScript
                                        </span>
                                    </div>
                                </div>

                                {/* Share */}
                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <h3 className="text-white font-semibold mb-4">📤 Share this article</h3>
                                    <div className="flex gap-4">
                                        <a 
                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${encodeURIComponent(window.location.href)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white/90 hover:text-white transition-colors"
                                        >
                                            🐦 Twitter
                                        </a>
                                        <a 
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white/90 hover:text-white transition-colors"
                                        >
                                            💼 LinkedIn
                                        </a>
                                        <button 
                                            onClick={() => navigator.clipboard.writeText(window.location.href)}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-white/90 hover:text-white transition-colors"
                                        >
                                            🔗 Copy Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Author Bio */}
                        <div className="mt-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                            <div className="flex items-start gap-6">
                                <img 
                                    src="/logo.svg" 
                                    alt="Author" 
                                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm p-2"
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-2">About the Author 👋</h3>
                                    <p className="text-white/80 mb-4">
                                        I'm a passionate full-stack developer with expertise in modern web technologies. 
                                        I love sharing knowledge and helping others learn through practical tutorials and insights.
                                    </p>
                                    <div className="flex gap-4">
                                        <a 
                                            href="https://twitter.com/example" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            🐦 Twitter
                                        </a>
                                        <a 
                                            href="https://linkedin.com/in/example" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            💼 LinkedIn
                                        </a>
                                        <a 
                                            href="https://github.com/example" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            💻 GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        <div className="mt-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Related Posts 📖</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Link href="/blog" className="block group">
                                    <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-colors">
                                        <h4 className="text-white font-medium mb-2 group-hover:text-pink-300 transition-colors">
                                            More Web Development Tips
                                        </h4>
                                        <p className="text-white/60 text-sm">Discover more articles and tutorials</p>
                                    </div>
                                </Link>
                                <Link href="/projects" className="block group">
                                    <div className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-colors">
                                        <h4 className="text-white font-medium mb-2 group-hover:text-pink-300 transition-colors">
                                            Check Out My Projects
                                        </h4>
                                        <p className="text-white/60 text-sm">See these concepts in action</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}