import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";

const FranceData = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{

axios.get("https://airdna-next.cdn.prismic.io/airdna-next/a2423c23-4d43-4740-8894-571fa87b0306_BPTI+International+-+France.csv")
      .then((response) => {
        // Extract the .csv data from the Axios response
        const csvData = response.data;

        // Parse the .csv data
        const parsedData = Papa.parse(csvData, {
          header: true, // Assuming the first row contains headers
        });

        // Update the state with parsed data
        setData(parsedData.data);
      })
      .catch((error) => {
        console.error("Error fetching .csv data:", error);
      });
  }, []);
  console.log(data)

  return (
    <>

<div class="styles__TableStyles-sc-1nv356l-0 FZZpa">
                  <table role="table" border="1">
                    <thead>
                      <tr role="row">
                        <th colspan="1" role="columnheader" title="Toggle SortBy"
                          Style="cursor: pointer;" class="">
                          <div>Market</div>
                        </th>
                        <th colspan="1" role="columnheader" title="Toggle SortBy"
                          Style="cursor: pointer;" class="">
                          <div>Active STR Listings</div>
                        </th>
                        <th colspan="1" role="columnheader" title="Toggle SortBy"
                          Style="cursor: pointer;" class="">
                          <div>Revenue Potential €</div>
                        </th>
                        <th colspan="1" role="columnheader" title="Toggle SortBy"
                          Style="cursor: pointer;" class="">
                          <div>Total Occupancy Rate</div>
                        </th>
                        <th colspan="1" role="columnheader" title="Toggle SortBy"
                          Style="cursor: pointer;" class="">
                          <div>Rental Demand (/100)</div>
                        </th>
                        <th colspan="1" role="columnheader" title="Toggle SortBy"
                          Style="cursor: pointer;" class="">
                          <div>Revenue Growth (/100)</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody >
                        {/* Render table rows using the response data */}
          {data.map((item, index) => (
             <tr key={index}>
             <td role="cell">
               <a href={item["Market.link"]} target="_blank" rel="noopener noreferrer">
                 {item["Market.text"]}
               </a>
             </td>
             <td role="cell">{item["Active STR Listings"]}</td>
             <td role="cell">{item["Revenue Potential €"]}</td>
             <td role="cell">{item["Total Occupancy Rate"]}</td>
             <td role="cell">{item["Rental Demand (/100)"]}</td>
             <td role="cell">{item["Revenue Growth (/100)"]}</td>
           </tr>
          ))}
                     
                     
                    </tbody>
                  </table>
                </div>
    </>
  )
}

export default FranceData