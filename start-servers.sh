#!/bin/bash

# Kill any existing servers
pkill -f "node"
pkill -f "next"

echo "Starting both Express and Next.js servers..."

# Start Express server in the background
echo "Starting Express API server on port 5000..."
npm run dev &
EXPRESS_PID=$!

# Start Next.js server in the background
echo "Starting Next.js frontend server on port 3000..."
npx next dev -p 3000 -H 0.0.0.0 &
NEXTJS_PID=$!

# Handle proper shutdown
function cleanup {
  echo "Shutting down servers..."
  kill $EXPRESS_PID
  kill $NEXTJS_PID
  exit 0
}

trap cleanup SIGINT SIGTERM

# Keep the script running to maintain both servers
wait $EXPRESS_PID $NEXTJS_PID