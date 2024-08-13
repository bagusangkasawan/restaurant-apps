/* global Feature, Scenario, Before, locate */

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post a restaurant review', async ({ I }) => {
  const reviewText = 'E2E Post Review Text';

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__content h3', 10);
  I.seeElement('.restaurant-item__content h3');
  I.click(locate('.restaurant-item__content h3').first());

  I.waitForElement('#review-form', 20);
  I.seeElement('#review-form');
  I.fillField('#review-name', 'E2E Test Review');
  I.fillField('#review-content', reviewText);
  I.click('#submit-review');
  I.waitForElement('#customerReviews', 10);

  const lastReview = locate('#customerReviews').last();
  I.seeElement(lastReview);
});
