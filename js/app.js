const select = document.querySelector('select');
const allLang = ['en', 'es', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  document.querySelector('title').innerHTML = langArr['title'][hash];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();

// document.getElementById('lang-select').addEventListener('change', setLanguageImage);

// function setLanguageImage() {
//   const selectElement = document.getElementById('lang-select');  // TODO: id for select
//   const selectedLanguage = selectElement.value;
//   let imagePath;
//   switch (selectedLanguage) {
//     case 'en': imagePath = 'assets/images/qrCodes/AnaheimQRcodeEN.svg'; break;
//     case 'es': imagePath = 'assets/images/qrCodes/AnaheimQRcodeES.svg'; break;
//     case 'ru': imagePath = 'assets/images/qrCodes/AnaheimQRcodeRU.svg'; break;
//     case 'ua': imagePath = 'assets/images/qrCodes/AnaheimQRcodeUA.svg'; break;
//     default: imagePath = 'assets/images/qrCodes/AnaheimQRcodeEN.svg';
//   }
//   const imgElement = document.getElementById('language-image');   // TODO: image html tag
//   imgElement.src = imagePath;
// }
    