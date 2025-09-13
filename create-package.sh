#!/bin/bash

echo "📦 Creating Shobha Beauty Studio Website Package..."

# Create package directory
mkdir -p website-package

# Copy essential files
echo "📄 Copying source files..."
cp -r src/ website-package/
cp -r public/ website-package/
cp package.json website-package/
cp next.config.ts website-package/
cp tsconfig.json website-package/
cp postcss.config.mjs website-package/
cp components.json website-package/

# Copy documentation
echo "📚 Copying documentation..."
cp README.md website-package/
cp PROJECT_SUMMARY.md website-package/
cp DEPLOYMENT.md website-package/ 2>/dev/null || echo "DEPLOYMENT.md not found"
cp IMAGE_REPLACEMENT_GUIDE.md website-package/ 2>/dev/null || echo "IMAGE_REPLACEMENT_GUIDE.md not found"

# Create deployment instructions
echo "📋 Creating deployment instructions..."
cat > website-package/QUICK_START.md << EOF
# 🚀 Shobha Beauty Studio Website - Quick Start

## Installation
\`\`\`bash
npm install
# or
pnpm install
\`\`\`

## Development
\`\`\`bash
npm run dev
# or  
pnpm dev
\`\`\`

## Production Build
\`\`\`bash
npm run build
npm start
# or
pnpm build
pnpm start
\`\`\`

## Live Preview
Current live version: https://sb-1f7x42h8fxu7.vercel.run

## Features
- Black + Gold + White design
- Playfair Display + Inter fonts
- Original logo integrated
- WhatsApp booking system
- Mobile responsive
- SEO optimized
- Google Maps integration

## Contact Integration
- Phone: +971 4 359 1532
- Email: Shobhabeautysaloon@gmail.com  
- Instagram: @shobhasaloon
- WhatsApp: Automatic booking system

Ready for production deployment!
EOF

# Create tar.gz package
echo "🗜️ Creating compressed package..."
tar -czf shobha-beauty-website-complete.tar.gz website-package/

echo "✅ Package created successfully!"
echo "📁 Package: shobha-beauty-website-complete.tar.gz"
echo "🌐 Live site: https://sb-1f7x42h8fxu7.vercel.run"
echo ""
echo "🎉 Website is ready for deployment!"