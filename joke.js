const main = document.querySelector('main');
var joke1= "what do you call a cow with no legs, ground beef.";
var joke2= "what do you call an aligator thats a detective, an investigator.";
var joke3= "why don't you play poker in the zoo, too many cheetahs."

const template = `
<section>
<h1>My Jokes</h1>
<h2>${joke1}</h2>
<h3>${joke2}</h3>
<h4>${joke3}</h4>
</section>
`;
main.innerHTML = template; 
let p = document.createElement('p1')
p.textContent = "That's all folks"
document.body.appendChild(p);


