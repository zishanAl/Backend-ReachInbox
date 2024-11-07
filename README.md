
# ReachInBox Assignment

## Server
The assignment is to build a tool that will parse and check emails in Google and Outlook accounts and respond to emails based on context using AI. It uses BullMQ as the task scheduler. This server-based application is built with Node.js and Express and utilizes packages like `openai` for AI functionalities, `googleapis` for Google APIs, `axios` for HTTP requests, and `bullMQ` to process queues.

## Technologies Used
- Node.js
- Express.js
- OpenAI
- Google APIs
- Microsoft Graph API

## npm Packages Used
- dotenv
- Axios
- bullMQ
- google-auth-library
- ioredis
- @microsoft/microsoft-graph-client
- @azure/msal-node

## Installation Setup
1. Clone the repository to your local machine.
```bash
git clone <repository-url>
```
2. Navigate to the root directory of the project:
```bash 
cd server
```
3. Run `npm install` to install all dependencies.
4. Create a `.env` file in the root directory with the necessary configurations.

## Running the Server
1. To start the server, run:
```bash
npm start
```
*This will start the server at localhost:5000 (or another specified port).*

2. To start the worker, run:
```bash
npm run server
```

## API Endpoints

### Google OAuth2.0 Endpoints
- `/auth/google` - Google authentication
- `/api/mail/userInfo/:email` - Get user profile
- `/api/mail/allDrafts/:email` - View all draft emails
- `/api/mail/read/:email/message/:message` - Read a specific email
- `/api/mail/list/:email` - Get a list of emails
- `/api/mail/sendMail` - Send an email with a label
- `/api/mail/sendone/:id` - Send a single email
- `/api/mail/sendMultiple/:id` - Send multiple emails

### Microsoft Azure OAuth2.0 Endpoints
- `/outlook/signin` - Microsoft Azure authentication for Outlook
- `/outlook/callbak` - Get access token for Microsoft Azure
- `/outlook/profile` - Get profile data for a user
- `/outlook/all-Mails/{email}` - Get all emails of an Outlook user
- `/outlook/{email}/read-Msg/{message}` - Read a particular email by message ID
- `/outlook/{email}/send-Mail` - Send email using Outlook
- `/outlook/sendone/:email/:id` - Send email using `bullmq`

## Sample `.env` Configuration
```
PORT = ***
GOOGLE_CLIENT_ID = ***
GOOGLE_CLIENT_SECRET = ***
GOOGLE_REDIRECT_URI = ***
GOOGLE_REFRESH_TOKEN = ***
OPENAI_SECRECT_KEY = ***
redis_port = ***
redis_host = ***
redis_pass = ***
AZURE_CLIENT_ID = ***
AZURE_CLIENT_SECRET = *** 
AZURE_TENANT_ID = ***
```
