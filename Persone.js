export class Persone{
  /**
   * Permet de renseigner les information d'un utilisateur
   * @param {string} nom
   * @param {number} age
   * @param {string} sexe
   */
  constructor(nom, age, sexe) {
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
    this.date = new Date().toLocaleString()
  }

  /**
   * Permet d'obtenir les information sur un utilisteur
   * @return {string}
   */
  get Utilisateur() {
    return this;
  }
  /**
   * @param {string} nom
   */
  set Nom_Utilisateur(nom) {
    if (typeof nom == "string") {
      this.nom = nom;
    } else {
      this.nom = "Le type pas defini";
    }
  }
  /**
   * @param {number} age
   */
  set Age_Utilisateur(age) {
    if (typeof age == "number") {
      this.age = age;
    } else {
      this.age = "Le type pas defini";
    }
  }
}

export class Etudiant extends Persone {
  /**
   * Permet d'enregitrer un Etudiant
   * @param {Objetct} Persone
   * @param {string} matricule
   * @param {string} niveau
   * @param {string} ville
   */
  constructor(Persone, matricule, niveau, ville) {
    super(Persone.nom, Persone.age, Persone.sexe);
    this.matricule = matricule;
    this.niveau = niveau;
    this.ville = ville;
  }
}
export class Enseignant extends Persone {
  /**
   * Permet d'enregitrer un Etudiant
   * @param {Objetct} Persone
   * @param {string} matricule
   * @param {string} diplome
   * @param {number} salaire
   */
  constructor(Persone, matricule, diplome, salaire) {
    super(Persone.nom, Persone.age, Persone.sexe);
    this.matricule = matricule;
    this.diplome = diplome;
    this.salaire = salaire;
  }
}

export class Sauvegarder {
    #List_Users
  constructor() {
    this.#List_Users = [];
  }
  /**
   * @param {object} user
   */
  set Sauve(user) {
    return this.#List_Users.push(user);
  }
  /**
   * Return la liste des utilisateur
   * @returns string[]
   */
  get List() {
    return this.#List_Users;
  }
}



