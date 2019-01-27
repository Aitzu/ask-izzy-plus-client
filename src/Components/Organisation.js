import React, { Component } from "react";
class Organisation extends Component {
  render() {
    // Organisation component inherits props from Organisation model, renders object's key/values as an array to Dashboard
    const { organisation } = this.props;
    return (
      <React.Fragment>
      {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(organisation).map(([key, value]) => {
        // Unless no array exists in sitesInOrganisation, iterate through, otherwise render key/value for sitesInOrganisation
          if (key !== "sitesInOrganisation") {
            return (
              <p key={key}> {key}: {value} </p>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
export default Organisation;