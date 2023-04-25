class ProductManager {
    constructor (){
        this.products = []
    }

    getProducts = ()=>{
        return this.products;
    }

    addProduct = (title, description , price , thumbnail , code , stock) =>{
        const product = {
            title,
            description,
            price ,
            thumbnail,
            code,
            stock                
        }
        if (this.products.length===0){
            product.id = 1;
        }
        else {product.id = this.products [this.products.length - 1].id + 1};  
                 
        this.products.push(product);
    
    }
    
    
   
}

const manejadorproductos = new ProductManager()
manejadorproductos.addProduct("producto prueba", "este es un producto prueba", 200, "no image", "abc123", 25)
console.log(manejadorproductos.getProducts());
