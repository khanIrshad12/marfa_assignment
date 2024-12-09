"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FlipText from '@/components/ui/flip-text';

// Expanded blog post data with 12 unique entries
const BLOG_POSTS = [
    {
        id: 1,
        title: "Introduction to React",
        content: "React is a powerful JavaScript library for building user interfaces. It revolutionizes how developers create interactive web applications by introducing a component-based architecture that makes code more modular and easier to maintain.",
        author: "John Doe",
        category: "Technology",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Machine Learning Basics",
        content: "Machine learning is transforming how we approach complex problems. From predictive analytics to artificial intelligence, this field is opening up new possibilities across industries, helping businesses make data-driven decisions.",
        author: "Jane Smith",
        category: "AI",
        date: "2024-02-20"
    },
    {
        id: 3,
        title: "Web Design Trends",
        content: "Modern web design is all about creating intuitive and responsive experiences. We explore the latest trends including minimalist interfaces, dark mode, and micro-interactions that are reshaping digital user experiences.",
        author: "Mike Johnson",
        category: "Design",
        date: "2024-03-10"
    },
    {
        id: 4,
        title: "React Performance Optimization",
        content: "Improving React application performance requires careful consideration of rendering strategies, memoization, and efficient state management. Learn how to make your React apps faster and more responsive.",
        author: "John Doe",
        category: "Technology",
        date: "2024-04-05"
    },
    {
        id: 5,
        title: "Sustainable Living Practices",
        content: "Explore practical ways to reduce your carbon footprint and live more sustainably. From energy conservation to mindful consumption, discover how small changes can make a big environmental impact.",
        author: "Emily Green",
        category: "Lifestyle",
        date: "2024-02-15"
    },
    {
        id: 6,
        title: "Cybersecurity in the Digital Age",
        content: "As technology advances, protecting digital assets becomes crucial. This comprehensive guide covers essential cybersecurity practices for individuals and businesses in an increasingly connected world.",
        author: "Alex Rodriguez",
        category: "Technology",
        date: "2024-05-12"
    },
    {
        id: 7,
        title: "Cooking Techniques for Beginners",
        content: "Master the fundamental cooking techniques that will transform you from a novice to a confident home chef. Learn about knife skills, basic cooking methods, and how to build flavor in your dishes.",
        author: "Sarah Chen",
        category: "Cooking",
        date: "2024-01-30"
    },
    {
        id: 8,
        title: "The Future of Renewable Energy",
        content: "Dive into the latest innovations in renewable energy technologies. From solar and wind to emerging solutions like green hydrogen, explore how we're moving towards a more sustainable energy future.",
        author: "David Kumar",
        category: "Science",
        date: "2024-03-25"
    },
    {
        id: 9,
        title: "Mental Health and Wellness",
        content: "A holistic approach to mental health explores strategies for maintaining psychological well-being in a fast-paced world. Learn about mindfulness, stress management, and building emotional resilience.",
        author: "Dr. Lisa Wong",
        category: "Health",
        date: "2024-04-18"
    },
    {
        id: 10,
        title: "Travel Photography Tips",
        content: "Capture the world through your lens with these expert travel photography techniques. From composition to lighting, learn how to tell compelling stories through your travel images.",
        author: "Michael Chang",
        category: "Photography",
        date: "2024-02-05"
    },
    {
        id: 11,
        title: "Blockchain Beyond Cryptocurrency",
        content: "Explore the transformative potential of blockchain technology across various industries. From supply chain management to healthcare, discover how this technology is revolutionizing business processes.",
        author: "Emma Watson",
        category: "Technology",
        date: "2024-05-01"
    },
    {
        id: 12,
        title: "Plant-Based Nutrition Guide",
        content: "A comprehensive look at plant-based nutrition, exploring the health benefits, nutritional considerations, and delicious ways to incorporate more plant-based meals into your diet.",
        author: "Sarah Chen",
        category: "Cooking",
        date: "2024-04-22"
    }
];

const BlogSearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [authorFilter, setAuthorFilter] = useState('');

    // Unique categories and authors for filtering
    const categories = [...new Set(BLOG_POSTS.map(post => post.category))];
    const authors = [...new Set(BLOG_POSTS.map(post => post.author))];

    // Filter and search logic
    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            !categoryFilter || post.category === categoryFilter;

        const matchesAuthor =
            !authorFilter || post.author === authorFilter;

        return matchesSearch && matchesCategory && matchesAuthor;
    });

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl ">
            <FlipText
                className="text-5xl p-4 text-center font-bold bg-gradient-to-r from-gray-100 to-yellow-500 bg-clip-text text-transparent    md:text-7xl md:leading-[5rem] py-8"
                word="Blog Posts"
            />
            <div className="mb-6 flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-grow">
                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                </div>

                {/* Category Filter */}
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                {/* Author Filter */}
                <select
                    value={authorFilter}
                    onChange={(e) => setAuthorFilter(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">All Authors</option>
                    {authors.map(author => (
                        <option key={author} value={author}>{author}</option>
                    ))}
                </select>
            </div>

            {/* Results Display */}
            <div className="space-y-4">
                {filteredPosts.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                        No blog posts found
                    </div>
                ) : (
                    filteredPosts.map(post => (
                        <div
                          key={post.id}
                          className="
                            bg-white bg-opacity-5 
                            backdrop-blur-lg 
                            border border-white border-opacity-10 
                            rounded-xl 
                            p-6 
                            transform transition-all duration-300 
                            hover:scale-105 
                            hover:shadow-2xl 
                            hover:border-opacity-20
                            hover:bg-opacity-10
                            cursor-pointer
                            relative
                            overflow-hidden
                          "
                        >
                          {/* Glassmorphism Glow Effect */}
                          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white bg-opacity-5 blur-3xl rotate-45 origin-bottom-right"></div>
                          
                          <h2 className="text-xl font-bold mb-2 text-white relative z-10">{post.title}</h2>
                          <div className="text-sm text-gray-300 mb-2 relative z-10">
                            <span className="mr-2">By {post.author}</span>
                            <span className="mr-2">|</span>
                            <span>{post.category}</span>
                            <span className="mr-2">|</span>
                            <span>{post.date}</span>
                          </div>
                          <p className="text-gray-400 line-clamp-2 relative z-10">{post.content}</p>
                        </div>
                      ))
                    )}
            </div>
        </div>
    );
};

export default BlogSearchPage;