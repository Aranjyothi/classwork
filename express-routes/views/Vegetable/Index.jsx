const React = require('react')

class Index extends React.Component {

    render() {

        // Object Destructuring
        const {vegetable} = this.props

        
        return (
            <div>
                <h1>vegetables Index Page</h1>
                <ul>
                    {vegetable.map((veggie, i) => {
                        return (
                            <li key={i}>
                               The<a href={`/vegetable/${i}`}> {veggie.name} </a> is {veggie.type}
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href="/vegetable/new">Create new vegetables</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;