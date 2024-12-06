let wholeParagraph = document.querySelector("#myParagraph");
//console.log(wholeParagraph);
let paragraph = wholeParagraph.textContent;
let paragraphArray = paragraph.split(/[\s | \. | \? | : | \, | \; | \n | ]/gm);
paragraphArray = paragraphArray.filter((i) => (i ? true : false));
let obj = {};
paragraphArray.forEach(function (i) {
  i = i.toLowerCase();
  if (obj[i]) {
    obj[i] = obj[i] + 1;
  } else {
    obj[i] = 1;
  }
});
let newArray = Object.keys(obj).map((i) => [i, obj[i]]);
newArray.sort((a, b) => {
  return b[1] - a[1];
});
let cloud = document.querySelector("#myWordCloud");
for (let i = 0; i < 12; i++) {
  let pixels = 64 - i * 4;
  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = newArray[i][0];
  paragraphElement.style.fontSize = `${pixels}px`;
  cloud.appendChild(paragraphElement);
}
console.log(newArray);
