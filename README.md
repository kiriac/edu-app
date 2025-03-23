# Skip Hire Selection Page - We Want Waste

A completely redesigned Skip Selection page for wewantwaste.co.uk, built with Next.js, React, TypeScript, and Tailwind CSS.

## Project Overview

This project is a modern, mobile-responsive redesign of the Skip Selection page for wewantwaste.co.uk. The redesign focuses on providing a seamless user experience with improved visual hierarchy and user interactions.

### Key Features

- **Modern UI Design:** Clean, professional interface with a vibrant green color scheme
- **Mobile Responsive:** Fully responsive layout that works great on all device sizes
- **Single Skip Selection:** Users can select only one skip at a time
- **Order Summary:** Dynamic order summary that updates based on selection
- **API Integration:** Fetch skip data from the API endpoint

## Technology Stack

- **Framework:** Next.js 18.3.1 (App Router)
- **Library:** React with TypeScript
- **Styling:** Tailwind CSS with custom color variables
- **UI Components:** ShadCN/ui customized components
- **State Management:** React Hooks (useState)
- **Data Fetching:** TanStack Query v5

## Components

- **Header:** Navigation and branding
- **ProgressTracker:** Visual indication of the order process
- **InfoBanner:** Key information about services
- **SkipCard:** Individual skip selection cards
- **OrderSummary:** Dynamic order total and breakdown
- **Footer:** Company information and links

## API Endpoints

The application uses a single API endpoint for fetching skip data:

- **GET /api/skips** - Returns an array of available skips with details

## Installation and Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Design Decisions

- **Color Scheme:** Vibrant green palette to represent eco-friendliness and waste management
- **Visual Hierarchy:** Clear visual distinction between selected and unselected skips
- **Card Layout:** Information organized in visually appealing cards with clear CTAs
- **Simplified Selection:** Removed quantity controls to simplify the user experience

## Future Improvements

- Add address search functionality for location-specific pricing
- Implement form validation for delivery details
- Add user authentication for returning customers
- Implement analytics tracking for conversion optimization

## License

This project is licensed under the MIT License