# House Whisperer Frontend

A Next.js frontend application for House Whisperer - an AI-powered home inspection platform that turns inspections into living digital twins.

## 🚀 Quick Start

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Local Development

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
.
├── app/                    # Next.js application
│   ├── app/                # Next.js app directory (App Router)
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   └── ui/             # shadcn/ui components
│   ├── lib/                # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Dependencies
└── README.md               # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7 (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## 🌐 Deployment

This project is deployed on Vercel. The app is located in the `app/` directory.

### Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import this GitHub repository
3. Set **Root Directory** to `app`
4. Deploy

### Automatic Deployments

Pushes to the `main` branch automatically trigger deployments on Vercel.

## 📝 Development Workflow

This project follows GitFlow best practices:

1. Create feature branches for new features
2. Make commits with clear messages
3. Create pull requests for review
4. Merge to main when ready
5. Automatic deployment to Vercel

## 🔗 Links

- **Live App**: [Deployed on Vercel](https://house-whisperer-frontend.vercel.app) (update with actual URL)
- **GitHub Repository**: [rchallapilla/housewhisperer](https://github.com/rchallapilla/housewhisperer)

## 📄 License

MIT

---

Built with ❤️ for House Whisperer
