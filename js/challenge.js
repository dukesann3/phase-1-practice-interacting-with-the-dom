
let count = 0;
let likeCount = 0;
let isPaused = false;
let textContent;
let intervalID;

const userComment = document.querySelector('form#comment-form input');
const commentList = document.querySelector('ul#comment-list');

document.addEventListener('DOMContentLoaded', function () {

    //the timer is starts as soon as the DOM loads...
    //every second the number on the screen changes.
    intervalID = setInterval(() => {
        //each second count increments by one.
        count++;
        document.querySelector('h1#counter').textContent = count;
        //resets like count each time a second lapses
        likeCount = 0;
    }, 1000);


    document.querySelector('button#plus').addEventListener('click', function () {
        count++;
        document.querySelector('h1#counter').textContent = count;
    });

    document.querySelector('button#minus').addEventListener('click', function () {
        count--;
        document.querySelector('h1#counter').textContent = count;
    });

    document.querySelector('button#heart').addEventListener('click', function () {
        likeCount++;
        textContent = `${count} was liked ${likeCount} times!`;
        let arrayOfLists = document.querySelector('ul.likes').children;

        //have to loop cuz I can't find quote on quote find the elements in a HTML collection "array"
        for (let i = 0; i < arrayOfLists.length; i++) {
            if (document.querySelector('ul.likes').children[i].id === `list-${count}`) {
                //if HTML element with this 'id' already exists, it would display a change in textContent for that specific element
                document.querySelector('ul.likes').children[i].textContent = textContent;
            }
        }

        if (likeCount === 1) {
            document.querySelector('ul.likes').appendChild(createNewListElement(textContent));
        }

    });

    document.querySelector('button#pause').addEventListener('click', function () {

        if(isPaused){
            isPaused = false;
        }
        else{
            isPaused = true;
        }

        if (!isPaused) {
            intervalID = setInterval(() => {
                //each second count increments by one.
                count++;
                document.querySelector('h1#counter').textContent = count;
                //resets like count each time a second lapses
                likeCount = 0;
            }, 1000);
        }
        else{
            clearInterval(intervalID);
        }
    });

    document.querySelector('button#submit').addEventListener('click' , function(e){
        e.preventDefault();
        if(userComment.value){
            commentList.appendChild(createNewListElement(userComment.value));
        }
        else{
            alert('need comment');
        }
        userComment.value = "";
    });

});

function createNewListElement(textContent) {

    let newListItem = document.createElement('li');
    newListItem.textContent = textContent;
    newListItem.setAttribute('id', `list-${count}`);

    return newListItem;
}







