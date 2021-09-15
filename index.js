// Add your code here

// Write a function submitData that takes two strings as arguments

function submitData(name, email){
    return fetch ("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            name, email
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            document.body.innerHTML = json.id;
        })

        .catch(function(error) {
            alert("Bad things! Ragnarők!");
            document.body.innerHTML = error.message;
        })
    };

