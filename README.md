# House Whisperer Landing Page

## 🚀 Quick Deploy to Vercel (Easiest Method)

### Option 1: Deploy with Vercel CLI (Recommended)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```
   
3. Follow the prompts:
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `house-whisperer` (or press enter for default)
   - Directory: `./` (press enter)
   - Build command: (press enter to skip)
   - Output directory: (press enter to skip)
   - Development settings: `N`

Your site will be live at a URL like: `house-whisperer.vercel.app`

### Option 2: Deploy via GitHub + Vercel (For Updates)

1. Create a GitHub repository
2. Push this code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/house-whisperer.git
   git push -u origin main
   ```

3. Go to [vercel.com](https://vercel.com)
4. Click "Add New..." → "Project"
5. Import your GitHub repository
6. Click "Deploy"

### Option 3: Direct Upload (Quickest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Choose "Deploy from CLI or Upload"
4. Drag and drop this entire folder
5. Click "Deploy"

## 🌐 Custom Domain Setup

After deployment, you can add a custom domain:
1. In Vercel Dashboard → Select your project
2. Go to "Settings" → "Domains"
3. Add your domain (e.g., `housewhisperer.ai`)
4. Follow DNS configuration instructions

## 📝 Making Updates

### If using Vercel CLI:
```bash
vercel --prod
```

### If using GitHub:
Just push to your main branch:
```bash
git add .
git commit -m "Update message"
git push
```

## 🔧 Local Development

To preview locally:
```bash
npx serve .
```
Then open http://localhost:3000

## 📁 Project Structure
```
house-whisperer-site/
├── index.html          # Your landing page
├── package.json        # Project metadata
├── vercel.json        # Vercel configuration
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## 🎯 Next Steps After Deployment

1. **Add Analytics**
   - Add Google Analytics or Vercel Analytics
   - Add the tracking code to index.html

2. **Set Up Form Backend**
   - Use Vercel Functions for form handling
   - Or integrate with services like Formspree or Netlify Forms

3. **Add Missing Assets**
   - Upload actual logo files
   - Add sample report PDF
   - Link to actual demo video

4. **SEO Optimization**
   - Add sitemap.xml
   - Add robots.txt
   - Submit to Google Search Console

5. **Performance Monitoring**
   - Enable Vercel Analytics
   - Set up Web Vitals monitoring

## 💡 Environment Variables (if needed)

Create a `.env.local` file:
```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🆘 Troubleshooting

- **Build fails**: Make sure all files are in the root directory
- **404 errors**: Check that index.html is in the root
- **Slow loading**: Optimize images and enable caching in vercel.json

## 📧 Contact Form Integration

To make the contact form work, you'll need to either:
1. Use Vercel Functions (serverless)
2. Integrate with Formspree.io (easiest)
3. Use EmailJS for client-side emails

Example Formspree integration:
Replace the form action in index.html:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

Built with ❤️ for House Whisperer
