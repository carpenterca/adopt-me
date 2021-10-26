import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

// Hook method of Components (newer since about 2019)
// const Details = () => {
//    return <h2>test</h2>;
// };

// Class Method of Components
class Details extends Component {
   // constructor() {
   //    super();

   //    this.state = { loading: true, name: "", animal: "", breed: "" };
   // }

   // Default state of the component without constructor code
   // Valid JS but not everything supports it, thus requiring a babel transform for it to work
   // Also needed to add eslint rule
   state = { loading: true, showModal: false };

   // Similar to the useEffect Hook - will only be called once after rendered
   async componentDidMount() {
      const res = await fetch(
         `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
      );
      const json = await res.json();
      this.setState(
         Object.assign(
            {
               loading: false,
               //  name: json.pets[0].name,
               //  breed: json.pets[0].breed,
            },
            json.pets[0]
         )
      );
   }

   toggleModal = () => this.setState({ showModal: !this.state.showModal });
   adopt = () => (window.location = "http://bit.ly/pet-adopt");

   render() {
      if (this.state.loading) {
         return <h2>Loading</h2>;
      }

      // Destructure the state content to make easier to understand while using
      const {
         animal,
         breed,
         city,
         state,
         description,
         name,
         images,
         showModal,
      } = this.state;
      // hmmm image isn't working well here like it does for Pet
      //   let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
      //   if (images.length) {
      //      hero = images[0];
      //   }

      console.log(this.state);

      return (
         <div className="details">
            <Carousel images={images} />
            {/* <p>This is a test</p> */}
            {/* <img src={images[0]} alt={name} /> */}
            {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5672c0110610243.5ff23e8b81bdb.png" /> */}
            <div>
               {/* <div
                  className="image"
                  style={{ display: "flex", justifyContent: "center" }}
               >
                  <img src={hero} alt={name} />
               </div> */}
               <h1>{name}</h1>
               <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
               {/* <h2>{animal} - {breed} - {city}, {state}</h2> */}
               <ThemeContext.Consumer>
                  {([themeHook]) => (
                     <button
                        onClick={this.toggleModal}
                        style={{ backgroundColor: themeHook }}
                     >
                        Adopt {name}
                     </button>
                  )}
               </ThemeContext.Consumer>
               {/* <button>Adopt {name}</button> */}
               <p>{description}</p>
               {showModal ? (
                  <Modal>
                     <div>
                        <h2>Would you like to adopt {name}?</h2>
                        <div className="buttons">
                           <button onClick={this.adopt}>Yes</button>
                           <button onClick={this.toggleModal}>No</button>
                        </div>
                     </div>
                  </Modal>
               ) : null}
            </div>
         </div>
      );
   }
}

const DetailsWithRouter = withRouter(Details);

// Allows us to pass the router info to Details
// export default withRouter(Details);
export default function DetailsWithErrorBoundary() {
   return (
      <ErrorBoundary>
         <DetailsWithRouter />
      </ErrorBoundary>
   );
}
