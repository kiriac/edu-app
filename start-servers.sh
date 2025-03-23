#!/bin/bash

# Kill any existing servers to avoid port conflicts
echo "Stopping any existing servers..."
pkill -f "tsx server/index.ts" || true
pkill -f "next" || true
sleep 2

echo "Starting both Express and Next.js servers..."

# Start Express server in the background
echo "Starting Express API server on port 5000..."
npm run dev &
EXPRESS_PID=$!
sleep 3  # Give it a moment to start

# Start Next.js server in the background
echo "Starting Next.js frontend server on port 3000..."
npx next dev -p 3000 -H 0.0.0.0 &
NEXTJS_PID=$!

echo "Express PID: $EXPRESS_PID"
echo "Next.js PID: $NEXTJS_PID"

# Handle proper shutdown
function cleanup {
  echo "Shutting down servers..."
  kill $EXPRESS_PID || true
  kill $NEXTJS_PID || true
  exit 0
}

trap cleanup SIGINT SIGTERM EXIT

# Print a message to show servers are running
echo "Both servers are now running!"
echo "Express API: http://localhost:5000"
echo "Next.js App: http://localhost:3000"

# Keep the script running to maintain both servers
wait $EXPRESS_PID $NEXTJS_PID