import React, { Component } from "react";
import "./TodoApp.css";

export class TodoApp extends Component {
  state = {
    input: "",
    items:[]      //array created to store values from input
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) =>{
      event.preventDefault()
      const {input} = this.state;
      const allItems = this.state.items;

      allItems.push(input);     //input values get stored in the array

      this.setState({           //varibales changes or for updation in state
            items: allItems,
            input: ""
            

      })

  }

  deleteItem = (key) =>{
      const allItems = this.state.items
      allItems.splice(key, 1);

      this.setState({
          items: allItems
      });

  };

  render() {
    const { input,items } = this.state; //for destructuring
    console.log(items);

    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            value={input}
            type="text"
            onChange={this.handleChange}
            placeholder="enter items"
          />
        </form>

        <ul>
                    
            {items.map((data,index) => (
                <li key={index}>{data} <i className="fas fa-trash-alt" onClick={() => this.deleteItem(index)}></i></li>
            ))}
          {/* <li>Items <i className="fas fa-trash-alt"></i></li>
                    <li>Items <i className="fas fa-trash-alt"></i></li> */}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
