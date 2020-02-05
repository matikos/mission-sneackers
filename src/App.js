import React, { Component } from "react";
import "./SASS/App.scss";
import Product from "./Components/Product";
import mambFocus from "./Assets/nike-kobe-mamba-focus.jpg";
import mentTwo from "./Assets/nike-kobe-mentality-2.jpg";
import adNext from "./Assets/nike-kobe-ad-nxt.jpg";
import eliteNine from "./Assets/nike-kobe-9-elite.jpg";
import mambRage from "./Assets/nike-mamba-rage.jpg";
import adMid from "./Assets/nike-kobe-ad-mid.jpg";
import adiKobe from "./Assets/adidas-kobe-2.jpg";
import zoomFour from "./Assets/nike-zoom-kobe-4.jpg";
import ven6 from "./Assets/nike-zoom-kobe-venomenon-6.jpg";
import crazy1 from "./Assets/adidas-crazy-1.jpg";

const style ={
  color: 'grey'
}

class App extends Component {
  state = {
    products: [
      {
        image: mambFocus,
        brand: "Nike",
        line: "Mamba",
        model: "Focus",
        category: "Men",
        size: "UK 9",
        color: "Multi",
        initials: "KB",
        status: "grey",
        show: false
      },
      {
        image: mentTwo,
        brand: "Nike",
        line: "Kobe",
        model: "Mentality 2",
        category: "Women",
        size: "UK 4",
        color: "Gry/Red",
        initials: "AD",
        status: "blue",
        show: false
      },
      {
        image: adNext,
        brand: "Nike",
        line: "Kobe",
        model: "AD NXT",
        category: "Men",
        size: "UK 10",
        color: "Yellow",
        initials: "VC",
        status: "blue",
        show: false
      },
      {
        image: eliteNine,
        brand: "Nike",
        line: "Kobe 9",
        model: "Elite",
        category: "Junior",
        size: "UK 3",
        color: "Green",
        initials: "AI",
        status: "red",
        show: false
      },
      {
        image: mambRage,
        brand: "Nike",
        line: "Mamba",
        model: "Rage",
        category: "Men",
        size: "UK 11",
        color: "Black",
        initials: "MK",
        status: "red",
        show: false
      },
      {
        image: adMid,
        brand: "Nike",
        line: "Kobe",
        model: "AD mid",
        category: "Women",
        size: "UK 5",
        color: "Red",
        initials: "DD",
        status: "orange",
        show: false
      },
      {
        image: adiKobe,
        brand: "Adidas",
        line: "Kobe",
        model: "2",
        category: "Men",
        size: "UK 13",
        color: "Silver",
        initials: "SO",
        status: "blue",
        show: false
      },
      {
        image: zoomFour,
        brand: "Nike",
        line: "Zoom",
        model: "4",
        category: "Men",
        size: "UK 10",
        color: "Multi",
        initials: "MM",
        status: "grey",
        show: false
      },
      {
        image: crazy1,
        brand: "Adidas",
        line: "Crazy",
        model: "1",
        category: "Kids",
        size: "UK 2",
        color: "Blk/Red",
        initials: "KD",
        status: "red",
        show: false
      },
      {
        image: ven6,
        brand: "Nike",
        line: "Zoom",
        model: "Venomenon 6",
        category: "Women",
        size: "UK 6",
        color: "Black",
        initials: "GB",
        status: "orange",
        show: false
      }
    ],
    currentProd: 0,
    prodsPerPage: 4,
    currentPage: 1,
    productsToDisplay: null,
    isPaused: true,
  };

  numberOfPages = () => Math.ceil(this.state.products.length / this.state.prodsPerPage);

  
  filterByColor = (color) => {
    clearInterval(this.autoRotation);

    this.setState({
      isPaused: true,
      productsToDisplay: null
    });
    const productsState = [...this.state.products];

    console.log(productsState);
    const productsMapped = productsState.map((product, i) =>  {
      if (product.status !== color) {
        return {  
      ...product,
        show: false
        };
      } else {
      return {  
      ...product,
        show: true
      };
    }
    });

    const productsFiltered = productsMapped.filter((product) => 
      product.show === true
    );
    console.log(productsFiltered);

    this.setState({
      isPaused: false,
      productsToDisplay: productsFiltered
    });
    console.log(this.state.isPaused);
  };

