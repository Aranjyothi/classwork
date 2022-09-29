const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { name, Type, _id } = this.props.vegetable

        return (
            <DefaultLayout title={`${name} details`} foodGroup="vegetable">
                <h1>Show Page</h1>
                <p>
                    The {name} is {Type}.
                </p>
                {/* <p>
                    {readyToEat ? "It is ready to eat!" : "It is NOT readt to eat... :("}
                </p> */}
                <button>
                    <a href = {`/vegetables/${_id}/edit`}>Edit</a>
                </button>
                <form action={`/vegetables/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/vegetables">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;