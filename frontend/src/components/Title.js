import "./Title.css";

function Title(props) {
  function selectAction(e) {
    e.preventDefault();
    if (props.type === "chapter") {
      props.action(props.frombook, props.name);
    } else {
      props.action(props.name);
    }
  }

  return (
    <div className={`Title ${props.type}`} onClick={selectAction}>
      {props.name}
    </div>
  );
}

export default Title;
