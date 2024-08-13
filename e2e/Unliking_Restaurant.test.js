Feature('Unliking restaurant');

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see("Your Favorite Restaurant", '.content__heading');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__content h3', 15); 
  I.click(locate('.restaurant-item__content h3').first());

  I.waitForElement('#likeButton', 15);  
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSee("Your Favorite Restaurant", '.content__heading');
  I.wait(2);

  I.dontSeeElement('.restaurant__title'); 
});
