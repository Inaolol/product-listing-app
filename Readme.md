# Product Listing App - Engagement Rings

A full-stack web application displaying a beautiful collection of engagement rings with dynamic pricing, color variants, and responsive design.

## Features

- **Dynamic Pricing**: Calculated using the formula `Price = (popularityScore + 1) * weight * goldPrice`
- **Color Picker**: Switch between Yellow Gold, Rose Gold, and White Gold variants
- **Star Rating System**: Convert popularity scores (0-100%) to 5-star ratings with 1 decimal precision
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, jewelry-focused design with hover effects and smooth transitions

## Tech Stack

### Backend
- Node.js
- Express.js
- CORS for cross-origin requests
- Axios for potential API integrations

### Frontend
- React 18
- CSS3 with modern features
- Responsive Grid Layout
- Component-based architecture

## Project Structure

```
product-listing-app/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ProductGrid.js
│   │   │   ├── ProductCard.js
│   │   │   ├── ColorPicker.js
│   │   │   └── StarRating.js
│   │   ├── App.js         # Main application component
│   │   └── index.js       # React entry point
│   ├── public/
│   ├── package.json       # Frontend dependencies
│   └── .gitignore
├── products.json          # Product data source
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd product-listing-app
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   The React app will run on `http://localhost:3000`

3. **Access the Application**
   Open your browser and go to `http://localhost:3000`

### API Endpoints

- `GET /api/products` - Returns all products with calculated prices and star ratings
- `GET /api/health` - Health check endpoint

### Price Calculation

The application calculates prices using the formula:
**Price = (popularityScore + 1) × weight × goldPrice**

Where:
- `popularityScore`: Product popularity (0-1 scale)
- `weight`: Product weight in grams
- `goldPrice`: Current gold price per gram ($65/gram)

### Star Rating Conversion

Popularity scores are converted to 5-star ratings:
- 0.0 → 0.0 stars
- 0.5 → 2.5 stars  
- 1.0 → 5.0 stars

## Key Components

### ProductCard
- Displays product image, name, price, and rating
- Implements color switching functionality
- Responsive hover effects

### ColorPicker
- Three gold variants: Yellow, Rose, White
- Visual color swatches with selection indicators
- Positioned overlay on product images

### StarRating
- 5-star display system
- Supports partial stars for decimal ratings
- Golden star styling

## Responsive Design

- **Desktop**: Multi-column grid layout
- **Tablet**: Responsive grid with optimized spacing
- **Mobile**: Single-column layout with touch-friendly controls

## Production Build

### Frontend
```bash
cd frontend
npm run build
```

### Deployment Options

**Recommended Platforms:**
- **Frontend**: Vercel, Netlify, GitHub Pages
- **Backend**: Heroku, Railway, Render

**Environment Variables:**
- `PORT`: Server port (default: 5000)
- `GOLD_PRICE`: Gold price per gram (default: $65)

## Development Notes

- Gold price is currently hardcoded at $65/gram
- Product images are served from external CDN
- Fallback handling for failed image loads
- Cross-origin requests handled via CORS

## Testing

The application includes:
- Error boundary handling
- Loading states
- Image fallback mechanisms
- Responsive breakpoint testing

## Future Enhancements

- Real-time gold price API integration
- Product filtering and search
- Shopping cart functionality
- User authentication
- Inventory management

## Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

Built as part of a full-stack development internship assignment focusing on clean code, responsive design, and modern web development practices.
