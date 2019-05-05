var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
  ];
  var result = input.map(function(num){
      var x = (num.x) * num.x;
      var y = (num.y) * num.y;
      var result2 = Math.sqrt( x + y);
      return result2;
     }
  );
  
  console.log(result[0] === 5);
  console.log(result[1] === 13);
  console.log(result[2] === 17);

