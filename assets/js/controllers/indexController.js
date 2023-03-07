const app = document.querySelector('.app');

const indexGet = () => {
  const NutriItems = JSON.parse(localStorage.getItem('items')) || [];

  let totalNutri = {};

  if (NutriItems.length <= 0) {
    totalNutri = {
      energy: 0,
      eiwitten: 0,
      koolhydraten: 0,
    };
  } else {
    totalNutri = NutriItems.reduce(function (previousValue, currentValue) {
      return {
        energy: +previousValue.energy + +currentValue.energy,
        koolhydraten: +previousValue.koolhydraten + +currentValue.koolhydraten,
        eiwitten: +previousValue.eiwitten + +currentValue.eiwitten,
      };
    });
  }

  const markup = `
    <div class="container">
      <a href="./#scanner" class="barcode__btn">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 18.4852V9.99995M10 9.99995V1.51465M10 9.99995H18.4853M10 9.99995H1.51471"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
      <header>
        <h1>Today</h1>
        <div class="progress-stats__wrapper">
          <p>You can still eat <span>${
            2650 - parseFloat(totalNutri.energy).toFixed(0)
          }</span> calories</p>
          <div class="progress-bar__wrapper">
            <div class="progress-bar"></div>
          </div>
          <div class="progress-info__wrapper">
            <p>${parseFloat(totalNutri.energy).toFixed(0)} calories eaten</p>
            <p>Goal: <span>2.650</span></p>
          </div>
        </div>
        <div class="core-nutri__wrapper">
          <div class="core-progress__wrapper">
            <div class="progress-info__wrapper">
              <p class="is--text-pink">Carbs</p>
              <p class="is--text-pink">${
                160 - parseFloat(totalNutri.koolhydraten).toFixed(1)
              }g left</p>
            </div>
            <div class="progress-bar__wrapper">
              <div id="nutri-carbs" class="progress-bar is--pink"></div>
            </div>
          </div>
          <div class="core-progress__wrapper">
            <div class="progress-info__wrapper">
              <p class="is--text-blue">Protein</p>
              <p class="is--text-blue">${
                160 - parseFloat(totalNutri.eiwitten).toFixed(1)
              }g left</p>
            </div>
            <div class="progress-bar__wrapper">
              <div id="nutri-protein" class="progress-bar is--blue"></div>
            </div>
          </div>
          <div class="core-progress__wrapper">
            <div class="progress-info__wrapper">
              <p class="is--text-orange">fat</p>
              <p class="is--text-orange">${
                160 - parseFloat(totalNutri.fat).toFixed(1)
              }g left</p>
            </div>
            <div class="progress-bar__wrapper">
              <div id="nutri-fat" class="progress-bar is--orange"></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <ul>
        </ul>
      </main>

      <footer>
        <a href="./">
          <svg
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H17M1 7V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H13.8031C14.921 19 15.48 19 15.9074 18.7822C16.2837 18.5905 16.5905 18.2842 16.7822 17.9079C17 17.4805 17 16.9215 17 15.8036V7M1 7V6.2002C1 5.08009 1 4.51962 1.21799 4.0918C1.40973 3.71547 1.71547 3.40973 2.0918 3.21799C2.51962 3 3.08009 3 4.2002 3H5M17 7V6.19691C17 5.07899 17 4.5192 16.7822 4.0918C16.5905 3.71547 16.2837 3.40973 15.9074 3.21799C15.4796 3 14.9203 3 13.8002 3H13M5 3H13M5 3V1M13 3V1M12 11L8 15L6 13"
              stroke="#75B06D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Diary</p>
        </a>
        <a href="#">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19C15 16.2386 12.7614 14 10 14C7.23858 14 5 16.2386 5 19M15 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2837 18.7822 17.9074C19 17.48 19 16.921 19 15.8031V4.19691C19 3.07899 19 2.5192 18.7822 2.0918C18.5905 1.71547 18.2837 1.40973 17.9074 1.21799C17.4796 1 16.9203 1 15.8002 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V15.8002C1 16.9203 1 17.4796 1.21799 17.9074C1.40973 18.2837 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H5M15 19H5M10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8C13 9.65685 11.6569 11 10 11Z"
              stroke="#7b7b7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Me</p>
        </a>
      </footer>
    </div>
  `;

  app.innerHTML = markup;

  // Bereken de progress bar
  const energyResult = (100 / 2000) * parseFloat(totalNutri.energy).toFixed(1);
  const eiwittenResult =
    (100 / 160) * parseFloat(totalNutri.eiwitten).toFixed(1);
  const koolhydratenResult =
    (100 / 200) * parseFloat(totalNutri.koolhydraten).toFixed(1);
  const fatResult = (100 / 200) * parseFloat(totalNutri.fat).toFixed(1);

  document.querySelector('.progress-bar').style.width = `${energyResult}%`;
  document.querySelector('#nutri-carbs').style.width = `${koolhydratenResult}%`;
  document.querySelector('#nutri-protein').style.width = `${eiwittenResult}%`;
  document.querySelector('#nutri-fat').style.width = `${fatResult}%`;

  // add items to a table that are saved in the localstorage

  const items = JSON.parse(localStorage.getItem('items')) || [];
  const ul = document.querySelector('ul');

  items.forEach((item) => {
    let li = document.createElement('li');
    // li.setAttribute('class', 'more-info');
    li.innerHTML = `
      <div class="item-img__wrapper"><img src="${item.imgUrl}" /></div>
      <div class="item-info__wrapper">
        <p>${item.name} - ${item.quantity}</p>
        <p class="is--text-grey">
          <span class="is--text-green">${item.energy} kcal</span> - ${item.ingredients}</p>
      </div>
      <div class="item-edit_wrapper">
        <a class="more-info">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.14648 7.07361C7.31728 6.54732 7.63015 6.07896 8.05078 5.71948C8.47141 5.36001 8.9838 5.12378 9.53027 5.03708C10.0768 4.95038 10.6362 5.0164 11.1475 5.22803C11.6587 5.43966 12.1014 5.78875 12.4268 6.23633C12.7521 6.68391 12.9469 7.21256 12.9904 7.76416C13.0339 8.31576 12.9238 8.86879 12.6727 9.36182C12.4215 9.85484 12.0394 10.2685 11.5676 10.5576C11.0958 10.8467 10.5533 10.9998 10 10.9998V12.0002M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 15V15.1L9.9502 15.1002V15H10.0498Z"
              stroke="#7b7b7b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    `;

    ul.appendChild(li);

    const infoBtn = document.querySelector('.more-info');

    infoBtn.addEventListener('click', () => {
      routie(`edit/90162602`);
    });
  });
};

export default indexGet;
