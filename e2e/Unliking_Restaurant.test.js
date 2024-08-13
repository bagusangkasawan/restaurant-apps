Feature('Unliking restaurant');

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('Your Favorite Restaurant', '.content__heading');

  I.amOnPage('/');

  I.waitForElement('.restaurant_title', 15); 
  I.click(locate('.restaurant_title').first());

  I.waitForElement('#likeButton', 15);  
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSee('Your Favorite Restaurant', '.content__heading');
  I.wait(2);

  I.dontSeeElement('.restaurant__title'); 
});
