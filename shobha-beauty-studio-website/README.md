# Shobha Beauty Studio & Nails - Official Website

![Shobha Beauty Studio](https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed4bd184-ac60-43ed-9fa1-cf7940f09f10.png

A complete responsive multi-page website for **Shobha Beauty Studio & Nails** located in Bur Dubai, Meena Bazaar, UAE. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏢 Business Information

- **Name**: Shobha Beauty Studio & Nails
- **Location**: Meena Bazaar, Bur Dubai, UAE
- **Phone**: [+971 4 359 1532](tel:+97143591532)
- **Email**: [Shobhabeautysaloon@gmail.com](mailto:Shobhabeautysaloon@gmail.com)
- **Instagram**: [@shobhasaloon](https://www.instagram.com/shobhasaloon)
- **Hours**: Daily 10:00 AM - 10:00 PM (365 days a year)
- **Domain**: www.shobhabeautystudio.com

## ✨ Our Specialties

- 💇‍♀️ **Hair Straightening** - Professional keratin treatments & chemical straightening
- 💨 **Blow Dry** - Expert styling with volume, bounce & lasting hold  
- 🎨 **Mehendi & Henna Art** - Traditional & contemporary designs
- 💅 **Press-on Nails** - Instant glamorous nails with premium application

## 🌟 Website Features

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all devices (phone, tablet, desktop)
- Touch-friendly interface

### 🎨 **Modern UI/UX**
- Sky blue & white color scheme
- Clean, professional design
- Smooth animations and transitions
- Accessibility-compliant

### 📄 **Complete Page Structure**
- **Home**: Hero section, services preview, testimonials
- **Services**: Detailed service descriptions with before/after galleries
- **Pricing**: Transparent pricing with packages & offers
- **Gallery**: Professional portfolio showcasing transformations
- **About**: Studio story, team profiles, certifications
- **Book**: Interactive appointment booking system
- **Contact**: Contact forms, Google Maps, business information

### 🔧 **Advanced Features**
- Google Maps integration for location
- LocalBusiness schema markup for SEO
- Click-to-call phone integration
- WhatsApp quick contact
- Instagram social media integration
- Contact & booking forms with validation
- Professional image gallery
- Multi-language support ready

### 📈 **SEO Optimized**
- Structured data markup
- Meta tags for all pages
- Open Graph tags for social sharing
- Fast loading times
- Mobile-friendly design

## 🚀 Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui
- **Forms**: React Hook Form with validation
- **Icons**: Emoji-based (no external dependencies)
- **Fonts**: Google Fonts (Poppins, Inter)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Quick Start

1. **Clone or extract the project**
   ```bash
   # If from ZIP
   unzip shobha-beauty-studio-website.zip
   cd shobha-beauty-studio-website
   
   # If from Git
   git clone [repository-url]
   cd shobha-beauty-studio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or  
   yarn install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Export static files (optional)
pnpm export
```

## 🗂️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with navigation & footer
│   ├── page.tsx            # Homepage
│   ├── services/page.tsx   # Services page
│   ├── pricing/page.tsx    # Pricing page
│   ├── gallery/page.tsx    # Gallery page
│   ├── about/page.tsx      # About page
│   ├── book/page.tsx       # Booking page
│   ├── contact/page.tsx    # Contact page
│   └── globals.css         # Global styles
│
├── components/             # Reusable components
│   ├── Navigation.tsx      # Site navigation
│   └── Footer.tsx          # Site footer
│
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Customization

### Updating Business Information
Edit these key files to update business details:
- `src/app/layout.tsx` - Meta tags and schema markup
- `src/components/Navigation.tsx` - Phone number in header
- `src/components/Footer.tsx` - All contact information
- Each page component for specific content

### Styling & Colors
The website uses Tailwind CSS classes. Main colors:
- **Primary**: Sky blue (`sky-500`, `sky-600`)
- **Background**: White and light sky blue (`sky-50`)
- **Text**: Gray variants (`gray-900`, `gray-600`)

### Adding New Services
1. Update `src/app/services/page.tsx`
2. Add pricing in `src/app/pricing/page.tsx`
3. Include images in `src/app/gallery/page.tsx`

## 📱 Contact Integration

### Phone Integration
All phone numbers are clickable with `tel:` links:
```typescript
<a href="tel:+97143591532">+971 4 359 1532</a>
```

### Email Integration  
Email addresses use `mailto:` links:
```typescript
<a href="mailto:Shobhabeautysaloon@gmail.com">Email Us</a>
```

### WhatsApp Integration
Quick WhatsApp contact links:
```typescript
<a href="https://wa.me/97143591532">WhatsApp Us</a>
```

## 🗺️ Google Maps

The contact page includes an embedded Google Map showing the Meena Bazaar, Bur Dubai location. The map is fully interactive and mobile-responsive.

## 📋 Forms

### Booking Form (`/book`)
- Service selection with pricing
- Date and time picker
- Customer information collection
- Special requests field
- Form validation

### Contact Form (`/contact`)
- Subject categorization
- Message composition
- Contact information
- Response tracking

## 🌐 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Traditional Hosting
1. Run `pnpm build`
2. Upload `.next` folder contents
3. Configure server to serve static files

### Static Export
The website can be exported as static files for any hosting provider.

## 📊 SEO & Analytics

### Included SEO Features
- Meta tags for all pages
- LocalBusiness schema markup
- Open Graph tags
- Proper heading structure
- Image alt tags
- Fast loading optimization

### Analytics Setup
Add your preferred analytics service:
- Google Analytics 4
- Facebook Pixel  
- Google Tag Manager

## 🔧 Maintenance

### Regular Updates
- Update service pricing in pricing page
- Add new gallery images
- Update team information
- Keep dependencies updated

### Content Management
All content is managed through React components, making updates straightforward for developers.

## 📞 Support

For technical questions or customization needs:
1. Review this documentation
2. Check Next.js documentation
3. Consult Tailwind CSS documentation
4. Verify component structure in source files

## 🎉 Launch Checklist

Before going live:
- [ ] Update domain in configuration
- [ ] Test all forms functionality  
- [ ] Verify Google Maps display
- [ ] Check mobile responsiveness
- [ ] Test all contact links
- [ ] Configure SSL certificate
- [ ] Set up analytics tracking
- [ ] Submit sitemap to Google

---

## 📸 Live Preview

**Current Website**: [View Live Site](https://sb-1f7x42h8fxu7.vercel.run)

The website is fully functional and ready for production deployment at www.shobhabeautystudio.com.

---

*Built with ❤️ for Shobha Beauty Studio & Nails - Your trusted beauty destination in Bur Dubai*
