const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

// class component
class Show extends React.Component {

    render() {
        
        const { name, Type, _id } = this.props.meat

        return (
            <DefaultLayout title={`${name} details`} foodGroup="meat">
                <h1>Show Page</h1>
                <p>
                    The {name} is {Type}.
                </p>
                {/* <p>
                    {readyToEat ? "It is ready to eat!" : "It is NOT readt to eat... :("}
                </p> */}
                <button>
                    <a href = {`/meats/${_id}/edit`}>Edit</a>
                </button>
                <form action={`/meats/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/meats">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;