  showProducts = () => {
    let { currentProd, prodsPerPage, currentPage } = this.state;
    let page = [...this.state.products];
    
    if (currentPage < this.numberOfPages()) {
        this.setState({
          ...this.state,
          currentPage: currentPage + 1
        });
    } else {
      this.setState({
          ...this.state,
          currentPage: 1,
        });
    }
    console.log(currentPage);
    let pageSliced = page.slice(currentProd, currentProd + prodsPerPage);

    let pageMapped = pageSliced.map(element => {
      return {
        ...element,
        show: true
      };
    });

    if (pageMapped.length !== 0) {
      this.setState({
        ...this.state,
        currentProd: currentProd + prodsPerPage,
        productsToDisplay: pageMapped
      });
    }

    if (pageMapped.length === 0) {
      this.setState({
        ...this.state,
        currentProd: 0
      });
    } else if (pageMapped.length < prodsPerPage) {
      pageMapped = page.slice(currentProd).map(element => {
        return {
          ...element,
          show: true
        };
      });
      this.setState({
        ...this.state,
        currentProd: 0
      });
    } else {
      this.setState({
        ...this.state,
        currentProd: currentProd + prodsPerPage,
        productsToDisplay: pageMapped
      });
    }
    
  };
  
  autoRotation = 0;
  
  componentDidMount = () => {
    this.showProducts();

    if (this.state.isPaused) {
      this.autoRotation = setInterval(this.showProducts, 2000);
    };
  };

  render() {
    const pagesTotal = this.numberOfPages();

    const showDots = () => { 
    const result = []
    
    for (let j = 1; j <= pagesTotal; j++) {
    
      result.push(
      <li style={j === this.state.currentPage ? style : null } className="SingleDot" ref={j}>
          ●
        </li>)
    }
    
    return result
  }
  const dotsOnPage = showDots();
    return (
      <div className="App">
        <div className="Buttons">
          <button
            className="Buttons"
            onClick={() => this.filterByColor("grey")} 
          >
            {" "}
            <b className="GryDot">● </b> READY TO TRY
          </button>
          <button
            className="Buttons"
            onClick={() => this.filterByColor("blue")}
          >
            {" "}
            <b className="BluDot">● </b> ON THE WAY
          </button>
          <button
            className="Buttons"
            onClick={() => this.filterByColor("orange")}
          >
            {" "}
            <b className="OrngDot">● </b> IN THE QUEUE
          </button>
          <button className="Buttons" onClick={() => this.filterByColor("red")}>
            {" "}
            <b className="RedDot">● </b> OUT OF STOCK
          </button>
        </div>
        <div className="Dashboard">
          {this.state.productsToDisplay && this.state.productsToDisplay[0] ? (
            <Product details={this.state.productsToDisplay[0]} />
          ) : null}
          {this.state.productsToDisplay && this.state.productsToDisplay[1] ? (
            <Product details={this.state.productsToDisplay[1]} />
          ) : null}
          {this.state.productsToDisplay && this.state.productsToDisplay[2] ? (
            <Product details={this.state.productsToDisplay[2]} />
          ) : null}
          {this.state.productsToDisplay && this.state.productsToDisplay[3] ? (
            <Product details={this.state.productsToDisplay[3]} />
          ) : null}
        </div>
        <div>
          <ul className="Dots">
            {dotsOnPage}
          </ul>
        </div>
        <div className="Pagination">
          <h3 className="CurrPage">0{this.state.currentPage}</h3>
          <h3>|</h3>
          <h3 className="TotalPage">0{pagesTotal}</h3>
        </div>
      </div>
    );
  }
}

export default App;
