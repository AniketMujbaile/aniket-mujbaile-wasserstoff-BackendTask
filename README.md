# aniket-mujbaile-wasserstoff-BackendTask

Developed a load balancer that can dynamically route incoming requests to different
API endpoints.

## 🔗 Hosted link

Postman API Testing Documentation: [API Documentation](https://documenter.getpostman.com/view/24632237/2sA3e1AUq1)

## Technologies Used

- Node.js
- Express.js 
 
## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the server:

```bash
npm start
```
3. Run Mock API Server:
In a terminal, navigate to your mockApis folder and run

```bash
node index.js
```

## Endpoints

- `POST http://localhost:3000/api?strategy=fifo&type=REST`: POST /api for FIFO Strategy

- `POST http://localhost:3000/api?strategy=priority&type=REST&priority=1`: POST /api for Priority Strategy

- `POST http://localhost:3000/api?strategy=round-robin&type=REST`: POST /api for Round-Robin Strategy