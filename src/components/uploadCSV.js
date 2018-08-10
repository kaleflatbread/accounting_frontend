import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import Button from '@material-ui/core/Button';


class UploadCSV extends Component {
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    const data = reader.result
    var lines = data.split('\n');
    const headers = lines[0].split(',')
    const upload = []
      for (var i = 1; i < lines.length; i++){
        var transaction = lines[i].split(',');
        var tmpTransaction = {}
        tmpTransaction[headers[0]] = transaction[0];
        tmpTransaction[headers[1]] = transaction[1]
        tmpTransaction[headers[2]] = transaction[2]
        upload.push(tmpTransaction)
      }
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
          <Button>Browse Files</Button>
      </ReactFileReader>
      </div>
    );
  }
}

export default UploadCSV;
