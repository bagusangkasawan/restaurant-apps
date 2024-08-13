import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/add-review';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant">
      <div id="loading" class="loading-indicator"></div>
    </div>
    <div id="customerReviews"></div>
    <div id="likeButtonContainer"></div>
    <form id="review-form" style="display: none;">
      <h3>Add Review</h3>
      <input type="text" id="review-name" placeholder="Your Name" autocomplete="on" required>
      <input type="text" id="review-content" placeholder="Your Review" autocomplete="on" required>
      <button type="submit" class="submit-review" id="submit-review">Send Review</button>
    </form>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const loadingIndicator = document.getElementById('loading');
    const reviewForm = document.getElementById('review-form');

    if (!loadingIndicator) {
      console.error('Loading indicator not found');
      return;
    }

    try {
      loadingIndicator.style.display = 'block'; // Tampilkan loading spinner
      reviewForm.style.display = 'none'; // Sembunyikan form ulasan

      const restaurant = await restaurantSource.restaurantDetail(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          description: restaurant.description,
        },
      });

      reviewForm.style.display = 'block'; // Tampilkan form ulasan
    } catch (error) {
      console.error('Failed to fetch restaurant details:', error);
      restaurantContainer.innerHTML = '<h1>Failed to load restaurant details. Please try again later.</h1>';
      reviewForm.style.display = 'none'; // Sembunyikan form ulasan jika gagal
    } finally {
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none'; // Sembunyikan loading spinner setelah data dimuat
      }
    }

    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });
  },
};

export default Detail;
