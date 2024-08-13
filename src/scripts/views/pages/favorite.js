import FavoriteRestarantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestarantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const contentHeadingElement = document.querySelector('.content__heading');

    if (restaurants.length === 0) {
      contentHeadingElement.innerText = "You don't have any favorite restaurants";
      restaurantsContainer.innerText = ''; // Clear the restaurants container
    } else {
      contentHeadingElement.innerText = 'Your Favorite Restaurant';
      restaurantsContainer.innerHTML = ''; // Clear the container before adding new content
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
