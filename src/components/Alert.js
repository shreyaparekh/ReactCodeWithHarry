
import React, { useState } from 'react';

function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };
  const capitalize = (word) => {
    if (typeof word !== 'string') {
      return ''; // Return an empty string or handle the error case appropriately
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  
  const exampleWord = 'hello';
  const capitalizedWord = capitalize(exampleWord);
  console.log(capitalizedWord); // Output: "Hello"
  return (
    <div>
      {props.alert && showAlert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          <button type="button" className="close" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;