const cardDataArray = [
  { title: "this is a title", description: "this is a description" },
  { title: "this is a title 1", description: "this is a description 1" },
  { title: "this is a title 2", description: "this is a description 2" },
  { title: "this is a title 3", description: "this is a description 3" },
  { title: "this is a title 4", description: "this is a description 4" },
  { title: "this is a title 5", description: "this is a description 5" },
  { title: "this is a title 6", description: "this is a description 6" },
];

function card(props) {
  return `${props.title} ${props.description}`;
}

const finalArray = cardDataArray.map(function (item) {
  return `${item.title} ${item.description}`;
});

console.log(finalArray)

// console.log(finalArray);
