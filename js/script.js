let len  = document.querySelectorAll('.MyButton').length
let likha = document.querySelector('.abir');

for (let i = 0; i < len; i++) {

    let button = document.querySelectorAll('.MyButton')[i];

    button.addEventListener('click',function () {
        let text = this.innerHTML;
      likha.innerHTML= text + ' Is Clicked'
    
    })
    
}
