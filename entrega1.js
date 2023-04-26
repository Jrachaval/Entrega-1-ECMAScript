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
        if (this.products.some(p => p.code === product.code)) {
            throw new Error("repeated code");
          }
        if (this.products.length===0){
            product.id = 1;
        }
        else {product.id = this.products [this.products.length - 1].id + 1}
        
        
                 
        this.products.push(product);
    
    }
    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
          throw new Error("Product no found");
        }
        return product;
      }

  
 

    }
    
    
   


const productmanager = new ProductManager()
productmanager.addProduct("producto prueba", "este es un producto prueba", 200, "no image", "fre123", 25)
productmanager.addProduct("producto prueba", "este es un producto prueba", 200, "no image", "dsa123", 25)
console.log(productmanager.getProducts());

productmanager.addProduct("producto prueba", "este es un producto prueba", 200, "no image", "abc123", 25)
productmanager.addProduct("producto prueba", "este es un producto prueba", 200, "no image", "abc123", 25)


