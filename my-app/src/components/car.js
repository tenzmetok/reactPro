function Football() {
  //   const shoot = () => {
  //     alert("Great Shot!");
  //   };

  //   return <button onClick={shoot}>Take the shot!</button>;

  return (
    <div>
      <h2>File Upload </h2>
      <form action="/image" method="POST" enctype="multipart/form-data">
        <input type="file" name="img" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default Football;
