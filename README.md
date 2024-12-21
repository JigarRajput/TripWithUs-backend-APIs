# TripWithUs Hotel Chain

## Introduction

> TripWithUs is an emerging platform aiming to list and showcase hotels from across the globe. With a vision to make travel planning effortless, the platform currently offers a selection of hotels categorized into different types and enriched with various amenities. As part of the initial phase, TripWithUs focuses on providing users with powerful APIs to filter and sort hotel listings based on specific criteria.

> This document outlines the API endpoints and features of the "TripWithUs" hotel chain project.

***
## Features
### Filtering Options

TripWithUs allows users to filter hotel listings based on the following:

* Category:

    * Mid-Range

    * Family

    * Luxury

    * Boutique

    * Resort

    * Budget

* Amenity:

    * Spa

    * Bar

    * Pool

    * Restaurant

    * Gym

    * Pet Friendly

    * Parking

    * Free WiFi

* Country:

    * France

    * USA

    * India

    * Germany

    * United Kingdom

    * Australia

    * South Africa

## API Endpoints

1. Get All Hotels

    - Endpoint: `/hotels`
    - Method: GET <br/>
    - Description: Fetches the full list of hotels

2. Sort Hotels by Pricing

    - Endpoint: `/hotels/sort/pricing`
    - Method: GET <br/>
    - Query Parameter: `pricing` (type: `low-to-high` or `high-to-low`)
    - Description: Returns hotels sorted by pricing.

3. Sort Hotels by Rating

   - Endpoint: `/hotels/sort/rating`
   - Method: GET
   - Query Parameter: `rating` (type: `low-to-high` or `high-to-low`)
   - Description: Returns hotels sorted by ratings.

4. Sort Hotels by Reviews

    - Endpoint: `/hotels/sort/reviews`
    - Method: GET
    - Query Parameter: `reviews` (type: `least-to-most` or `most-to-least`)
    - Description: Returns hotels sorted by the number of reviews.   

5. Filter Hotels by Amenity

    - Endpoint: `/hotels/filter/amenity`
    - Method: GET
    - Query Parameter: `amenity` (type: string, e.g., `Pool`, `Spa`)
    - Description: Returns hotels that offer the specified amenity.

6. Filter Hotels by Country

    - Endpoint: `/hotels/filter/country`
    - Method: GET
    - Query Parameter: `country` (type: string, e.g., `USA`, `India`)
    - Description: Returns hotels located in the specified country.

7. Filter Hotels by Category

    - Endpoint: `/hotels/filter/category`
    - Method: GET
    - Query Parameter: `category` (type: string, e.g., `Luxury`, `Budget`)
    - Description: Returns hotels belonging to the specified category.
    
---

 ## Project Structure
   ### The project is structured as follows:
   * `index.js`: Main entry point of the application.
   * `hotels.js`: Contains the dataset of hotels.
   * `utils.js`: Utility functions for sorting and filtering hotels.

## Installation and Setup

   1. Clone the repository: `git clone https://github.com/JigarRajput/TripWithUs-backend-APIs.git`

   2. Navigate to the project directory: `cd TripWithUs-backend-APIs`

   3. Install dependencies: `npm install`

   4. Start the server: `node index.js`

   5. Access the application at: `http://localhost:3010`

---
If you want to try it live, here is the url: [`https://trip-with-us-backend-apis.vercel.app/hotels`](https://trip-with-us-backend-apis.vercel.app/hotels)
---
Made with ❤️ by Jigar 
    
