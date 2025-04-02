# Task Manager - MERN Stack

A simple full-stack app to manage tasks using MongoDB, Express.js, React, and Node.js. Add, view, and delete tasks with a RESTful API and MongoDB storage.

## Features
- Add tasks via input
- View all tasks in a list
- Delete tasks with a button

## Tech Stack
- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)

## Prerequisites
- Node.js & npm
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Setup
1. **Clone Repo**: `git clone <repository-url> && cd mern-task-manager`
2. **Backend**:
   - `cd server`
   - `npm install`
   - Create `.env`: `MONGO_URI=<your-mongo-uri> PORT=5000`
   - `node index.js` (runs on `http://localhost:5000`)
3. **Frontend**:
   - `cd client`
   - `npm install`
   - `npm start` (runs on `http://localhost:3000`)
4. **Test**: Open `http://localhost:3000`, add/delete tasks

## Usage
- **Add**: Type a task, click "Add Task"
- **View**: Tasks load automatically
- **Delete**: Click "Delete" next to a task

## API
- `GET /api/tasks`: Fetch tasks
- `POST /api/tasks`: Add task (`{ "title": "task" }`)
- `DELETE /api/tasks/:id`: Delete task

## Troubleshooting
- **CORS**: Check `cors` in `server/index.js`
- **MongoDB**: Verify `MONGO_URI`
- **API**: Test with Postman

## Enhancements
- Edit tasks
- Add "completed" status
- Deploy to Heroku/Netlify

## License
MIT
