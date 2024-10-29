let productContainer = document.getElementById("products")
let search = document.getElementById("search")
let productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    let enteredValue = event.target.value.toUpperCase()

    for(count=0; count<productList.length; count=count+1)
    {
        let productname = productList[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
            {
            productList[count].style.display="none"
        }
        else
        {
            productList[count].style.display="block"
        }
    }
})
