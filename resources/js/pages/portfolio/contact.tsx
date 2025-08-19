import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    [key: string]: string;
}

export default function Contact() {
    const { data, setData, post, processing, errors } = useForm<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        });
    };

    return (
        <>
            <Head title="Contact - Portfolio" />
            
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
                            <Link href="/blog" className="text-white/90 hover:text-white transition-colors">Blog</Link>
                            <Link href="/contact" className="text-white font-semibold">Contact</Link>
                        </div>
                    </div>
                </nav>

                <div className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-white mb-4">Let's Connect 🤝</h1>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Have a project in mind or just want to say hello? I'd love to hear from you!
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                                    <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch 📬</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
                                                📧
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">Email</div>
                                                <a href="mailto:hello@example.com" className="text-white/80 hover:text-white transition-colors">
                                                    hello@example.com
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
                                                💼
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">LinkedIn</div>
                                                <a 
                                                    href="https://linkedin.com/in/example" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white/80 hover:text-white transition-colors"
                                                >
                                                    linkedin.com/in/example
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
                                                💻
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">GitHub</div>
                                                <a 
                                                    href="https://github.com/example" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white/80 hover:text-white transition-colors"
                                                >
                                                    github.com/example
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl">
                                                📸
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">Instagram</div>
                                                <a 
                                                    href="https://instagram.com/example" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white/80 hover:text-white transition-colors"
                                                >
                                                    @example
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                                    <h3 className="text-xl font-semibold text-white mb-4">Why Work With Me? ✨</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <span className="text-pink-400">🚀</span>
                                            <div>
                                                <div className="text-white font-medium">Fast Delivery</div>
                                                <div className="text-white/80 text-sm">Quality work delivered on time</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-purple-400">🎯</span>
                                            <div>
                                                <div className="text-white font-medium">Result Focused</div>
                                                <div className="text-white/80 text-sm">Solutions that drive business goals</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-blue-400">🤝</span>
                                            <div>
                                                <div className="text-white font-medium">Collaborative</div>
                                                <div className="text-white/80 text-sm">Your vision, my expertise</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-semibold text-white mb-6">Send a Message 💬</h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2">Name *</label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                                            placeholder="Your full name"
                                            required
                                        />
                                        {errors.name && <div className="text-pink-400 text-sm mt-1">{errors.name}</div>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white font-medium mb-2">Email *</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                                            placeholder="your@email.com"
                                            required
                                        />
                                        {errors.email && <div className="text-pink-400 text-sm mt-1">{errors.email}</div>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white font-medium mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            value={data.subject}
                                            onChange={e => setData('subject', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                                            placeholder="What's this about?"
                                            required
                                        />
                                        {errors.subject && <div className="text-pink-400 text-sm mt-1">{errors.subject}</div>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white font-medium mb-2">Message *</label>
                                        <textarea
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm resize-none"
                                            placeholder="Tell me about your project..."
                                            required
                                        />
                                        {errors.message && <div className="text-pink-400 text-sm mt-1">{errors.message}</div>}
                                    </div>
                                    
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 disabled:opacity-50"
                                    >
                                        {processing ? '✈️ Sending...' : '🚀 Send Message'}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}