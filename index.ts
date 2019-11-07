let shape: Array<Array<number>> = []
let iStart:number = 0, jStart:number = 0;

/**
 * This function creates a infinite shapes of a given height and Width and 
 * recursively create inner shapes of same Height - Padding and Width - Padding until there is no space left in the last shape.
 * @param  {number} width
 * @param  {number} height
 * @param  {number} padding
 * @return {Array}       final shape
 */
export function draw(width: number, height: number, padding: number) {
  // padding has to divisble of 2
  if (padding % 2 !== 0) throw Error("Not a valid padding");

  //stop recursive call, if no more shape is possible
  if ((width - jStart) <= 1 || (height - iStart) <= 1) return shape;

  for(let i = iStart; i < height; i++) {
    shape[i] = shape[i] || [];
    for(let j = jStart; j < width; j++) {
      if (i === iStart || i === (height - 1)) shape[i][j] = 1;
      else if (j === jStart || j ===(width - 1)) shape[i][j] = 2;
      else shape[i][j] = 0
    }
  }

  const diff: number = (padding/2) + 1;

  //staring point of next shape
  iStart += diff;
  jStart += diff;

  //recursive call
  return draw(width - (diff), height - (diff), padding);
}

/**
 * This function clear iStart and jStart value so new shape can formed
 */
export function unset() {
  iStart = 0; jStart = 0;
  shape = [];
}

/**
 * This function format and log 2-Dimensional array(final shape) in matrix from
 */
export function print2DShape() {
  for(let arr of shape) {
    console.log(JSON.stringify(arr));
  }
}
