/* global Feature, Scenario, Before, locate */

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Showing empty liked restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.content__heading');
  I.see("You don't have any favorite restaurant");
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item__content', 10);
  I.seeElement('.restaurant-item__content');

  const firstRestaurant = locate('.restaurant-item__content h3').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.content__heading', 15);
  I.see('Your Favorite Restaurant');
});
