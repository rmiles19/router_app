import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { products: [] }

  componentDidMount() {
    axios.get('/api/products')
      .then( res => this.setState({ products: res.data }) )
  }

  render() {
    const { products } = this.state
    return (
      <ul>
        { products.map( p =>
            <li key={p.id}>
              <Link to={`/products/${p.id}`}>{p.name}</Link>
            </li>
          )
        }
      </ul>
    )
  }
}

export default Dashboard;