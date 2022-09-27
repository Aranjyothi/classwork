const React = require('react')

// extends meaning inheritance
//class component
class Show extends React.Component {
    render() {

        const { name, type } = this.props.vegetable
        return (
            <div>
                <h1>Show page</h1>
                <p>
                    The{name} is {type}.
                </p>
                <nav>
                    <a href="/vegetable">Back</a>
                </nav>
            </div>
        );
    }
}
module.exports = Show;