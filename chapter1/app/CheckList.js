import React, { Component } from 'react';

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map((task) => (
      <li key={task.id} className='checklist_task'>
        <input type='checkbox' defaultChecked={task.done} />
        {task.name}
        <a href='#' className='checklist_task_remove' />
      </li>
    ));
 
  return (
   <div className='checklist'>
     <ul>{tasks}</ul>
   </div>
   );
  }
}

export default CheckList;

