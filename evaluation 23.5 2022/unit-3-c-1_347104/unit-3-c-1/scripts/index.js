//store the products array in localstorage as "products"

document.querySelector("#add_product").addEventListener("click",addproduct)

function Products(type,desc,price,url){
    this.type=type,
    this.desc=desc,
    this.price=price,
    this.image=url
}

arr=JSON.parse(localStorage.getItem("products"))||[]
function addproduct(){
    
    let form=document.getElementById("products")
    let type=form.type.value
    let desc=form.desc.value
    let price=form.price.value
    let url=form.image.value
    let object=new Products(type,desc,price,url)
    arr.push(object)
    localStorage.setItem("products",JSON.stringify(arr))
    window.location.reload()
}

 