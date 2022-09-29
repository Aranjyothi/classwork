const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {

    render() {
        

        let{ vegetable } = this.props
        return (
            <DefaultLayout title="Edit A Vegetables">
                <div>
                    <h1>Edit Route</h1>
                    <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="Name" defaultValue={vegetable.name} />

                        <label htmlFor="type">Color:</label>
                        <input type="text" id="type" name="Color" defaultValue={vegetable.color} />

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