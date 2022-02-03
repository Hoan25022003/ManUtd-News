let dataShop = [
  {
    title: "Manchester United Teamgeist Jersey - Black",
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-teamgeist-jersey-black_ss4_p-12085065+u-18qry7ezpzt4gv9anewt+v-b17c10d8e4fe45998b2c329aaa6cd661.jpg?_hv=1&w=900",
  },
  {
    title: "Manchester United Pre Match Warm Top-Red",
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-pre-match-warm-top-red_ss4_p-12052602+u-17azvzrlcr11ufqqisr4+v-7a85e2cc00df4860bd279ce05f18e3bd.jpg?_hv=1&w=900",
  },
  {
    title: "Manchester United Teamgeist T-Shirt - White",
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-teamgeist-t-shirt-white_ss4_p-12084837+u-kvpcl21pe4m227nwnwaj+v-bdd4c97337dd462d9597b89ce6773660.jpg?_hv=1&w=900",
  },
  {
    title: "Manchester United Home Shirt 2021-22",
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2021-22_ss4_p-12052601+u-at664r59yn8qgpq61tz1+v-206a8d38ca49417f845b1e6711c02106.jpg?_hv=1&w=900",
  },
  {
    title: "Manchester United Away Shirt 2021-22",
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2021-22_ss4_p-12052603+u-b7sp7qmu31as2usy5man+v-765af7e8dd784446a6249a8959f37917.jpg?_hv=1&w=900",
  },
  {
    title: "Manchester United Third Shirt 2021-22",
    image:
      "https://images.footballfanatics.com/manchester-united/manchester-united-third-shirt-2021-22_ss4_p-12052548+u-11j173tm5vq2ycw9fyvr+v-2f47135b2bc64b3a8d5cc4b1f32349ad.jpg?_hv=1&w=900",
  },
];

