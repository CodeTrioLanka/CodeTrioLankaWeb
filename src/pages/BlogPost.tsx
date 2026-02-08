import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    User,
    MessageCircle,
    ThumbsUp,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Link2,
    ArrowLeft,
    Heart,
    Reply,
} from "lucide-react";
import { toast } from "sonner";
import { useBlogStore } from "@/store/useBlogStore";

// Blog post data (in a real app, this would come from an API)
const blogPostsData = {
    "1": {
        id: 1,
        title: "The Future of Web Development in 2026",
        excerpt:
            "Explore the latest trends and technologies shaping the future of web development, from AI-driven coding to edge computing.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        date: { day: "20", month: "JUN", year: "2026" },
        author: {
            name: "Admin",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
        },
        category: "Web Development",
        tags: ["Web Development", "AI", "Future Tech", "Edge Computing"],
        content: `
      <p>The web development landscape is evolving at an unprecedented pace. As we navigate through 2026, several groundbreaking technologies and methodologies are reshaping how we build and deploy web applications.</p>

      <h2>AI-Driven Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development workflow. AI-powered coding assistants are now capable of understanding context, suggesting optimizations, and even writing entire components based on natural language descriptions.</p>

      <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="AI Development" class="my-6 rounded-lg" />

      <p>This transformation is enabling developers to focus more on architecture and user experience rather than boilerplate code. Tools like GitHub Copilot and Claude are becoming as essential as IDEs themselves.</p>

      <h2>Edge Computing Revolution</h2>
      <p>Edge computing is bringing computation and data storage closer to the sources of data. This significantly reduces latency and bandwidth use, crucial for modern web applications that demand real-time responsiveness.</p>

      <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2134&auto=format&fit=crop" alt="Edge Computing" class="my-6 rounded-lg" />

      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        "The future of web development lies not just in what we build, but in how intelligently we distribute and deliver it to users worldwide."
      </blockquote>

      <h2>The Rise of Web3 Technologies</h2>
      <p>Decentralized applications (dApps) are gaining mainstream adoption. Blockchain technology is no longer confined to cryptocurrency—it's powering new paradigms of user authentication, data ownership, and peer-to-peer interactions.</p>

      <h2>Progressive Web Apps 2.0</h2>
      <p>PWAs have matured significantly, now offering near-native performance across all devices. With improved offline capabilities, push notifications, and seamless installation experiences, the line between web and native apps continues to blur.</p>

      <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop" alt="Mobile Development" class="my-6 rounded-lg" />

      <h2>Key Takeaways</h2>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li>Embrace AI tools to enhance productivity</li>
        <li>Consider edge computing for performance-critical applications</li>
        <li>Stay updated with Web3 developments</li>
        <li>Prioritize progressive enhancement strategies</li>
        <li>Focus on user experience above all</li>
      </ul>

      <p>As we move forward, the successful web developer will be one who adapts to these changes while maintaining a strong foundation in core principles. The future is bright, and the possibilities are endless.</p>
    `,
        likes: 42,
        comments: 5,
    },
    "2": {
        id: 2,
        title: "Mastering React: Advanced Patterns",
        excerpt:
            "Deep dive into advanced React patterns including compound components, render props, and custom hooks for better code reusability.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        date: { day: "15", month: "JUL", year: "2026" },
        author: {
            name: "Admin",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
        },
        category: "React",
        tags: ["React", "JavaScript", "Frontend", "Patterns"],
        content: `
      <p>React has become the de facto library for building modern user interfaces. However, as applications grow in complexity, understanding advanced patterns becomes crucial for maintaining clean, reusable, and performant code.</p>

      <h2>Compound Components Pattern</h2>
      <p>Compound components allow you to create flexible and reusable components that work together to form a cohesive unit. This pattern is particularly useful when building component libraries.</p>

      <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop" alt="React Components" class="my-6 rounded-lg" />

      <h2>Custom Hooks for Logic Reusability</h2>
      <p>Custom hooks enable you to extract component logic into reusable functions. This not only makes your code more maintainable but also promotes the DRY (Don't Repeat Yourself) principle.</p>

      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        "Good React code is not about clever tricks—it's about clear patterns that make your intentions obvious."
      </blockquote>

      <h2>Performance Optimization Techniques</h2>
      <p>Understanding React's reconciliation algorithm and leveraging memoization techniques like useMemo and useCallback can significantly improve your application's performance.</p>

      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Performance" class="my-6 rounded-lg" />

      <p>By mastering these patterns, you'll be able to build more maintainable and scalable React applications that stand the test of time.</p>
    `,
        likes: 38,
        comments: 12,
    },
    "3": {
        id: 3,
        title: "UI/UX Design Principles for Developers",
        excerpt:
            "Learn the fundamental principles of UI/UX design that every developer should know to create intuitive and beautiful interfaces.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        date: { day: "28", month: "AUG", year: "2026" },
        author: {
            name: "Admin",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
        },
        category: "Design",
        tags: ["UI/UX", "Design", "User Experience", "Interface"],
        content: `
      <p>Great design is not just about making things look pretty—it's about creating intuitive experiences that users love. As a developer, understanding fundamental design principles can elevate your work significantly.</p>

      <h2>The Principle of Visual Hierarchy</h2>
      <p>Visual hierarchy guides users' attention to the most important elements first. Use size, color, contrast, and spacing strategically to create clear pathways through your interface.</p>

      <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop" alt="Design Principles" class="my-6 rounded-lg" />

      <h2>Consistency is Key</h2>
      <p>Maintaining consistency in your UI elements helps users build a mental model of how your application works. This includes consistent spacing, colors, typography, and interaction patterns.</p>

      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
      </blockquote>

      <h2>Accessibility Matters</h2>
      <p>Designing for accessibility ensures that everyone, regardless of their abilities, can use your application. This includes proper color contrast, keyboard navigation, and semantic HTML.</p>

      <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" alt="Accessibility" class="my-6 rounded-lg" />

      <p>By incorporating these principles into your development workflow, you'll create applications that are not only functional but delightful to use.</p>
    `,
        likes: 56,
        comments: 8,
    },
    "4": {
        id: 4,
        title: "Building Scalable Backend Systems with Node.js",
        excerpt:
            "A comprehensive guide to building high-performance and scalable backend systems using Node.js and modern architecture.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        date: { day: "10", month: "SEP", year: "2026" },
        author: {
            name: "Admin",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
        },
        category: "Backend",
        tags: ["Node.js", "Backend", "Scalability", "Architecture"],
        content: `
      <p>Node.js has revolutionized backend development with its non-blocking I/O model. However, building truly scalable systems requires understanding architectural patterns and best practices.</p>

      <h2>Microservices Architecture</h2>
      <p>Breaking down your monolithic application into smaller, independently deployable services can significantly improve scalability and maintainability. Each service should have a single responsibility and communicate through well-defined APIs.</p>

      <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2134&auto=format&fit=crop" alt="Microservices" class="my-6 rounded-lg" />

      <h2>Caching Strategies</h2>
      <p>Implementing effective caching at multiple levels—from database query results to API responses—can dramatically reduce load and improve response times. Redis and Memcached are popular choices for distributed caching.</p>

      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        "Premature optimization is the root of all evil, but thoughtful architecture is the foundation of all scalability."
      </blockquote>

      <p>Building scalable systems is an ongoing journey that requires continuous monitoring, optimization, and adaptation to changing requirements.</p>
    `,
        likes: 29,
        comments: 3,
    },
    "5": {
        id: 5,
        title: "Mobile App Development: Native vs Cross-Platform",
        excerpt:
            "Comparing native and cross-platform development approaches to help you choose the right strategy for your next mobile app project.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        date: { day: "05", month: "OCT", year: "2026" },
        author: {
            name: "Admin",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
        },
        category: "Mobile Development",
        tags: ["Mobile", "React Native", "Flutter", "iOS", "Android"],
        content: `
      <p>Choosing between native and cross-platform development is one of the most critical decisions in mobile app development. Each approach has its strengths and trade-offs.</p>

      <h2>Native Development Advantages</h2>
      <p>Native apps offer the best performance and access to all platform-specific features. They provide the most polished user experience and are ideal for apps requiring intensive graphics or complex native integrations.</p>

      <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop" alt="Mobile Development" class="my-6 rounded-lg" />

      <h2>Cross-Platform Benefits</h2>
      <p>Frameworks like React Native and Flutter allow you to write once and deploy to multiple platforms, significantly reducing development time and costs. They're perfect for MVPs and apps that don't require deep platform integration.</p>

      <blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        "The best technology is the one that helps you ship value to your users fastest while maintaining quality."
      </blockquote>

      <p>Your choice should depend on your specific requirements, team expertise, timeline, and budget. Both approaches can deliver excellent results when applied correctly.</p>
    `,
        likes: 45,
        comments: 7,
    },
};

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState<any>(null);
    const [commentName, setCommentName] = useState("");
    const [commentEmail, setCommentEmail] = useState("");
    const [commentText, setCommentText] = useState("");
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyName, setReplyName] = useState("");
    const [replyEmail, setReplyEmail] = useState("");
    const [replyText, setReplyText] = useState("");

    // Zustand store
    const {
        toggleLike,
        getLikeData,
        addComment,
        getCommentsByBlogId,
        addReply,
        fetchInteractions,
        fetchComments,
        isLoading,
    } = useBlogStore();

    // Get stored data
    const blogId = id || "";
    const storedLikes = getLikeData(blogId);
    const storedComments = getCommentsByBlogId(blogId);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id && blogPostsData[id as keyof typeof blogPostsData]) {
            const postData = blogPostsData[id as keyof typeof blogPostsData];
            setPost(postData);

            // Fetch data from backend
            fetchInteractions(blogId, postData.likes);
            fetchComments(blogId);
        }
    }, [id]);

    const handleLike = async () => {
        if (post) {
            await toggleLike(blogId, post.likes);
            const newLikeData = getLikeData(blogId);
            if (newLikeData.isLiked) {
                toast.success("Post liked!");
            } else {
                toast.success("Like removed");
            }
        }
    };

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const text = post?.title || "";

        let shareUrl = "";
        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
                break;
            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case "copy":
                navigator.clipboard.writeText(url);
                toast.success("Link copied to clipboard!");
                return;
        }

        if (shareUrl) {
            window.open(shareUrl, "_blank", "width=600,height=400");
        }
    };

    const handleSubmitComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentName || !commentEmail || !commentText) {
            toast.error("Please fill in all fields");
            return;
        }

        addComment({
            blogId,
            name: commentName,
            email: commentEmail,
            text: commentText,
        });

        setCommentName("");
        setCommentEmail("");
        setCommentText("");
        toast.success("Comment posted successfully!");
    };

    const handleSubmitReply = (e: React.FormEvent, commentId: string) => {
        e.preventDefault();
        if (!replyName || !replyEmail || !replyText) {
            toast.error("Please fill in all fields");
            return;
        }

        addReply(commentId, {
            commentId,
            name: replyName,
            email: replyEmail,
            text: replyText,
        });

        setReplyName("");
        setReplyEmail("");
        setReplyText("");
        setReplyingTo(null);
        toast.success("Reply posted successfully!");
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <Link to="/">
                        <Button>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Go Back Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const totalComments = storedComments.length + post.comments;
    const displayLikes = storedLikes.count || post.likes;

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>{post.title} | CodeTrio Lanka Blog</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[500px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 -mt-32 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link to="/#blog">
                        <Button variant="outline" className="mb-6 bg-card">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Button>
                    </Link>

                    {/* Article Card */}
                    <article className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12">
                        {/* Category Badge */}
                        <Badge className="mb-4 bg-primary text-primary-foreground">
                            {post.category}
                        </Badge>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 font-poppins leading-tight">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
                            <div className="flex items-center gap-2">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={post.author.avatar} />
                                    <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-foreground">{post.author.name}</p>
                                    <p className="text-xs">Author</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>
                                    {post.date.month} {post.date.day}, {post.date.year}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MessageCircle className="w-4 h-4 text-primary" />
                                <span>{totalComments} Comments</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className={`w-4 h-4 ${storedLikes.isLiked ? 'fill-primary text-primary' : 'text-primary'}`} />
                                <span>{displayLikes} Likes</span>
                            </div>
                        </div>

                        {/* Social Share */}
                        <div className="mb-8 pb-8 border-b border-border">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                {/* Share Section */}
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="font-semibold text-foreground flex items-center gap-2 text-sm sm:text-base">
                                        <Share2 className="w-4 h-4" />
                                        Share:
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full hover:bg-blue-500 hover:text-white transition-colors h-9 w-9 sm:h-10 sm:w-10"
                                            onClick={() => handleShare("facebook")}
                                        >
                                            <Facebook className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full hover:bg-sky-500 hover:text-white transition-colors h-9 w-9 sm:h-10 sm:w-10"
                                            onClick={() => handleShare("twitter")}
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full hover:bg-blue-600 hover:text-white transition-colors h-9 w-9 sm:h-10 sm:w-10"
                                            onClick={() => handleShare("linkedin")}
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors h-9 w-9 sm:h-10 sm:w-10"
                                            onClick={() => handleShare("copy")}
                                        >
                                            <Link2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Like Button */}
                                <Button
                                    variant={storedLikes.isLiked ? "default" : "outline"}
                                    className="gap-2 w-full sm:w-auto sm:ml-auto text-sm"
                                    onClick={handleLike}
                                >
                                    <ThumbsUp className={`w-4 h-4 ${storedLikes.isLiked ? 'fill-current' : ''}`} />
                                    {storedLikes.isLiked ? "Liked" : "Like"} ({displayLikes})
                                </Button>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div
                            className="prose prose-lg max-w-none dark:prose-invert
                prose-headings:font-poppins prose-headings:font-bold prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-lg prose-img:shadow-lg
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-li:mb-2
                prose-blockquote:text-foreground"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-border">
                            <div className="flex flex-wrap gap-2">
                                <span className="font-semibold text-foreground mr-2">Tags:</span>
                                {post.tags.map((tag: string) => (
                                    <Badge key={tag} variant="outline" className="text-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Comments Section */}
                    <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12 mt-8">
                        <h2 className="text-3xl font-bold text-foreground mb-8 font-poppins">
                            Comments ({totalComments})
                        </h2>

                        {/* Existing Comments */}
                        {storedComments.length > 0 && (
                            <div className="space-y-6 mb-8">
                                {storedComments.map((comment) => (
                                    <div key={comment.id} className="border border-border rounded-lg p-4">
                                        <div className="flex gap-4">
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage src={comment.avatar} />
                                                <AvatarFallback>{comment.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h4 className="font-semibold text-foreground">{comment.name}</h4>
                                                    <span className="text-xs text-muted-foreground">{comment.date}</span>
                                                </div>
                                                <p className="text-muted-foreground mb-3">{comment.text}</p>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => setReplyingTo(comment.id)}
                                                    className="text-primary hover:text-primary-foreground"
                                                >
                                                    <Reply className="w-3 h-3 mr-1" />
                                                    Reply
                                                </Button>

                                                {/* Replies */}
                                                {comment.replies && comment.replies.length > 0 && (
                                                    <div className="mt-4 ml-8 space-y-4">
                                                        {comment.replies.map((reply) => (
                                                            <div key={reply.id} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                                                                <Avatar className="w-8 h-8">
                                                                    <AvatarImage src={reply.avatar} />
                                                                    <AvatarFallback>{reply.name[0]}</AvatarFallback>
                                                                </Avatar>
                                                                <div className="flex-1">
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <h5 className="font-semibold text-sm text-foreground">{reply.name}</h5>
                                                                        <span className="text-xs text-muted-foreground">{reply.date}</span>
                                                                    </div>
                                                                    <p className="text-sm text-muted-foreground">{reply.text}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Reply Form */}
                                                {replyingTo === comment.id && (
                                                    <form
                                                        onSubmit={(e) => handleSubmitReply(e, comment.id)}
                                                        className="mt-4 ml-8 space-y-3 p-4 bg-muted/30 rounded-lg"
                                                    >
                                                        <h4 className="text-sm font-semibold text-foreground">Reply to {comment.name}</h4>
                                                        <div className="grid md:grid-cols-2 gap-3">
                                                            <Input
                                                                placeholder="Your Name *"
                                                                value={replyName}
                                                                onChange={(e) => setReplyName(e.target.value)}
                                                                required
                                                                size-="sm"
                                                            />
                                                            <Input
                                                                type="email"
                                                                placeholder="Your Email *"
                                                                value={replyEmail}
                                                                onChange={(e) => setReplyEmail(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                        <Textarea
                                                            placeholder="Your Reply *"
                                                            value={replyText}
                                                            onChange={(e) => setReplyText(e.target.value)}
                                                            rows={3}
                                                            required
                                                        />
                                                        <div className="flex gap-2">
                                                            <Button type="submit" size="sm">
                                                                Post Reply
                                                            </Button>
                                                            <Button
                                                                type="button"
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => setReplyingTo(null)}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </div>
                                                    </form>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Comment Form */}
                        <form onSubmit={handleSubmitComment} className="space-y-4">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Leave a Comment</h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Input
                                        placeholder="Your Name *"
                                        value={commentName}
                                        onChange={(e) => setCommentName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your Email *"
                                        value={commentEmail}
                                        onChange={(e) => setCommentEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Textarea
                                    placeholder="Your Comment *"
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    rows={5}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full md:w-auto">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Post Comment
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
            <ThemeToggle />
            <WhatsAppButton />
        </div>
    );
};

export default BlogPost;
