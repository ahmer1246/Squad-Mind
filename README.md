
# Simple Feedback Mangement System

FeedbackApp is a simple web application that allows users to submit feedback and view all submitted feedback entries. The backend is built with Node.js, Express, and TypeScript, while the frontend is built with React and TypeScript.

## API Reference

#### Get all feedback

```http
  GET feedback/get
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. http://localhost:4000/feedback/get |

#### Post feedback

```http
  GET /feedback/add
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  |http://localhost:4000/feedback/add




## Project structure
feedbackapp/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── feedbackController.ts    # Controller for feedback routes
│   │   ├── models/
│   │   │   └── feedbackModel.ts         # Model for feedback data
│   │   ├── routes/
│   │   │   └── feedbackRoute.ts         # Routes for feedback endpoints
│   │   ├── services/
│   │   │   └── feedbackService.ts       # Service for feedback logic
│   │   ├── server.ts                    # Entry point for the application
│   └── tsconfig.json                    # TypeScript configuration
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Feedback/
│   │   │   │   └── Feedback.tsx         # Form component for submitting feedback
│   │   │   ├── FeedbackList/
│   │   │   │   └── FeedbackList.tsx     # Component for displaying feedback entries
│   │   │   ├── Header/
│   │   │   │   └── Header.tsx            # Header component
│   │   │   ├── SideNavbar/
│   │   │   │   └── SideNavbar.tsx       # Side navigation bar component
│   │   ├── pages/
│   │   │   ├── Form/
│   │   │   │   └── Form.tsx             # Page for feedback form
│   │   │   ├── Home/
│   │   │   │   └── Home.tsx             # Home page displaying feedback list
│   │   ├── services/
│   │   │   └── Service.ts               # Service for API calls
│   │   ├── App.tsx                      # Main app component
│   │   ├── index.tsx                    # Entry point for the React app
│   └── tsconfig.json                    # TypeScript configuration
│
├── .gitignore                           # Git ignore file
├── README.md                            # This README file
└── package.json                         # Project dependencies and scripts


Additional Notes
Rate Limiting: The backend includes optional rate limiting to restrict users to one feedback submission every 10 seconds based on their IP address.# Squad-Mind
