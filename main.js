const coeur = document.getElementsByClassName('fa-heart');
console.log(coeur);
for (let i of coeur){
    i.addEventListener('click', function() {
        if (i.style.color === 'red') {
            i.style.color = 'black';
        }
        else {
     i.style.color = 'red';
    }
});
}
const remove = document.getElementsByClassName('remove');
for(let i of remove){
    i.addEventListener('click',function(event){
        event.target.parentElement.remove();
        sum()
        
    })
}
const plus = document.getElementsByClassName('plus');
for(let i of plus){
    i.addEventListener('click',function(){
        i.previousElementSibling.value++ ;
        
        sum()
    });
   
}


const min = document.getElementsByClassName('min');
for(let i of min){
    i.addEventListener('click',function () {
        var h = i.nextElementSibling.value;
        if(h>0) {
            i.nextElementSibling.value--;
            
            sum()  
        }
    
    });
}

const price = document.getElementsByClassName('price')
const qtt = document.getElementsByClassName('qtt')
console.log(price)
console.log(qtt)

function sum(){
    
    let total = 0;
    for (let i = 0; i< price.length ; i++){
        total += parseInt(qtt[i].value) * parseInt(price[i].innerHTML);
        console.log(qtt[i].value) 
        console.log(price[i].innerHTML)
    }
   
    console.log(total)
    console.log('total price= $' + total)

    return (document.getElementById('total').innerHTML =
    'total price= $' + total );
    
}

