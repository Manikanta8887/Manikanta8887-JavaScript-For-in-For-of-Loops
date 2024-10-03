var obj={
    batch: 19,
    name:"manikanta",
    tech:"Good",
    commu:"Good",
    mocks:"done"
}
// console.log(name);
for(newvar in obj){
    console.log(newvar);
}

for(newvar in obj){
    console.log(obj[newvar]);
}

for(newvar in obj){
    console.log(newvar+":"+obj[newvar]);
}

var sun=[1,2,3,4,5,keerthi={
    study:"MS",
    Year:"2022",
    town:"Vijayawada"
},[1,2,3]];
console.log(keerthi);
for(moon of sun){
    if(typeof moon==="object" && "study" in moon){ 
        console.log(moon.study);
    } 
}

// 1st Question reverse of an array using For in Loop 

var arr=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
var arrr=[];

    for(newarr=arr.length-1;newarr>=0;newarr--){
        arrr.push(arr[newarr]);
    }
    console.log(arrr);

//  2nd Question Reverse of a String

var str="vamsi";
var strr="";

for(newstr=str.length-1;newstr>=0;newstr--){
    strr+=(str[newstr]);
}
console.log(strr);

//  2nd Question Reverse of a String 

var str1="Manikanta";
var str2="";

for(newstr1=str1.length-1;newstr1>=0;newstr1--){
    str2+=(str1[newstr1]);
}
console.log(str2);

// 3rd Question 

var arr1=[1,2,3,4,5,{id:1,age:25},[1,2,3]];

for(newarr1 of arr1){
    if(typeof newarr1==="object" && "age" in newarr1){
        console.log(newarr1.age);
    }
}
