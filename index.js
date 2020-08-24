function getElement(num) {
  let elements = ["fire", "air", "water", "earth"];
  let idx = (parseInt(num) - 1) % 4;
  let element = elements[idx];
  return element;
}

export default getElement;