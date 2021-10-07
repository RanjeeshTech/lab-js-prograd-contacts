//Enter your code here..
const btn = document.querySelector("#btnGet");
const message = document.querySelector("#message");

function showContacts() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(blob => blob.json())
        .then(users => {
            var player = '<h2>Lists of Users</h2>';
            users.map(user => {
                player +=
                    `<div class="player">
                        <div class="strength">Name : ${user.name}</div>
                        <div>Email   : ${user.email}</div>
                        <div>Phone   : ${user.phone}</div>
                        <div>Website : ${user.website}</div>
                        <div>Company : ${user.company.name}</div>
                        <div>City    : ${user.address.city}</div>
                        <div>Zipcode : ${user.address.zipcode}</div>
                    </div>`                    
            }).join('');
            console.log(users);
            message.innerHTML = player;
        })
        .catch((error)=>{
            console.log('Promise rejected.');
            console.log(error.message);
        });
}

btn.addEventListener("click", showContacts);