import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';


class App extends React.Component{
constructor(){
  super()
  this.state= {
    robots: [],
    searchField: ' '
  }
}

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
     .then(response => response.json())
     .then(users => this.setState({robots: users}))
      }

onSearch = (event)=>{
   this.setState({searchField: event.target.value});
}


render(){
 const filterRobots=this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
 if(this.state.robots.length===0){
  return <h1>Loading please wait</h1>
 }
 else{
  return(
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox SearchChange={this.onSearch}/>
      <Scroll>
      <CardList robots={filterRobots}/>
      </Scroll>
    </div>
    );
 }
  
}
}

export default App;
