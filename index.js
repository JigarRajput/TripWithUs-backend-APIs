const express = require('express');
const { resolve } = require('path');
const hotels = require('./hotels');
const {
  sortByPricing,
  sortByRating,
  sortByReviews,
  filterByAmenity,
  filterByCountry,
  filterByCategory,
} = require('./utils.js');

const app = express();
const port = 3010;

// Get hotels sorted by pricing endpoint
app.get('/hotels/sort/pricing', (req, res) => {
  const pricingSortType = req.query.pricing;
  const hotelsCopy = [...hotels];
  hotelsCopy.sort((hotelOne, hotelTwo) =>
    sortByPricing(hotelOne, hotelTwo, pricingSortType)
  );

  res.json({ hotels: hotelsCopy });
});

// Get hotels sorted by rating endpoint
app.get('/hotels/sort/rating', (req, res) => {
  const ratingSortType = req.query.rating;
  const hotelsCopy = [...hotels];
  hotelsCopy.sort((hotelOne, hotelTwo) =>
    sortByRating(hotelOne, hotelTwo, ratingSortType)
  );

  res.json({ hotels: hotelsCopy });
});

// Get hotels sorted by reviews endpoint
app.get('/hotels/sort/reviews', (req, res) => {
  const reviewsSortType = req.query.reviews;
  const hotelsCopy = [...hotels];
  hotelsCopy.sort((hotelOne, hotelTwo) =>
    sortByReviews(hotelOne, hotelTwo, reviewsSortType)
  );

  res.json({ hotels: hotelsCopy });
});

// Get hotels filtered by amenities endpoint
app.get('/hotels/filter/amenity', (req, res) => {
  const amenity = req.query.amenity;
  const filteredHotels = hotels.filter((hotelObj) =>
    filterByAmenity(hotelObj, amenity)
  );
  res.json({ hotels: filteredHotels });
});

// Get hotels filtered by country endpoint
app.get('/hotels/filter/country', (req, res) => {
  const country = req.query.country;
  const filteredHotels = hotels.filter((hotelObj) =>
    filterByCountry(hotelObj, country)
  );
  res.json({ hotels: filteredHotels });
});

// Get hotels filtered by category endpoint
app.get('/hotels/filter/category', (req, res) => {
  const category = req.query.category;
  const filteredHotels = hotels.filter((hotelObj) =>
    filterByCategory(hotelObj, category)
  );
  res.json({ hotels: filteredHotels });
});

app.get('/hotels', (req, res) => {
  res.json({ hotels });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
