// Question 1

let people = ['person1', 'person2', 'person3', 'person4', 'person5', 'person6', 'person7', 'person8', 'person9']

let person1 = {
    name: 'Mish-Al',
    surname: 'Taliep',
    age: 21
}
let person2 = {
    name: 'Seth',
    surname: 'Kallis',
    age: 22
}
let person3 = {
    name: 'Amy',
    surname: 'Pieterse',
    age: 23
}
let person4 = {
    name: 'Jason',
    surname: 'Barron',
    age: 18
}
let person5 = {
    name: 'Jason',
    surname: 'Viljoen',
    age: 24
}
let person6 = {
    name: 'Laiquah',
    surname: 'Cotie',
    age: 19
}
let person7 = {
    name: 'Rayhaan',
    surname: 'Khan',
    age: 19
}
let person8 = {
    name: 'Bahijah',
    surname: 'Abrahams',
    age: 18
}
let person9 = {
    name: 'Joshua',
    surname: 'Williams',
    age: 18
}

// Question 3

let displayElement = document.querySelector('#display-element')
console.log(displayElement);


displayElement.innerHTML = `
<tr>
    <td>${person1.name}</td>
    <td>${person1.surname}</td>
    <td>${person1.age}</td>
</tr>
<tr>
    <td>${person2.name}</td>
    <td>${person2.surname}</td>
    <td>${person2.age}</td>
</tr>
<tr>
    <td>${person3.name}</td>
    <td>${person3.surname}</td>
    <td>${person3.age}</td>
</tr>
<tr>
    <td>${person4.name}</td>
    <td>${person4.surname}</td>
    <td>${person4.age}</td>
</tr>
<tr>
    <td>${person5.name}</td>
    <td>${person5.surname}</td>
    <td>${person5.age}</td>
</tr>
<tr>
    <td>${person6.name}</td>
    <td>${person6.surname}</td>
    <td>${person6.age}</td>
</tr>
<tr>
    <td>${person7.name}</td>
    <td>${person7.surname}</td>
    <td>${person7.age}</td>
</tr>
<tr>
    <td>${person8.name}</td>
    <td>${person8.surname}</td>
    <td>${person8.age}</td>
</tr>
<tr>
    <td>${person9.name}</td>
    <td>${person9.surname}</td>
    <td>${person9.age}</td>
</tr>
`
