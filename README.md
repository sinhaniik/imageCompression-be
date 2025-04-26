# Backend TypeScript Boilerplate

A modular, lightweight TypeScript backend boilerplate for Node.js applications using Express and Mongoose for MongoDB. This boilerplate is designed for developers who want a clean, scalable structure to quickly start building RESTful APIs.

---

## ✨ Features

- **Modular Structure**: Organized into separate folders for routes, controllers, models, middlewares, and utilities.
- **TypeScript**: Ensures type safety and modern JavaScript features.
- **Express**: Handles routing and middleware for building robust APIs.
- **Mongoose**: Provides MongoDB integration with schema-based modeling.
- **Winston Logging**: Customizable logging with console and file outputs.
- **Environment Management**: Uses `dotenv` for secure configuration.
- **Error Handling**: Built-in middleware for consistent error responses.

---

## 📁 Project Structure

```
be-ts-boilerplate/
├── src/
│   ├── config/                 # Database connection (e.g., db.ts)
│   ├── controllers/            # Business logic and request handlers
│   ├── middlewares/            # Custom middleware (e.g., error handling)
│   ├── models/                 # Mongoose schema definitions
│   ├── routes/                 # Express route definitions
│   ├── utils/                  # Utility functions (e.g., logger)
│   ├── app.ts                  # Express app setup
│   └── server.ts               # Server entry point
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── README.md                   # This file
├── package.json                # Node.js dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

---

## ✅ Prerequisites

- **Node.js**: Version 18.x or higher  
- **npm**: Version 9.x or higher  
- **MongoDB**: Local instance or cloud-based (e.g., MongoDB Atlas)  
- **TypeScript**: Included via dependencies  

---

## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/be-ts-boilerplate.git
cd be-ts-boilerplate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add the following variables (update `MONGO_URI` as needed):

```
PORT=3000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/be_ts_boilerplate
```

### 4. Create Logs Directory

The logger writes to `logs/error.log` and `logs/combined.log`. Create the logs folder:

```bash
mkdir logs
```

### 5. Run the Application

**For development with hot reload:**

```bash
npm run dev
```

**For production (builds and runs):**

```bash
npm run build
npm start
```

---

## 📜 Scripts

- `npm start`: Starts the production server (runs compiled JavaScript).
- `npm run dev`: Starts the development server with `nodemon` for hot reloading.
- `npm run build`: Compiles TypeScript to JavaScript in the `dist/` folder.

---

## 🔍 Usage

The boilerplate includes example routes for a **health check** (`/api/health`) and **user management** (`/api/users`).

### Health Check

```bash
curl http://localhost:3000/api/health
```

**Response:**

```json
{
  "status": "OK",
  "timestamp": "2025-04-21T08:22:00.000Z"
}
```

### Create User

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

**Response:**

```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2025-04-21T08:22:00.000Z"
}
```

### Get User by ID

```bash
curl http://localhost:3000/api/users/<user-id>
```

---

## 📄 Logging

The boilerplate uses **Winston** for logging, configured in `src/utils/logger.ts`.

### Logs are written to:

- **Console**: All logs
- **logs/error.log**: Error-level logs
- **logs/combined.log**: All logs

Use the logger in your code:

```ts
import { logger } from '../utils/logger';

logger.log('This is a log message');
```

---

## 🛠️ Troubleshooting

### MongoDB Connection Error

- Ensure MongoDB is running
- Check if `MONGO_URI` is correct in `.env`
- For MongoDB Atlas, verify IP whitelist and network access

### Logs Not Writing

- Ensure `logs/` directory exists (`mkdir logs`)

### TypeScript Errors

- Run `npm run build` to check for compilation issues
- Ensure all dependencies are installed (`npm install`)

---

## 🤝 Contributing

Feel free to open issues or submit pull requests on GitHub to improve this boilerplate. Contributions are welcome!

---

## 📄 License

**MIT License** - Free to use, modify, and distribute.

---

## 📨 Contact

For questions or feedback, open an issue on the GitHub repository or reach out to [your-username].

---

**Happy coding!** 🚀