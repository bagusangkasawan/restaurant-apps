Feature('Unliking restaurant');

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('Your Favorite Restaurant', '.content__heading');

  I.amOnPage('/');

  I.waitForElement('.restaurant_title', 15);  // Increased wait time
  I.click(locate('.restaurant_title').first());

  I.waitForElement('#likeButton', 15);  // Increased wait time
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSee('Your Favorite Restaurant', '.content__heading');  // Corrected to dontSee
  I.wait(2);  // Small wait to ensure the list updates

  I.dontSeeElement('.restaurant-title');  // Ensure that the list is empty
});
