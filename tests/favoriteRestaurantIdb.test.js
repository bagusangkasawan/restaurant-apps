import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  beforeEach(async () => {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    await Promise.all(
      restaurants.map((restaurant) => FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)),
    );
  });

  afterEach(async () => {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    await Promise.all(
      restaurants.map((restaurant) => FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)),
    );
  });

  it('should reject adding a restaurant if it does not have the correct property', async () => {
    await FavoriteRestaurantIdb.putRestaurant({ name: 'Restaurant Name' });
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(restaurants).toEqual([]);
  });

  it('should add a restaurant correctly', async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: 1, name: 'Restaurant Name' });
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1, name: 'Restaurant Name' });
  });

  it('should be able to delete a restaurant', async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: 1, name: 'Restaurant Name' });
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toBeNull();
  });
});
