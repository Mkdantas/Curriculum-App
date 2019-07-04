/**engine of the program */
function makeitwork(){

var name = prompt("Qual o seu nome?");
var age = prompt("qual a sua idade?(apenas números)");
var address = prompt("Qual o seu Endereço?");
var marital = prompt("Qual o seu estado civil?");
var skill = prompt("Descreva as Suas habilidades");
var experience_company1 = prompt("Qual o nome da sua última empresa?");
var experience_office1 = prompt("Qual era o seu cargo?");
var experience_company2 = prompt("Descreva mais uma empresa na qual trabalhou");
var experience_office2 = prompt("Qual era o seu cargo?");
var education_institution1 = prompt("A onde você estuda/estudou?");
var education_degree1 = prompt("Qual a formação?");
var education_institution2 = prompt("Descreva mais uma escola onde você estuda/estudou");
var education_degree2 = prompt("Qual a formação?");
var Presentation = prompt("Porquê devemos te contratar?");

    document.getElementById('full_name1').innerHTML = name;
    document.getElementById('age').innerHTML = age+(" Anos de idade.");
    document.getElementById('address').innerHTML = address;
    document.getElementById('marital').innerHTML = marital;
    document.getElementById('company_name1').innerHTML = experience_company1;
    document.getElementById('company_name2').innerHTML = experience_company2;
    document.getElementById('office1').innerHTML = experience_office1;
    document.getElementById('office2').innerHTML = experience_office2;
    document.getElementById('school_name1').innerHTML = education_institution1;
    document.getElementById('school_name2').innerHTML = education_institution2;
    document.getElementById('degree1').innerHTML = education_degree1;
    document.getElementById('degree2').innerHTML = education_degree2;
    document.getElementById('presentation_letter').innerHTML = Presentation;
    document.getElementById('skills').innerHTML = skill;

}

/**button to start */
    function showcontent() {
        var x = document.getElementById("entirecv");
        var z = document.getElementById("hide");
        if (x.style.display === "block") {
          x.style.display = "none";

         
        } else {
          x.style.display = "block";
          z.style.display ="none";
          makeitwork();
        }
      }