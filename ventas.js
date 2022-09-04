

var clientes=[];
function Cliente (nombre,apellido){
        this.nombre=nombre.toUpperCase();
        this.apellido=apellido.toUpperCase();
            
    }

function contacto(){
    let nombre=prompt("ingrese su nombre");
    let apellido=prompt("ingrese su apellido");
    const cliente1=new Cliente(nombre,apellido);
        /*console.log(cliente1);*/
    clientes.push(cliente1);
    console.log(clientes);
    
}
function contar(){
    
    cantidadVentasMes++
    return cantidadVentasMes;
}

function servicio() {
    let option=parseInt(prompt("Escriba el numero de la opcion seleccionada: 1 landingPage, 2 Cooportiva, 3 Ecomercce "));
    if(option==1){
        

        alert("Usted eligio una Landing  Page");
        return "LandingPage";

    }
    
    else if
        (option==2){
            alert("Usted eligio una Corporativa");
            return "Coorporativa";

    }
    else if(option==3){
        alert("Usted eligio una Ecomercce");
        return "Ecomercce";
    }
 }

 function presupuesto(itemsServicio){
    let montoLp=0;
    if(itemsServicio==="LandingPage"){
        montoLp=parseFloat(prompt("ingrese el valor de la landing page"));
        montoLpage=montoLp+montoLpage;
        alert("EL monto de Landing  Page es $: "+ montoLp+" total de su compra $: "+montoLpage);
        return montoLpage;

    }
    
    else 
        
        if (itemsServicio==="Coorporativa") {
            let montoC=0;
            montoC=parseFloat(prompt("ingrese el valor de la WEb cooporativa"));
            montoCooporativa=montoC+montoCooporativa;
            alert("EL monto de la Web Cooportiva es $: " +montoC+" total de su compra $: "+montoCooporativa );
            return montoCooporativa;
        
    }
        else 
            if(itemsServicio==="Ecomercce"){
                let montoE=0;
                montoE=parseFloat(prompt("ingrese el valor de la Ecomercce"));
                montoEcommerce=montoE+montoEcommerce;
                alert("EL monto de la Web Ecomercce es $: " +montoE+ " total de su compra $: " + montoEcommerce);
                return montoEcommerce;
                

        }
            
        
} 


alert("Control de ventas WEB");
    
let montoTotalMes=0;
let cantidadVentasMes=0;
let montoLpage=0;/*para sumar ventas totales del mes de cooporativa*/
let montoCooporativa=0;/*para sumar ventas totales del mes de cooporativa*/
let montoEcommerce=0;/*para sumar ventas totales del mes de ecommerce*/

    
   
for(let i=1;i<=2;i++){
    let respuesta=prompt("desea ingresar nuevo cliente si o no");
    if(respuesta==="si"){
        contacto();
    }

    let totalMontoCliente=0;
    let venta="si";
    while(venta==="si"){
        cantidadVentasMes=contar();
        alert(cantidadVentasMes);
        let itemsServicio="";
        itemsServicio=servicio();
        totalCliente=parseFloat(presupuesto(itemsServicio));
        montoTotalMes=montoLpage+montoCooporativa+montoEcommerce;
        venta=prompt("Desea ingresar una nueva venta ?,si o no");
    }

alert("total a pagar $: " +totalCliente);

}
/*quiero informar esto al finalizar el mes*/
alert("venta total del mes $: " + montoTotalMes);
alert("cantidadad de web vendidas: " + cantidadVentasMes + " webs")

  





