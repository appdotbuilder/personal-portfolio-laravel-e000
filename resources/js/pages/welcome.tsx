import React from 'react';
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

interface Skill {
    id: number;
    name: string;
    percentage: number;
    category: string | null;
}

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    published_at: string;
}

interface Props {
    projects: Project[];
    skills: Skill[];
    blogPosts: BlogPost[];
    [key: string]: unknown;
}

export default function Welcome({ projects, skills, blogPosts }: Props) {
    return (
        <>
            <Head title="Portfolio - Creative Developer" />
            
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="text-2xl font-bold text-white">
                            ✨ Portfolio
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="#about" className="text-white/90 hover:text-white transition-colors">About</Link>
                            <Link href="#projects" className="text-white/90 hover:text-white transition-colors">Projects</Link>
                            <Link href="#blog" className="text-white/90 hover:text-white transition-colors">Blog</Link>
                            <Link href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Link href="/login">
                                <Button variant="outline" size="sm" className="text-white border-white/30 hover:bg-white/20">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                                    Register
                                </Button>
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="mb-8">
                            <img 
                                src="/logo.svg" 
                                alt="Profile" 
                                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white/30 bg-white/10 backdrop-blur-sm p-4"
                            />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Developer</span>
                        </h1>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            🚀 Building beautiful, functional web experiences with modern technologies. 
                            Passionate about clean code, innovative design, and user-centered solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3">
                                View My Work ✨
                            </Button>
                            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-3">
                                Get In Touch 💬
                            </Button>
                        </div>
                    </div>
                </section>

                {/* About & Skills */}
                <section id="about" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">About Me 👋</h2>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                I'm a passionate full-stack developer with expertise in modern web technologies. 
                                I love creating seamless user experiences and robust backend systems.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">My Story 📖</h3>
                                <p className="text-white/80 mb-6">
                                    With over 5 years of experience in web development, I've helped businesses 
                                    create digital solutions that make a difference. I specialize in React, 
                                    Laravel, and modern UI/UX design principles.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                        🎯 Problem Solver
                                    </span>
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                        🎨 Creative Thinker
                                    </span>
                                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                                        ⚡ Fast Learner
                                    </span>
                                </div>
                            </div>
                            
                            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
                                <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise 🛠️</h3>
                                <div className="space-y-4">
                                    {skills.map((skill) => (
                                        <div key={skill.id} className="group">
                                            <div className="flex justify-between mb-2">
                                                <span className="text-white font-medium">{skill.name}</span>
                                                <span className="text-white/80">{skill.percentage}%</span>
                                            </div>
                                            <div className="w-full bg-white/20 rounded-full h-2">
                                                <div 
                                                    className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:from-purple-400 group-hover:to-pink-500"
                                                    style={{ width: `${skill.percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section id="projects" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects 🎨</h2>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Here are some of my favorite projects that showcase my skills and creativity.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <div key={project.id} className="group cursor-pointer">
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
                                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/80 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech_stack.split(', ').map((tech, index) => (
                                                <span key={index} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/90">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-white/90 hover:text-white transition-colors"
                                        >
                                            View Project →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link href="/projects">
                                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                                    View All Projects 🚀
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Latest Blog Posts */}
                <section id="blog" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">Latest Thoughts 💭</h2>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Sharing insights, tutorials, and thoughts about development and design.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <div className="text-white/60 text-sm mb-2">
                                            📅 {new Date(post.published_at).toLocaleDateString()}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-white/80 mb-4">{post.excerpt}</p>
                                        <div className="text-white/90 group-hover:text-white transition-colors">
                                            Read More →
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link href="/blog">
                                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                                    View All Posts 📚
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together 🤝</h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
                        </p>
                        
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                <a 
                                    href="mailto:hello@example.com" 
                                    className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors group"
                                >
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📧</div>
                                    <div className="text-white font-medium">Email</div>
                                    <div className="text-white/80 text-sm">hello@example.com</div>
                                </a>
                                <a 
                                    href="https://linkedin.com/in/example" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors group"
                                >
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💼</div>
                                    <div className="text-white font-medium">LinkedIn</div>
                                    <div className="text-white/80 text-sm">linkedin.com/in/example</div>
                                </a>
                                <a 
                                    href="https://github.com/example" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors group"
                                >
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💻</div>
                                    <div className="text-white font-medium">GitHub</div>
                                    <div className="text-white/80 text-sm">github.com/example</div>
                                </a>
                            </div>
                        </div>
                        
                        <Link href="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3">
                                Send Message ✨
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 px-6 border-t border-white/20">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="text-white/60 mb-4">
                            © 2025 Creative Developer Portfolio. Made with ❤️ using Laravel & React.
                        </div>
                        <div className="flex justify-center space-x-6">
                            <a href="mailto:hello@example.com" className="text-white/60 hover:text-white transition-colors">📧</a>
                            <a href="https://linkedin.com/in/example" className="text-white/60 hover:text-white transition-colors">💼</a>
                            <a href="https://github.com/example" className="text-white/60 hover:text-white transition-colors">💻</a>
                            <a href="https://instagram.com/example" className="text-white/60 hover:text-white transition-colors">📸</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}