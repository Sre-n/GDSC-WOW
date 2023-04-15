const baseId = 'appKFbZoowafDPO3t';
const apiKey = 'keygILfcroWOCqchy';
const tableid = 'tblEjozJcjNHDGsO6';

fetch(`https://api.airtable.com/v0/${baseId}/${tableid}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Handle the API response data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });

