class Panier {
  #panier;
  constructor() {
    this.#panier = JSON.parse(localStorage.getItem("panier"));
    if (this.#panier == undefined) {
      this.#panier = [];
    } else {
      this.#panier;
    }
  }
  save = function () {
    localStorage.setItem("panier", JSON.stringify(this.#panier));
  };
  /**
   *  Nous avons ajouté object de l'element a supprimer
   * @param {Object} produit
   */
  add = function (produit) {
    const prdt = this.#panier.find((p) => p.id == produit.id);
    if (prdt) {
      prdt.qte++;
    } else {
      produit.qte = 1;
      this.#panier.push(produit);
    }
    this.save();
  };
  /**
   * Nous avons ici, l'identifiant de l'element a supprimer
   * @param {number} produitId
   */
  suppr = function (produitId) {
    this.#panier = this.#panier.filter((p) => p.id != produitId);
    this.save();
  };
  /**
   * Nous povons modifier l'element
   * @param {number} produitId
   * @param {string} qte
   */
  move = function (produitId, qte) {
    for (const i of this.#panier) {
      if (produitId == i.id) {
        if (qte <= 0) {
          this.suppr(produitId);
        } else {
          i.qte += qte;
        }
      }
    }
    this.save();
  };
  /**
   *
   * @returns number
   */
  totalPrice = function () {
    let total = 0;
    for (const i of this.#panier) {
      total += i.prix * i.qte;
    }
    return total;
  };
}

const panier = new Panier();
