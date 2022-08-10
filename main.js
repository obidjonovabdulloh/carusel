const carusel = selector => {
  return document.querySelector(selector);
};

function next() {
  if (carusel(".hide")) {
    carusel(".hide").remove(); 
  }


  if (carusel(".prev")) {
    carusel(".prev").classList.add("hide");
    carusel(".prev").classList.remove("prev");
  }

  carusel(".act").classList.add("prev");
  carusel(".act").classList.remove("act");

  carusel(".next").classList.add("act");
  carusel(".next").classList.remove("next");



  carusel(".new-next").classList.remove("new-next");

  const addedEl = document.createElement('li');

  carusel(".list").appendChild(addedEl);
  addedEl.classList.add("next","new-next");
}

function prev() {
  carusel(".new-next").remove();


  carusel(".next").classList.add("new-next");

  carusel(".act").classList.add("next");
  carusel(".act").classList.remove("act");

  carusel(".prev").classList.add("act");
  carusel(".prev").classList.remove("prev");



  carusel(".hide").classList.add("prev");
  carusel(".hide").classList.remove("hide");

  const addedEl = document.createElement('li');

  carusel(".list").insertBefore(addedEl, $(".list").firstChild);
  addedEl.classList.add("hide");
}

carusel2 = element => {
  
  if (element.classList.contains('next')) {
    next();

    
  } else if (element.classList.contains('prev')) {
    prev();
  }
}

const slider = carusel(".list"),
      swipe = new Hammer(carusel(".swipe"));

slider.onclick = event => {
  carusel2(event.target);
}

swipe.on("swipeleft", (ev) => {
  next();
});

swipe.on("swiperight", (ev) => {
  prev();
});