let topHundred = [];
let viewedStatus = 0;
let me = document.querySelector('.me')
console.log(me.value)
const trial = document.querySelector(".test");
const parent = document.createElement('ol');
parent.className = 'parent';

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')

    .then(function (rawData) {
       // console.log('Raw data received.');
        return rawData.json();
    })

    .then(function (data) {
       // console.log('Data parsed.');

        for (i = 0; i < 100; i++) {
            let story = `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`;
            fetch(story)

                .then(function (rawData1) {
                    // console.log('Raw data received.');
                    return rawData1.json();
                })

                .then(function (data1) {
                    //console.log('Data parsed.');
                    // console.log(data1.kids)
                    // console.log(`https://hacker-news.firebaseio.com/v0/item/${data1.kids[0]}.json?print=pretty`)


                    const stories = document.querySelector('.back-stories');
                    const child = document.createElement('li');
                    const divComment = document.createElement('div')
                    child.className = 'child';
                    divComment.className = 'seeComments';
                    const breakLine = document.createElement('div')
                    breakLine.className = 'theLine';
                    breakLine.style.border = '3px solid #DDE6D5';
``


                    const h2 = document.createElement('h2');
                    const a = document.createElement('a')
                    const p = document.createElement('p')
                    const button = document.createElement('button')
                    const button2= document.createElement('button')
                    button2.className= 'closeComment'

                    parent.appendChild(child);
                    parent.appendChild(divComment);
                    stories.appendChild(parent);
                    child.appendChild(h2)
                    child.appendChild(p)
                    child.appendChild(button)
                    child.appendChild(button2)
                    h2.appendChild(a)
                    a.innerText = '{'+data1.score +'}' +"-" + data1.title
                    a.href = data1.url
                    p.innerText = "Comments: " + data1.descendants + " " + "Submitted by: " + data1.by
                    button.innerText = "View Comments"
                    button.style.color = 'black'
                    button2.innerText = 'Close Comments'

                    const formCheck = document.querySelector('.form-control')
                    formCheck.addEventListener('click', function () {
                        //console.log(formCheck.value)
                        if(formCheck.value === 'win'){alert('You are awesome! Have a great day!');
                        formCheck.value = 'close';
                    }
                        
                    })
                 
                    
                 


                    //Stretch Goal Beyond Here.
                    button2.addEventListener('click', function(){
                        //console.log('Closed')
                        divComment.style.height = '0px';
                        divComment.style.opacity = '0';
                        button2.style.boxShadow = '10px 0px 0px #F8D3C5'
                        button.style.boxShadow = '0px 0px 0px black'
                    });

                    button.addEventListener('click', function () {
                        button2.style.boxShadow = '0px 0px 0px black'
                        button.style.boxShadow = '3px 3px 3px black'
                        viewedStatus = viewedStatus + 10
                        //console.log(viewedStatus)
                        for (j = 0; j < 5; j++) {
                            let comments = `https://hacker-news.firebaseio.com/v0/item/${data1.kids[j]}.json?print=pretty`;
                            
                            fetch(comments)

                                .then(function (rawData2) {
                                    // console.log('Raw data received.');
                                    return rawData2.json();
                                })

                                .then(function (data2) {
                                    // console.log('Raw data received.');
                                    //console.log(data2.text)
                                    divComment.innerHTML = data2.text
                                    divComment.style.border ='solid #DDE6D5 4px'
                                    divComment.style.borderLeft = 'solid #F8D3C5 5px'
                                    divComment.style.opacity = '1';
                                    divComment.style.height = 'auto';
                                  


                                })

                        }
                    })

                })

        }
    });




