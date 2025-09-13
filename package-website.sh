#!/bin/bash

# Shobha Beauty Studio Website Packaging Script
echo "📦 Packaging Shobha Beauty Studio Website..."

# Create package directory
mkdir -p shobha-beauty-studio-website

# Copy essential files
cp README.md shobha-beauty-studio-website/
cp DEPLOYMENT.md shobha-beauty-studio-website/
cp TODO.md shobha-beauty-studio-website/
cp package.json shobha-beauty-studio-website/
cp package-lock.json shobha-beauty-studio-website/
cp next.config.ts shobha-beauty-studio-website/
cp tsconfig.json shobha-beauty-studio-website/
cp postcss.config.mjs shobha-beauty-studio-website/
cp components.json shobha-beauty-studio-website/
cp eslint.config.mjs shobha-beauty-studio-website/

# Copy source directory
cp -r src/ shobha-beauty-studio-website/

# Copy public directory
cp -r public/ shobha-beauty-studio-website/

# Copy built files if they exist
if [ -d ".next" ]; then
    cp -r .next/ shobha-beauty-studio-website/
fi

# Create ZIP file
echo "🗜️  Creating ZIP package..."
zip -r shobha-beauty-studio-website.zip shobha-beauty-studio-website/

echo "✅ Package created successfully!"
echo "📁 Files included:"
echo "   - Complete source code"
echo "   - Documentation (README.md, DEPLOYMENT.md)"
echo "   - Configuration files"
echo "   - Built application files"
echo ""
echo "📦 Package ready: shobha-beauty-studio-website.zip"
echo "🌐 Live preview: https://sb-1f7x42h8fxu7.vercel.run"