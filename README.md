# TW Photography Website - Real Estate Videography

A simple, modern video gallery website for real estate videography that's easy to customize and deploy. Perfect for showcasing property tours and real estate videos.

## 🚀 Quick Start

### Local Development

1. Simply open `index.html` in your web browser, or
2. Use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have it)
   npx serve
   ```
3. Open `http://localhost:8000` in your browser

## ✏️ How to Update Content

### Adding New Videos (Easiest Method - Dropbox)

**The easiest way to add videos is using Dropbox links:**

1. **Upload your video to Dropbox** and get a share link
2. **Edit `config.js`** and add a new entry to the `videos` array:
   ```javascript
   {
       src: "https://www.dropbox.com/.../your-video.mp4?dl=1",  // IMPORTANT: Change ?dl=0 to ?dl=1
       title: "Property Name - Description",
       caption: "Video description (optional)",
       thumbnail: "",  // Optional: Add thumbnail image path
       category: "all"
   }
   ```

**Important:** When copying a Dropbox link, change `?dl=0` at the end to `?dl=1` to make it a direct download link that works in video players.

**Example:**
- Original: `https://www.dropbox.com/.../video.mp4?rlkey=...&dl=0`
- Use this: `https://www.dropbox.com/.../video.mp4?rlkey=...&dl=1`

### Adding Local Videos

If you prefer to host videos locally:

1. **Add your video file** to the `videos/` folder
2. **Edit `config.js`** and add an entry:
   ```javascript
   {
       src: "videos/your-video.mp4",
       title: "Property Name",
       caption: "Description",
       thumbnail: "images/thumbnail.jpg",  // Optional
       category: "all"
   }
   ```

**Note:** Local videos will be included in your GitHub repo, which may increase repository size. Dropbox links are recommended for larger files.

### Updating Text Content

Simply edit `config.js`:
- **About section**: Edit the `about.text` field
- **Contact info**: Edit the `contact.info` array
- **Site name/tagline**: Edit `siteName` and `siteTagline`

### Changing Colors/Styling

Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --primary-color: #2c3e50;    /* Main color */
    --secondary-color: #e74c3c;   /* Accent color */
    /* ... etc */
}
```

## 📤 Deploying to Cloudflare Pages

### Step 1: Push to GitHub

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select your repository
7. Configure build settings:
   - **Framework preset**: None (or Static)
   - **Build command**: (leave empty)
   - **Build output directory**: `/` (root)
8. Click **Save and Deploy**

### Step 3: Connect Your Domain

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter `twphotography.com.au`
4. Follow the DNS configuration instructions
5. Cloudflare will automatically provision an SSL certificate

### Step 4: Update DNS (if needed)

If your domain is not already using Cloudflare DNS:
- Add a CNAME record pointing to your Cloudflare Pages URL
- Or follow Cloudflare's instructions for your DNS provider

## 📁 Project Structure

```
TWPhotography/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── config.js           # ⭐ EDIT THIS to add/update videos
├── videos/             # Local video files (optional - Dropbox recommended)
│   └── .gitkeep
├── images/             # Thumbnail images (optional)
│   └── .gitkeep
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## 🎨 Features

- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Video gallery with full-screen lightbox player
- ✅ Support for Dropbox video links (no file size limits!)
- ✅ Support for local video files
- ✅ Easy content management - just edit `config.js`
- ✅ Smooth scrolling navigation
- ✅ Modern, clean design optimized for real estate
- ✅ Fast loading (static site)
- ✅ SEO friendly
- ✅ Keyboard navigation (arrow keys, escape)

## 📝 Tips

### Video Management
- **Dropbox Links**: Best for large files - no repository size limits
- **Local Videos**: Keep files under 100MB if using GitHub (Cloudflare Pages has size limits)
- **Video Formats**: MP4 (H.264) is recommended for best browser compatibility
- **Thumbnails**: Add custom thumbnails in `images/` folder for better gallery appearance
- **Dropbox Tip**: Always change `?dl=0` to `?dl=1` in Dropbox links for direct video access

### Best Practices
- **Backup**: Always keep a backup of your `config.js` file
- **Testing**: Test videos in the lightbox before deploying
- **Organization**: Use descriptive titles and captions for better SEO

## 🔧 Troubleshooting

**Videos not playing?**
- For Dropbox links: Make sure you changed `?dl=0` to `?dl=1` at the end
- Check that video URLs are correct and accessible
- Verify video format is MP4 (H.264 codec recommended)
- Check browser console for errors (F12)

**Dropbox links not working?**
- Ensure the link is set to "Anyone with the link can view"
- Change `?dl=0` to `?dl=1` in the URL
- Test the link directly in a browser first

**Changes not appearing?**
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Check browser console for errors (F12)
- Make sure `config.js` syntax is correct (no missing commas, brackets)

## 📧 Support

For questions or issues, check the Cloudflare Pages documentation or GitHub issues.

---

**Domain**: twphotography.com.au  
**Built with**: HTML, CSS, JavaScript  
**Deployed on**: Cloudflare Pages

