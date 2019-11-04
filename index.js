const figure = []
let iStart = 0, jStart = 0;

const draw = function (width, height, padding) {
  // padding has to divisble of 2
  if (padding % 2 !== 0) throw Error("Not a valid padding");

  //stop recursive call, if no more shape is possible
  if ((width - jStart) < 3 || (height - iStart) < 3) return figure;

  for(let i = iStart; i < height; i++) {
    figure[i] = figure[i] || [];
    for(let j = jStart; j < width; j++) {
      if (i === iStart || i === (height - 1)) figure[i][j] = 1;
      else if (j === jStart || j ===(width - 1)) figure[i][j] = 2;
      else figure[i][j] = 0
    }
  }

  //staring point of next shape
  iStart += padding/2;
  jStart += padding/2;

  //recursive call
  return draw(width - (padding/2), height - (padding/2), padding);
}

const unset = function() {
  iStart = 0; jStart = 0;
}

module.exports = {
  draw,
  unset,
};
