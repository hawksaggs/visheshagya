import React from 'react'
import { observer } from 'mobx-react'


@observer
class About extends React.Component {

    // When route is loaded (isomorphic)
    static onEnter({ common }) {
        common.title = 'About'
    }

    render() {
        return <main>
            <h1></h1>
            <section className="account">
                <p>
                  the  hindu
                </p>
                <p>

                </p>
                <p>

                </p>
            </section>
        </main>
    }
}

export default About
