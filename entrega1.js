class ProductManager {
    constructor (){
        this.products = []
    }

    getProducts = ()=>{
        return this.products;
    }

    addProduct = (title = "producto prueba", description = "Este es un producto prueba", price = 200, thumbnail = "no image", code = "abc123", stock= 25) =>{
        const product = {
            title,
            description,
            price ,
            thumbnail,
            code,
            stock                
        }

    }
   
}

