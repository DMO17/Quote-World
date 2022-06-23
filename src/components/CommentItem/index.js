import classes from "./style.module.css";

export const CommentItem = (props) => {
  return (
    <li className={classes.item}>
      <p>{props.text}</p>
    </li>
  );
};
