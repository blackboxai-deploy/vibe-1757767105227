# Images Replace करने का Complete Guide 

## 🖼️ Original Images कहाँ लगानी हैं?

आपको जो original images देनी हैं, वो इन files में replace करनी होंगी:

### 1. **Homepage Images** (`src/app/page.tsx`)
```
Line 88: Hero Section Image
स्थान: मुख्य hero section में
Current: salon interior image
Replace with: आपकी salon की main photo

Line में खोजें: src="https://storage.googleapis.com/..."
```

### 2. **Services Page Images** (`src/app/services/page.tsx`)
```
Hair Straightening:
- Line 91: Before image  
- Line 109: After image

Blow Dry:
- Line 156: Professional styling image

Mehendi: 
- Line 237: Henna designs image

Press-on Nails:
- Line 318: Nail art image
```

### 3. **Gallery Page Images** (`src/app/gallery/page.tsx`)
```
बहुत सारे images हैं gallery में:
- Hair transformations (before/after)
- Blow dry results
- Mehendi designs  
- Press-on nail designs
- Client testimonials

हर image का अपना line number है।
```

### 4. **About Page Images** (`src/app/about/page.tsx`)
```
Team member photos:
- Shobha (founder)
- Priya (mehendi artist) 
- Fatima (nail specialist)
- Aisha (consultant)

Salon interior photos भी हैं।
```

## 📝 Images कैसे Replace करें?

### Method 1: Direct File Edit करें
```typescript
// पुराना:
src="https://storage.googleapis.com/workspace-ai-generated/image123.jpg"

// नया (आपका):
src="/images/your-photo.jpg"
```

### Method 2: Public Folder में डालें
1. `public/images/` folder बनाएं
2. आपकी सभी images वहाँ copy करें
3. Code में path change करें:
   ```
   src="/images/salon-interior.jpg"
   src="/images/hair-before.jpg" 
   src="/images/hair-after.jpg"
   ```

## 🎨 Color Scheme Changes (अभी किया गया है)

### ✅ **Applied Changes:**

1. **Background**: White → Sky Blue (`bg-sky-500`)
2. **Navigation**: White → Black (`bg-black`)
3. **Text Colors**: Gray → Gold/Yellow (`text-yellow-400`)
4. **Buttons**: Sky Blue → Gold (`bg-yellow-500`)
5. **Cards**: White background → Black (`bg-black`)

### 🌈 **Current Color Palette:**
- **Primary**: Gold/Yellow (`yellow-400`, `yellow-500`)
- **Secondary**: White for contrast
- **Background**: Sky Blue (`sky-500`) and Black (`black`)
- **Text**: Gold (`yellow-400`) and White (`white`)

## 💬 WhatsApp Integration कैसे काम करता है?

### **Book Appointment Flow:**
1. **User Form भरता है** → Name, Phone, Service, Date, Time
2. **Submit करता है** → WhatsApp message automatically बनता है
3. **WhatsApp खुलता है** → Pre-written message के साथ
4. **User Send करता है** → Direct आपको message जाता है

### **WhatsApp Message Format:**
```
Hello! मुझे appointment book करनी है:

👤 Name: John Doe
📞 Phone: +971501234567  
💇‍♀️ Service: Hair Straightening
📅 Date: 2024-01-15
⏰ Time: 2:00 PM
📝 Special Request: (if any)

कृपया मेरी booking confirm कर दें। धन्यवाद!
```

### **आपको कैसे पता चलेगा?**
- आपके WhatsApp (+97143591532) पर यह message आएगा
- आप reply करके booking confirm कर सकते हैं
- Customer को confirmation भेज सकते हैं

## 📱 WhatsApp Business Setup (Recommended)

1. **WhatsApp Business** app download करें
2. **Business Profile** set करें:
   - Name: Shobha Beauty Studio
   - Address: Meena Bazaar, Bur Dubai
   - Hours: Daily 10AM-10PM
   - Services: Hair, Nails, Mehendi

3. **Quick Replies** set करें:
   ```
   "धन्यवाद! आपकी booking confirm हो गई है।"
   "हमारी location: Meena Bazaar, Bur Dubai"  
   "हमारे timings: Daily 10AM-10PM"
   ```

## 🔄 Testing WhatsApp Integration

### Test करने के लिए:
1. Website पर जाएं: https://sb-1f7x42h8fxu7.vercel.run
2. "Book Appointment" page खोलें
3. Form fill करें (test data से)
4. Submit करें
5. WhatsApp खुलेगा आपके phone number पर
6. Message send करें (test)

## 📞 Contact Integration

### सभी Contact Points:
- **Phone**: Click-to-call `tel:+97143591532`
- **WhatsApp**: Direct message `wa.me/97143591532`
- **Email**: `Shobhabeautysaloon@gmail.com`
- **Instagram**: `@shobhasaloon`

## 🎯 Image Requirements

### **बेहतरीन Results के लिए:**

1. **High Quality**: कम से कम 800x600 pixels
2. **Professional**: Clear, well-lit photos
3. **Relevant**: Service के अनुसार images
4. **Before/After**: Hair services के लिए comparison photos

### **Image Categories Needed:**
- Salon interior (2-3 photos)
- Hair straightening before/after (3-4 sets)
- Blow dry results (3-4 photos)
- Mehendi designs (5-6 different styles)
- Press-on nails (4-5 designs)
- Team photos (4 members)

## 🚀 Next Steps

1. **Original Images भेजें** मुझे
2. **Main उन्हें website में लगा दूंगा**  
3. **Colors और भी adjust कर सकते हैं** (अगर चाहिए)
4. **WhatsApp test करेंगे** booking के साथ
5. **Final website deploy करेंगे**

---

**Ready for Images! 📸**  
Original images भेज दीजिए, main तुरंत लगा दूंगा website में।