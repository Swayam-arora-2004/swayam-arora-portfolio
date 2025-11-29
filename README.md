# Swayam Arora | Data Analyst Portfolio

A modern, responsive portfolio website showcasing my work as a Data Analyst. Built with React, TypeScript, and Vite, featuring a sleek dark theme with teal accents.

## 🌟 Features

- **Modern UI/UX**: Glassmorphism design with smooth animations
- **Responsive Design**: Works seamlessly on all devices
- **Contact Form**: Functional contact form with email notifications
- **Project Showcase**: Display of data analysis projects with images
- **Skills Section**: Comprehensive technical skills display
- **Experience & Education**: Professional timeline
- **Publications**: Research papers and achievements
- **Resume Download**: Direct PDF download functionality

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Variables
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Backend**: Node.js, Express
- **Email**: Nodemailer (Gmail)
- **Deployment**: Vercel

## 📋 Sections

- **Hero**: Introduction with key metrics
- **About**: Personal introduction and highlights
- **Projects**: Featured data analysis projects
- **Skills**: Technical skills categorized by expertise
- **Experience**: Internships and work experience
- **Publications**: Research papers and certifications
- **Contact**: Contact form with email integration

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Swayam-arora-2004/swayam-arora-portfolio.git

# Navigate to project directory
cd swayam-arora-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server (frontend)
npm run dev

# Start backend server (in separate terminal)
npm run server:dev
```

The frontend will be available at `http://localhost:8080` and the backend at `http://localhost:3001`.

## 📧 Email Configuration

To enable email notifications from the contact form:

1. Enable 2-Step Verification on your Google Account
2. Generate a Gmail App Password
3. Create a `.env` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=aroraswayam0@gmail.com
PORT=3001
NODE_ENV=development
```

See `EMAIL_SETUP.md` for detailed instructions.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`
4. Set environment variables in Vercel dashboard
5. Redeploy: `vercel --prod`

See `DEPLOY_NOW.md` for step-by-step deployment instructions.

## 📁 Project Structure

```
swayam-arora-portfolio/
├── api/                 # Vercel serverless functions
│   ├── contact.js      # Contact form endpoint
│   └── health.js       # Health check endpoint
├── public/             # Static assets
│   ├── images/        # Project images
│   └── resume.pdf     # Resume file
├── server/            # Backend server (development)
│   └── index.js      # Express server
├── src/
│   ├── components/   # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   └── pages/        # Page components
└── vercel.json       # Vercel configuration
```

## 🎨 Customization

### Colors

The theme uses CSS variables defined in `src/index.css`. Main colors:
- Primary: Teal (`#2DD4BF`)
- Background: Dark slate (`#0F1729`)
- Accent: Teal glow (`#5EEAD4`)

### Content

Update content in respective component files:
- `src/components/Hero.tsx` - Hero section
- `src/components/About.tsx` - About section
- `src/components/Projects.tsx` - Projects
- `src/components/Experience.tsx` - Experience & Education
- `src/components/Skills.tsx` - Skills
- `src/components/Publications.tsx` - Publications

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run server:dev` - Start backend server
- `npm run check-email` - Verify email configuration
- `npm run preview` - Preview production build

## 🔒 Environment Variables

Required for production:
- `EMAIL_USER` - Gmail address
- `EMAIL_APP_PASSWORD` - Gmail App Password
- `RECIPIENT_EMAIL` - Email to receive notifications
- `NODE_ENV` - Set to `production`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Swayam Arora**
- Email: aroraswayam0@gmail.com
- GitHub: [@Swayam-arora-2004](https://github.com/Swayam-arora-2004)
- LinkedIn: [swayamarora](https://linkedin.com/in/swayamarora)
- Kaggle: [swayamarora0](https://kaggle.com/swayamarora0)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ If you find this project helpful, please consider giving it a star!
