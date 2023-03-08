const scannerGet = () => {
  const app = document.querySelector('.app');

  const markup = `
    <main>
      <div id="reader"></div>
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
            stroke="#7b7b7b"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="is--text-grey">Diary</p>
      </a>
      <a href="#account">
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
  `;
  app.innerHTML = markup;

  const html5QrCode = new Html5Qrcode('reader');
  const config = {
    fps: 10,
    qrbox: 200,
  };

  html5QrCode
    .start({ facingMode: 'environment' }, config, (decodedData) => {
      markupData(decodedData);
    })
    .catch((err) => {
      console.log(err);
    });

  const markupData = (decodedData) => {
    html5QrCode
      .stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
      })
      .catch((err) => {
        // Stop failed, handle it.
      });
    routie(`results/${decodedData}`);
  };
};

export default scannerGet;
