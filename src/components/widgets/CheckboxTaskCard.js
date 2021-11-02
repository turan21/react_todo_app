import React from 'react';

export default class CheckBoxTaskCard extends React.Component {
    
    state = {
        value: this.props.label,
        tags: this.props.tags,
        
    }
    render(){

        const { tags, value } = this.state;

        return (<div className="checkbox-task">
            
            <label for={value}><input style={{marginRight: 10}} type="checkbox" id={value} name="task" value="task1"></input>
                {value}
                </label>
                {tags.map(tag => <div className="checkbox-tags"><small key={tag}>{tag}</small></div>)}
                
            
        
        {
            // tags.map(tag => <h6 key={tag}>{tag}</h6>)
        }
                    
                    
                
        </div>);
    }
}