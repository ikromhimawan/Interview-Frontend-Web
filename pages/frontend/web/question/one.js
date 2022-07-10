import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
const $ = require('jquery')
$.Datatable = require('datatables.net')
class Question1 extends React.Component {
  componentDidMount() {
    this.setDatatable()
  }
  setDatatable = () => {
    this.$el = $(this.el)
    this.$el.DataTable(
      {
        lengthMenu: [
          [5, 10, 25, -1],
          [5, 10, 25, 'All'],
        ],
        dom: '<"float-left"B><"float-right"f>rt<"row align-items-center mt-4"<"col-sm-4"p><"col-sm-4"i><"col-sm-4"l>>',
        "searching": false,
        "bLengthChange": true,
        "bInfo": false,
        language: { searchPlaceholder: "Kode Registrasi atau Nama Calon Agen", search: '' },
        "bDestroy": true,
        data: this.props.data,
        columns: [
          {
            title: "Product Name",
            "className": 'options',
            "data": null,
            "render": function (data, type, full, meta) {
              return data.title
            }
          },
          {
            width:150,
            title: "Product Code",
            "className": 'options',
            "data": null,
            "render": function (data, type, full, meta) {
              return data.id
            }
          },
          {
            title: "Category",
            "className": 'options',
            "data": null,
            "render": function (data, type, full, meta) {
              return data.footer
            }
          },
          {
            title: "Description",
            "className": 'options',
            "data": null,
            "render": function (data, type, full, meta) {
              return data.description
            }
          },
          {
            title: "Tags",
            "className": 'options',
            "data": null,
            "render": function (data, type, full, meta) {
              if (data.tags) {
                var tag = ''
                data.tags.map(e=> {
                  tag += "<li>"+e+"</li>"
                })
                return(
                  "<ul>"+tag+"</ul>"
                )
              }
              else{
                return "-"
              }
            }
          }
        ]
      }
    )
  }
  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center mt-5 px-4">
          <h3 className="mb-0">Question 1</h3>
        </div>
        <div className="box p-4 table-responsieve overflow-x-auto">
          <table id="dataCalonAgen" className="display table" width="100%" ref={el => this.el = el} ></table>
        </div>
      </>
    )

  }
}

export async function getServerSideProps() {

  var req = await fetch("https://screening.moduit.id/backend/question/one")
  var res = await req.json()
  console.log(res);
  var data = []
  for (let n = 0; n < 20; n++) {
    data.push(res)
  }
  console.log(data);
  return {
    props: {
      data: data
    }
  }
}
export default withRouter(Question1)