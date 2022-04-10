const obj={
    fun(){
        console.log('funfou')
        document.querySelector('.image').classList.toggle('delete')
    }
}


const fazeralgo= document.querySelector('.atencao')
fazeralgo.addEventListener("click", obj.fun)