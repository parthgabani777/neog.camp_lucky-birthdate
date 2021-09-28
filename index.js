const birthdate = document.querySelector('#birthdate');
const luckyNumber = document.querySelector('#luckyNumber');
const check = document.querySelector('#check');
const output = document.querySelector('#output');
const error = document.querySelector('.error');

check.addEventListener('click',function(){
      let dob = birthdate.value;
      let number = luckyNumber.value;

      if(dob && number){
            let sum = calculateSum(dob);
            isLucky(sum,number);
      }
      else{
            error.innerText = "Enter Date and Lucky number";
      }
})

function calculateSum(dob){
      let sum = 0;
      let dobnum = dob.replaceAll("-","");
      
      for(let value of dobnum){
            sum += Number(value);
      }

      return sum;
}

function isLucky(dateSum,number){
      if(dateSum%number==0){
            output.innerText = number+" is Lucky";
      }
      else{
            output.innerText = number+" is Not Lucky";
      }
}