# Set execution policy to allow script execution
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Install dependencies
npm install

# Install additional required packages
npm install react-router-dom html5-qrcode react-toastify @heroicons/react axios react-hook-form
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 