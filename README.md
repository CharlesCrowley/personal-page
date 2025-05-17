# Portfolio Website

A clean, minimal single-page website that highlights both software development skills and ESL education experience. The site includes a dedicated area to embed a chatbot assistant.

## Features

- Responsive design that works on all screen sizes
- Dark mode support
- Sections for: Hero/Header, About Me, Skills, Featured Projects, Chatbot, and Footer
- Teal accent color scheme (#009688)
- Semantic HTML with accessibility features
- Optimized for performance

## Setup Instructions

1. Clone this repository
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Chatbot Integration

To add your chatbot:

1. Add your chatbot script in the `app/layout.tsx` file where indicated:
   ```html
   <head>
     <link rel="icon" href="/favicon.ico" />
     &lt;!-- Add your chatbot script here: <script src="my-bot.js"></script> -->
   </head>
   \`\`\`

2. Your chatbot will be displayed in the `#assistant-container` div in the Chatbot section.

## Customization

- Replace placeholder text with your personal information
- Update the projects array in `app/page.tsx` with your actual projects
- Modify contact links in the footer section
- Adjust styling as needed in `globals.css` and `tailwind.config.ts`

## File Structure

- `app/page.tsx` - Main portfolio page component
- `app/layout.tsx` - Root layout with metadata and theme provider
- `app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind CSS configuration
- `README.md` - This documentation file

## Deployment

This project is ready to be deployed on Vercel or any other hosting platform that supports Next.js.
