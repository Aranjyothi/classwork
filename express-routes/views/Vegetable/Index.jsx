const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { vegetables} = this.props
        console.log(vegetables)
        return (
            <DefaultLayout title="All Vegetables" foodGroup="vegetable">
                    <h1>Vegetable Index Page</h1>
                    <ul id="vegetables-index">
                        {vegetables.map((vegetable) => {
                            return (
                                <li key={vegetable._id}>
                                    The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is {vegetable.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/vegetables/new">Create a new a vegetable</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;