/**engine of the program */
function makeitwork(){

var name = prompt("Qual o seu nome?");
var age = prompt("qual a sua idade?");
var address = prompt("Qual o seu Endereço?");
var marital = prompt("Qual o seu estado civil?");
var experience_company = prompt("Qual o nome da sua última empresa?");
var experience_office = prompt("Qual era o seu cargo?");
var education_institution = prompt("A onde você estudou?");
var education_degree = prompt("Qual a formação?");

    document.getElementById('full_name1').innerHTML = name;
    document.getElementById('age').innerHTML = age+("Anos de idade.");
    document.getElementById('address').innerHTML = address;
    document.getElementById('marital').innerHTML = marital;
    document.getElementById('company').innerHTML = experience_company;
    document.getElementById('office').innerHTML = experience_office;
    document.getElementById('school_name').innerHTML = education_institution;
    document.getElementById('degree').innerHTML = education_degree;

}

/**button to start */
    function showcontent() {
        var x = document.getElementById("entirecv");
        var z = document.getElementById("hide");
        if (x.style.display === "block") {
          x.style.display = "none";

         
        } else {
          x.style.display = "block";
          z.style.display = "none";
          makeitwork();
        }
      }