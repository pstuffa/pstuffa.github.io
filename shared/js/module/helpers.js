const isMobile = (width) => {
  return width < 600
}

const lineData = (n) => {

  const points = d3.range(n).map(Object);

  points.forEach((d, i) => {

    if(Math.floor(i/3) % 2 == 0) {

      if(i % 3 == 1) {
          d.x = .0
      } else if (i % 3 == 2) {
          d.x = .5
      } else {
          d.x = .5
      }
      d.y = i;

    } else {

      if(i % 3 == 1) {
          d.y = .0
      } else if (i % 3 == 2) {
          d.y = .5
      } else {
          d.y = .5
      }
      d.x = i;
    }

  });

  return points;

}
