const el = document.querySelector(".carousel-inner");

var wrapper = document.createElement("div");

// insert wrapper before el in the DOM tree

el.parentNode.insertBefore(wrapper, el);

// move el into wrapper

wrapper.appendChild(el);

wrapper.id = "slider";

wrapper.classList = "carousel slide";

var myCarousel = document.querySelector("#slider");

var carousel = new bootstrap.Carousel(myCarousel);

/*

<div id="slider" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>


*/
