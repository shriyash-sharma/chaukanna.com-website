# Chaukanna - CCTV & Home Automation Services Website

A complete SEO-optimized, mobile-friendly website for Shri CCTV And Home Automation Services built with Next.js 14, TailwindCSS, and PWA support.

## Features

- ✅ **Next.js 14** with App Router
- ✅ **TailwindCSS** for modern styling
- ✅ **PWA Support** with next-pwa
- ✅ **SEO Optimized** with dynamic meta tags
- ✅ **Mobile Responsive** design
- ✅ **Blog System** with ISR (Incremental Static Regeneration)
- ✅ **Contact Form** with Supabase integration
- ✅ **Floating Action Buttons** (WhatsApp, Call, Email)
- ✅ **Google Analytics** integration
- ✅ **Tawk.to Chat** widget
- ✅ **Service Pages** for all 9 services
- ✅ **About Us** and **Contact** pages
- ✅ **Preloaded Blog Content** for SEO

## Services Covered

1. CCTV Installation
2. CCTV AMC (Annual Maintenance Contract)
3. Fire Alarm Systems
4. Biometric Attendance
5. Repair & Maintenance
6. Video Door Phone
7. Smart Home Automation
8. Access Control Systems
9. Public Address Systems

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Database**: Supabase
- **PWA**: next-pwa
- **Analytics**: Vercel Analytics + Google Analytics
- **Chat**: Tawk.to
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd chaukanna-website
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Google Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here

# Tawk.to Chat Widget
NEXT_PUBLIC_TAWK_ID=your_tawk_to_id_here

# Contact Form Email (Optional)
CONTACT_EMAIL=info@chaukanna.com
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run these queries:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  service TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create interaction_logs table
CREATE TABLE interaction_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL,
  details JSONB,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE interaction_logs ENABLE ROW LEVEL SECURITY;

-- Create policies (allow public to insert)
CREATE POLICY "Allow public insert on contact_submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert on interaction_logs" ON interaction_logs
  FOR INSERT WITH CHECK (true);
```

3. Copy your project URL and anon key to `.env.local`

### 4. Google Analytics Setup

1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to `.env.local` as `NEXT_PUBLIC_GA_ID`
4. Update the Google Analytics code in `src/app/layout.tsx` with your actual ID

### 5. Tawk.to Setup

1. Sign up at [tawk.to](https://tawk.to)
2. Get your widget ID
3. Add it to `.env.local` as `NEXT_PUBLIC_TAWK_ID`
4. Update the Tawk.to script in `src/app/layout.tsx` with your actual ID

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_TAWK_ID`
   - `CONTACT_EMAIL`
4. Deploy!

### 3. Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings
2. Add your custom domain (chaukanna.com)
3. Update DNS records as instructed by Vercel

## PWA Testing

### Desktop Chrome
1. Open the website in Chrome
2. Look for the install icon in the address bar
3. Click to install the PWA

### Mobile Chrome
1. Open the website in Chrome on mobile
2. Tap the menu (three dots)
3. Select "Add to Home Screen"
4. The app will be installed as a native app

## Content Management

### Adding Blog Posts

1. Edit `src/data/blogPosts.ts`
2. Add new blog post objects to the `blogPosts` array
3. The blog system uses ISR, so new posts will be available after deployment

### Updating Services

1. Edit `src/data/services.ts`
2. Modify service information as needed
3. Changes will be reflected across all service pages

### Contact Form

The contact form automatically saves submissions to Supabase. You can view submissions in your Supabase dashboard under the `contact_submissions` table.

## SEO Features

- Dynamic meta tags for each page
- Open Graph tags for social sharing
- Twitter Card support
- Schema markup for local business
- Sitemap generation (add to `next.config.js` if needed)
- Internal linking between services and blog posts

## Performance

- Image optimization with Next.js Image component
- Static generation for blog posts
- PWA caching for offline support
- Optimized bundle size
- Mobile-first responsive design

## Support

For technical support or questions about this website, contact the development team or refer to the Next.js documentation.

## License

This project is proprietary software for Chaukanna CCTV & Home Automation Services.