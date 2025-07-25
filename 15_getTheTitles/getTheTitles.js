const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (books) {
  const bookList = books.map((book) => book.title);
  return bookList;
};

// Do not edit below this line
module.exports = getTheTitles;
