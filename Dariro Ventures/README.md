# Dariro Ventures Limited — Website

> Affordable tailor-made top-notch services  
> Plot No. 11168 Chamba Valley, Lusaka, Zambia  
> +260 770 845 279 | dariroventureslimited@gmail.com

---

## 📁 Project Structure

```
dariro-ventures/
│
├── index.html                  ← Main page (open this in browser)
│
├── css/
│   ├── variables.css           ← Brand colours & font tokens
│   ├── base.css                ← Reset, shared buttons, section layout
│   ├── navbar.css              ← Fixed navigation bar
│   ├── hero.css                ← Hero section
│   ├── sections.css            ← Section background colours
│   ├── services.css            ← Services cards
│   ├── fleet.css               ← Vehicle cards & filter tabs
│   ├── why.css                 ← Why choose us section
│   ├── about.css               ← About & team section
│   ├── booking.css             ← Booking form
│   ├── testimonials.css        ← Testimonial cards
│   ├── contact.css             ← Contact info & form
│   ├── footer.css              ← Footer
│   ├── whatsapp.css            ← Floating WhatsApp button
│   ├── animations.css          ← Keyframes & .reveal class
│   └── responsive.css          ← Mobile breakpoints
│
├── js/
│   ├── data.js                 ← All vehicle data (edit here)
│   ├── fleet.js                ← Fleet rendering & filter logic
│   ├── navbar.js               ← Scroll effect & hamburger menu
│   ├── forms.js                ← Booking & contact form handlers
│   └── animations.js          ← Scroll-reveal observer
│
├── images/
│   ├── logo.png                ← Replace with your logo
│   ├── og-image.jpg            ← Social sharing preview image (1200×630)
│   ├── vehicles/               ← Optional: local vehicle photos
│   │   ├── sedan.jpg
│   │   ├── suv.jpg
│   │   ├── hilux.jpg
│   │   ├── executive.jpg
│   │   ├── van.jpg
│   │   └── bus.jpg
│   └── team/                   ← Optional: team photos
│       ├── ceo.jpg
│       └── team.jpg
│
└── README.md                   ← This file
```

---

## 🚀 Running the Site Locally

### Method 1 — VS Code Live Server (Recommended)
1. Open the `dariro-ventures` folder in VS Code
2. Install the **Live Server** extension (search in Extensions panel)
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500`
5. Any file save auto-refreshes the browser ✅

### Method 2 — Just double-click
1. Open the `dariro-ventures` folder
2. Double-click `index.html`
3. Opens in your default browser (note: some browsers may block local file CORS)

---

## ✏️ Common Customisations

### Change phone number
Search and replace `260770845279` across all files with your actual number.

### Add/edit a vehicle
Open `js/data.js` and add a new object to the `vehicles` array:
```js
{
  category:   'suv',           // budget | van | 4x4 | suv | executive | bus
  badge:      'badge-suv',
  label:      'SUV',
  image:      'images/vehicles/your-car.jpg',
  name:       'Toyota Prado or similar',
  spec:       '3.0L Diesel',
  passengers: 7,
  bags:       3,
  fuel:       '87L',
  features:   ['4WD', 'Leather Seats', 'Air Conditioning'],
  price:      'Contact Us'
}
```

### Change brand colours
Open `css/variables.css` and update the `:root` values.

### Add your logo
Replace `images/logo.png` with your file and update the `.nav-logo-icon` in `index.html`:
```html
<img src="images/logo.png" alt="Dariro Ventures Logo" width="42" height="42">
```

---

## 📧 Making Forms Send Real Emails (EmailJS — Free, No Backend)

1. Create account at [emailjs.com](https://emailjs.com)
2. Add **Email Service** → connect your Gmail
3. Create two **Email Templates** (one for bookings, one for contact)
4. In `index.html` `<head>`, add:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   <script>emailjs.init("YOUR_PUBLIC_KEY");</script>
   ```
5. In `js/forms.js`, uncomment the **Option A: EmailJS** blocks and fill in your Service ID and Template IDs

---

## 🌐 Deploying for Free

### Netlify (30 seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `dariro-ventures` folder onto the page
3. Site is live instantly on a `*.netlify.app` URL

### Vercel
```bash
npm install -g vercel
cd dariro-ventures
vercel
```

### GitHub Pages
1. Push folder to a GitHub repo
2. Settings → Pages → Source: main branch / root
3. Live at `https://yourusername.github.io/dariro-ventures`

---

## 🗺️ Adding a Real Google Map

Replace the `.map-container` div in `index.html` with an iframe:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!...your-embed-url..."
  width="100%" height="280"
  style="border:0; border-radius:12px;"
  allowfullscreen="" loading="lazy">
</iframe>
```
Get your embed URL: [Google Maps](https://maps.google.com) → search your address → Share → Embed a map → copy the `<iframe>` src.

---

## 📋 Pre-Launch Checklist

- [ ] Replace placeholder phone numbers with real numbers
- [ ] Add real vehicle photos to `images/vehicles/`
- [ ] Add logo to `images/logo.png` and update HTML
- [ ] Set up EmailJS so forms send real emails
- [ ] Add Google Map embed
- [ ] Test on mobile (Chrome DevTools → Device Toolbar)
- [ ] Test all navigation links
- [ ] Test booking and contact forms
- [ ] Register on [Google Business Profile](https://business.google.com) (free, boosts local search)
- [ ] Deploy to Netlify or Vercel

---

© 2025 Dariro Ventures Limited | PACRA: 120210020614 | TPIN: 2824941953
