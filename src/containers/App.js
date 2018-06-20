import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
//PROPS NEVER Change
//React has an idea called STATE
//STATE - the description of the application.
//STATE >> props 

//This are containers. They contain things and past on state to components.
class App extends Component {
    constructor() {
        super();//Calls the construtor of component
        //Smart components are components with state
        this.state = {//State are things that can change. They live in parents.
            robots: [], 
            searchfield: ''
        }
    }

    //This is a life cycle hook.
    //This is called last in mounting
    //1. constructor, static getDerivedStateFromProps(), render(), componentDidMount()
    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')//fectch the value from this website
            .then(response=>{//The website returns a response.
           return response.json();//Change that response to json file
       }).then(users => {//?
        this.setState({robots:users});//This change the state of the property robots   
       });
     
    }
    //This make sure that this is associated with the local app.
    onSearchChange = (event) =>{//The value of this does not equal to App. It equals to the input. Because the event happens. In the 
        this.setState({searchfield: event.target.value});//You always have use setState to change the value of a state
    }

    //Every time the state changes the render function gets updated.
    render() {
        const {robots, searchfield} = this.state;//Destruturing.
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
        })

        //If its taking to long to receive the data.
        if(robots.length === 0){
            return <h1 className="tc">Loading</h1>;
        }else{
            return (//Can only return one parent
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
       
    }
}

export default App;