# Easy Customization Guide

## 🎯 How Easy is it to Customize?

**Very Easy!** Everything is controlled by simple config files - no coding knowledge needed!

## 📝 What You Can Customize

### 1. **Add Photos & Videos** (Main Gallery)
Edit `config.js` → `gallery` array

**For Photos:**
```javascript
{
    type: "photo",
    src: "images/your-photo.jpg",
    title: "Photo Title",
    caption: "Description",
    category: "all"
}
```

**For Videos:**
```javascript
{
    type: "video",
    src: "https://www.dropbox.com/.../video.mp4?dl=1",  // Change ?dl=0 to ?dl=1
    title: "Video Title",
    caption: "Description",
    thumbnail: "",  // Optional
    category: "all"
}
```

### 2. **Before/After Photo Comparisons** (Pricing Page)
Edit `pricing-config.js` → `beforeAfter` array

```javascript
{
    title: "Your Title",
    before: "images/before-after/your-before.jpg",
    after: "images/before-after/your-after.jpg"
}
```

**To add photos:**
1. Add your before/after photo pairs to `images/before-after/` folder
2. Add entries to `pricing-config.js`

### 3. **Pricing Packages**
Edit `pricing-config.js` → `packages` array

```javascript
{
    name: "Package Name",
    price: "$299",
    period: "per property",
    description: "Description here",
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
    ],
    featured: true  // Makes it stand out
}
```

### 4. **Additional Services**
Edit `pricing-config.js` → `additionalServices` array

```javascript
{
    name: "Service Name",
    description: "Service description",
    price: "$99"
}
```

### 5. **Site Text & Contact Info**
Edit `config.js`:
- `siteName` - Your site name
- `siteTagline` - Subtitle
- `about.text` - About section text
- `contact.info` - Contact information

### 6. **Colors & Styling**
Edit `styles.css` → Change the CSS variables at the top:

```css
:root {
    --primary-color: #2c3e50;    /* Main color */
    --secondary-color: #e74c3c;   /* Accent color */
    /* Change these to your brand colors */
}
```

## 🚀 Quick Start Checklist

- [ ] Add your photos to `images/` folder
- [ ] Add your videos (or use Dropbox links)
- [ ] Update `config.js` with your gallery items
- [ ] Add before/after photos to `images/before-after/`
- [ ] Update `pricing-config.js` with your pricing
- [ ] Update contact info in `config.js`
- [ ] Customize colors in `styles.css` (optional)

## 💡 Pro Tips

1. **Dropbox Links**: Always change `?dl=0` to `?dl=1` for videos
2. **Image Sizes**: Keep images under 2MB for fast loading
3. **Backup**: Always backup your `config.js` and `pricing-config.js` files
4. **Test Locally**: Use `python -m http.server 8000` to test before deploying

## 📁 File Structure

```
TWPhotography/
├── config.js              ⭐ Edit this for main gallery
├── pricing-config.js      ⭐ Edit this for pricing page
├── images/
│   ├── before-after/      📸 Add before/after photos here
│   └── ...                 📸 Add other photos here
├── videos/                 🎥 Add local videos here (optional)
└── styles.css              🎨 Customize colors here
```

## ❓ Common Questions

**Q: How do I add a new video?**
A: Just add a new entry to the `gallery` array in `config.js` with `type: "video"`

**Q: How do I change prices?**
A: Edit the `packages` array in `pricing-config.js`

**Q: Can I add more before/after comparisons?**
A: Yes! Just add more entries to the `beforeAfter` array in `pricing-config.js`

**Q: Will adding new items break the website?**
A: No! As long as you follow the format, everything will work perfectly.

---

**Remember**: All you need to do is edit the config files - the website handles everything else automatically!

