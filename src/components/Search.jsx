import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../actions/actionsWeather";
const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSabmit = (e) => {
    e.preventDefault();
    if (text.length < 3) {
      alert("please your location");
    } else {
      dispatch(getWeather(text));
    }
  };
  const handleChange = (e) => setText(e.target.value);
  return (
    <Form onSubmit={handleSabmit}>
      <input type="text" value={text} onChange={handleChange} />
    </Form>
  );
};
export default Search;
