import React, { Component } from 'react';

class Dashboard extends Component {
  state = {
    products: [
      {
        brand: "Nike",
        line: "Mamba",
        model: "Focus",
        category: "Men",
        size: "UK 9",
        color: "Blu/Ylw",
        initials: "KB",
        status: "Grey",
        show: true
      },
      {
        brand: "Nike",
        line: "Kobe",
        model: "Mentality 2",
        category: "Women",
        size: "UK 4",
        color: "Gry/Red",
        initials: "AD",
        status: "Blue",
        show: true
      },
      {
        brand: "Nike",
        line: "Kobe",
        model: "AD NXT",
        category: "Men",
        size: "UK 10",
        color: "Yellow",
        initials: "VC",
        status: "Orange",
        show: true
      },
      {
        brand: "Nike",
        line: "Kobe 9",
        model: "Elite",
        category: "Junior",
        size: "UK 3",
        color: "Green",
        initials: "AI",
        status: "Red",
        show: true
      },
      {
        brand: "Nike",
        line: "Mamba",
        model: "Rage",
        category: "Men",
        size: "UK 11",
        color: "Black",
        initials: "MK",
        status: "Red",
        show: true
      },
      {
        brand: "Nike",
        line: "Kobe",
        model: "AD mid",
        category: "Women",
        size: "UK 5",
        color: "Wht/Red",
        initials: "DD",
        status: "Orange",
        show: true
      },
      {
        brand: "Adidas",
        line: "Kobe",
        model: "2",
        category: "Men",
        size: "UK 13",
        color: "Silver",
        initials: "SO",
        status: "Blue",
        show: true
      },
      {
        brand: "Nike",
        line: "Zoom",
        model: "4",
        category: "Men",
        size: "UK 10",
        color: "Multi",
        initials: "TY",
        status: "Grey",
        show: true
      }
    ]
  };
  Ready = () => {
    let productsState = { ...this.state.products };
    const products = productsState.map(product => {
      if (product.status != "Grey") {
        product.show = false;
      };
      this.setState({})
    });
  };
  Way = () => {
    let productsState = { ...this.state.products };
    const products = productsState.map(product => {
      if (product.status != "Blue") {
        product.show = false;
      }
    });
  };
  Queue = () => {
    let productsState = { ...this.state.products };
    const products = productsState.map(product => {
      if (product.status != "Orange") {
        product.show = false;
      }
    });
  };

  NoStock = () => {
    let productsState = { ...this.state.products };
    productsState.map(product => {
      if (product.status != "Red") {
        product.show = false;
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.products[0].show} ? {this.state.products[0]} : null
          {this.state.products[1].show} ? {this.state.products[1]} : null
          {this.state.products[2].show} ? {this.state.products[2]} : null
          {this.state.products[3].show} ? {this.state.products[3]} : null
        </div>
      </div>
    );
  }
}

export default Dashboard;
