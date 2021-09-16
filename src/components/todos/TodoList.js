import Todo from './Todo';

const TodoList = ({ todos }) => {
  return(
    <>
      {
        todos.map( todo => 
          // <p>
          //   {todo.title}
          // </p>
          // <Todo id={todo.id} title={todo.title} complete={todo.complete} />
          <Todo {...todo} />
        )
      }
    </>
  )
}
// const TodoList = ({ todos }) => (

// )
export default TodoList;