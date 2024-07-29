import axios from "axios";
import React, { Component } from "react";
import "./App.css";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    // axios
    //   .get(
    //     "api-mainnet.magiceden.dev/v2/collections/bothead/activities?offset=0&limit=10"
    //   )
    //   .then((response) =>
    //     this.setState({
    //       items: response.data,
    //       DataisLoaded: true,
    //     })
    //   );

    var config = {
      method: "get",
      url: "https://api-mainnet.magiceden.dev/v2/collections/bothead/activities?offset=0&limit=1",
      //   url: "https://jsonplaceholder.typicode.com/todos/1",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return (
      <div>
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            signature: {item.signature}, type: {item.type}, source:{item.source}
            tokenMint: {item.tokenMint}
            collection: {item.collection}
            slot: {item.slot}
            buyer: {item.buyer}
            buyerReferral: {item.buyerReferral}
            seller: {item.seller}
            sellerReferral: {item.sellerReferral}
            price: {item.price}
          </ol>
        ))}
      </div>
    );
  }

  tableTemplate() {
    return;
  }
}
