class ProductManager {
    constructor (){
        this.products = []
    }

    getProducts = ()=>{
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{
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

