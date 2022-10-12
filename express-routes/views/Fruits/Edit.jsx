const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout');

class Edit extends React.Component {

    render() {
        

        let{ fruit } = this.props
        return (
            <DefaultLayout title="Edit A Fruit">
           
                    <h1>Edit Route</h1>
                    <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name"  defaultValue={fruit.name} />

                        <label htmlFor="color">Color:</label>
                        <input type="text" id="color" defaultValue={fruit.color} />

                        <label htmlFor="readyToEat">Is Ready To Eat:</label>
                        <input type="checkbox" id="readyToEat" defaultChecked={fruit.readyToEat} />

                        <input type="submit"/>

                    </form>
              
            </DefaultLayout>
        )
    }
}
module.exports = Edit;