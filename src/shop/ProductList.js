import React, { Component } from 'react';

export class ProductList extends Component {
    
    render() {
        if(this.props.products == null || this.props.products.length === 0) {
            return <h4 className="p-2 h4">No Products</h4>
        }

        return this.props.products.map((p) => {
            return <div className="card m-1 p-1 bg-light" key={p.id}>
                        <h4>
                            {p.name}
                        </h4>
                        <div className="badge badge-pill badge-primary float-right">
                            £{p.price.toFixed(2)}
                        </div>
                        <div className="card-text bg-white p-1">
                            {p.description}
                        </div>
                   </div>

        }); 

        //return this.props.products.map((p) => <div key={p.id}>{p.name} {p.description}</div>);
    }


}