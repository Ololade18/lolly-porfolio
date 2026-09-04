# Lolly — Beauty & Lifestyle Creator Portfolio

A clean, editorial portfolio site built with React + Vite.

## Stack
- React 18
- Vite 5
- CSS Modules
- Deployed via Vercel

---

## 🚀 Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📦 Deploy to GitHub + Vercel

### Step 1 — Push to GitHub

```bash
# Inside the project folder:
git init
git add .
git commit -m "initial commit"

# Create a new repo on github.com (name it: lolly-portfolio)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/lolly-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **"Add New Project"**
3. Import your `lolly-portfolio` repository
4. Leave all settings as default (Vercel auto-detects Vite)
5. Click **Deploy**

Your site will be live at `https://lolly-portfolio.vercel.app` (or similar) in ~60 seconds.

### Step 3 — Custom Domain (optional)

In Vercel → Project → Settings → Domains → add your domain.

---

## ✏️ Customise

| What to update | Where |
|---|---|
| Your email address | `src/components/Contact.jsx` line with `mailto:` |
| Follower counts / engagement rate | `src/components/Audience.jsx` — replace `[#]` and `[%]` |
| Add photos/images | Drop into `public/` and reference as `/your-image.jpg` |
| Colours | `src/index.css` CSS variables at the top |
| Fonts | `index.html` Google Fonts link + `src/index.css` font-family |

---

## 📁 Project Structure

```
src/
  components/
    Cursor.jsx / .module.css
    Nav.jsx / .module.css
    Hero.jsx / .module.css
    Marquee.jsx / .module.css
    About.jsx / .module.css
    Content.jsx / .module.css
    Audience.jsx / .module.css
    Brands.jsx / .module.css
    Offer.jsx / .module.css
    Statement.jsx / .module.css
    Contact.jsx / .module.css
    Footer.jsx / .module.css
    useReveal.js
  App.jsx
  main.jsx
  index.css
```
