function test(len) {
  let str = '';

  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
  
        //   const center = i === (len / 2);
        //   const firstRow = i === (len / 2) + 1 && j !== len - 1 && j !== 0
        //       || i === (len / 2) - 1 && j !== len - 1 && j !== 0;
        //   const secondRow = i === (len / 2) + 2 && j !== len - 1 && j !== 0 && j !== len - 2 && j !== 1
        //       || i === (len / 2) - 2 && j !== len - 1 && j !== 0 && j !== len - 2 && j !== 1;
        //   const thirdRow = i === (len / 2) + 3 && j !== len - 1 && j !== 0 && j !== len - 2 && j !== 1 && j !== len - 3 && j !== 2
        //       || i === (len / 2) - 3 && j !== len - 1 && j !== 0 && j !== len - 2 && j !== 1 && j !== len - 3 && j !== 2;
        //   const fourRow = i === (len / 2) + 4 && j !== len - 1 && j !== 0 && j !== len - 2 && j !== 1 && j !== len - 3 && j !== 2 && j !== len - 4 && j !== 3
        //       || i === (len / 2) - 4 && j !== len - 1 && j !== 0 && j !== len - 2 && j !== 1 && j !== len - 3 && j !== 2 && j !== len - 4 && j !== 3;
          const center = i === (len / 2);
          const diagonal = i === j;
          const firstRow = i === j && i % 2 === 0
          
          if (center) str += '♥';
          else if (diagonal) str += '♦';
        else if (firstRow) str += '♥';
    //    else if (secondRow) str += '♥';
    //    else if (thirdRow) str += '♥';
    //    else if (fourRow) str += '♥';
      else str += '_';
    }
    str += '\n';
  }

  console.log(str);
}

test(100);