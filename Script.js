//Question 1:-
console.log(`Anonymous:-`)
//Anonymous:-
console.log(`A:-`);
//A:-

var a = function(arr){
    var result = [];
    for( var i=0;i<arr.length;i++){
        
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

console.log(`B:-`);
//B:-

var  b = function (str) {
    var s = str.toString();
     var res = s.toLowerCase().split(" ");
     for(var i=0;i<res.length;i++){
        res [i] = res[i].charAt(0).toUpperCase()+res[i].slice(1);
     }
     return res.join(" ");
  }
   console.log(b(["I'm a little tea pot"]));

   console.log(`C:-`);
//C:-

var c = function (num){
    var sum = 0;
    for(var i=0;i<num.length;i++){
        sum +=num[i];
    }
    console.log(sum);
}
   c([1,2,3,4,5,6]);

   console.log(`D:-`);
//D:-

        var prime1 = [];
        var prime2 = [];

    var d = function (num6) {

        for(var i=0;i<=num6;i++){
            prime2.push(true);
        }
        for(var i=2;i<=num6;i++){
            if(prime2[i]){
                prime1.push(i);
                for(var j=1;i*j<=num6;j++){
                    prime2[i*j] = false;
                }
            }
        }
        return prime1;
        
    }
    console.log(d(20));


console.log(`E:-`);
 // e:-

    var e = function (arr){
        var res = [];
        for(var i=0;i<arr.length;i++){
            var data = arr[i].split("").reverse().join("");
            if(data===arr[i]){
                res.push(arr[i]);
            }
        }
        console.log(res); 
    }
    e(["dad","mom","malayalam"]);

    console.log(`F:-`);
//f:-

var arr4 = [1,3,5,7];
var arr5 = [2,4,6];

var f = function (arr4,arr5){
    var res6 = [...arr4,...arr5];
        res6.sort((a,b)=>a-b);
    var n = res6.length;
    if(n%2===0){
        return (res6[n/2]+res6[n/2-1])/2;
    }
    else{
       return(res6[Math.floor(n/2)]);
    }

}
  console.log(f(arr4,arr5));

  console.log(`G:-`);
// g:-

    var g = function(arr7,k){
        for(var i=0;i<k;i++){
            arr7.push(arr7[i]);
        }
        for(var i=0;i<k;i++){
            arr7.shift(arr7[i]);
        }
        console.log(arr7);
    }
    g([1,2,3,4,5,6],3);

    
//h:-
console.log(`H:-`);

    let arr = [1,2,3,4,5,6];
    const k = 3;
    let h = function(arr,k){
    for(var i=0;i<k;i++){
        arr.push(arr[i]);
    }
    for(var i=0;i<k;i++){
        arr.shift();
    }
        console.log(arr);
    }
        h(arr,k);
 

//IIFE:-

console.log(`IIFE:-`);
//A:-

console.log(`A:-`);

(function odd(arr){
    var result = [];
    for( var i=0;i<arr.length;i++){
        
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([1,2,3,4,5,6,7,8,9,10]);

//B:-
console.log(`B:-`);

  (function (str) {
    var s = str.toString();
     var res = s.toLowerCase().split(" ");
     for(var i=0;i<res.length;i++){
        res [i] = res[i].charAt(0).toUpperCase()+res[i].slice(1);
     }
     console.log(res.join(" "));
  })(["I'm a little tea pot"]);

//C:-
console.log(`C:-`);

    (function mynum(num){
        var sum = 0;
        for(var i=0;i<num.length;i++){
            sum +=num[i];
        }
        console.log(sum);
    })([1,2,3,4,5,6]);

//D:-
console.log(`D:-`);

        var prime1 = [];
        var prime2 = [];

        (function (num6) {

        for(var i=0;i<=num6;i++){
            prime2.push(true);
        }
        for(var i=2;i<=num6;i++){
            if(prime2[i]){
                prime1.push(i);
                for(var j=1;i*j<=num6;j++){
                    prime2[i*j] = false;
                }
            }
        }
        return prime1;
        
    })
    console.log(d(20));


// e:-
console.log(`E:-`);

(function palin(arr){
    var res = [];
    for(var i=0;i<arr.length;i++){
        var data = arr[i].split("").reverse().join("");
        if(data===arr[i]){
            res.push(arr[i]);
        }
    }
    console.log(res); 
})(["dad","mom","malayalam"]);

//f:-
console.log(`F:-`);

var arr4 = [1,3,5,7];
var arr5 = [2,4,6];

var f = (function (arr4,arr5){
    var res6 = [...arr4,...arr5];
        res6.sort((a,b)=>a-b);
    var n = res6.length;
    if(n%2===0){
        return (res6[n/2]+res6[n/2-1])/2;
    }
    else{
       return(res6[Math.floor(n/2)]);
    }

})
console.log(f(arr4,arr5));

//g:-
console.log(`G:-`);

(function(arr7,k){
    for(var i=0;i<k;i++){
        arr7.push(arr7[i]);
    }
    for(var i=0;i<k;i++){
        arr7.shift(arr7[i]);
    }
    console.log(arr7);
})([1,2,3,4,5,6],3);

//h:-
console.log(`H:-`);

    let arr9 = [1,2,3,4,5,6];
    let k1 = 3;
    (function(arr9,k){
    for(var i=0;i<k;i++){
        arr9.push(arr9[i]);
    }
    for(var i=0;i<k;i++){
        arr9.shift();
    }
        console.log(arr9);

    })(arr9,k1);


  
//Question 2:-

// Arrow:-
console.log(`Arrow:-`);
//A:-
console.log(`A:-`);

var a = (arr)=>{
    var result = [];
    for( var i=0;i<arr.length;i++){
        
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//B:-
console.log(`B:-`);

var  b = (str)=> {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    str.join(" ");
    console.log(str);
  }
  
  b("I'm a little tea pot");

//C:-
console.log(`C:-`);

  var c = (num)=>{
    var sum = 0;
    for(var i=0;i<num.length;i++){
        sum +=num[i];
    }
    console.log(sum);
}
 c([1,2,3,4,5,6]);

//D:-
console.log(`D:-`);

        var prime1 = [];
        var prime2 = [];

    var d = (num6)=> {

        for(var i=0;i<=num6;i++){
            prime2.push(true);
        }
        for(var i=2;i<=num6;i++){
            if(prime2[i]){
                prime1.push(i);
                for(var j=1;i*j<=num6;j++){
                    prime2[i*j] = false;
                }
            }
        }
        return prime1;
        
    }
    console.log(d(20));


// e:-
console.log(`E:-`);

var e = (arr)=>{
    var res = [];
    for(var i=0;i<arr.length;i++){
        var data = arr[i].split("").reverse().join("");
        if(data===arr[i]){
            res.push(arr[i]);
        }
    }
    console.log(res); 
}
    e(["dad","mom","malayalam"]);

    
