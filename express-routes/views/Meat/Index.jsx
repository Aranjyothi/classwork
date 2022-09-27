const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {

    render() {

        // Object Destructuring
        const { meats } = this.props

        
        return (
            <DefaultLayout title="All meat" foodGroup="meat">
            <div>
                <h1>Meat Index Page</h1>
                <ul id="meat-index">
                    {meats.map((meat, i) => {
                        return (
                            <li key={i}>
                               The<a href={`/meats/${i}`}> {meat.name} </a> is {meat.type}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/meats/new">Create new meat</a>
                </nav>
            </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;