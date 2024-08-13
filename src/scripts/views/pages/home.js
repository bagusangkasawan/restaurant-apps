import restaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <highlight-bar></highlight-bar>
      <div class="explore">
        <h1 class="explore_label">Explore Restaurants</h1>
        <hr style="width: 30%; border: 3px solid #de9d7e; margin: auto" />
      </div>
      <div id="restaurants" class="restaurants">
        <div id="loading" class="loading-indicator"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingIndicator = document.getElementById('loading');
    loadingIndicator.style.display = 'block'; // Tampilkan loading spinner

    try {
      const restaurants = await restaurantSource.home();
      restaurantsContainer.innerHTML = ''; // Bersihkan kontainer sebelum menambahkan item
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      restaurantsContainer.innerHTML = '<h1>Failed to load restaurants. Please check your internet connection.</h1>';
    } finally {
      loadingIndicator.remove(); // Hapus loading spinner setelah data dimuat
    }
  },
};

export default Home;
