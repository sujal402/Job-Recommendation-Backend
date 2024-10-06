
# Job Recommendation API

This is a Node.js-based RESTful API that recommends relevant job postings to users based on their profiles, skills, experience, and preferences. It uses MongoDB as the database and includes middleware for logging and error handling.

## Features
- **User Profile Management**: Add user profiles with skills, experience, and preferences.
- **Job Postings**: Add and manage job postings.
- **Job Recommendations**: API to recommend relevant job postings to users based on profile matching.
- **Middleware**: Includes logging and error handling middleware.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Middleware**: Logger and Error Handling

## Getting Started

### Prerequisites

Ensure that you have the following installed on your system:
- **Node.js** (v14.x or higher)
- **MongoDB** (local or cloud instance)
- **Postman** or **cURL** (for API testing)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/job-recommendation-api.git

   npm install
   
   npm start
   ```

   By default, the server will run on port 5000. You should see `Server is running on port 5000` in the terminal.

### API Endpoints

#### 1. **User Routes** (`/api/user`)
- **POST /api/user**: Create a new user profile.
  - **Body:**
    ```json
    {
      "name": "John Doe",
      "skills": ["JavaScript", "Node.js", "React"],
      "experience_level": "Intermediate",
      "preferences": {
        "desired_roles": ["Software Engineer", "Full Stack Developer"],
        "locations": ["San Francisco", "Remote"],
        "job_type": "Full-Time"
      }
    }
    ```

#### 2. **Job Routes** (`/api/job`)
- **POST /api/job**: Create a new job posting.
  - **Body:**
    ```json
    {
      "job_title": "Backend Developer",
      "company": "Tech Solutions Inc.",
      "required_skills": ["Python", "Django", "REST APIs"],
      "location": "Remote",
      "job_type": "Full-Time",
      "experience_level": "Intermediate"
    }
    ```

- **GET /api/job/recommend/:userId**: Get job recommendations for a specific user based on their profile.

#### 3. **Error Handling**
   The API implements a global error-handling middleware that captures and responds to errors in a unified way.
   - Example error response:
     ```json
     {
       "message": "User not found"
     }
     ```

### Middleware

1. **Logger Middleware:**
   Logs each request method and URL to the console along with a timestamp.

2. **Error Handling Middleware:**
   Catches all errors and sends a structured error response to the client. This keeps the application secure and robust.

### Database Schema

#### 1. **User Profile Schema**:
```json
{
  "name": String,
  "skills": [String],
  "experience_level": String,
  "preferences": {
    "desired_roles": [String],
    "locations": [String],
    "job_type": String
  }
}
```

#### 2. **Job Posting Schema**:
```json
{
  "job_title": String,
  "company": String,
  "required_skills": [String],
  "location": String,
  "job_type": String,
  "experience_level": String
}
```

### Running Tests
Use **Postman** or **cURL** to test the API endpoints.

Example **cURL** command for creating a user:
```bash
curl -X POST http://localhost:5000/api/user \
-H 'Content-Type: application/json' \
-d '{
  "name": "John Doe",
  "skills": ["JavaScript", "Node.js", "React"],A
  "experience_level": "Intermediate",
  "preferences": {
    "desired_roles": ["Software Engineer", "Full Stack Developer"],
    "locations": ["San Francisco", "Remote"],
    "job_type": "Full-Time"
  }
}'
```
