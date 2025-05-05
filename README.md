# Device Registration Website

A modern, mobile-friendly website for field agents to register new devices. Built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Mobile-first, responsive design
- 🔍 Barcode scanning using device camera
- 🔐 Agent authentication
- 📝 Form validation
- 🌐 RTL support for Arabic
- 🎨 Modern UI with smooth animations

## Setup

1. Make sure you have Node.js installed (version 16 or higher)

2. Run the installation script:
   ```powershell
   .\install.ps1
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Development

- The default agent password is `agent123` (for development only)
- The barcode scanner uses the device's camera
- Form data is currently simulated (backend integration needed)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting service.

## Deployment

You can deploy this application to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Security Notes

- The current authentication is for demonstration purposes only
- In production, implement proper authentication and authorization
- Add rate limiting and other security measures
- Use environment variables for sensitive data 