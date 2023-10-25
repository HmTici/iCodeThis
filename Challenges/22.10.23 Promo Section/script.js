let intervalCounter = 0;
const MAX_HEIGHT = 10;
const MIN_HEIGHT = 5;
const bodyElem = document.querySelector('body');
const interstellarTravel = () => {
  const newStar = document.createElement('div');
  newStar.className = 'star';

  /* GEt random absolute left position*/
  const randomWidth = Math.floor(Math.random() * bodyElem.clientWidth);

  /* Set absolute top position */
  newStar.style.top = -200 + 'px';
  /* Set random absolute left position */
  newStar.style.left = randomWidth + 'px';
  /* Get random duration for transition*/
  const randomDuration = Math.floor(Math.random() * (1000 - 750 + 1) + 750);
  newStar.style.transition = `transform ${randomDuration}ms ease-in-out, opacity ${randomDuration},ms ease-in-out`;

  //Insert the star in the body
  bodyElem.insertAdjacentElement('beforeEnd', newStar);

  // Interval to repeat the movement of every star
  setInterval(() => {
    /* Get random Height for the star */
    const randomHeight = Math.floor(
      Math.random() * (MAX_HEIGHT - MIN_HEIGHT + 1) + MIN_HEIGHT,
    );
    /* Set height for the star */
    newStar.style.height = randomHeight + 'rem';
    /* Set transition for translate and opaciuty */
    newStar.style.transition = `transform .${randomDuration}s ease-in-out, opacity .${randomDuration}s ease-in-out`;
    setTimeout(() => {
      /* Apply translattion and opacity */
      newStar.style.transform = 'translateY(120vh)';
      newStar.style.opacity = '0';
      /* After transition duration return star to its original position */
      setTimeout(() => {
        newStar.style.transition = `none`;
        newStar.style.transform = 'translateY(-200px)';
        newStar.style.opacity = '1';
      }, randomDuration);
    }, 250);
  }, 1500);
};

window.addEventListener('DOMContentLoaded', () => {
  //Create 200 stars
  const intervalStar = setInterval(() => {
    if (intervalCounter < 200) {
      interstellarTravel();
      intervalCounter++;
    } else {
      clearInterval(intervalStar);
    }
  }, 20);
});
