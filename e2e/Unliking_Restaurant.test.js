/* global Feature, Scenario, Before, locate */

const assert = require('assert');

Feature('Unliking restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__content h3', 15);
  I.seeElement('.restaurant-item__content h3');
  I.click(locate('.restaurant-item__content h3').first());

  // Like Restoran
  I.waitForElement('#likeButton', 15);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Kembali ke Favorite
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item__content h3', 15);
  I.seeElement('.restaurant-item__content h3');
  const likedRestaurantTitle = await I.grabTextFrom(locate('.restaurant-item__content h3').first());

  // Unlike Restoran
  I.click(likedRestaurantTitle);
  I.waitForElement('#likeButton', 15);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Kembali lagi ke Favorite untuk memastikan sudah di-unlike
  I.amOnPage('/#/favorite');
  I.waitForElement('.content__heading', 15);
  I.seeElement('.content__heading');
  I.see("You don't have any favorite restaurants");

  const restaurantTitleAfterUnlike = await I.grabTextFrom('.content__heading');
  assert.strictEqual(restaurantTitleAfterUnlike, "You don't have any favorite restaurants");
});
