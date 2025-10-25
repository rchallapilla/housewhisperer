#!/bin/bash

# House Whisperer Deployment Script
# This script helps deploy your site to Vercel

echo "🏠 House Whisperer Deployment Script"
echo "===================================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Vercel CLI not found. Installing..."
    npm install -g vercel
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Vercel CLI."
        echo "Please install it manually with: npm install -g vercel"
        exit 1
    fi
    echo "✅ Vercel CLI installed successfully!"
else
    echo "✅ Vercel CLI is already installed"
fi

echo ""
echo "🚀 Starting deployment..."
echo ""

# Deploy to Vercel
vercel --prod

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Your site is now live!"
    echo "2. Check the URL provided above"
    echo "3. To add a custom domain, visit your Vercel dashboard"
    echo "4. To update, just run this script again"
else
    echo ""
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
