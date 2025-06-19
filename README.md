# 🌍 Wanderlust Travel Agency

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://your-vercel-url.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

> A modern, interactive travel agency website built with React, TypeScript, and advanced animations. Experience breathtaking destinations with smooth animations, interactive cursor effects, and a premium user interface.

## 🚀 Live Demo

**[Visit Wanderlust Travel →](https://your-vercel-url.vercel.app)**

## 📸 Screenshots

### Desktop View
![Desktop Hero Section](./screenshots/desktop-hero.png)
*Hero section with interactive animations and custom cursor effects*

### Mobile Responsive
![Mobile View](./screenshots/mobile-view.png)
*Fully responsive design optimized for all devices*

### Dark Mode
![Dark Mode](./screenshots/dark-mode.png)
*Beautiful dark mode with smooth transitions*

### Interactive Features
![Interactive Cursor](./screenshots/cursor-effects.png)
*Advanced cursor interactions and visual feedback*

## ✨ Key Features

### 🎨 **Visual & Interactive**
- ✅ **Advanced Custom Cursor** - Interactive cursor with spring physics and visual feedback
- ✅ **Smooth Animations** - Powered by Framer Motion with 60fps performance
- ✅ **Ripple Effects** - Click interactions with beautiful ripple animations
- ✅ **Magnetic Elements** - Interactive floating elements that respond to mouse movement
- ✅ **3D Card Effects** - Hover animations with depth and perspective
- ✅ **Particle Systems** - Dynamic background particles and visual effects

### 🌙 **User Experience**
- ✅ **Dark/Light Mode** - Seamless theme switching with system preference detection
- ✅ **Responsive Design** - Mobile-first approach with perfect cross-device compatibility
- ✅ **Smooth Scrolling** - Buttery smooth navigation between sections
- ✅ **Loading Animation** - Engaging 3-second loader with travel-themed animations
- ✅ **Accessibility** - WCAG compliant with reduced motion support

### 📱 **Modern Features**
- ✅ **TypeScript** - Full type safety and enhanced developer experience
- ✅ **Component Architecture** - Modular, reusable React components
- ✅ **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- ✅ **SEO Ready** - Meta tags, semantic HTML, and search engine optimization

### 🎯 **Interactive Sections**
- ✅ **Hero Section** - Immersive landing with video modal and call-to-actions
- ✅ **Destinations Gallery** - Interactive cards with hover effects and booking integration
- ✅ **Statistics Counter** - Animated counters with intersection observer
- ✅ **Testimonials Carousel** - Auto-rotating customer reviews with smooth transitions
- ✅ **Contact Form** - Functional form with validation and success states
- ✅ **Developer Portfolio Integration** - Professional developer showcase

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Static typing for enhanced code quality
- **Vite 5.4.2** - Lightning-fast build tool and dev server

### **Styling & Animation**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Production-ready motion library
- **Custom CSS** - Advanced animations and effects

### **Development Tools**
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### **Icons & Assets**
- **Lucide React** - Beautiful, customizable icons
- **Pexels Stock Images** - High-quality, royalty-free images

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wanderlust-travel.git
   cd wanderlust-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment

This project is deployed using **Vercel** for optimal performance and global CDN distribution.

### Deploy to Vercel

1. **Connect to Vercel**
   - Import your GitHub repository to Vercel
   - Configure build settings (auto-detected)

2. **Environment Variables**
   - No environment variables required for basic setup

3. **Build Configuration**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

### Alternative Deployment Options
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Use `gh-pages` branch
- **Firebase Hosting** - `firebase deploy`

## 🤖 AI Tools Used

This project was developed with assistance from cutting-edge AI tools and platforms:

### **Primary Development Platform**
- **Bolt.new** - AI-powered full-stack development environment
  - Real-time code generation and iteration
  - Instant preview and deployment capabilities
  - Collaborative AI-assisted development workflow
  - Integrated development environment with Claude Sonnet 4

### **AI Development Assistance**
- **Claude Sonnet 4** - Advanced code architecture, component design, and optimization
  - Complex animation logic and performance optimization
  - TypeScript type definitions and error handling
  - Responsive design patterns and accessibility improvements
  - 
### **Development Workflow**
The entire project was built using modern AI-assisted development practices:
- **Rapid Prototyping** - Quick iteration cycles with instant feedback
- **Code Quality** - AI-powered code review and optimization suggestions
- **Design Consistency** - AI-assisted component standardization
- **Performance Monitoring** - Automated optimization recommendations

## 📁 Project Structure

```
wanderlust-travel/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Contact.tsx          # Contact form and developer info
│   │   ├── Destinations.tsx     # Interactive destination cards
│   │   ├── Footer.tsx           # Footer with links and social media
│   │   ├── Hero.tsx             # Landing section with video modal
│   │   ├── Loader.tsx           # Loading animation component
│   │   ├── Navbar.tsx           # Navigation with theme toggle
│   │   ├── Stats.tsx            # Animated statistics counters
│   │   └── Testimonials.tsx     # Customer reviews carousel
│   ├── context/
│   │   └── ThemeContext.tsx     # Dark/light mode state management
│   ├── App.tsx                  # Main application component
│   ├── index.css               # Global styles and animations
│   ├── main.tsx                # Application entry point
│   └── vite-env.d.ts           # Vite type definitions
├── screenshots/                # Project screenshots and documentation
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
├── README.md                   # Project documentation
├── LICENSE                     # MIT license
└── CONTRIBUTING.md             # Contribution guidelines
```

## 🎨 Design Philosophy

### **Apple-Level Aesthetics**
- Meticulous attention to detail in every interaction
- Smooth, natural animations that feel organic
- Clean, sophisticated visual hierarchy
- Intuitive user experience with clear feedback

### **Performance First**
- 60fps animations with GPU acceleration
- Optimized bundle size and lazy loading
- Efficient re-renders and memory management
- Progressive enhancement for all devices

### **Accessibility Focused**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion preferences respected

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

### **Development Platform**
- **Bolt.new** - AI-powered development environment that made rapid iteration and deployment possible

### **Assets & Resources**
- **Images**: [Pexels](https://pexels.com) - High-quality stock photography
- **Icons**: [Lucide](https://lucide.dev) - Beautiful, consistent icon set
- **Fonts**: System fonts for optimal performance
- **Videos**: [Vimeo](https://vimeo.com) - Embedded adventure videos

### **Inspiration**
- Modern travel websites and booking platforms
- Apple's design language and interaction patterns
- Contemporary web animation trends and best practices

### **Developer**
- **Krishna Sevak** - Full Stack Developer
- **Portfolio**: [krishnasevak.netlify.app](https://krishnasevak.netlify.app)
- **Specialization**: React, TypeScript, Advanced Animations, AI-Assisted Development

---

<div align="center">

**[🌍 Visit Live Site](https://your-vercel-url.vercel.app)** • **[📧 Contact Developer](https://krishnasevak.netlify.app)** • **[⭐ Star this repo](https://github.com/yourusername/wanderlust-travel)**

Built with ❤️ using AI-powered development tools and cutting-edge web technologies

*Developed with Bolt.new - The future of AI-assisted web development*

</div>
