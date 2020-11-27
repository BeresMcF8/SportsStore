import React, {Component} from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import {loadData} from "../data/ActionCreator";
import {DataTypes} from "../data/Types";
import {Shop} from "./Shop";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../data/CartActionCreator";
//import { createStore } from "redux";

const mapStateToProps = (dataStore) =>
({
    ...dataStore
});

const mapDispatchToProps = {
    loadData, addToCart, updateCartQuantity, removeFromCart, clearCart
}

const filterProducts = ( products = [], category = "All") => {
            return (
                !category || category === "All"
            ) ? products: products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}


export const ShopConnector = connect(mapStateToProps, mapDispatchToProps) (
    

    class extends Component{
        render() {
            return <Switch>
                        <Route path="/shop/products/:category?" render={(routerProps) => <Shop {...this.props} {...routerProps} 
                            products = {filterProducts(this.props.products, routerProps.match.params.category)}/> }/>
                        <Redirect to="/shop/products" />
                    </Switch>
        }

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.PRODUCTS);
        }
    }
);