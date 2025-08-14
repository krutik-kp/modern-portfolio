# Krutik Patel - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a full-stack developer.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **Performance Optimized**: Fast loading with optimized components and animations
- **Accessibility**: ARIA labels, keyboard navigation, and proper contrast
- **SEO Friendly**: Semantic HTML structure and meta tags

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📱 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Skills**: Technical skills with proficiency indicators
4. **Projects**: Portfolio showcase with filtering
5. **Experience**: Work history and education
6. **Contact**: Contact form and information
7. **Footer**: Social links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎨 Customization

### Colors and Theme

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content Updates

- **Personal Information**: Update the Hero, About, and Contact components
- **Skills**: Modify the Skills component with your technical expertise
- **Projects**: Add your projects in the Projects component
- **Experience**: Update work history and education in the Experience component

### Styling

- Use Tailwind CSS classes for consistent styling
- Custom CSS can be added in `src/index.css`
- Component-specific styles can be added inline or in separate CSS modules

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper color contrast ratios
- Screen reader friendly content

## 🚀 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in your project directory
3. Follow the prompts

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx     # Navigation component
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills section
│   ├── Projects.tsx   # Projects showcase
│   ├── Experience.tsx # Experience & education
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer component
├── App.tsx            # Main app component
├── index.tsx          # Entry point
└── index.css          # Global styles & Tailwind
```

## 🎯 Performance Optimization

- Lazy loading for components
- Optimized images and assets
- Minified CSS and JavaScript
- Efficient animations with Framer Motion
- Responsive images and lazy loading

## 🔒 Security

- Form validation and sanitization
- Secure external links with proper attributes
- No sensitive information in client-side code

## 📈 Analytics & SEO

- Meta tags for social sharing
- Structured data for search engines
- Performance monitoring ready
- Google Analytics integration ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: krutikpatel@example.com
- **LinkedIn**: [Krutik Patel](https://linkedin.com/in/krutikpatel)
- **GitHub**: [krutikpatel](https://github.com/krutikpatel)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Create React App](https://create-react-app.dev/) for the development setup

---

**Built with ❤️ by Krutik Patel**