const shopModal = document.querySelectorAll(".shop-item-name-link");
for (let i = 0; i < shopModal.length; i++) {
  shopModal[i].addEventListener("click", () => {
    for (let j = 0; j < dataShop.length; j++) {
      if (i === j) {
        const showModalShop = `
        <div class="modal-shop">
          <div class="modal-shop-2">
            <button class="modal-close">
              <i class="fas fa-times"></i>
            </button>
            <div class="modal-shop-content">
              <div class="modal-shop-img">
                <img
                  src="${dataShop[j].image}"
                  alt=""
                />
              </div>
              <div class="modal-shop-subcribe">
                <p class="modal-shop-subcribe-name">${dataShop[j].title}</p>
                <span class="modal-shop-subcribe-titile"
                  >In Stock - This item ships within 10 business days.</span
                >
                <p class="modal-shop-subcribe-price">Your Price: US$70.00</p>
                <div class="modal-shop-cart">
                  <p>Size</p>
                  <button class="modal-shop-cart-size">S</button>
                  <button class="modal-shop-cart-size">M</button>
                  <button class="modal-shop-cart-size">L</button>
                  <button class="modal-shop-cart-size">XL</button>
                  <button class="modal-shop-cart-size">XXL</button>
                  <button class="modal-shop-cart-size">3XL</button>
                  <p style="margin-top: 16px">Quantify</p>
                  <button class="modal-shop-cart-remove">
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="modal-shop-cart-number">1</span>
                  <button class="modal-shop-cart-add">
                    <i class="fas fa-plus"></i>
                  </button>
                  <div class="modal-shop-cart-footer">
                    <button class="modal-shop-cart-btn">
                      <i class="fas fa-cart-plus"></i> Add to card
                    </button>
                    <button class="modal-shop-cart-buy">Buy Product</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        $("body").append(showModalShop);
        $("body").css("overflow", "hidden");
        $(".modal-close").on("click", () => {
          $(".modal-shop").remove();
          $("body").css("overflow", "scroll");
        });
        let sizeClothes = $(".modal-shop-cart-size");
        let qualify = document.querySelector(".modal-shop-cart-number");
        for (let k = 0; k < sizeClothes.length; k++) {
          sizeClothes.eq(k).on("click", function () {
            sizeClothes.eq(k).toggleClass("modal-shop-cart-size-show");
          });
          $(".modal-shop-cart-btn").on("click", function () {
            let annouceCart = `
            <div class='result-add'>
              <i class="fas fa-check-circle"></i>
              <p>Add a successful cart</p>
            </div>
            `;
            if (
              sizeClothes
                .eq(k)
                .attr("class")
                .includes("modal-shop-cart-size-show") &&
              qualify.innerHTML > 0
            ) {
              setTimeout(() => {
                $(".modal-shop").append(annouceCart);
              }, 500);
              setTimeout(() => {
                $(".result-add").remove();
              }, 3000);
            }
          });
        }
        let removeNumber = document.querySelector(".modal-shop-cart-remove");
        removeNumber.addEventListener("click", function () {
          setTimeout(() => {
            if (qualify.innerHTML > 0 && qualify.innerHTML < 10) {
              qualify.innerHTML--;
            }
            if (qualify.innerHTML == 0) {
              removeNumber.setAttribute(
                "style",
                "opacity : 0.5; cursor : default"
              );
            }
            if (qualify.innerHTML == 10) {
              addNumber.setAttribute("style", "opacity : 1 ;cursor : pointer"),
                qualify.innerHTML--;
            }
          }, 500);
        });
        let addNumber = document.querySelector(".modal-shop-cart-add");
        addNumber.addEventListener("click", function () {
          setTimeout(() => {
            if (qualify.innerHTML < 10 && qualify.innerHTML > 0) {
              qualify.innerHTML++;
            }
            if (qualify.innerHTML == 10) {
              addNumber.setAttribute(
                "style",
                "opacity : 0.5 ;cursor : default"
              );
            }
            if (qualify.innerHTML == 0) {
              removeNumber.setAttribute(
                "style",
                "opacity : 1; cursor : pointer"
              ),
                qualify.innerHTML++;
            }
          }, 500);
        });
        $(".modal-shop-cart-buy").on("click", function () {
          $(".modal-close").trigger("click");
        });
      }
    }
  });
}

$(".btn-view").on("click", () => {
  $(".view").remove();
  $(".shop-list-2").removeClass("hide");
});

let shopImage = $(".shop-item-img");
for (let i = 0; i < shopImage.length; i++) {
  shopImage.eq(i).on("click", function () {
    for (let j = 0; j < dataShop.length; j++) {
      if (i === j) {
        setTimeout(() => {
          const modalImage = `
          <div class='modal-image'>
            <button class='modal-image-close'><i class="fas fa-times"></i></button>
            <button class='btn-pre'><i class="fas fa-chevron-left"></i></button>
            <button class='btn-next'><i class="fas fa-chevron-right"></i></button>
            <img src='' class='modal-image-main'>
          </div>
          `;
          $("body").append(modalImage);
          $("body").css("overflow", "hidden");
          $(".modal-image-close").on("click", () => {
            $(".modal-image").remove();
            $("body").css("overflow", "scroll");
          });
          const previous = document.querySelector(".btn-pre");
          const next = document.querySelector(".btn-next");
          let modalImageInner = document.querySelector(".modal-image-main");
          let imageElement = document.querySelectorAll(".shop-item-img");
          let currentIndex = i;
          currentIndex == imageElement.length - 1
            ? next.classList.add("hide")
            : next.classList.remove("hide");
          currentIndex == 0
            ? previous.classList.add("hide")
            : previous.classList.remove("hide");
          modalImageInner.src = imageElement[currentIndex].src;
          previous.addEventListener("click", function () {
            if (currentIndex != 0) {
              currentIndex--;
            }
            currentIndex == imageElement.length - 1
              ? next.classList.add("hide")
              : next.classList.remove("hide");
            currentIndex == 0
              ? previous.classList.add("hide")
              : previous.classList.remove("hide");
            modalImageInner.src = imageElement[currentIndex].src;
          });
          next.addEventListener("click", function () {
            if (currentIndex != imageElement.length - 1) {
              currentIndex++;
            }
            currentIndex == imageElement.length - 1
              ? next.classList.add("hide")
              : next.classList.remove("hide");
            currentIndex == 0
              ? previous.classList.add("hide")
              : previous.classList.remove("hide");
            modalImageInner.src = imageElement[currentIndex].src;
          });
        }, 500);
      }
    }
  });
}

// show Modal
let annouceError = $(".annouce-error");

function refreshForm() {
  $("#email").val("");
  $("#password").val("");
  for (let i = 0; i < annouceError.length; i++) {
    annouceError.eq(i).html("");
  }
}

$(".btn-close").on("click", function () {
  refreshForm();
});

function refreshRegister() {
  $("#creatEmail").val("");
  $("#creatPassword").val("");
  $("#confirmPassword").val("");
  for (let i = 0; i < errorRegister.length; i++) {
    errorRegister.eq(i).html("");
  }
}

function showModal() {
  $(".modal-2").attr("style", "display : flex");
  $("body").css("overflow", "hidden");
  $(".close-modal").on("click", () => {
    $(".modal-2").css("display", "none");
    $("body").css("overflow", "scroll");
    refreshRegister();
  });
}

$("#formLogin").on("click", function () {
  for (let i = 0; i < annouceError.length; i++) {
    if ($("#email").val() == "") {
      annouceError.eq(0).html("You are not left blank");
    } else if (
      $("#email").val().length > 0 &&
      $("#email").val().indexOf("@") == -1
    ) {
      annouceError.eq(0).html("Email must have a character '@'");
    }
    if ($("#password").val() == "") {
      annouceError.eq(1).html("You are not left blank");
    } else if (
      $("#password").val().length > 0 &&
      $("#password").val().length < 6
    ) {
      annouceError.eq(1).html("Password must have more than 6 characters");
    }
  }
  if (
    $("#password").val().length >= 6 &&
    $("#email").val().indexOf("@") > -1 &&
    $("#email").val().length > 0
  ) {
    $(".btn-close").trigger("click");
    alert("Successful login");
  }
});

// Modal Register
let modal2 = document.querySelector(".modal-2");
let errorRegister = $(".error-register");

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    $("body").css("overflow", "scroll");
    refreshRegister();
  }
};

$("#transferModal").on("click", function () {
  $(".btn-close").trigger("click");
  $(".modal-2").css("display", "flex");
  $(".close-modal").on("click", () => {
    $(".modal-2").css("display", "none");
  });
});

$("#transferModal2").on("click", function () {
  $(".close-modal").trigger("click");
});

$("#formRegister").on("click", () => {
  for (let i = 0; i < errorRegister.length; i++) {
    if ($("#creatEmail").val() == "") {
      errorRegister.eq(0).html("You are not left blank");
    } else if (
      $("#creatEmail").val().length > 0 &&
      $("#creatEmail").val().indexOf("@") == -1
    ) {
      errorRegister.eq(0).html("Email must have a character '@'");
    }
    if ($("#creatPassword").val() == "") {
      errorRegister.eq(1).html("You are not left blank");
    } else if (
      $("#creatPassword").val().length > 0 &&
      $("#creatPassword").val().length < 6
    ) {
      errorRegister.eq(1).html("Password must have more than 6 characters");
    }
    if ($("#confirmPassword").val() == "") {
      errorRegister.eq(2).html("You are not left blank");
    } else if (
      $("#confirmPassword").val().length > 0 &&
      $("#confirmPassword").val().length < 6
    ) {
      errorRegister.eq(2).html("Password must have more than 6 characters");
    }
    if (
      $("#confirmPassword").val().length >= 6 &&
      $("#creatPassword").val() != $("#confirmPassword").val()
    ) {
      errorRegister
        .eq(2)
        .html("The confirmation password must match the password created");
    }
  }
  if (
    $("#creatPassword").val().length >= 6 &&
    $("#confirmPassword").val().length >= 6 &&
    $("#creatEmail").val().indexOf("@") > -1 &&
    $("#creatEmail").val().length > 0 &&
    $("#creatPassword").val() == $("#confirmPassword").val()
  ) {
    $(".close-modal").trigger("click");
    alert("Sign Up Success");
  }
});
