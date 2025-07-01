# 🌐 Beyond Career Landing Page

A professional, accessible, and performance-optimized landing page for **Beyond Career**, a startup founded by IIT Kharagpur students. The platform supports students through mentorship, internships, career guidance, and community engagement.

---

## 📌 Overview

This project was developed as part of a technical assessment. It showcases:
- Modern responsive web design using HTML, CSS, and JavaScript
- Accessibility (WCAG 2.1 AA)
- Working contact form with AJAX submission
- Google Analytics 4 tracking
- Social media integration
- SEO enhancements for discoverability

---

## 🚀 Live Demo

👉 https://beyond-career-beta.vercel.app/

---

## 🗂️ Project Structure

```
beyond-career/
├── index.html         # Main landing page
├── style.css          # Responsive and accessible styling
├── main.js            # Interactivity, animations, form submission
├── assets/            # Images and icons (optional)
├── design-rationale.md # Design and UX explanations (50 words)
└── README.md          # Project documentation
```

---

## 🎨 Key Features

- ✅ **Responsive Design** using `clamp()` and grid layouts
- ✅ **Accessibility**: High contrast, keyboard nav, ARIA support
- ✅ **Contact Form**: AJAX submission via Formspree + client-side validation
- ✅ **Google Analytics 4** for tracking engagement
- ✅ **Social Media Icons**: LinkedIn, Instagram, WhatsApp, Facebook
- ✅ **Mission Value Card** highlighting student empowerment
- ✅ **Performance**: Async scripts, SVGs, lazy loads
- ✅ **SEO**: Meta tags and structured JSON-LD schema ready

---

## 📦 Installation & Setup

### 1. Clone or Download
```bash
git clone https://github.com/your-username/beyond-career-landing.git
cd beyond-career-landing
```

### 2. Form Setup
- Register on [Formspree](https://formspree.io)
- Replace the `action` attribute in `index.html` form:
  ```html
  <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="hidden" name="_next" value="">
  ```

### 3. Google Analytics 4 Setup
- Go to [Google Analytics](https://analytics.google.com) and create a new GA4 property.
- Add the following script in your `<head>` section
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7T739D9GVF"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7T739D9GVF');
  </script>
  ```
- Create a GA4 property at [analytics.google.com](https://analytics.google.com
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-7T739D9GVF"></script>
  ```

---

## 🧪 Testing Checklist

- ✅ Form submissions (via Formspree) and real-time GA4 Events
- ✅ Responsive design across breakpoints: mobile, tablet, desktop
- ✅ Accessibility tested via [WAVE](https://wave.webaim.org/) or Lighthouse
- ✅ Cross-browser rendering: Chrome, Firefox, Edge, Safari
- ✅ Performance score >90 (Lighthouse recommended)

---

## 🌍 Deployment (Recommended: Vercel)

1. Push to GitHub
2. Import your repo at [vercel.com](https://vercel.com)
3. Use default settings (static project – no build command)
4. Set custom domain (optional)
5. Visit deployed URL and confirm functionality

---

## 📊 Analytics

To monitor site engagement:
- Go to GA4 → Reports → Events to track `form_submission`
- Check Realtime overview for live visitor metrics
- Create custom reports if needed

---

## 📎 Dependencies

- **Fonts**: [Google Fonts – Inter](https://fonts.google.com/specimen/Inter)
- **Analytics**: Google Analytics 4
- **Form Handling**: Formspree (free tier)
- No frameworks used – lightweight and portable

---

## 🔒 License

© 2025 Beyond Career. All rights reserved. Created by IIT Kharagpur students for technical showcase purposes.

---

## 📧 Contact

For feedback or questions, reach us at:  
📩 (mailto:mahavir@growthgridglobal.com)

> “All About Your Dreams” — Let's make them happen!
