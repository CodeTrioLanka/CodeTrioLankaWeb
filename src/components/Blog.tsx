
import { Calendar, User, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development in 2026",
        excerpt:
            "Explore the latest trends and technologies shaping the future of web development, from AI-driven coding to edge computing.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        date: { day: "20", month: "JUN" },
        author: "Admin",
        comments: 5,
    },
    {
        id: 2,
        title: "Mastering React: Advanced Patterns",
        excerpt:
            "Deep dive into advanced React patterns including compound components, render props, and custom hooks for better code reusability.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        date: { day: "15", month: "JUL" },
        author: "Admin",
        comments: 12,
    },
    {
        id: 3,
        title: "UI/UX Design Principles for Developers",
        excerpt:
            "Learn the fundamental principles of UI/UX design that every developer should know to create intuitive and beautiful interfaces.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        date: { day: "28", month: "AUG" },
        author: "Admin",
        comments: 8,
    },
    {
        id: 4,
        title: "Building Scalable Backend Systems with Node.js",
        excerpt:
            "A comprehensive guide to building high-performance and scalable backend systems using Node.js and modern architecture.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        date: { day: "10", month: "SEP" },
        author: "Admin",
        comments: 3,
    },
    {
        id: 5,
        title: "Mobile App Development: Native vs Cross-Platform",
        excerpt:
            "Comparing native and cross-platform development approaches to help you choose the right strategy for your next mobile app project.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        date: { day: "05", month: "OCT" },
        author: "Admin",
        comments: 7,
    },
];

const Blog = () => {
    return (
        <section id="blog" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal
                    animation="fade-up"
                    width="100%"
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-block text-primary font-bold text-xs md:text-sm uppercase tracking-wider mb-3 font-poppins">
                        Our Blog
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 md:mb-4 font-poppins px-4">
                        Latest Article From <span className="text-gradient">Blog</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
                        Stay updated with the latest insights, tutorials, and news from the tech world.
                    </p>
                </ScrollReveal>

                <div className="relative px-0 sm:px-4 md:px-8 lg:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 sm:-ml-4">
                            {blogPosts.map((post) => (
                                <CarouselItem key={post.id} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        {/* Image Section */}
                                        <div className="relative h-44 sm:h-48 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                                            {/* Date Circle */}
                                            <div className="absolute -bottom-3 sm:-bottom-4 left-4 sm:left-6 bg-primary text-primary-foreground rounded-full w-14 h-14 sm:w-16 sm:h-16 flex flex-col items-center justify-center shadow-lg border-4 border-card z-10">
                                                <span className="text-base sm:text-lg font-bold leading-none">{post.date.day}</span>
                                                <span className="text-[10px] sm:text-xs uppercase font-medium">{post.date.month}</span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="pt-6 sm:pt-8 p-4 sm:p-6 flex-grow flex flex-col">
                                            {/* Meta Info */}
                                            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3">
                                                <div className="flex items-center gap-1">
                                                    <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                                                    <span className="hidden sm:inline">{post.author}</span>
                                                    <span className="sm:hidden">Admin</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                                                    <span>{post.comments}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 font-poppins">
                                                {post.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Read More Button */}
                                            <div className="mt-auto">
                                                <Link to={`/blog/${post.id}`}>
                                                    <Button
                                                        variant="link"
                                                        className="p-0 h-auto text-primary font-semibold hover:no-underline group/btn text-xs sm:text-sm"
                                                    >
                                                        Read More
                                                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover/btn:translate-x-1" />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex -left-2 sm:-left-4 md:-left-12 bg-card hover:bg-primary hover:text-primary-foreground border-primary/20" />
                        <CarouselNext className="hidden sm:flex -right-2 sm:-right-4 md:-right-12 bg-card hover:bg-primary hover:text-primary-foreground border-primary/20" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Blog;

