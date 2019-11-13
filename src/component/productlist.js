import React from "react";
import { connect } from "react-redux";
import { GetProData } from "../action/productAction";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.dispatch(GetProData());
  }

  render() {
    const { products } = this.props;
    console.log(products)
    return (
      <div>
        <ul>
          <h2>姓名列表45</h2>
          {products.map(p => (
            <li key={p.id}>{p.shop_name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.item
});

export default connect(mapStateToProps)(ProductList);
