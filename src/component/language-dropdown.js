const Languageoption = (props) => {
  console.log("props", props);
  return (
    <div style={{ marginTop: "50px" }}>
      <select onChange={props.onChange}>
        <option>Select Language</option>
        <option value={"en"}>English</option>
        <option value={"ko"}>Korean</option>
        <option value={"chi"}>Chinese</option>
        <option value={"hi"}>Hindi</option>
        <option value={"guj"}>Gujarat</option>
      </select>
    </div>
  );
};
export default Languageoption;
