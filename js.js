import { Persone, Etudiant, Sauvegarder, Enseignant } from "./Persone.js";

const Persone1 = new Persone("Eric", 29, "Masculin");
const Persone2 = new Persone("Ange", 29, "Masculin");
const Persone3 = new Persone("Sarah", 26, "Feminin");
const Etudiant1 = new Etudiant(Persone1, "832423L", "Licence", "Bouaké");
const Etudiant2 = new Etudiant(Persone3, "832423F", "Licence", "Bouaké");
const Enseignant1 = new Enseignant(Persone2, "452231L", "Doctorat", 800000);

const Save = new Sauvegarder();

Save.Sauve = Enseignant1;
Save.Sauve = Etudiant1;
Save.Sauve = Etudiant2;
console.log(Save.List);
const a = new FileReader();
console.log(a.readAsDataURL(Etudiant1));

const ul = document.createElement("ul");
const liste = document.querySelector(".liste");

Save.List.map((user) => {
  if (user.diplome) {
    ul.innerHTML += `
        <li>
            ${user.date}
            ${user.nom}
            ${user.age} ans
            ${user.sexe}
            ${user?.diplome}
            ${user.salaire} F cfa
        </li>
        `;
  } else {
    ul.innerHTML += `
        <li>
            ${user.date}
            ${user.nom}
            ${user.age}
            ${user.sexe} ans
            ${user?.niveau}
        </li>
        `;
  }
  liste.appendChild(ul);
});
