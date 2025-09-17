#!/bin/bash

echo "Testing With a Whisper API endpoint..."
echo "Waiting for server to start..."

# Wait for server to be ready
for i in {1..30}; do
  if curl -s http://localhost:3000 > /dev/null; then
    echo "Server is ready!"
    break
  fi
  echo "Attempt $i: Server not ready yet..."
  sleep 2
done

echo ""
echo "Testing contact form API..."

# Test the API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "company": "Test Corp",
    "phone": "+1234567890",
    "budget": "50k"
  }' \
  -w "\nHTTP Status: %{http_code}\n"

echo ""
echo "Test completed!"
