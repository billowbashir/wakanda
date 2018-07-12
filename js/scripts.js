





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var noString = $("input#input1").val();
    var noArray = noString.split("+");
    var sum=0;
     for(var number=0;number<=noArray.length-1;number+=1){
       sum+=parseInt(noArray[number])
     };
    console.log(sum)
  });
});
