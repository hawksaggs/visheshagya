import React from 'react'
import { observer } from 'mobx-react'
import AddTodo from '../components/home/AddTodo'
import Todo from '../components/home/Todo'

@observer(['todos'])
class Home extends React.Component {

    // When route is loaded (isomorphic)
    static onEnter({ todos, common, params }) {
        common.title = 'Home'
        return todos.browse()
    }

    render() {
        const { todos } = this.props
        return <main>
            <h1>Notes</h1>
            <div className="home">
                <AddTodo/>
                <section className="main">
                    <ul className="todo-list">
                        {todos.items.map((item, index) => {
                            return <Todo key={index} item={item}/>
                        })}
                    </ul>
                </section>
            </div>
        </main>
    }
}

export default Home
