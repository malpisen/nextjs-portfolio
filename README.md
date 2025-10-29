# 💼 Portfolio Website in Next.js

A personal portfolio website built with **Next.js 15 (App Router), TypeScript** and **Tailwind CSS**, designed to present my background, experience, projects and contact information in a visually engaging and professional way.
The purpose of this project is to practice structuring a real-world Next.js application, working with components, layouts, and data fetching — and to create a polished digital representation of my work.

---

## 📑 Table of Contents

- [📖 About the project](#-about-the-project)
- [✨ Features](#-features)
- [🛠 Technologies used](#-technologies-used)
- [📂 Project structure](#-project-structure)
- [⚙️ Installation](#%EF%B8%8F-installation)
- [🤝 Contribute](#-contribute)
- [📈 Workflow](#-workflow)
- [📚 Lessons learned](#-lessons-learned)
- [🚧 Possible improvements](#-possible-improvements)
- [📜 License](#-license)
- [✍️ Contact](#%EF%B8%8F-contact)

---

## 📖 About the project

This project serves as my **personal developer portfolio**, created to showcase my skills, education, and selected projects in a clean and modern interface.
It uses **Next.js 15 App Router** for routing and server rendering, **TypeScript** for type safety and maintainable code, styled with **Tailwind CSS** and custom layout utilities, and a fully functional contact form integrated with **Formspree**..
The design focuses on simplicity, readability, and soft gradients, while maintaining accessibility and responsive behavior across all screen sizes.

---

## ✨ Features

- ✅ Home page with hero section including name, title, and social links, personal profile, featured projects and contact information
- ✅ Projects page displaying project cards fetched from local JSON data
- ✅ About page with profile, education and background information
- ✅ Contact page with information and interactive contact form powered by Formspree for real email submissions
- ✅ Downloadable CV as PDF link
- ✅ Responsive layout and grid system using custom CSS and Tailwind
- ✅ Smooth hover effects, dynamic gradient backgrounds with subtle shadows

---

## 🛠 Technologies used

- **Next.js 15 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Custom CSS Grid Layouts**
- **React Icons & Lucide React**
- **Git & GitHub**
- **Formspree**
- **Vercel**
- **JSON data fetching**

---

## 📂 Project structure

```
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── sections/
│   │   ├── contact-form.tsx
│   │   ├── hero.tsx
│   │   ├── project-list.tsx
│   │   └── skills.tsx
│   ├── ui/
│   │   ├── cv-button.tsx
│   │   ├── project-card.tsx
│   │   └── socials.tsx
├── lib/
│   ├── data/
│   │   ├── project-data.ts
│   └── types/
│       └── project.ts
└── public/
    ├── data/
    │   └── projects.json
    ├── files/
    │   └── Malin_Rydefalk_CV.pdf
    └── images/
        └── malin-rydefalk.jpg
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/malpisen/nextjs-portfolio.git

# Navigate into the project folder
cd nextjs-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🤝 Contribute

This is a personal educational project, but contributions, feedback, or suggestions are always welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit and push your changes
4. Open a Pull Request

---

## 📈 Workflow

🧭 Personal project developed using **Agile-inspired iteration**  
📋 Project management through **GitHub Projects** (Kanban board)  
🌿 Feature branches for structured development  
🔍 Manual testing and visual QA for **responsiveness** and **accessibility**  
🚀 Deployed using **Vercel** for production hosting

---

## 📚 Lessons learned

- Structuring Next.js projects with App Router
- Managing local JSON data and static builds in Vercel
- Combining Tailwind utilities with custom CSS for layouts
- Gradient and shadow techniques for subtle depth effects
- Accessibility and responsive design principles

---

## 🚧 Possible improvements

- Implement Loading/Suspense
- Add dark/light theme toggle
- Add English/Swedish toggle
- Add animations and micro-interactions (Framer Motion)
- Add more project details and tags (e.g., filters by tech stack)
- Improve SEO with metadata and Open Graph integration

---

## 📜 License

This project is developed for educational and portfolio purposes only.  
Not intended for commercial use.

---

## ✍️ Contact

**Malin Rydefalk**  
💼 [Portfolio](https://nextjs-portfolio-dun-delta.vercel.app/) (this project 🥳)  
🔗 [LinkedIn](https://www.linkedin.com/in/malin-rydefalk/)  
🐙 [GitHub](https://github.com/malpisen)

> “Don't hesitate to reach out — whether you're looking for a developer, have a question, want to exchange ideas, or simply just want to say hi!”
