let btns = document.querySelectorAll(".btninfo")
let info = document.querySelectorAll(".mensagem")

btns.forEach((btn, index) => {
    btn.addEventListener('mouseover', () => {
    info[index].style.display = 'block'    
    })

    btn.addEventListener('mouseout', () => {
        info[index].style.display = 'none'    
        })
})
 



 
