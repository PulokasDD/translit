const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const leftBlock = document.querySelector('.left-block');
const rightBlock = document.querySelector('.right-block');

button.addEventListener('click', () => {
  let newWord = document.createElement('div');
  let message = input.value.toLowerCase();
  if (message.length > 14) {
    newWord.setAttribute('title', `${message}`);
    message = message.substr(0, 14) + '...';
  }
  newWord.innerText = message;
  leftBlock.append(newWord);

  let translitWord = document.createElement('div');
  let translitMessage = transliter(message);
  if (translitMessage.length > 14) {
    translitWord.setAttribute('title',`${transliter(input.value.toLowerCase())}`);
  }
  translitWord.innerText = translitMessage;
  rightBlock.append(translitWord);
});



function transliter (str) {
  let total = [];
  const dictionary = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
    'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
    'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
    'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
  };

  str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

  for (let i = 0; i < str.length; ++i) {
    total.push( dictionary[str[i]]
        || dictionary[str[i].toLowerCase()] == undefined && str[i]
        || dictionary[str[i].toLowerCase()].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
    );
  }
  return total.join('');
}
