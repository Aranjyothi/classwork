const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {

    render() {
        

        let{ meat } = this.props
        return (
            <DefaultLayout title="Edit A Meat">
                <div>
                    <h1>Edit Route</h1>
                    <form action={`/meats/${meat._id}?_method=PUT`} method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="Name" defaultValue={meat.name} />

                        <label htmlFor="type">Type:</label>
                        <input type="text" id="type" name="Type" defaultValue={meat.Type} />

                        {/* <label htmlFor="readyToEat">Is Ready To Eat:</label>
                        <input type="checkbox" id="readyToEat" defaultChecked={meat.readyToEat} /> */}

                        <input type="submit"/>

                    </form>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;