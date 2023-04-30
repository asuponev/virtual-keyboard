function checkUserLang(event) {
  const char = event.key;

  const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const rus = rusLower + rusLower.toUpperCase();
  const enLower = 'abcdefghijklmnopqrstuvwxyz';
  const en = enLower + enLower.toUpperCase();

  if (rus.includes(char)) {
    return 'ru'
  } else if (en.includes(char)) {
    return 'en'
  }
}

export default checkUserLang;

