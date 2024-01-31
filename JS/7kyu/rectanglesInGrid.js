// Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.
// Examples(Input1, Input2 --> Output):
// 3, 2 --> 18
// 4, 4 --> 100
// Here is how the 3x2 grid works (Thanks to GiacomoSorbi for the idea):
// 1 rectangle of size 3x2:
// [][][]
// [][][]


//Solution
function numberOfRectangles(m, n) {
    const horizontalCount = m * (m + 1) / 2;
    const verticalCount = n * (n + 1) / 2;
    return horizontalCount * verticalCount;
  }