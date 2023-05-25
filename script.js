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





fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
})
.then(function (getDataInfo) {
   
    return getDataInfo.json();
})

.then(function(receivedInfo){
    let ulItem2 = document.createElement('ul');
    receivedInfo.forEach(element2 => {
        // createPost(element2);
        let liItem2 = document.createElement('li');
            let dataInfo_2 = document.createElement('p');
            dataInfo_2.innerText = `${element2.title}`
            ulItem2.appendChild(liItem2);
            ulItem2.appendChild(dataInfo_2);
       
        
    });
    document.getElementById('post_block').appendChild(ulItem2);
})

.catch(function (r2rsp) {
    console.log(r2rsp);
})



function createPost(item) {
    let divWraper = document.createElement('div');
  
    let h2Tag = document.createElement('h2');
    h2Tag.innerText = `${item.id}`;
  
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = `${item.title}`;
  
    divWraper.appendChild(h2Tag);
    divWraper.appendChild(h3Tag);
  
    mainPostWraper.appendChild(divWraper);
    console.log(divWraper);
  }