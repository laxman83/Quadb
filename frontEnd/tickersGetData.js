const table = document.getElementById("Table");

async function fetchData() {
  try {
    const { data } = await axios.get("http://localhost:3001/tickersData");

    $.each(data, function (index, value) {
      $("#tickersTable").find("tbody").append(`<tr><td>  ${index + 1} </td> 
         <td>  ${value.name} </td>
         <td>  ${value.last} </td>
         <td>  ${value.buy}/${value.sell} </td>
         <td>  ${value.volume} </td>
         <td>  ${value.base_unit} </td></tr>`);
    });
  } catch (err) {
    console.log(err);
  }
}

fetchData();
