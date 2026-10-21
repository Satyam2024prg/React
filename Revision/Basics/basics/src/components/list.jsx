function List(props) {
  // console.log(props)

  const listItem = props.items

  const itemList = listItem.map((item) => {
    return <li key={item.id}>
      {item.name}
    </li>
  })

  return <>
    <h1>{props.category}</h1>
    <ol>
      {itemList}
    </ol>
  </>
}
export default List;