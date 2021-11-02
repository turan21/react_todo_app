import React from 'react';
import CheckBoxTaskCard from './widgets/CheckboxTaskCard';
export default class ToDos extends React.Component {

    state = {
        value: '',
        todos: [],
    }

    render (){


        const { todos, value} = this.state;

        return (
            
            <div>
                
                    {
                        todos.map(todo => <CheckBoxTaskCard label={todo} tags={[]}></CheckBoxTaskCard>)
                    }
                
                {this.state.check?<form onSubmit={
                    (event) => {
                        event.preventDefault();
                        this.setState({ todos: [...todos, value], value: '', check: false});
                    }
                }>
                <input style={{margintop: "10px"}} value={value} type="text" onChange={({target: {value}}) => this.setState({value})} />
                {/* <button onClick={() => this.setState({todos: [...todos, value], value: ''})}>Submit</button> */}
                
                </form>:<button className="add-item" onClick={(val) => this.setState(prevState => ({check: !prevState.check}))}>+ Add item</button>}
                
               
                
                
            </div>
        );
    }
}