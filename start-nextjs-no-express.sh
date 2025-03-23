#!/bin/bash

# Kill any running Express server
pkill -f "tsx server/index.ts" || true

# Wait a moment for the process to terminate
sleep 2

# Start only the Next.js server
echo "Starting Next.js development server on port 3000..."
npx next dev -p 3000 -H 0.0.0.0