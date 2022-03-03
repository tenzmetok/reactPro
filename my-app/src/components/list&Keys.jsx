//rendering multiple components

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => <li>{number}</li>);
// export default listItems;

//basic list component

function NumList(props) {
  const num = props.num;
  const listNum = num.map((no) => <li key={no.toString()}>{no}</li>);

  return <ul>{listNum}</ul>;
}
export default NumList;
