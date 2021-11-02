import React from 'react';
import CheckBoxTaskCard from './widgets/CheckboxTaskCard';
export default class ToDos extends React.Component {

    state = {
        value: '',
        todos: []
    }

    render (){


        const { todos, value } = this.state;

        return (
            <div>
                
                    {
                        todos.map(todo => <CheckBoxTaskCard label={todo} tags={[]}></CheckBoxTaskCard>)
                    }
                    
                
                <form onSubmit={
                    (event) => {
                        event.preventDefault();
                        this.setState({ todos: [...todos, value], value: '' });
                    }
                }>
                <input value={value} type="text" onChange={({target: {value}}) => this.setState({value})} />
                {/* <button onClick={() => this.setState({todos: [...todos, value], value: ''})}>Submit</button> */}
                
                </form>
                
            </div>
        );
    }
}