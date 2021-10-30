import "./ItemListing.css";
import Title from "./Title";

function ItemListing(props) {
  return (
    <div className={`ItemListing ${props.display ? "" : "hidden"}`}>
      {props.items.map((bookname) => {
        if (props.source != null) {
          // Book Chapters
          return (
            <Title key={bookname} name={bookname} action={props.action} frombook={props.source} type="chapter"></Title>
          );
        } else {
          // Book Titles
          return <Title key={bookname} name={bookname} action={props.action} type="book"></Title>;
        }
      })}
    </div>
  );
}

export default ItemListing;
