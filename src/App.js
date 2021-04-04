import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            task:'',
            date:'',
            reminder: false,
            list:[]
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    setReminder(input) {
        if (input.checked) {
            this.setState({reminder: true})
        }
    }

    addItem() {
        const newItem={
            id: 1 + Math.random(),
            taskValue: this.state.task.slice(),
            dateValue: this.state.date.slice(),
            reminder: this.state.reminder
        }

        const list = [...this.state.list]
        list.push(newItem);
        this.setState({
            list,
            task:'',
            date:'',
            reminder: false
        })
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({list: updatedList})
    }

    render() {
        return (
            <div className='App'>

                <h1 className="app-title">Task Manager</h1>

                <div className="inputs">
                    <div className="input">
                        <label>
                            <h3>Task</h3>
                            <input type="text"
                                   placeholder="Add Task"
                                   value={this.state.task}
                                   onChange={e => this.updateInput('task', e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="input">
                        <label>
                            <h3>Day & Time</h3>
                            <input type="text"
                                   placeholder="Add Day & Time"
                                   value={this.state.date}
                                   onChange={e => this.updateInput('date', e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="reminder">
                        <label>Set a reminder
                            <input id="reminder" type="checkbox" onClick={e => this.setReminder(e.target)}/>
                        </label>
                    </div>

                    <div>
                        <button onClick={() => this.addItem()}>Save Task</button>
                    </div>
                </div>

                <div className="container">
                    <div
                        style={{
                            padding: 30,
                            textAlign: "left",
                            maxWidth: 500,
                            margin: "auto"
                        }}
                    >
                <br/>
                <br/>
                <ul>
                    {this.state.list.map(item => {
                        return (
                            <li
                                key={item.id}
                                className={item.reminder ? 'vertical-line' : null}
                                onDoubleClick={(e) => {e.target.classList.toggle('vertical-line')}}>
                                <div>
                                    <div className="task-value">{item.taskValue}</div>
                                    <div className="date-value">{item.dateValue}</div>
                                </div>
                                <button onClick={() => this.deleteItem(item.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
                </div>
            </div>
        )
    }

}

export default App;