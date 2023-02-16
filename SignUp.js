var main = document.querySelector(".container-login");
var btn = document.querySelector(".login-btn-btn");
var x = false;
var p1 = document.querySelector(".progress-l-1");
var n2 = document.querySelector(".progress-2");
var n3 = document.querySelector(".progress-3");
var p2 = document.querySelector(".progress-l-2");
btn.addEventListener("click", () => {
  if (!x) {
    main.innerHTML = `
        <div class="login-input mt-sp">
        <label>What's your phone number?</label>
        <input required placeholder="Enter your phone number." type="text" />
      </div>
      
      <div class="login-btn">
      <button class="login-btn-btn" type="submit">Confirm</button>
      </div>
      `;
    x = true;
    p1.classList.add("done");
    n2.classList.add("done");
    btn = document.querySelector(".login-btn-btn");
    btn.addEventListener("click", () => {
      if (x) {
        main.innerHTML = `
        <div class="login-input mt-sp">
        <label>What's your phone number?</label>
        <input required placeholder="Enter your phone number." type="text" />
      </div>
    <div class="login-input">
    <label>Enter the code</label>
    <input required placeholder="Enter your code." type="text" />
  </div>

  
  <div class="login-btn">
  <button class="login-btn-btn" type="submit">Next</button>
  </div>
  `;
        btn = document.querySelector(".login-btn-btn");
        btn.addEventListener("click", () => {
          main.classList.remove("container-login");

          main.innerHTML = `    <div class="container-type">
    <div class="type-label">
      <label>choose your favorite type (minimum 6)</label>
    </div>
    <div class="types">
      <div class="each-type" style="--type-clr-from-html: #f8a711">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #fe4a49">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #2ab7ca">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #005b96">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #7bc043">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #009688">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #0392cf">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #4d648d">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #ffcc5c">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #ffa700">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
      <div class="each-type" style="--type-clr-from-html: #d11141">
        <p class="type-title">pop</p>
        <img class="type-img" src="./hidden.jpg" />
      </div>
    </div>

    <div class="login-btn">
    <button class="login-btn-btn" type="submit">Done</button>
    </div>
  </div>`;

          p2.classList.add("done");
          n3.classList.add("done");
        });
      }
    });
  }
});
