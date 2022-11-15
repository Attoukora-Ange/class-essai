class Rectangle {
  /**
   * Parametre du constructeur Rectangle
   * @param {number} longueur
   * @param {number} largeur
   */
  constructor(longueur, largeur) {
    this.longueur = longueur;
    this.largeur = largeur;
  }
  /**
   *
   * @returns number
   */
  get perimetre() {
    // console.log(2 * this.longueur + 2 * this.largeur)
    return 2 * (this.longueur + this.largeur);
  }
  /**
   *
   * @returns boolean
   */
  get isValide() {
    if (this.longueur <= 0 || this.largeur <= 0) {
      // console.log(false)
      return false;
    } else {
      // console.log(true)
      return true;
    }
  }
}

class Square extends Rectangle {
  /**
   *
   * @param {number} cote
   */
  constructor(cote) {
    super(cote, cote);
  }
  /**
   *
   * @param {object} r
   */
  isBiggerThan = function (r) {
    if (this.perimetre > r.perimetre) {
      console.log(this.perimetre + " est plus grand que " + r.perimetre);
    } else {
      console.log(this.perimetre + " est plus petit que " + r.perimetre);
    }
  };
}

// const r = new Rectangle(-12, 2);
// const c = new Square(60);
