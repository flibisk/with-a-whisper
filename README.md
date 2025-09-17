# With a Whisper - Luxury Landing Page

A minimal, luxurious landing page for "With a Whisper" creative luxury branding studio, built with Next.js 14, TypeScript, and Tailwind CSS.

**Live at:** https://with-a-whisper.vercel.app

## Features

- **Dark luxury aesthetic** with refined typography and subtle animations
- **Accessible modal** with keyboard navigation and focus management
- **Animated split-screen form** with client-side validation
- **Email integration** using Resend API
- **Background video support** with graceful fallback
- **Rate limiting** and security measures
- **Mobile-responsive** design
- **SEO optimized** with proper meta tags and Open Graph

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Zod** for validation
- **Resend** for email delivery
- **Vercel** deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend API key (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd with-a-whisper
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

Edit `.env.local` with your values:
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO=peter@shinystudio.co.uk
CONTACT_FROM=site@withawhisper.com
NEXT_PUBLIC_BG_VIDEO_URL=
NEXT_PUBLIC_BG_VIDEO_POSTER=
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email delivery | Yes |
| `CONTACT_TO` | Email address to receive form submissions | Yes |
| `CONTACT_FROM` | Verified sender email address | Yes |
| `NEXT_PUBLIC_BG_VIDEO_URL` | URL to background video (optional) | No |
| `NEXT_PUBLIC_BG_VIDEO_POSTER` | Video poster image URL (optional) | No |

## Adding Your Logo

Replace `/public/logo.svg` with your actual logo file. The logo should:
- Be an SVG format for crisp scaling
- Have a width of approximately 200px
- Use white or light colors for visibility on dark background
- Include proper alt text

## Background Video Setup

To enable background video:

1. Upload your video to a CDN or hosting service
2. Set `NEXT_PUBLIC_BG_VIDEO_URL` to the video URL
3. Optionally set `NEXT_PUBLIC_BG_VIDEO_POSTER` for a poster image
4. The video will automatically loop, be muted, and play inline

## API Testing

Test the contact form API locally:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "company": "Example Corp",
    "phone": "+1234567890",
    "budget": "50k"
  }'
```

Expected response:
```json
{"ok": true}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
with-a-whisper/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── globals.css             # Global styles and Tailwind
│   ├── layout.tsx             # Root layout with fonts and metadata
│   └── page.tsx               # Main landing page
├── components/
│   ├── Button.tsx             # Reusable button component
│   ├── Form.tsx               # Contact form with validation
│   └── Modal.tsx              # Accessible modal component
├── lib/
│   ├── email.ts               # Email sending utilities
│   ├── utils.ts               # Utility functions
│   └── validation.ts          # Zod validation schemas
├── public/
│   ├── logo.svg               # Company logo
│   └── favicon files          # Favicon and icons
└── Configuration files...
```

## Accessibility Features

- **Keyboard navigation** - All interactive elements accessible via keyboard
- **Focus management** - Proper focus trapping in modals
- **Screen reader support** - Semantic HTML and ARIA labels
- **Reduced motion** - Respects user's motion preferences
- **High contrast** - Optimized for readability
- **Form validation** - Clear error messages and validation

## Performance

- **Lighthouse scores** - Optimized for 95+ accessibility and best practices
- **Image optimization** - Next.js automatic image optimization
- **Font optimization** - Google Fonts with display swap
- **Bundle optimization** - Tree shaking and code splitting
- **Rate limiting** - API protection against abuse

## Security

- **Input validation** - Server-side validation with Zod
- **HTML sanitization** - Strips HTML from user inputs
- **Rate limiting** - Prevents API abuse
- **CORS protection** - Proper headers and security measures
- **Environment variables** - Sensitive data in environment only

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is proprietary to With a Whisper. All rights reserved.

## Support

For questions or support, contact [peter@shinystudio.co.uk](mailto:peter@shinystudio.co.uk)
