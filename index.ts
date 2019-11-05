const figure: Array<Array<number>> = []
let iStart:number = 0, jStart:number = 0;

export const draw = function (width: number, height: number, padding: number) {
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

export const unset = function() {
  iStart = 0; jStart = 0;
}
