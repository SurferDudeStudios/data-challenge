import React,{useState,useEffect} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {FilterMatchMode} from 'primereact/api';
import {InputText} from 'primereact/inputtext';
import 'primereact/resources/primereact.min.css';

const OrgsTable = () => {
  const [data, setData] = useState([])
  const [sorting, setSorting] = useState({column: 'id', order: 'asc'});
  const columns = ['id','name','country','industry','numberOfEmployees'];
  const sortTable = (newSorting) => {
    setSorting(newSorting)
  };
  const fetchData = () => {
    fetch("https://dujour.squiz.cloud/developer-challenge/data")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const [filters, setFilters] = useState({
    global: {value: null, matchmode: FilterMatchMode.CONTAINS},
  })

  return (
    <DataTable value={data} filterDisplay="row">
      <Column field='name' header='Sort by Name' sortable />
      <Column field='country' header='' filter filterPlaceholder="Filter by Country" />
      <Column field='industry' header='' filter filterPlaceholder="Filter by Industry" />
      <Column field='numberOfEmployees' header='Sort by Number of Employees' sortable />
    </DataTable>
  )
};

export default OrgsTable;