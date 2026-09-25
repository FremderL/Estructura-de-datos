class Inventario {
    constructor(){
        this.productos = [];
    }

    agregar(producto){
        this.productos.push(producto)
    }

    buscar(codigo){
        for(let i =0; i < this.productos.length; i++){
            if (this.productos[i].id == codigo){
                return this.productos[i];
            }
        }
        return null;
    }

    eliminar(codigo){
        for(let i =0; i < this.productos.length - 1; i++){
            if (this.productos[i].id == codigo){
                for(let j = i; j < this.productos.length - 1; j++){
                    this.productos[j] = this.productos[j+1]
                }
                this.productos.pop()
            }
        }
    }
    agregarInicio(producto){
        for(let i = this.productos.length; i > 0; i--){
            this.productos[i] = this.productos[i-1]
        }
        this.productos[0] = producto;
    }

    listar(){
        for(let i =0; i < this.productos.length ; i++){
             detalles.innerHTML += this.productos[i].infoHtml()
        }
    
    }
    listarInverso(){
        for(let i = this.productos.length - 1; i >= 0 ; i--){
             detalles.innerHTML += this.productos[i].infoHtml()
        }
    }

    extraerPrimero(){
        let guardar = this.productos[0]
        for(let i =0; i < this.productos.length - 1; i++){                        
            this.productos[i] = this.productos[i+1]                                                                   
        } 
        this.productos.pop()
        return guardar;
    }
}