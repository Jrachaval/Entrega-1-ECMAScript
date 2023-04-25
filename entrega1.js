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

    getProductByid = (id, products) =>{
        const product = products.find((product) => product.id === id);
        if (!product) {
        throw new Error(`Producto con ID ${id} no encontrado.`);
        }
        return product;
    }
 

    }
    
    
   


const manejadorproductos = new ProductManager()
manejadorproductos.addProduct("producto prueba", "este es un producto prueba", 200, "no image", "abc123", 25)
manejadorproductos.addProduct("producto prueba", "este es un producto prueba", 200, "no image", "abc123", 25)
console.log(manejadorproductos.getProducts());
