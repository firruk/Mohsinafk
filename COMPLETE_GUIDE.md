# 🎉 Your Portfolio Website - Pure HTML/CSS/JS

## 📍 Location
All your portfolio files are in: `/app/portfolio-html/`

---

## 📁 Complete File List

### ✅ All HTML Pages (Ready to Use)
```
/app/portfolio-html/index.html          ← Home page
/app/portfolio-html/about.html          ← About/Experience page  
/app/portfolio-html/publications.html   ← Research publications page
/app/portfolio-html/projects.html       ← Projects showcase page
/app/portfolio-html/resume.html         ← Resume page (print to PDF)
/app/portfolio-html/contact.html        ← Contact form page
```

### ✅ Styles & Scripts
```
/app/portfolio-html/styles.css          ← All CSS styling
/app/portfolio-html/script.js           ← All JavaScript functionality
/app/portfolio-html/data.js             ← Your portfolio content (EDIT THIS!)
```

### ✅ Documentation
```
/app/portfolio-html/README.md           ← This file
```

---

## 🚀 How to View Your Portfolio

### Option 1: Open Files Directly
Simply open any `.html` file in your web browser:
- Double-click `index.html` to start

### Option 2: Use Local Server (Recommended)
```bash
cd /app/portfolio-html
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 📝 How to Edit Your Content

**Everything you need to change is in ONE file:** `/app/portfolio-html/data.js`

Open `data.js` and update:
- ✏️ Personal information (name, email, phone, links)
- ✏️ Publications
- ✏️ Projects
- ✏️ Skills
- ✏️ Experience
- ✏️ Education
- ✏️ Certifications
- ✏️ Awards

**That's it!** All pages will update automatically.

---

## 🎨 Color Scheme

- **Primary:** Black (#000000)
- **Secondary:** White (#FFFFFF)
- **Gray tones:** Various shades
- **Accent:** Purple (#8B5CF6) - used sparingly for highlights

---

## 🌟 Features Included

✅ **6 Complete Pages**
- Home with animated hero section
- About with experience & skills
- Publications with search & filter
- Projects with category filtering
- Resume with print-to-PDF
- Contact with email form

✅ **Design Features**
- Minimal & clean aesthetics
- Smooth scroll animations
- Hover effects on interactive elements
- Mobile responsive
- Fast loading (no dependencies)

✅ **Interactive Elements**
- Animated background blobs
- Fade-in on scroll
- Search functionality
- Category filters
- mailto contact form

---

## 📱 Pages Overview

### 1. **index.html** - Home Page
- Hero section with your name
- Stats section (publications, projects, experience)
- About preview
- Key research areas
- Call-to-action

### 2. **about.html** - About Page
- Professional bio
- Work experience timeline
- Technical skills by category
- Education
- Certifications & awards

### 3. **publications.html** - Research Page
- Searchable publications list
- Filter by tags
- Links to papers
- Publication stats

### 4. **projects.html** - Projects Page
- Project cards with details
- Filter by category
- Tech stack badges
- Project highlights

### 5. **resume.html** - Resume Page
- Professional resume layout
- Print-to-PDF button
- All your experience & skills
- Ready for download

### 6. **contact.html** - Contact Page
- Contact information
- Email form (opens email client)
- Social media links
- Availability status

---

## 🔧 Customization Guide

### Change Colors
Edit `/app/portfolio-html/styles.css`, find `:root` section:
```css
:root {
    --color-purple-600: #YOUR_COLOR;
    --color-purple-400: #YOUR_LIGHTER_SHADE;
}
```

### Change Fonts
Edit `/app/portfolio-html/styles.css`, find `body` section:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Add More Content
Edit `/app/portfolio-html/data.js`:
```javascript
// Add a new project
{
    id: 9,
    title: "Your New Project",
    description: "...",
    tech: ["Tech1", "Tech2"],
    year: "2025",
    category: "Category",
    highlights: ["Point 1", "Point 2"]
}
```

---

## 🌐 How to Deploy

### GitHub Pages
1. Create a GitHub repository
2. Upload all files from `/app/portfolio-html/`
3. Enable GitHub Pages in repository settings

### Netlify
1. Drag & drop the `/app/portfolio-html/` folder to Netlify
2. Done! Your site is live

### Vercel
1. Upload to GitHub
2. Import to Vercel
3. Deploy

### Any Web Host
Upload all files to your hosting service via FTP or file manager.

---

## ✅ What Works

- ✅ All 6 pages complete and functional
- ✅ Navigation between pages
- ✅ Search on publications page
- ✅ Filters on projects & publications
- ✅ Contact form (mailto)
- ✅ Print/Download resume
- ✅ Mobile responsive
- ✅ Smooth animations
- ✅ Footer with social links

---

## 📧 Contact Form

The contact form uses **mailto** - it opens the user's default email client with pre-filled information. No backend needed!

To change your email address, edit `data.js`:
```javascript
email: "your-new-email@example.com"
```

---

## 💡 Tips

1. **Edit `data.js` first** - Update all your information
2. **Test locally** - Open files in browser to preview
3. **Customize colors** - Edit `styles.css` for your brand
4. **Deploy** - Upload to any static hosting service
5. **No build process** - Just upload and go!

---

## 🐛 Troubleshooting

**Images not loading?**
- Make sure image paths are correct
- Use absolute URLs for external images

**Styles not applying?**
- Check that `styles.css` is in the same folder
- Clear browser cache

**JavaScript not working?**
- Check browser console for errors
- Make sure `data.js` and `script.js` are loading

---

## 🎯 Next Steps

1. ✏️ Edit `/app/portfolio-html/data.js` with your real content
2. 🎨 Customize colors in `styles.css` if desired
3. 🌐 Deploy to a hosting service
4. 📱 Share your portfolio URL!

---

**Your complete portfolio is ready to go! Just edit the data and deploy.** 🚀
