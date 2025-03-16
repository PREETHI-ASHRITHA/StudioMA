/* Store the element in el */
// let el = document.getElementByClassName('portfolio-card')

// const el = document.getElementById('hero-section');
const aboutTitle = document.getElementById('about-title-outer');
// const title = doucment.getElementById('about-title');

const el = document.querySelector('.hero-section');


// Items

const tagLine = document.querySelector('.tag-line');
  

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string;
  
  // aboutTitle.style.transform = "translateZ(50px)";
};

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseenter', function() {
  el.style.transform = 'perspective(100px) scale(1) rotateX(0) rotateY(0)';
  el.style.transform = "translateZ(50px)";
  aboutTitle.style.transform = "translateZ(50px)";

});

/* Add listener for mousedown event, to simulate click */
// el.addEventListener('mousedown', function() {
//   el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
// })

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseleave', function() {
  el.style.transform = 'perspective(100px) scale(1) rotateX(0) rotateY(0)';
  el.style.transform = "translateZ(0px)";

  // aboutTitle.style.transition = "none";
  // el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
});
