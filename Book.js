class Book {
   
  /**
   *
   * @param {string} titre
   * @param {number} nombrePage
   */
  constructor(titre, nombrePage) {
    this.verifiePage = nombrePage;
    this.titre = titre;
    this.page = 1;
  }
 
  /**
   * @param {number} nombrePage
   */
  set verifiePage(nombrePage) {
    if (nombrePage <= 0) {
       console.log("Le nombre de page doit etre superieur a zéro");
       return ;
    } else {
     this.nombrePage = nombrePage;
    }
  }
  get nextPage() {
    this.page += 1;
  }
  get closePage() {
    this.page = 1;
  }
}

class Librairy {
    #trouve;
  constructor() {
    this.book = [];
  }
  get trouver(){
    return this.#trouve
  }
  /**
   * @param {object} book
   */
  set addBook(book) {
    this.book.push(book);
  }
  /**
   * @param {array} books
   */
  set addBooks(books) {
    for (const i of books) {
      this.book.push(i);
    }
    return this.book;
  }
  /**
   * 
   * @param {string} letter 
   * @returns Array
   */
  set findBookByLetter(letter){
    const lettre = this.book.filter(bk => bk.titre.toLowerCase().includes(letter.toLowerCase()))
  return this.#trouve = lettre
  }
}
