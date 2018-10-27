import React from 'react';

class Form extends React.Component{
    render() {

        const { addTodo , descriptionInput , deadlineInput} = this.props; 

        return (
            <form onSubmit={addTodo}>
                <label>
                    Description :
                    <input ref={descriptionInput} type='text' name='description' placeholder='Type a description...' />
                </label>
                <label>
                    Deadline :
                    <input ref={deadlineInput} type='date' name='description' />
                </label>
                    <input type='submit' value='Submit'/>
            </form>

                )
            }
}

export default Form;
