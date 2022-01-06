window.addEventListener('load',function(){
    const slide = document.querySelector('#slide')
    const slideMain = document.querySelector('.slide-items')
    const slideItem = document.querySelectorAll('.slide-item')
    const nextBtn = document.querySelector('.move.next')
    const prevBtn = document.querySelector('.move.prev')
    const dotItem = document.querySelectorAll('.dot-slide')
    const slideItemWidth = slideItem[0].offsetWidth
    const slideLength = slideItem.length
    let index = [0]
    let postionX = 0
    nextBtn.addEventListener("click",function(){
        dandleChangeSlide(1)
    })
    prevBtn.addEventListener("click",function(){
        dandleChangeSlide(-1)
    })
    
    function dandleChangeSlide(dir){
        if (dir === 1){
            if (index >= slideLength - 1){
                index = slideLength - 1
                return
            }
            postionX = postionX - slideItemWidth
            slideMain.style.transform = `translateX(${postionX}px)`
            index++

        }else if(dir === -1){
            if (index <= 0) {
                index = 0
                return
            }
            postionX = postionX + slideItemWidth
            slideMain.style.transform = `translateX(${postionX}px)`
            index--
        }
    }
})
