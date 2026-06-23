# YSMN

A modern web application built with React, Vite, Node.js, Express, and PostgreSQL.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or pnpm (v8 or higher)
- PostgreSQL database (local or remote)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd SparkleSite
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the project root with the following keys (adjust values to your SMTP/email provider):
   ```
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password

   MAIL_FROM=info@your-domain.com
   CONTACT_TO=infoatysmn2010@gmail.com
   CAREERS_TO=infoatysmn2010@gmail.com

   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on [Render](https://render.com/).

### Prerequisites

- A Render account
- A PostgreSQL database (can be provisioned through Render)
- GitHub/GitLab/Bitbucket account connected to Render

### Deployment Steps

1. Push your code to your Git repository
2. Sign in to [Render](https://render.com/)
3. Click "New" and select "Web Service"
4. Connect your repository
5. Configure your service:
   - Name: `sparkle-site`
   - Region: Choose the one closest to your users
   - Branch: `main` (or your preferred branch)
   - Build Command: `npm ci && npm run build`
   - Start Command: `npm start`
6. Add environment variables from your `.env` file
7. Click "Create Web Service"

### Database

If you're using Render's managed PostgreSQL:
1. Create a new PostgreSQL database in Render
2. Update the `DATABASE_URL` in your environment variables to use the connection string provided by Render
3. The database will be automatically provisioned and connected to your web service

## Environment Variables

Use the example in Getting Started step 3 for all required environment variables.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check your code
- `npm run db:push` - Push database schema changes

## License

MIT

infoatysmn2010@gmail.com
