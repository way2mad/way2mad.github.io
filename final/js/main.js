const items = document.querySelectorAll('.services__close');

//console.log(items);



for (let i = 0; i<items.length; i++){

    items[i].onclick = function () {
        for (let i = 0; i<items.length; i++){
            console.log(this);
            console.log(this.nextElementSibling);
        }
        this.nextElementSibling.classList.toggle('services__open--hide')
    }

}