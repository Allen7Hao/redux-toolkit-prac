const books = [
  { id: 1, title: "book 1", description: "description for book1" },
  { id: 2, title: "book 2", description: "description for book2" },
  { id: 3, title: "book 3", description: "description for book3" },
];

const DELAY = 1000;
const fakeAPI = {
  fetchBooks: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(books);
      }, DELAY);
    });
  },
  addBook: () => {
    return "books";
  },
};

export default fakeAPI;
