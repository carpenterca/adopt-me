import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
   state = { hasError: false, redirect: false };
   static getDerivedStateFromError() {
      return { hasError: true };
   }

   componentDidCatch(error, info) {
      // Log this to Sentry, Azure Monitor, New Relic, TrackJS
      console.error("ErrorBoundary caught an error", error, info);
      setTimeout(() => this.setState({ redirect: true }), 5000);
   }

   // This did not work in the class example
   // will never be called on the first time
   //    componentDidUpdate() {
   //       if (this.state.hasError) {
   //          setTimeout(() => this.setState({ redirect: true }), 5000);
   //       }
   //    }

   render() {
      if (this.state.redirect) {
         return <Redirect to="/" />;
      } else if (this.state.hasError) {
         return (
            <h2>
               This listing has an error.
               <br />
               <Link to="/">Click to return home</Link>
               <br />
               Or wait 5 seconds to automatically redirect.
            </h2>
         );
      }
      return this.props.children;
   }
}

{
   /* <ErrorBoundary>
    <h1>This is a child and renders if there is no error</h1>
</ErrorBoundary> */
}

export default ErrorBoundary;
