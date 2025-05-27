## 📅 Day 14 – Course Selling App Backend (Part 2 & Final)

Today was the most intense day yet — I completed the entire backend for the **Course Selling App** with full admin and user support.

### 🚀 Completed Backend Routes

#### 🔐 Admin Routes:
- `POST /admin/signup` – Register a new admin
- `POST /admin/signin` – Authenticate admin
- `POST /admin/courses` – Create a new course
- `PUT /admin/courses/:courseId` – Update an existing course
- `GET /admin/courses/bulk` – View all courses created by the admin

#### 🙋 User Routes:
- `POST /users/signup` – Register a new user
- `POST /users/signin` – Authenticate user
- `GET /users/courses` – Preview all available courses (no auth required)
- `POST /users/courses/:courseId` – Purchase a course
- `GET /users/purchases` – View all purchased courses

### 🛠️ Stack & Tools Used:
- **Express** – Server framework  
- **MongoDB & Mongoose** – Database and schema design  
- **Zod** – Validation  
- **bcrypt** – Password hashing  
- **dotenv** – Env config  
- **JWT** – Token-based authentication

---

### 💡 Future Improvements:
- Replace JWT with **cookies** for session handling  
- Add **rate limiting middleware** for security  
- Build frontend in **React** (coming up!)  

Tomorrow, I’ll start building the **frontend UI** for this app. This backend is now complete, modular, and scalable! 🎯🔥
