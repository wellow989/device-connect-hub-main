@echo off
echo Installing dependencies...
call npm install

echo Initializing Tailwind CSS...
call npx tailwindcss init -p

echo Setup complete! Starting development server...
call npm run dev 