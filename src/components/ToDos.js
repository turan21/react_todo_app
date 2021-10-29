import React from 'react';

export default class ToDos extends React.Component {

    state = {
        value: '',
        todos: []
    }

    render (){


        const { todos, value } = this.state;

        return (
            <div>
                <input value={value} type="text" onChange={({target: {value}}) => this.setState({value})} />
                <button onClick={() => this.setState({todos: [...todos, value], value: ''})}>Submit</button>
                <ul>
                    {
                        todos.map(todo => <li key={todo}>{todo}</li>)
                    }
                </ul>
            </div>
        );
    }
}