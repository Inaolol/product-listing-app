# Assignment Description

You will build a product listing application that consists of two main parts: a backend API and a frontend interface. The backend will provide product information to the frontend, which should display the products according to the provided design.

## Requirements

 1. Backend: Mock API Development

    - Develop a RESTful API that serves product data from a given JSON file.
    - The product JSON will include the following attributes:

      - name: The name of the product.

      - popularityScore: A percentage score representing the popularity of the product.

      - weight: The weight of each product in grams.

      - images: Product images (three images for each product, one for each color option).

    - Dynamic Price Calculation: The price of each product should be calculated based on the following formula:

        - **`Price = (popularityScore + 1) *weight* goldPrice`**

        - The price should be in US dollars.

        - goldPrice: The price per gram of pure gold in US Dollars. This should be retrieved from a real-time data source of your preference.

 2. Frontend: Product Display

    - Create a simple frontend that displays the list of products using the provided design. We will share the product design image.

    - The frontend should:

        - Fetch the product data from the backend API.

        - Display the products in the provided layout.

        - Show the product name, price, and other relevant information.

        - Include a color picker which changes the displayed image of the product.

        - Convert the popularityScore of each item to a score out of 5, with 1 decimal place, and display it as such.

        - The Carousel should move with side arrows as well as swiping (for both mobile and desktop).

 3. Bonus Feature (Optional)

    - Implement **filtering** in the backend to allow the API to return products based on criteria such as:

        - Price range
        - Popularity score

Expectations and Guidelines

- You are free to use any technology stack you prefer.

- Use Git for version control and provide a link to your repository upon completion. Additionally, please deploy your final submission to a hosting platform (e.g., Heroku, Vercel) and provide a link to the published page.

- The frontend should be as visually similar to the provided design as possible and should be **responsive** to ensure a good user experience on different devices.
