// 'use strict';



// დავალება:
// პოსტების მაგალითი გაარჩიეთ და გადააკეთეთ fetchით;
// მოცემული ლინკიდან https://reqres.in/api/users?page=2 fetchით წამოიღეთ email + გვარი;


// fetch

fetch('https://reqres.in/api/users?page=2', {
    method: 'GET'
})
    .then(function (getInfo) {
        if (getInfo.status !== 200) {
            throw 'r2';
        }
        return getInfo.json();
    })
    .then(function (response) {
        let ulItem = document.createElement('ul');
        response.data.forEach(element => {
            let liItem = document.createElement('li');
            let dataInfo = document.createElement('p');
            let dataInfo2 = document.createElement('p');
            dataInfo.textContent = `${element.email}`;
            dataInfo2.textContent = `${element.last_name}`;

            ulItem.appendChild(liItem);
            ulItem.appendChild(dataInfo);
            ulItem.appendChild(dataInfo2);
        });
        document.getElementById('dataDiv').appendChild(ulItem);
    })

    .catch(function (errorRespone) {
        console.log(errorRespone);
    })





let mainDiv = document.querySelector(".post_block");

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
})
  .then(function (mosuliinfo) {
    return mosuliinfo.json();
  })
  .then(function (response) {
    response.forEach((element) => {
        createPost(element);
    });
    console.log(response);
  })
  .catch(function (errorResponse) {
    console.log(errorResponse);
  });

function createPost(item) {
  let divWraper = document.createElement("div");
  let h2Teg = document.createElement("h2");
  h2Teg.innerText = `${item.id}`;
  let h3Teg = document.createElement("h3");
  h3Teg.innerText = `${item.title}`;

  divWraper.appendChild(h2Teg);
  divWraper.appendChild(h3Teg);

  mainDiv.appendChild(divWraper);
  console.log(divWraper);
}