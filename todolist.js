fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log('resolved', response);
        return response.json();
    }).then(data => {
        console.log(data);
        let tabledata = [];
        data.map((values) => {
            tabledata += `
		<tr>
		<td>${values.id}</td>
		<td>${values.name}</td>
		<td>${values.email}</td>
        <td><a href="todo.html"><button class="todo" onClick="todoId(${values.id})">To-do List</button></td>
        <td><a href="albums.html"><button class="album" onClick="albumId(${values.id})">Albums</button></a></td>
		</tr>
		`
        });

        document.getElementById("content").innerHTML = tabledata;
    }).catch((err) => {
        console.log('rejected', err);
    });

let todoId = (id) => {
    console.log(id);
    localStorage.setItem("userId", id);
}

let albumId = (id) => {
    console.log(id);
    localStorage.setItem("useridalbum", id);
}