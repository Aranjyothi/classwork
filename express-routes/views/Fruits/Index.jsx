const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class Index extends React.Component {


        // Object Destructuring
        // const { fruits } = this.props

        // const fruits = this.props.fruits

        // map method
        /*
            - loops over data
            - manipulates data at each index
            - returns new array with new data
        */

        /*
            [
                { name: 'Pear' ... },
                { name: 'Banana' ... },
                { name: 'Apple' ...}
            ]
        */ 
            // After we map over it

        /*
            [element, element, element]
        */

            render() {

                const { fruits } = this.props
        
                return (
                    <DefaultLayout title="All Fruit" foodGroup="fruits">
                            <h1>Fruits Index Page</h1>
                            <ul id="fruits-index">
                                {fruits.map((fruit) => {
                                    return (
                                        <li key={fruit._id}>
                                            The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}.
                                        </li>
                                    )
                                })}
                            </ul>
        
                            <nav>
                                <a href="/fruits/new">Create a new a fruit</a>
                            </nav>
                    </DefaultLayout>
                )
            }
        }
module.exports = Index;