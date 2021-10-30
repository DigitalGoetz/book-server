import { saveAs } from "file-saver";

const { REACT_APP_BOOK_ENDPOINT } = process.env;

const getBooks = function (setBooklist) {
  const options = {
    method: "GET",
  };

  fetch(REACT_APP_BOOK_ENDPOINT + "/books", options)
    .then((response) => response.json())
    .then((response) => {
      setBooklist(response.books);
    });
};

const getChapters = function (setChaptersList, bookname) {
  const options = {
    method: "GET",
  };

  fetch(REACT_APP_BOOK_ENDPOINT + "/book?name=" + encodeURIComponent(bookname), options)
    .then((response) => response.json())
    .then((response) => {
      setChaptersList(response.chapters);
    });
};

const downloadChapter = function (bookname, chaptername) {
  const options = {
    method: "GET",
    headers: {
      "Content-Disposition": 'attachment; filename="' + chaptername + '"',
    },
  };

  fetch(
    REACT_APP_BOOK_ENDPOINT +
      "/chapter?book_name=" +
      encodeURIComponent(bookname) +
      "&chapter=" +
      encodeURIComponent(chaptername),
    options
  )
    .then((res) => res.blob())
    .then((blob) => {
      saveAs(blob, chaptername);
    });
};

const Methods = {
  getBooks,
  getChapters,
  downloadChapter,
};
export default Methods;
