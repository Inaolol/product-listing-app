const axios = require('axios');

async function testAPI() {
  try {
    console.log('🧪 Testing Product Listing API...\n');
    
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await axios.get('http://localhost:5000/api/health');
    console.log('✅ Health check:', healthResponse.data);
    console.log('');
    
    // Test products endpoint
    console.log('2. Testing products endpoint...');
    const productsResponse = await axios.get('http://localhost:5000/api/products');
    const products = productsResponse.data;
    
    console.log(`✅ Loaded ${products.length} products`);
    console.log('');
    
    // Verify first product data
    if (products.length > 0) {
      const firstProduct = products[0];
      console.log('3. First product details:');
      console.log(`   Name: ${firstProduct.name}`);
      console.log(`   Weight: ${firstProduct.weight}g`);
      console.log(`   Popularity Score: ${firstProduct.popularityScore}`);
      console.log(`   Calculated Price: $${firstProduct.price.toFixed(2)}`);
      console.log(`   Star Rating: ${firstProduct.starRating}/5.0`);
      console.log(`   Available Colors: ${Object.keys(firstProduct.images).join(', ')}`);
      
      // Verify price calculation
      const expectedPrice = (firstProduct.popularityScore + 1) * firstProduct.weight * 65;
      const isCorrect = Math.abs(firstProduct.price - expectedPrice) < 0.01;
      console.log(`   Price Calculation: ${isCorrect ? '✅ Correct' : '❌ Incorrect'}`);
      console.log('');
    }
    
    // Show all product prices
    console.log('4. All product prices:');
    products.forEach((product, index) => {
      console.log(`   ${index + 1}. ${product.name}: $${Math.round(product.price)} (${product.starRating}⭐)`);
    });
    
    console.log('\n🎉 API test completed successfully!');
    console.log('\n📱 You can now open http://localhost:3000 to view the frontend application.');
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Make sure the backend server is running on port 5000');
      console.log('   Run: cd backend && npm start');
    }
  }
}

testAPI(); 