var productArr=JSON.parse(localStorage.getItem("products"))
displayData(productArr)


function displayData(productArr){
    // console.log(productArr)

    productArr.forEach(function(el,Index){
        
        let container=document.getElementById("all_products")

        let card=document.createElement("div")

        let image=document.createElement("img")
        image.src=el.image
        let type=document.createElement("h3")
        type.innerText=el.type
        let  desc=document.createElement("h3")
        desc.innerText=el.desc
        let price=document.createElement("h3")
        price.innerText=el.price
        let remove=document.createElement("button")
        remove.innerText="Remove"
        remove.addEventListener("click",function(){
              deleteItem(Index)       
        })

        card.append(image,type,desc,price,remove)

        container.append(card)
        
    })
}

function deleteItem(index){
console.log(index)
productArr.splice(index,1)
localStorage.setItem("products",JSON.stringify(productArr))
window.location.reload()
}