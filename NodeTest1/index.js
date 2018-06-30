'use strict';

// NB: These are not real URLs!
const CAT_URL = 'http://cats.something/api';
const DOG_URL = 'http://dogs.something/api';

/**
 * Fetches cat API from `CAT_URL`.
 *
 * @param {Function} fetchUrl Function that fetches a URL
 *
 * @returns {Promise} A promise with a result of fetching the cat URL
 */
function fetchPetUrl(url, callback) {
  return callback(url, response => {
    return new Promise((resolve, reject) => {
      if (response.status < 400) {
        resolve(response.data);
      }
      else {
        reject(new Error(response.error));
      }
    });
  });
}
function fetchCats(fetchUrl) {
  // TODO: Write your code here
  return fetchPetUrl(CAT_URL, fetchUrl);
}
/**
 * Fetches dog API from `DOG_URL`.
 *
 * @param {Function} fetchUrl Function that fetches a URL
 *
 * @returns {Promise} A promise with a result of fetching the dog URL
 */
function fetchDogs(fetchUrl) {
  // TODO: Write your code here
  return fetchPetUrl(DOG_URL, fetchUrl);
}
/**
 * Fetches cat and dog APIs.
 *
 * @param {Function} fetchUrl Function that fetches a URL
 *
 * @returns {Promise} A promise with a result of fetching both cat and dog APIs
 */
function fetchAllAnimals(fetchUrl) {
  // TODO: Write your code here
  return Promise.all([fetchCats(fetchUrl), fetchDogs(fetchUrl)]);
}

module.exports = {
  fetchAllAnimals,
  fetchCats,
  fetchDogs
};
