const buttons = document.querySelectorAll('.button');
const btnsArr = [...buttons];
btnsArr.forEach(function (button, index) {
  button.addEventListener('click', function () {
    if (index === 0) {
      document.body.style.backgroundColor = '#F7FBFC';
    }
    if (index === 1) {
      document.body.style.backgroundColor = '#D6E6F2';
      button.style.backgroundColor = 'orange';
    }
    if (index === 2) {
      document.body.style.backgroundColor = '#769FCD';
      button.style.backgroundColor = 'white';
    }
    btnsArr.forEach(function (button) {
      button.style.opacity = '0';
    });
    button.style.opacity = '1';
  });
});
