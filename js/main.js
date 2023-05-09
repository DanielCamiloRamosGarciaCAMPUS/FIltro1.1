function categorias(){
    document.querySelector('#tableId').innerHTML =
    `
    <th scope="col">ID</th>
                      <th scope="col">CATEGORIAS</th>
                      <th scope="col">ID</th>

      `
}
document.getElementById("categorias").onclick = function (){
    categorias();
}

function productos(){
    document.querySelector('#tableId').innerHTML =
    `
    <th scope="col">ID</th  
    <th scope="col">CATEGORIAS</th>
    <th scope="col">BORRAR</th>
      `
}
document.getElementById("productos").onclick = function (){
    productos();
}

function clientes(){
    document.querySelector('#tableId').innerHTML =
    `
    <th scope="col">ID</th>
    <th scope="col">CATEGORIA</th>
    <th scope="col">PRODUCTO</th>
    <th scope="col">PRECIO</th>
    <th scope="col">BORRAR</th>
                   
      `
}
document.getElementById("clientes").onclick = function (){
    clientes();
}

function usuarios(){
    document.querySelector('#tableId').innerHTML =
    `
    <th scope="col">ID</th>
    <th scope="col">NOMBRE</th>
    <th scope="col">APELLIDO</th>
    <th scope="col">DIRECCION</th>
    <th scope="col">TELEFONO</th>
             
      `
}
document.getElementById("usuarios").onclick = function (){
    usuarios();
}

function ventas(){
    document.querySelector('#tableId').innerHTML =
    `
    <th scope="col">ID</th>
    <th scope="col">CLIENTE</th>
    <th scope="col">EMPLEADO</th>
    <th scope="col">FECHA</th>
    <th scope="col">PRODUCTOS</th>
    <th scope="col">CANTIDAD</th>
    
      `
}
document.getElementById("ventas").onclick = function (){
    ventas();
}

function compras(){
    document.querySelector('#tableId').innerHTML =
    `
    <th scope="col">ID</th>
    <th scope="col">CLIENTE</th>
    <th scope="col">CANTIDAD</th>
    <th scope="col">EMPLEADO</th>
      `
}
document.getElementById("compras").onclick = function (){
    compras();
}

function reportes(){
    document.querySelector('#tableId').innerHTML =
    `
    <th scope="col">ID</th>
    <th scope="col">CATEGORIAS</th>
    <th scope="col">CANTIDAD</th>
    <th scope="col">FECHA</th>                
      `
}
document.getElementById("reportes").onclick = function (){
    reportes();
}