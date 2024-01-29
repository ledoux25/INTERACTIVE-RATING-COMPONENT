const ratings = document.getElementsByClassName('note');
const submit = document.querySelector('button');
const ratingComponent = document.querySelector('.rating-component');
const rate = document.getElementsByClassName('rate');
var thankyou = document.querySelector('.thankyou');
previous= null

for(let i = 0; i<ratings.length;i++){
    ratings[i].addEventListener('click',rating(i));
}

submit.addEventListener('click',function(){
    if(previous == null){
        alert('Selectionner une note')
    }else{
        ratingComponent.style.display="none" 
        thankyou.style.display="flex"
        Array.from(rate).forEach(function(element) {
            element.innerHTML=(previous+1).toString()
        });
    }
});

function rating(index){
    return function(){
        for(let j=0 ;j<=previous;j++){
            ratings[j].classList.remove('rating-active')
        }

        for(let j=0;j<=index;j++){
            ratings[j].classList.add('rating-active')
            previous = j
        }
        submit.classList.add('button-active')
    }
}


