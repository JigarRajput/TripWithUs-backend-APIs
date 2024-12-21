// Sorting function based on pricing
const sortByPricing = (hotelOne, hotelTwo, sortType) => {
  if (sortType === 'low-to-high') {
    return hotelOne.price - hotelTwo.price;
  } else {
    return hotelTwo.price - hotelOne.price;
  }
};

// Sorting function based on rating
const sortByRating = (hotelOne, hotelTwo, sortType) => {
  if (sortType === 'low-to-high') {
    return hotelOne.rating - hotelTwo.rating;
  } else {
    return hotelTwo.rating - hotelOne.rating;
  }
};

// Sorting function based on reviews
const sortByReviews = (hotelOne, hotelTwo, sortType) => {
  if (sortType === 'least-to-most') {
    return hotelOne.reviews - hotelTwo.reviews;
  } else {
    return hotelTwo.reviews - hotelOne.reviews;
  }
};

// Filter hotels by amenity
const filterByAmenity = (hotel, amenityTpe) =>
  hotel.amenity.toLowerCase() === amenityTpe.toLowerCase();

// Filter hotels by country
const filterByCountry = (hotel, country) =>
  hotel.country.toLowerCase() === country.toLowerCase();

// Filter hotels by category
const filterByCategory = (hotel, category) =>
  hotel.category.toLowerCase() === category.toLowerCase();

module.exports = {
  sortByPricing,
  sortByRating,
  sortByReviews,
  filterByAmenity,
  filterByCountry,
  filterByCategory,
};
