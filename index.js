function getLinksFromMd(str) {
  const regexUrl = new RegExp(/(?<=\().+?(?=\))/g);
  const regexTxt = new RegExp(/(?<=\[).+?(?=\])/g);

  const href = str.match(regexUrl);
  const text = str.match(regexTxt);

  const obj = href.map((elem, index) => {
    return Object.assign({}, { href: elem,
      text: text[index] });
  });

  return obj;
}

module.exports = getLinksFromMd;