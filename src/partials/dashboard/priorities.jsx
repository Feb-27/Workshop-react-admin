import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import "../ChartJs.css"; 
function Priorities() {
  const [records, setRecords] = useState([])
    useEffect(() => {
      axios.get('https://simobile.singapoly.com/api/priority-issues')
      .then(res =>{setRecords(res.data.datas)})
      .catch(err => console.log(err))

    }, [])
    return(
      <div className="chart-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Priority Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Deleted At</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i)=> (
              <tr key={i}>
                <td>{r.id_priority}</td>
                <td>{r.priority_name}</td>
                <td>{r.created_at}</td>
                <td>{r.updated_at}</td>
                <td>{r.deleted_at}</td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>
    )

}
export default Priorities;
