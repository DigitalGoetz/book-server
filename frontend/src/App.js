import "./App.css";
import { useState, useEffect } from "react";
import Methods from "./services/BookService";
import ItemListing from "./components/ItemListing";
import Content from "./components/Content";
import PageHeader from "./components/PageHeader";

function App() {
  const [bookList, setBooklist] = useState([]);
  const [currentBook, setCurrentBook] = useState("Book Server");
  const [displayBooks, setDisplayBooks] = useState(true);

  const update = function () {
    Methods.getBooks(setBooklist);
  };

  useEffect(() => {
    document.title = currentBook;
  }, [currentBook]);

  useEffect(() => {
    console.log("display books: " + displayBooks);
  });

  useEffect(() => {
    console.log("init");
    update();
  }, []);

  const show = () => {
    console.log("reset");
    setDisplayBooks(true);
    setCurrentBook("Book Server");
  };

  const hide = (name) => {
    console.log("chaps");
    setDisplayBooks(false);
    setCurrentBook(name);
  };

  return (
    <div className="App">
      <PageHeader></PageHeader>
      <div className="titlecontainer">
        <ItemListing items={bookList} action={hide} display={displayBooks}></ItemListing>
        <Content selectedBook={currentBook} reset={show} display={!displayBooks}></Content>
      </div>
    </div>
  );
}

export default App;
