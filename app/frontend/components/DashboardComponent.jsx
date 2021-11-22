import React, { useState, useEffect, Fragment } from "react"
import axios from 'axios'
import Spinner from 'react-spinner-material'




const DashboardComponent = () =>{
    const [statistics, setStatistics] = useState([])


    const token = document.querySelector('[name=csrf-token]').content


    axios.defaults.headers.common['X-CSRF-TOKEN'] = token

    useEffect(()=>{
        getStatistics();
    },[])

    function getStatistics(){
        setStatistics("");        
        axios.get('/dashboard/statistics.json')
            .then( resp => {
                setStatistics(resp.data.statistics);
                document.getElementById('spinner').classList.add("hidden");
                document.getElementById('data').classList.remove("hidden");                
            })
            .catch( resp => console.log(resp));        
    }

    return(
        <div id="data" class="hidden">
          <div class="grid space-x-1 lg:grid-cols-12">
            <div class="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 class="text-2xl text-center text-gray-800">{statistics.orders}</h3>
              <p class="text-center text-gray-500">Total Orders</p>
            </div>
            <div class="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 class="text-2xl text-center text-gray-800">{statistics.customer_lifetime_value}</h3>
              <p class="text-center text-gray-500">Customer Lifetime Value</p>
            </div>
            <div class="px-4 py-4 bg-white border-2 border-gray-400 rounded">
              <h3 class="text-2xl text-center text-gray-800">{statistics.most_popular}</h3>
              <p class="text-center text-gray-500">Best revenue article</p>
            </div>
          </div>
         
          <button onClick={getStatistics} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Refresh
          </button>
        </div>
    )

}

export default DashboardComponent
