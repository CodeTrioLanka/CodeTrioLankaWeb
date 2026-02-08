import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface Comment {
    _id?: string;
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
    commentId: string;
    name: string;
    email: string;
    text: string;
    date?: string;
    avatar?: string;
}

export interface BlogInteraction {
    blogId: string;
    likes: number;
    likedBy: string[];
}

// Blog Interactions API
export const blogApi = {
    // Get blog interactions (likes count)
    getInteractions: async (blogId: string) => {
        const response = await axios.get<BlogInteraction>(`${API_BASE_URL}/blog/${blogId}/interactions`);
        return response.data;
    },

    // Toggle like
    toggleLike: async (blogId: string, userId: string) => {
        const response = await axios.post<BlogInteraction>(`${API_BASE_URL}/blog/${blogId}/like`, {
            userId,
        });
        return response.data;
    },

    // Get comments for a blog post
    getComments: async (blogId: string) => {
        const response = await axios.get<Comment[]>(`${API_BASE_URL}/blog/${blogId}/comments`);
        return response.data;
    },

    // Add a comment
    addComment: async (comment: Omit<Comment, '_id' | 'date' | 'avatar' | 'replies'>) => {
        const response = await axios.post<Comment>(`${API_BASE_URL}/blog/comments`, comment);
        return response.data;
    },

    // Add a reply to a comment
    addReply: async (commentId: string, reply: Omit<Reply, '_id' | 'date' | 'avatar'>) => {
        const response = await axios.post<Comment>(`${API_BASE_URL}/blog/comments/${commentId}/reply`, reply);
        return response.data;
    },
};
