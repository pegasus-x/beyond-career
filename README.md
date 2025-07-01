Beyond Career Landing Page
Overview
Beyond Career is a visionary startup founded by IIT Kharagpur students, dedicated to empowering students through career guidance, mentorship, internship opportunities, and community engagement. This landing page serves as a professional, responsive, and accessible platform to showcase the startup’s mission and services, designed as part of a technical assessment.
Key Features

Responsive Design: Adapts seamlessly across mobile (≤576px), tablet (577px–768px), and desktop (≥769px) using CSS clamp() and responsive grids.
Accessibility: Complies with WCAG 2.1 AA standards, featuring high-contrast text, ARIA attributes, and keyboard navigation support.
Contact Form: Handles submissions via a third-party form service with AJAX, providing seamless user feedback without redirects. Includes client-side validation and Google Analytics 4 (GA4) event tracking.
Social Media Integration: Official LinkedIn, Instagram, WhatsApp, and Facebook icons link to respective profiles, adhering to platform branding guidelines.
Value Card: A “Mission” card in the About section highlights the goal of empowering students, styled consistently with other value cards.
Analytics: GA4 tracks page views and form submissions for data-driven insights.
Performance: Optimized with lightweight SVGs, async scripts, and minimal animations for fast load times.
SEO: Includes meta tags and JSON-LD schema for improved search engine visibility.

Project Structure
beyond-career/
├── index.html        # Main HTML file
├── style.css         # Stylesheet with responsive and accessible design
├── main.js           # JavaScript for interactivity, form handling, and animations
├── design-rationale.md # Design choices and justifications
└── README.md         # Project documentation (this file)

Prerequisites

A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
A text editor (e.g., VS Code) for local development.
A Vercel account for deployment (optional).
A Google Analytics 4 property and a third-party form service account (e.g., for form submissions).

Installation

Clone or Download:

Clone the repository: git clone <repository-url> or download the project files.
Navigate to the project directory: cd beyond-career.


Configure Form Submission:

Sign up for a third-party form service and obtain a form endpoint (e.g., https://<service>/f/your-form-id).
Update the action attribute in the <form> tag in index.html with your endpoint:<form id="contactForm" action="https://<service>/f/your-form-id" method="POST">


Ensure the form includes a hidden input to prevent redirects:<input type="hidden" name="_next" value="">




Configure Google Analytics 4:

Create a GA4 property at analytics.google.com and obtain your Measurement ID (e.g., G-123456789).
Update the gtag.js script in index.html:<script async src="https://www.googletagmanager.com/gtag/js?id=G-123456789"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-123456789');
</script>




Run Locally:

Open index.html in a browser directly, or use a local server (e.g., VS Code Live Server or python -m http.server 8000).
Verify the site loads correctly and test form submissions and navigation.



Deployment

Vercel:
Push the project to a GitHub repository.
Log in to Vercel, import the repository, and deploy with default settings (no build step required for static HTML/CSS/JS).
Set the domain (e.g., beyondcareer.com) or use the Vercel preview URL.


Verify:
Visit the deployed URL and test functionality (form, navigation, animations).
Check GA4 Realtime reports for page views and form submissions.
Run a Lighthouse audit to confirm performance and accessibility scores.



Testing

Functionality:
Submit the contact form to ensure submissions are received via the third-party form service.
Verify GA4 tracks form_submission events in the Events report.
Test navigation links and mobile menu toggle.


Responsiveness:
Use browser dev tools to simulate mobile, tablet, and desktop views.
Ensure layouts, font sizes, and touch targets (e.g., buttons, social icons) are usable.


Accessibility:
Run a WAVE or Lighthouse audit to confirm WCAG 2.1 AA compliance.
Test with a screen reader (e.g., NVDA, VoiceOver) and keyboard navigation.


Cross-Browser Compatibility:
Test on Chrome, Firefox, Safari, and Edge to ensure consistent rendering and functionality.


Performance:
Aim for a Lighthouse performance score >90, checking for optimized images, scripts, and animations.



Dependencies

Google Fonts: Inter font (https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap).
Google Analytics 4: gtag.js for analytics tracking.
No additional libraries or frameworks are required, keeping the project lightweight.

Usage

Open the deployed site or local index.html in a browser.
Navigate through sections (Home, About, Services, Success Stories, Contact) using the navbar or back-to-top button.
Submit the contact form to send inquiries, which are processed securely via the third-party form service.
Monitor user interactions in GA4 for insights into engagement and conversions.

Contributing
This project is part of a technical assessment and not open for external contributions. For feedback or suggestions, contact the Beyond Career team at info@beyondcareer.com.
License
© 2025 Beyond Career. All rights reserved. Created by IIT Kharagpur Students.
Notes
The project is designed to be portfolio-worthy, emphasizing clean code, accessibility, and modern web development practices.
