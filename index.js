console.log('hello word...')

let el, i, b;

let data = [    {        
    brand: "Samsung",
            model: "A30",
            storage: "64gb",
    color: "Rojo",
            ram: "4gb",
     
    stock: "25"   
},      {        
    brand: "Xiaomi",
            model: "Mi note 10 lite",
            storage: "128gb",
    color: "Azul",
            ram: "6gb",
     
    stock: "20"    
},      {        
    brand: "Samsung",
            model: "A50",
            storage: "128gb",
    color: "Azul",
            ram: "4gb"  ,
      
    stock: "15" 
},      {        
    brand: "Iphone",
            model: "Xr",
            storage: "64gb",
    color: "Azul",
            ram: "4gb"    ,
    stock: "35" 
}];
let panel = document.querySelector('#panel');

function clearForm() {
    document.querySelector("#brand").value = "";
    document.querySelector("#model").value = "";
    document.querySelector("#storage").value = "";
    document.querySelector("#ram").value = "";
    document.querySelector("#stock").value = "";
}

function renderItem() {
    panel.textContent = "";
    data.forEach(x => {
        el = document.createElement("option");
        el.innerText = `${x.brand}    |    ${x.model}   |   ${x.storage}   |   ${x.color}   |   ${x.stock} `;
        panel.append(el);
    });
}


function create() {
    let brand = document.querySelector("#brand").value;
    let model = document.querySelector("#model").value;
    let storage = document.querySelector("#storage").value;
    let ram = document.querySelector("#ram").value;
    let color = document.querySelector("#color").value;
    let stock = document.querySelector("#stock").value;

    if (brand == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo marca esta vacio',
        })
        return;
    }
    if (model == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo modelo esta vacio',
        })
        return;
    }
    if (storage == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo storage esta vacio',
        })
        return;
    }
    if (ram == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo ram esta vacio',
        })
        return;
    }
    if (stock == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo stock esta vacio',
        })
        return;
    }

    data = [...data, { brand: brand, model: model, storage: storage, color: color, ram: ram, stock: stock }];
    clearForm();
    console.log(data)
    renderItem();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Celular añadido correctamente...',
        showConfirmButton: false,
        timer: 1500
    })


}

function panelClick() {
    i = panel.selectedIndex;
    document.querySelector("#brand").value = data[i].brand;
    document.querySelector("#model").value = data[i].model;
    document.querySelector("#storage").value = data[i].storage;
    document.querySelector("#color").value = data[i].color;
    document.querySelector("#ram").value = data[i].ram;
    document.querySelector("#stock").value = data[i].stock;
}

function update() {


    if (document.querySelector("#brand").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo marca esta vacio',
        })
        return;
    }
    if (document.querySelector("#model").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo modelo esta vacio',
        })
        return;
    }
    if (document.querySelector("#storage").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo storage esta vacio',
        })
        return;
    }
    if (document.querySelector("#ram").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo ram esta vacio',
        })
        return;
    }
    if (document.querySelector("#stock").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo stock esta vacio',
        })
        return;
    }
    data[i].brand = document.querySelector("#brand").value;

    data[i].model = document.querySelector("#model").value;
    data[i].storage = document.querySelector("#storage").value;
    data[i].color = document.querySelector("#color").value;
    data[i].ram = document.querySelector("#ram").value;
    data[i].stock = document.querySelector("#stock").value;

    renderItem();
}

function deleteItem() {
    data.splice(i, 1);
    renderItem();
}

renderItem();