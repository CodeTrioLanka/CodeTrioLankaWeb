import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Comment {
    id: string;
    blogId: string;
    name: string;
    email: string;
    text: string;
    date: string;
    avatar: string;
    replies?: Reply[];
}

export interface Reply {
    id: string;
    commentId: string;
    name: string;
    email: string;
    text: string;
    date: string;
    avatar: string;
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

    // Actions for likes
    toggleLike: (blogId: string, initialCount: number) => void;
    getLikeData: (blogId: string) => { isLiked: boolean; count: number };

    // Actions for comments
    addComment: (comment: Omit<Comment, 'id' | 'date' | 'avatar'>) => void;
    getCommentsByBlogId: (blogId: string) => Comment[];

    // Actions for replies
    addReply: (commentId: string, reply: Omit<Reply, 'id' | 'date' | 'avatar'>) => void;
}

export const useBlogStore = create<BlogStore>()(
    persist(
        (set, get) => ({
            interactions: {},
            comments: [],

            // Toggle like for a blog post
            toggleLike: (blogId: string, initialCount: number) => {
                set((state) => {
                    const current = state.interactions[blogId];
                    const isCurrentlyLiked = current?.isLiked || false;
                    const currentCount = current?.likeCount ?? initialCount;

                    return {
                        interactions: {
                            ...state.interactions,
                            [blogId]: {
                                blogId,
                                isLiked: !isCurrentlyLiked,
                                likeCount: isCurrentlyLiked ? currentCount - 1 : currentCount + 1,
                            },
                        },
                    };
                });
            },

            // Get like data for a blog post
            getLikeData: (blogId: string) => {
                const interaction = get().interactions[blogId];
                return {
                    isLiked: interaction?.isLiked || false,
                    count: interaction?.likeCount || 0,
                };
            },

            // Add a new comment
            addComment: (comment) => {
                const newComment: Comment = {
                    ...comment,
                    id: `comment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    date: new Date().toLocaleDateString(),
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.name}`,
                    replies: [],
                };

                set((state) => ({
                    comments: [...state.comments, newComment],
                }));
            },

            // Get comments for a specific blog post
            getCommentsByBlogId: (blogId: string) => {
                return get().comments.filter((comment) => comment.blogId === blogId);
            },

            // Add a reply to a comment
            addReply: (commentId: string, reply) => {
                const newReply: Reply = {
                    ...reply,
                    id: `reply-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    date: new Date().toLocaleDateString(),
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${reply.name}`,
                };

                set((state) => ({
                    comments: state.comments.map((comment) =>
                        comment.id === commentId
                            ? {
                                ...comment,
                                replies: [...(comment.replies || []), newReply],
                            }
                            : comment
                    ),
                }));
            },
        }),
        {
            name: 'blog-storage', // Key in localStorage
            partialize: (state) => ({
                interactions: state.interactions,
                comments: state.comments,
            }),
        }
    )
);
