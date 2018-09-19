'use strict';

function main() {

  const bookInfo = {
    geography_integrated: {
      title: 'Geography An Integrated Approach',
      author: 'David Waugh',
      language: 'English'
    },
    cinderella: {
      title: 'Cinderella',
      author: 'Wilhelm Grimm',
      language: 'English'
    },
    mr_bean: {
      title: 'Mr Bean',
      author: 'Johnny English',
      language: 'English'
    },
    mpho_search: {
      title: 'Mpho Search',
      author: 'Sandra Braude',
      language: 'Zulu'
    },
    eloquent_javascript: {
      title: 'Eloquent Javascript',
      author: 'Marijn Haverbeke',
      language: 'English'
    },
    kudzikotsira: {
      title: 'Kudzikotsira',
      author: 'Never Chimeno',
      language: 'Shona'
    },
    rain: {
      title: 'Rain',
      author: 'Marion Dane',
      language: 'English'
    },
    mini_farming: {
      title: 'Mini Farming',
      author: 'Brett Markham',
      language: 'English'
    },
    restoration_agriculture: {
      title: 'Restoration Agriculture',
      author: 'Mark Shepard',
      language: 'English'
    },
    umenzi_kakhalelwa: {
      title: 'Umenzi Kakhalelwa',
      author: 'Noel Mathema',
      language: 'Ndebele'
    }
  };

  let bookImages = {
    the_alchemist: 'geography.jpeg',
    war_and_peace: '1931_Jane_Eyre.jpg',
    jayne_ayre: '1931_Jane_Eyre.jpg',
    harry_potter_and_the_prisoner_of_azkaban: '1931_Jane_Eyre.jpg'
  };

  const ul = createUl(bookInfo, bookImages);

  document.body.appendChild(ul);

  console.log(JSON.stringify(bookInfo, null, 2));
}

function createUl(bookTitles, bookImages) {
  const ul = document.createElement('ul');

  for (let i in bookTitles) {

    let book = bookTitles[i];

    let li = document.createElement('li');

    let header = document.createElement('h2');
    header.innerHTML = book.title;

    let authorP = document.createElement('p');
    authorP.innerHTML = book.author;

    let languageP = document.createElement('p');
    languageP.innerHTML = book.language;

    let image = document.createElement('img');
    image.src = getSource(i, bookImages);
    image.style.width = '200px';
    li.appendChild(header);
    li.appendChild(authorP);
    li.appendChild(languageP);
    li.appendChild(image);

    ul.appendChild(li);
  }
  return ul;
}

function getSource(bookId, bookImages) {
  return bookImages[bookId];
}

window.addEventListener('load', main);
