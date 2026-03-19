# JobFlow - Find Your Next Opportunity

JobFlow is a comprehensive job matching platform designed with a focus on Human-Computer Interaction (HCI) principles. It connects job seekers with top companies and provides recruiters with powerful tools to manage job postings and applicants.

## 🚀 Features

- **Intuitive Dashboards**: Dedicated interfaces for both Job Seekers and Recruiters.
- **Smart Job Matching**: Effortlessly find opportunities that align with your skills and aspirations.
- **Career Management**: Track applications, manage your profile, and receive notifications.
- **HCI Principles Hub**: An integrated system that explains the design choices based on HCI principles directly on each page.

## 🛠️ Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **UI Components**: Shadcn/UI, Lucide Icons, Radix UI
- **Styling**: Vanilla CSS (for landing and static pages)
- **Scripting**: Vanilla JavaScript (for interactive static elements)

## 📂 Project Structure

The project uses a hybrid architecture for demonstration purposes:

- `index.html`: Main landing page using static HTML/JS/CSS.
- `pages/`: 📂 Contains the core static pages (Login, Signup, Dashboards) in HTML format.
- `app/`: 📂 Modern Next.js App Router for dynamic components and UI experimentation.
- `components/`: 📂 Reusable Shadcn/UI and custom React components.
- `js/`: 📂 Core JavaScript logic for static pages, including HCI modal management.
- `css/`: 📂 Global styling for the static portion of the site.

## 🖥️ Getting Started

### Static Version
To view the main landing page and static dashboards:
1. Open `index.html` in any modern web browser.
2. Use the following demo credentials for testing:
   - **Job Seeker**: `seeker@jobflow.com` / `seeker123`
   - **Recruiter**: `recruiter@jobflow.com` / `recruiter123`

### Next.js Version
To run the Next.js development server:
```bash
npm install
npm run dev
```
The site will be available at `http://localhost:3000`.

## 🧠 HCI Principles Integration

A unique feature of JobFlow is the **HCI Hub**. On every page, you'll find a help icon (?) that opens a modal explaining the specific HCI principles applied to that interface, including:
- Aesthetic and Minimalist Design
- Match Between System and Real World
- Consistency and Standards
- User Control and Freedom

## 📄 License

This project is part of an HCI study and report. All rights reserved.
