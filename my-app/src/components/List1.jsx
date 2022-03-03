import React from "react";
function Person(props) {
  return (
    <h2>
      i am {props.person.name}. i am {props.person.age} years old.
    </h2>
  );
}

function List1() {
  const persons = [
    {
      id: 1,
      name: "A",
      age: 11,
    },
    {
      id: 2,
      name: "B",
      age: 22,
    },
    {
      id: 3,
      name: "C",
      age: 33,
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default List1;
