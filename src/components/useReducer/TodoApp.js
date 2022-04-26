import React, { useEffect, useReducer} from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import {useForm} from '../03-useForm/useForm'



const init=()=>{
return JSON.parse(localStorage.getItem('todo')) || []
}

export const TodoApp = () => {
 

  const [todo, dispatch] = useReducer(todoReducer, [], init);



 const [{description}, handleInput, reset] =useForm({
      description:'',
  })

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])


const handleDelete=(todoId)=>{

console.log(todoId)

const action={
  type: 'delete',
  payload: todoId
}

dispatch(action)

}




  const handleSubmit = (e) => {
    e.preventDefault();

    if(description.trim().length>2){
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };
  
      const action = {
        type: "add",
        payload: newTodo,
      };
  
      dispatch(action);
      reset()

      return true
    }


   
  };



  console.log(description)

  return (
    <div>
      <h1>ToDo App ({todo.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todo.map((item, i) => {
              return (
                <li key={item.id} className="list-group-item">
                  <p className="text-center">
                    {i + 1}: {item.desc}
                  </p>
                 
                  <button onClick={()=> handleDelete(item.id)} className="btn btn-danger">Borrar</button>
                  
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Agregar Tarea"
              autoComplete="off"
              value={description}
              onChange={handleInput}
            />

            <button type="submit" className="btn btn-success mt-1 ">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
