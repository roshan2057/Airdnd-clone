import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";

const GlossaryData = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{

axios.get("https://airdna-next.cdn.prismic.io/airdna-next/9420d4f7-b576-4203-8625-ebc50a1baa50_BPTI-glossary.csv")
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
                          <div>Metric</div>
                        </th>
                        <th colspan="1" role="columnheader" title="Toggle SortBy"
                          Style="cursor: pointer;" class="">
                          <div>Definition</div>
                        </th>
                       
                      </tr>
                    </thead>
                    <tbody >
                        {/* Render table rows using the response data */}
          {data.map((item, index) => (
             <tr key={index}>
             <td role="cell">{item["Metric"]}</td>
             <td role="cell">{item["Definition"]}</td>
             
           </tr>
          ))}
                     
                     
                    </tbody>
                  </table>
                </div>
    </>
  )
}

export default GlossaryData