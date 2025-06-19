# Contributing to Wanderlust Travel

Thank you for your interest in contributing to Wanderlust Travel! We welcome contributions from developers of all skill levels.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/wanderlust-travel.git
   cd wanderlust-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 How to Contribute

### 🐛 Bug Reports
- Use the GitHub issue tracker
- Include steps to reproduce
- Provide browser and OS information
- Include screenshots if applicable

### ✨ Feature Requests
- Check existing issues first
- Describe the feature clearly
- Explain the use case and benefits
- Consider implementation complexity

### 🔧 Code Contributions

#### Areas for Contribution
- **New Destinations**: Add more travel destinations with images and details
- **Animations**: Enhance existing animations or create new ones
- **Accessibility**: Improve WCAG compliance and screen reader support
- **Performance**: Optimize bundle size and loading times
- **Mobile Experience**: Enhance mobile interactions and responsiveness
- **Testing**: Add unit tests and integration tests
- **Documentation**: Improve code comments and documentation

#### Code Style Guidelines

**TypeScript & React**
```typescript
// Use functional components with TypeScript
interface ComponentProps {
  title: string;
  isVisible?: boolean;
}

const Component: React.FC<ComponentProps> = ({ title, isVisible = true }) => {
  // Component logic here
};
```

**Styling**
```tsx
// Use Tailwind CSS classes
<div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl">
  {/* Content */}
</div>

// For complex animations, use Framer Motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Animated content */}
</motion.div>
```

**File Organization**
- Components in `src/components/`
- Utilities in `src/utils/`
- Types in `src/types/`
- Context providers in `src/context/`

#### Animation Guidelines
- Maintain 60fps performance
- Use `transform` and `opacity` for smooth animations
- Respect `prefers-reduced-motion` settings
- Keep animation durations reasonable (0.2s - 0.8s)

#### Accessibility Requirements
- Ensure keyboard navigation works
- Add proper ARIA labels
- Maintain color contrast ratios
- Test with screen readers

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Write unit tests for utility functions
- Test component rendering and interactions
- Mock external dependencies
- Aim for meaningful test coverage

## 📝 Pull Request Process

### Before Submitting
1. **Test your changes**
   - Run `npm run build` successfully
   - Test on multiple browsers
   - Verify mobile responsiveness
   - Check accessibility with screen readers

2. **Code Quality**
   - Run `npm run lint` and fix any issues
   - Ensure TypeScript compilation passes
   - Follow existing code patterns

3. **Documentation**
   - Update README.md if needed
   - Add JSDoc comments for new functions
   - Update CHANGELOG.md

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome/Firefox/Safari
- [ ] Mobile responsive
- [ ] Accessibility tested
- [ ] Performance impact considered

## Screenshots
Include screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
```

## 🎨 Design Guidelines

### Visual Consistency
- Follow the existing color palette
- Use consistent spacing (8px grid system)
- Maintain typography hierarchy
- Ensure dark mode compatibility

### Animation Principles
- **Purposeful**: Every animation should have a clear purpose
- **Natural**: Movements should feel organic and physics-based
- **Responsive**: Adapt to user preferences and device capabilities
- **Performant**: Maintain smooth 60fps animations

### Component Design
- **Reusable**: Create components that can be used in multiple contexts
- **Accessible**: Include proper ARIA attributes and keyboard support
- **Responsive**: Work well on all screen sizes
- **Themeable**: Support both light and dark modes

## 🚀 Deployment

### Staging Environment
- All PRs are automatically deployed to staging
- Test your changes in the staging environment
- Ensure no breaking changes in production

### Production Deployment
- Only maintainers can deploy to production
- Deployments happen after thorough testing
- Monitor performance and error rates post-deployment

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Developer Portfolio**: [krishnasevak.netlify.app](https://krishnasevak.netlify.app)

### Code Review Process
- All contributions require code review
- Reviews focus on code quality, performance, and maintainability
- Be open to feedback and suggestions
- Reviews are learning opportunities for everyone

## 🏆 Recognition

Contributors will be:
- Listed in the README.md contributors section
- Mentioned in release notes for significant contributions
- Invited to join the core team for consistent, high-quality contributions

## 📄 Code of Conduct

### Our Standards
- **Respectful**: Treat all contributors with respect and kindness
- **Inclusive**: Welcome contributors from all backgrounds
- **Collaborative**: Work together to build something amazing
- **Professional**: Maintain professional communication

### Unacceptable Behavior
- Harassment or discrimination of any kind
- Trolling, insulting, or derogatory comments
- Publishing private information without permission
- Any conduct that would be inappropriate in a professional setting

## 🔄 Development Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages
```
type(scope): description

feat(destinations): add new European destinations
fix(cursor): resolve cursor positioning on mobile
docs(readme): update installation instructions
style(components): improve button hover animations
```

### Release Process
1. Features are merged to `develop` branch
2. Regular releases from `develop` to `main`
3. Hotfixes go directly to `main` when needed
4. Semantic versioning (MAJOR.MINOR.PATCH)

---

Thank you for contributing to Wanderlust Travel! Together, we're building an amazing travel experience for users worldwide. 🌍✈️