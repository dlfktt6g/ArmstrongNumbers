function armstrongNum(){
  for (var i = 1; i<10; i++){
    for (var j = 0; j<10; j++){
      for (var k = 0; k<10; k++){
        var pow=i**3+j**3+k**3;
        var sum=i*100+j*10+k;
        if(pow==sum){
          console.log(sum);
        }
      }
    }
  }
}
armstrongNum();
