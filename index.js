document.addEventListener('DOMContentLoaded', function() {
    submitData();
});
const url = 'http://localhost:3000/users'
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }


fetch(url, configObject)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(error) {
        alert('Unauthorized Access');
        console.log(error);
    });
}