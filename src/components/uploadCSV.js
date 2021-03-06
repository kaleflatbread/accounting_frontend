import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import Button from '@material-ui/core/Button';
import {CSVLink} from 'react-csv';
import { connect } from 'react-redux';
import { Icon } from "@blueprintjs/core";


let headers = [
  {label: 'Date', key: 'date'},
  {label: 'Account', key: 'account'},
  {label: 'Type', key: 'transaction_type'},
  {label: 'Memo', key: 'memo'},
  {label: 'SKU', key: 'sku'},
  {label: 'Quantity Change', key: 'quantity_change'},
  {label: 'Cost Per Unit', key: 'cost_per_unit'},
  {label: 'Amount', key: 'amount'},
  {label: 'fin', key: 'fin'},
];

let data = [
  {date: '', account: '', transaction_type: '', memo: '', sku: '', quantity_change: '', cost_per_unit: '', amount: '', fin: ''},
];


class UploadCSV extends Component {

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    const data = reader.result
    var lines = data.split('\n');
    const headers = lines[0].split(',')
    let upload = []
      for (var i = 1; i < lines.length; i++){
        var transaction = lines[i].split(',');
        var tmpTransaction = {}
        let splitDate = ("date split", transaction[0].split('/'))
        let reformattedDate = '20' + splitDate[2] + '/' + splitDate[0] + '/' + splitDate[1]
        tmpTransaction[headers[0]] = reformattedDate;
        tmpTransaction[headers[1]] = transaction[1];
        tmpTransaction[headers[2]] = transaction[2];
        tmpTransaction[headers[3]] = transaction[3];
        tmpTransaction[headers[4]] = transaction[4];
        tmpTransaction[headers[5]] = transaction[5];
        tmpTransaction[headers[6]] = transaction[6];
        tmpTransaction[headers[7]] = transaction[7];
        upload.push(tmpTransaction)
        console.log(upload)
      }

      fetch("http://localhost:3001/api/v1/transactions", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify({type: "Inventory", account_id: 7, child_type: upload[0]["Type"], user_id: 1, memo: upload[0]["Memo"], date: upload[0]["Date"], quantity_change: upload[0]["Quantity Change"], amount: upload[0]["Amount"], cost_per_unit: upload[0]["Cost Per Unit"], sku: upload[0]["SKU"],})
      })
      .then(res => res.json())
      .then(json => {
        if(json.id){

        }else{
          throw "sorry, didn't work"
        }
      })
    }

  reader.readAsText(files[0]);
}


  render() {
    return (
      <div>
        <br/>
        <CSVLink data={data} headers={headers} filename={"inventory_upload_template.csv"}>
          <Button> <Icon icon="download" /> CSV Template</Button>
        </CSVLink>
        <br/>
        <br/>
        <br/>
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <Button><Icon icon="import" />Import </Button>
      </ReactFileReader>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
  }
}

export default connect(mapStateToProps)(UploadCSV);
