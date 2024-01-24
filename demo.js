"use strict"

let input = document.querySelector("#text");
let btn = document.querySelectorAll(".btn");

let arr = [];
let str = '';

for(let i = 0; i < btn.length; i++)
{
  btn[i].addEventListener("click", function(){
    btnClick(this);
  })
}
function btnClick(v)
{
  str+=v.innerText;
  
    if(parseInt(v.innerText) == v.innerText)

    {
      input.value += v.innerText;

      if(str.length < 2)
      {
        arr.push(v.innerText)
      }
      else
      {
        arr[arr.length-1] += v.innerText;
      }
  
    }
    else
    {
      if(str.length > 1)
      {
        // console.log(str);
        arr.push(v.innerText);
        input.value += v.innerText;
      }
      else
      {
        input.value = input.value.slice(0,-1);
        input.value += v.innerText;
        arr.pop();
        arr.push(v.innerText)
      }
      str=''
      
    }
   console.log(arr);
}


let del = document.getElementById("delete")
del.addEventListener("click", deleteFunction)
function deleteFunction()
{
  let str1 = arr.pop().toString();
  // console.log(str1);
  console.log(str1.length);

  input.value = input.value.slice(0, -1);
  if(str1.length >= 2)
  {
    str1 = str1.slice(0, -1);
    arr.push(str1);
    console.log(arr);
  }
  else
  {
    arr.push();
    str='';
    console.log(arr);
  }
  
}

let All_clear=document.getElementById("clear")
All_clear.addEventListener("click",Clear_Fun)

function Clear_Fun()
{
  input.value ="";
  arr = [];
  str='';
  console.log(arr)
}

let equal = document.getElementById("equalto");
equal.addEventListener("click" ,equalFunction);

function equalFunction()
{
  let result = 0;
  for(let i = 0; i < arr.length; i++)
  {
  
   if((arr[i] == "/") || (arr[i] == "*") || (arr[i] == "%"))
    {
      if(arr[i] == "%")
      {
        result = arr[i-1] % arr[i+1];
        arr.splice(i-1, 3, result)
        console.log(arr)
      }
      else if(arr[i] == "/")
      {
        result = arr[i-1] / arr[i+1];
        arr.splice(i-1, 3, result)
        console.log(arr)
      }
      else if(arr[i] == "*")
      {
        result = arr[i-1] * arr[i+1];
        arr.splice(i-1, 3, result);
        console.log(arr)
      }

    }  
  }
  for(let j = 0; j < arr.length; j++)
  {
    if(arr[j] == "+" || arr[j] == "-")
    if(arr[j] == "-")
    {
      result = arr[j-1] - arr[j+1];
      arr.splice(j-1, 3, result);
      
      console.log(arr)
    }
    if(arr[j] == "+")
    {
      result = parseInt((arr[j-1]) )+ parseInt(arr[j+1]);
      arr.splice(j-1, 3, result);
      console.log(arr)
    }
  }
  input.value = result;
  
}








































































//--------------------------------------------
// function equal() 
// {
//   let expression = input.value;
//   let result = parseExpression(expression);
//   input.value = result;  
// }

// function parseExpression(expression) 
// {
//   let numbers = [];
//   let operators = [];

//   let currentNumber = "";

//   for (let char of expression) 
//   {
//     if ("+-*/%".includes(char)) 
//     {
//         numbers.push(parseFloat(currentNumber));
//         currentNumber = "";
//         operators.push(char);
//     } 
//     else 
//     {
//         currentNumber += char;
//     }
//   }

//   numbers.push(parseFloat(currentNumber));

//   while(operators.length > 0) 
//   {
//     let operator = operators.shift();
//     let number1 = numbers.shift();
//     let number2 = numbers.shift();

//     switch (operator) 
//     {
//         case "+":
//             numbers.unshift(number1 + number2);
//             break;
//         case "-":
//             numbers.unshift(number1 - number2);
//             break;
//         case "*":
//             numbers.unshift(number1 * number2);
//             break;
//         case "/":
//             numbers.unshift(number1 / number2);
//             break;
//         case "%":
//             numbers.unshift(number1 % number2);
//             break;
//     }
//   }

//   return numbers[0];
// }