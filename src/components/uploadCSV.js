import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import Button from '@material-ui/core/Button';
import {CSVLink} from 'react-csv';

let headers = [
  {label: 'Date', key: 'date'},
  {label: 'Account', key: 'account'},
  {label: 'Type', key: 'transaction_type'},
  {label: 'Memo', key: 'memo'},
  {label: 'SKU', key: 'sku'},
  {label: 'Quantity Change', key: 'quantity_change'},
  {label: 'Cost Per Unit', key: 'cost_per_unit'},
  {label: 'Amount', key: 'amount'},
];

let data = [
  {date: '', account: '' , transaction_type: '', memo: '', sku: '', quantity_change: '', cost_per_unit: '', amount: ''},
];


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
        console.log(upload)
      }
    }
  reader.readAsText(files[0]);
}


  render() {
    return (
      <div>
        <br/>
        <CSVLink data={data} headers={headers} filename={"inventory_upload_template.csv"}>
          <Button>CSV Upload Template</Button>
        </CSVLink>
        <br/>
        <br/>
        <br/>
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <Button>Browse Files</Button>
      </ReactFileReader>
      </div>
    );
  }
}

export default UploadCSV;
