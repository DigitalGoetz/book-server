import { useState, useEffect } from "react";
import Title from "./Title";
import Methods from "../services/BookService";
import ItemListing from "./ItemListing";
import "./Content.css";

function Content(props) {
  const [chaptersList, setChaptersList] = useState([]);

  useEffect(() => {
    if (props.selectedBook !== "Book Server") {
      Methods.getChapters(setChaptersList, props.selectedBook);
    }
  }, [setChaptersList, props.selectedBook]);

  return (
    <div className={`Content ${props.display ? "" : "hidden"}`}>
      <span className="BookHeader">
        <Title
          name={props.selectedBook}
          action={() => {
            props.reset();
          }}
          type="header"
        ></Title>
      </span>
      <ItemListing
        items={chaptersList}
        action={Methods.downloadChapter}
        source={props.selectedBook}
        display={true}
      ></ItemListing>
    </div>
  );
}

export default Content;
