# 💼 Portfolio Website in Next.js

A personal portfolio built with **Next.js (App Router), TypeScript** and **Tailwind CSS**, designed to present my background, projects and contact information in a visually engaging and professional way.
The purpose of this project is to practice structuring a real-world Next.js application, working with components, layouts, and data fetching — and to create a polished digital representation of my work.

---

## 📑 Table of Contents

- [📖 About the Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠 Technologies](#-technologies)
- [⚙️ Installation](#-installation)
- [🚀 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [📈 Workflow](#-workflow)
- [🤝 Contribute](#-contribute)
- [📚 Lessons Learned](#-lessons-learned)
- [🚧 Possible Improvements](#-possible-improvements)
- [📜 License](#-license)
- [✍️ Contact](#-contact)

---

## 📖 About the Project

This project serves as my **personal developer portfolio**, created to showcase my skills, education, and selected projects in a clean and modern interface.
It uses **Next.js 15 App Router** for routing and server rendering, and **TypeScript** for type safety and maintainable code.
The design focuses on simplicity, readability, and soft gradients, while maintaining accessibility and responsive behavior across all screen sizes.

---

## ✨ Features

- ✅ Hero section with name, title, and social links
- ✅ Projects page displaying project cards fetched from local JSON data
- ✅ About page with profile and background information
- ✅ Contact page with form
- ✅ Responsive layout and grid system using custom CSS and Tailwind
- ✅ Dynamic gradient backgrounds with subtle shadows
- ✅ Downloadable CV as PDF link

---

## 🛠 Technologies

- **Next.js 15 (App Router)**
- **TypeScript**
- **React Icons & Lucide React**
- **Tailwind CSS**
- **Custom CSS Grid Layouts**
- **Vercel** for deployment
- **JSON data fetching**

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

## 🚀 Usage

- **Home page** → Hero section with intro and links, personal profile, featured projects and contact information
- **Projects page** → Displays project cards with data from `/data/projects.json`
- **About page** → Background and education
- **Contact page** → Message form and social icons
- **Download CV** → Opens or downloads a PDF file

---

## 📂 Project Structure

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

## 📈 Workflow

🧭 Personal project developed using **Agile-inspired iteration**  
📋 Project management through **GitHub Projects** (Kanban board)  
🌿 Feature branches for structured development  
🔍 Manual testing and visual QA for responsiveness and accessibility  
🚀 Deployment via **Vercel**

---

## 🤝 Contribute

This is a personal educational project, but contributions, feedback, or suggestions are always welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit and push your changes
4. Open a Pull Request

---

## 📚 Lessons Learned

- Structuring Next.js projects with App Router
- Managing local JSON data and static builds in Vercel
- Combining Tailwind utilities with custom CSS for layouts
- Gradient and shadow techniques for subtle depth effects
- Accessibility and responsive design principles

---

## 🚧 Possible Improvements

- Implement Loading/Suspense
- Add animations and micro-interactions (Framer Motion)
- Implement a working contact form using email API (e.g. Formspree)
- Add dark/light theme toggle
- Add more project details and tags (e.g., filters by tech stack)
- Improve SEO with metadata and Open Graph integration

---

## 📜 License

This project is developed for educational and portfolio purposes only.  
Not intended for commercial use.

---

## ✍️ Contact

**Malin Rydefalk**<br>
💼 [Portfolio](https://nextjs-portfolio-dun-delta.vercel.app/)<br>
🔗 [LinkedIn](https://www.linkedin.com/in/malin-rydefalk/) <br>
🐙 [GitHub](https://github.com/malpisen)<br>

> “Don't hesitate to reach out — whether you're looking for a developer, have a question, want to exchange ideas, or simply just want to say hi!”
