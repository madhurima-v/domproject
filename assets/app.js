document.getElementsByClassName("red")[0].onclick = function(){
        document.getElementsByClassName("h1")[0].classList.add("one")
        document.getElementsByClassName("h1")[0].classList.remove("two")
    }
    document.getElementsByClassName("green")[0].onclick = function(){
        document.getElementsByClassName("h1")[0].classList.remove("one")
        document.getElementsByClassName("h1")[0].classList.add("two")
        
    }