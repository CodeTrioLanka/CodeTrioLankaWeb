import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { blogApi } from '@/api/blog.api';

export interface Comment {
    _id?: string;
    id?: string;
    blogId: string;
    name: string;
    email: string;
    text: string;
    date?: string;
    avatar?: string;
    replies?: Reply[];
}

export interface Reply {
    _id?: string;
    id?: string;
    commentId: string;
    name: string;
    email: string;
    text: string;
    date?: string;
    avatar?: string;
}

interface BlogInteraction {
    blogId: string;
    isLiked: boolean;
    likeCount: number;
}

interface BlogStore {
    // Interactions (likes)
    interactions: Record<string, BlogInteraction>;

    // Comments
    comments: Comment[];

    // User ID (generated once for anonymous users)
    userId: string;

    // Loading states
    isLoading: boolean;

    // Actions for likes
    toggleLike: (blogId: string, initialCount: number) => Promise<void>;
    getLikeData: (blogId: string) => { isLiked: boolean; count: number };
    fetchInteractions: (blogId: string, initialCount: number) => Promise<void>;

    // Actions for comments
    addComment: (comment: Omit<Comment, 'id' | '_id' | 'date' | 'avatar' | 'replies'>) => Promise<void>;
    getCommentsByBlogId: (blogId: string) => Comment[];
    fetchComments: (blogId: string) => Promise<void>;

    // Actions for replies
    addReply: (commentId: string, reply: Omit<Reply, 'id' | '_id' | 'date' | 'avatar'>) => Promise<void>;

    // Utility
    generateUserId: () => string;
}

export const useBlogStore = create<BlogStore>()(
    persist(
        (set, get) => ({
            interactions: {},
            comments: [],
            userId: '',
            isLoading: false,

            // Generate a unique user ID for anonymous users
            generateUserId: () => {
                const stored = get().userId;
                if (stored) return stored;

                const newId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                set({ userId: newId });
                return newId;
            },

            // Fetch interactions from API
            fetchInteractions: async (blogId: string, initialCount: number) => {
                try {
                    set({ isLoading: true });
                    const data = await blogApi.getInteractions(blogId);
                    const userId = get().generateUserId();

                    set((state) => ({
                        interactions: {
                            ...state.interactions,
                            [blogId]: {
                                blogId,
                                isLiked: data.likedBy?.includes(userId) || false,
                                likeCount: data.likes || initialCount,
                            },
                        },
                        isLoading: false,
                    }));
                } catch (error) {
                    console.error('Error fetching interactions:', error);
                    // Fallback to localStorage data
                    set({ isLoading: false });
                }
            },

            // Toggle like for a blog post
            toggleLike: async (blogId: string, initialCount: number) => {
                const userId = get().generateUserId();
                const current = get().interactions[blogId];
                const isCurrentlyLiked = current?.isLiked || false;
                const currentCount = current?.likeCount ?? initialCount;

                // Optimistic update
                set((state) => ({
                    interactions: {
                        ...state.interactions,
                        [blogId]: {
                            blogId,
                            isLiked: !isCurrentlyLiked,
                            likeCount: isCurrentlyLiked ? currentCount - 1 : currentCount + 1,
                        },
                    },
                }));

                try {
                    // Update in database
                    const data = await blogApi.toggleLike(blogId, userId);

                    // Update with server response
                    set((state) => ({
                        interactions: {
                            ...state.interactions,
                            [blogId]: {
                                blogId,
                                isLiked: data.likedBy?.includes(userId) || false,
                                likeCount: data.likes,
                            },
                        },
                    }));
                } catch (error) {
                    console.error('Error toggling like:', error);
                    // Revert optimistic update on error
                    set((state) => ({
                        interactions: {
                            ...state.interactions,
                            [blogId]: {
                                blogId,
                                isLiked: isCurrentlyLiked,
                                likeCount: currentCount,
                            },
                        },
                    }));
                }
            },

            // Get like data for a blog post
            getLikeData: (blogId: string) => {
                const interaction = get().interactions[blogId];
                return {
                    isLiked: interaction?.isLiked || false,
                    count: interaction?.likeCount || 0,
                };
            },

            // Fetch comments from API
            fetchComments: async (blogId: string) => {
                try {
                    set({ isLoading: true });
                    const data = await blogApi.getComments(blogId);

                    // Map MongoDB _id to id for compatibility
                    const mappedComments = data.map((comment: any) => ({
                        ...comment,
                        blogId: String(comment.blogId),
                        id: comment._id,
                        replies: comment.replies?.map((reply: any) => ({
                            ...reply,
                            id: reply._id,
                        })),
                    }));

                    set((state) => ({
                        comments: [
                            ...state.comments.filter((c) => c.blogId !== blogId),
                            ...mappedComments,
                        ],
                        isLoading: false,
                    }));
                } catch (error) {
                    console.error('Error fetching comments:', error);
                    set({ isLoading: false });
                }
            },

            // Add a new comment
            addComment: async (comment) => {
                try {
                    const data = await blogApi.addComment(comment);

                    const newComment: Comment = {
                        ...data,
                        id: data._id,
                        date: new Date(data.date!).toLocaleDateString(),
                        replies: [],
                    };

                    set((state) => ({
                        comments: [...state.comments, newComment],
                    }));
                } catch (error) {
                    console.error('Error adding comment:', error);
                    // Fallback to local storage
                    const localComment: Comment = {
                        ...comment,
                        id: `comment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        date: new Date().toLocaleDateString(),
                        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.name}`,
                        replies: [],
                    };

                    set((state) => ({
                        comments: [...state.comments, localComment],
                    }));
                }
            },

            // Get comments for a specific blog post
            getCommentsByBlogId: (blogId: string) => {
                return get().comments.filter((comment) => comment.blogId === blogId);
            },

            // Add a reply to a comment
            addReply: async (commentId: string, reply) => {
                try {
                    const data = await blogApi.addReply(commentId, reply);

                    // Update the comment with the new reply
                    set((state) => ({
                        comments: state.comments.map((comment) =>
                            comment.id === commentId || comment._id === commentId
                                ? {
                                    ...comment,
                                    replies: data.replies?.map((r) => ({
                                        ...r,
                                        id: r._id,
                                        date: new Date(r.date!).toLocaleDateString(),
                                    })),
                                }
                                : comment
                        ),
                    }));
                } catch (error) {
                    console.error('Error adding reply:', error);
                    // Fallback to local storage
                    const newReply: Reply = {
                        ...reply,
                        id: `reply-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        date: new Date().toLocaleDateString(),
                        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${reply.name}`,
                    };

                    set((state) => ({
                        comments: state.comments.map((comment) =>
                            comment.id === commentId || comment._id === commentId
                                ? {
                                    ...comment,
                                    replies: [...(comment.replies || []), newReply],
                                }
                                : comment
                        ),
                    }));
                }
            },
        }),
        {
            name: 'blog-storage', // Key in localStorage
            partialize: (state) => ({
                interactions: state.interactions,
                comments: state.comments,
                userId: state.userId,
            }),
        }
    )
);
