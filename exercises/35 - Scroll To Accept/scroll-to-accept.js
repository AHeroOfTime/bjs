const terms = document.querySelector('.terms-and-conditions');
// const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

// terms.addEventListener('scroll', function(e) {
//   console.log(e.currentTarget);
// });

function obCallback(payload) {
  console.log(payload);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing the button
    // eslint-disable-next-line no-use-before-define
    ob.unobserve(terms.lastElementChild);
  }
  // } else {
  //   button.disabled = true;
  // }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
