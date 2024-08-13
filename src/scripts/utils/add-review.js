/* eslint-disable no-alert */

import RestaurantSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';

const AddReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const reviewName = document.getElementById('review-name');
  const reviewContent = document.getElementById('review-content');
  const reviewContainer = document.querySelector('#customerReviews');

  // Validasi input
  if (!reviewName.value || !reviewContent.value) {
    alert('Please fill out both fields.');
    return;
  }

  const dataInput = {
    id: url.id,
    name: reviewName.value,
    review: reviewContent.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <li class="review">
        <div class="name-review">${dataInput.name}</div>
        <div class="date-review">${date}</div>
        <div class="description-review">"${dataInput.review}"</div>
    </li>
  `;

  try {
    await RestaurantSource.addReview(dataInput);
    reviewContainer.innerHTML += newReview;
    reviewName.value = '';
    reviewContent.value = '';
  } catch (error) {
    console.error('Failed to submit review:', error);
  }
};

export default AddReview;
