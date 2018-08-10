import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';


class UploadCSV extends Component {
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
    console.log(reader.result)
    }
  reader.readAsText(files[0]);
}





  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
      INVENTORY PAGE!!
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
      </ReactFileReader>
      </div>
    );
  }
}

export default UploadCSV;
