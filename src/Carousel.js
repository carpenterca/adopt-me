import { Component } from "react";

class Carousel extends Component {
   state = {
      active: 0,
   };

   static defaultProps = {
      images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
   };

   //    handleIndexClick(event) {
   //       this.setState({
   //          active: +event.target.dataset.index,
   //       });
   //    }
   // Add below instead of above to get the this from where it is called as opposed to where it was created
   // Arrow functions do not make a new this
   handleIndexClick = (event) => {
      this.setState({
         active: +event.target.dataset.index,
      });
   };

   render() {
      const { active } = this.state;
      const { images } = this.props;

      return (
         <div className="carousel">
            <img src={images[active]} alt="animal" />
            <div className="carousel-smaller">
               {images.map((photo, index) => (
                  // eslint-disable-next-line
                  <img
                     key={photo}
                     src={photo}
                     data-index={index}
                     onClick={this.handleIndexClick}
                     //  onClick={this.handleIndexClick.bind(this)}
                     className={index === active ? "active" : ""}
                     alt="animal thumbnail"
                  />
               ))}
            </div>
         </div>
      );
   }
}

export default Carousel;
