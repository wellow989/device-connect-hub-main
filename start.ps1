# Kill any existing Node.js processes
taskkill /F /IM node.exe 2>$null

# Clear npm cache
npm cache clean --force

# Install dependencies
npm install

# Start the development server
$env:VITE_HOST="192.168.0.107"
npm run dev -- --host 192.168.0.107 --port 5173 