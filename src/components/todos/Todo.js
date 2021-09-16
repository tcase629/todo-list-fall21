const Todo = ({ id, title, complete }) => {
  return (
    <>
      <h1 style={ complete ? {...styles.complete} : {} }>
        {title}
      </h1>
    </>
  )
}

const styles = {
  complete: {
    color: "grey",
    textDecoration: 'line-through',
  }
}

export default Todo;