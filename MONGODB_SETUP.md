# MongoDB Backend Setup Guide

## ✅ Complete Setup කරන්න

### 1. Backend Dependencies Install කරන්න

```bash
cd backend
npm install
```

### 2. MongoDB Install කරන්න

**Option A: Local MongoDB (ඔබේ computer එකේ)**

1. Download: https://www.mongodb.com/try/download/community
2. Install කරන්න
3. MongoDB service run කරන්න

**Option B: MongoDB Atlas (Cloud - නිර්දේශිතයි)**

1. Account හදන්න: https://www.mongodb.com/cloud/atlas
2. Free cluster එකක් හදන්න
3. Database User හදන්න (username + password)
4. Network Access එකේ IP whitelist කරන්න (0.0.0.0/0 හෝ  ඔබේ IP)
5. Connection string copy කරන්න

### 3. Environment Variables Setup කරන්න

Backend folder එකේ `.env` file එකක් හදන්න:

**Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/blog_database
PORT=5000
NODE_ENV=development
```

**MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog_database
PORT=5000
NODE_ENV=development
```

### 4. Frontend Environment Variable

Frontend root folder එකේ `.env` file එකක් හදන්න:

```env
VITE_API_URL=http://localhost:5000/api
```

### 5. Backend Server Run කරන්න

```bash
cd backend
npm run dev
```

Output මෙහෙම පෙනෙන්න ඕන:
```
🚀 Server is running on http://localhost:5000
✅ MongoDB Connected Successfully
```

### 6. Frontend Run කරන්න

නව terminal එකක:
```bash
npm run dev
```

### 7. Test කරන්න

1. Browser එකේ frontend open කරන්න
2. Blog post එකක් open කරන්න
3. Like click කරන්න
4. Comment එකක් add කරන්න
5. Reply එකක් add කරන්න

Backend terminal එකේ API calls පෙනෙන්න ඕන.

## 🎯 Production Deploy කරන්න

### Backend Deploy

Popular options:
- **Railway**: https://railway.app
- **Render**: https://render.com
- **Heroku**: https://heroku.com
- **DigitalOcean**: https://digitalocean.com

### Frontend Environment

Production `.env`:
```env
VITE_API_URL=https://your-backend-url.com/api
```

## 🔧 Troubleshooting

### Error: "MongoDB Connection Error"
- MongoDB service run වෙනවද check කරන්න
- MONGODB_URI එක correct ද බලන්න
- MongoDB Atlas use කරනවනම් IP whitelisted ද බලන්න

### Error: "Network Error" on Frontend
- Backend server run වෙනවද check කරන්න (port 5000)
- VITE_API_URL එක correct ද බලන්න
- CORS enabled ද බලන්න (backend/server.js එකේ තියෙනවා)

### Data පෙන්නෙ නෑ
- Browser console එකේ errors check කරන්න
- Backend terminal එකේ logs බලන්න
- Network tab එකේ API calls check කරන්න

## 📝 API Endpoints

- `GET /api/blog/:blogId/interactions` - Get likes
- `POST /api/blog/:blogId/like` - Toggle like
- `GET /api/blog/:blogId/comments` - Get comments
- `POST /api/blog/comments` - Add comment
- `POST /api/blog/comments/:commentId/reply` - Add reply

## ✨ Features

✅ Real-time likes across all users  
✅ Comments saved to MongoDB  
✅ Nested replies support  
✅ localStorage fallback (offline support)  
✅ Unique user ID generation  
✅ Avatar auto-generation  
✅ Production ready  

ඕනම වෙලාවක help ඕනෙනම් කියන්න! 🚀
