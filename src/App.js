import React  from "react";
import Header from "./components/header";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfTodos: [],
      selectedFilter : 'all'
    };
  }

  getInitialState() {
    return {
      listOfTodos: [],
      selectedFilter : 'all'
    };
  }

  addToDo(todo) {
    const newTodo = {
      name: todo,
      completed: false,
      selected: false
    };

    this.setState({
      listOfTodos: [...this.state.listOfTodos, newTodo]
    });
  }
  
  onCheckBoxChange(index){
    let dummyTodos = [...this.state.listOfTodos];
    dummyTodos[index].completed = !dummyTodos[index].completed;

    this.setState({
      listOfTodos : dummyTodos
    });
  }
  
  filterSelected(filterName){
    this.setState({
      selectedFilter : filterName
    });
  }

  clearCompleted(){
    const tempList = [...this.state.listOfTodos];
    const filteredList = tempList.filter((option) =>{
      return !option.completed;
    });
    this.setState({
      listOfTodos : filteredList,
      selectedFilter : 'all'
    });
  }
  
  removeToDo(index){
    let dummyTodos = [...this.state.listOfTodos];
    dummyTodos.splice(index,1);

    this.setState({
      listOfTodos : dummyTodos
    });
  }

  render() {
    
    const selectedFilter = this.state.selectedFilter;
    const list = this.state.listOfTodos.reduce((filtered,option,index) =>{

      if(selectedFilter === 'all' || (selectedFilter === 'active' && option.completed === false)  || (selectedFilter === 'completed' && option.completed)){
        filtered.push((
          <li key={index} className={`list-group-item ${option.completed ? 'disabled' : ''}`}>
            <input type = "checkbox" checked={option.completed} onChange={() => this.onCheckBoxChange(index)}/>
            {option.name}
            <button type="button" onClick={()=>this.removeToDo(index)} class="btn btn-danger btn-sm">Delete</button>
          </li>
        ));
      }

      return filtered;
    },[]);

    return (
      <div className="container">
        <h2>Todos</h2>
        <div className="panel panel-default">
          <div className="panel-heading">
            <Header addToDo={this.addToDo.bind(this)} />
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {list}
            </ul>
          </div>
        </div>
        <div>
            <button type="button" className={`btn btn-default ${this.state.selectedFilter === 'all' ? 'active': ''}`} onClick={()=> this.filterSelected('all')}>All</button>
            <button type="button" className={`btn btn-default ${this.state.selectedFilter === 'active' ? 'active': ''}`} onClick={()=> this.filterSelected('active')}>Active</button>
            <button type="button" className={`btn btn-default ${this.state.selectedFilter === 'completed' ? 'active': ''}`} onClick={()=> this.filterSelected('completed')}>Completed</button>
            <button type="button"  className="btn btn-link" onClick={this.clearCompleted.bind(this)}>Clear Completed</button>
        </div>
      </div>
    );
  }
}
