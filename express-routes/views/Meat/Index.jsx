const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { meats } = this.props
        console.log(meats)
        return (
            <DefaultLayout title="All Meat" foodGroup="meat">
                    <h1>Meat Index Page</h1>
                    <ul id="meat-index">
                        {meats.map((meat) => {
                            return (
                                <li key={meat._id}>
                                    The <a href={`/meats/${meat._id}`}>{meat.name}</a> is {meat.Type}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/meats/new">Create a new a meat</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;