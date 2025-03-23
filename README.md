# Skip Selector Redesign

A responsive React-based redesign of the skip selection page for wewantwaste.co.uk. This project features a clean, modern design with improved user experience across both mobile and desktop devices.

## Project Overview

This application is a redesign of a skip selection interface, allowing users to:
- Browse available skip options
- View detailed skip information including size, capacity, and features
- Select a skip and see pricing information
- View order summary with delivery costs and total price

## Technology Stack

- Next.js 18.3.1
- TypeScript
- Tailwind CSS
- Shadcn UI Components

## Features

- Responsive design for mobile and desktop
- Modern, visually appealing interface
- Improved visual hierarchy and user flow
- API integration for skip data

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/kiriac/edu-app.git
   cd edu-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5000`

## Project Structure

- `/app` - Next.js app directory containing pages and API routes
- `/components` - Reusable UI components
- `/types` - TypeScript type definitions
- `/shared` - Shared code between client and server
- `/server` - Server-side code for the application

## API Integration

The application fetches skip data from the API endpoint:
`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

## Deployment

The application can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or as a static site.

## License

This project is created for educational purposes only.