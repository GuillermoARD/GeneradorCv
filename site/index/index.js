const inputName = document.getElementById("name");
const inputDireccion = document.getElementById("Direccion");
const inputTelefono = document.getElementById("telefono");
const inputcorreo = document.getElementById("correo");
const inputURL = document.getElementById("URL");
const inputresumen = document.getElementById("resumen");
const inputidioma = document.getElementById("idioma");
const inputempleo = document.getElementById("empleo");
const inputeducacion = document.getElementById("educacion");
const inputSkill = document.getElementById("Skill");
const inputCertificaciones = document.getElementById("Certificaciones");
const inputs = document.querySelectorAll(".form-control");

// START CODE (MOVE)

const tempFunc = () => {

    const valueName = inputName.value;
    const valueDireccion = inputDireccion.value;
    const valueTelefono = inputTelefono.value;
    const valuecorreo = inputcorreo.value;
    const valueURL = inputURL.value;
    const valueresumen = inputresumen.value;
    const valueidioma = inputidioma.value;
    const valueempleo = inputempleo.value;
    const valueeducacion = inputeducacion.value;
    const valueSkill = inputSkill.value;
    const valueCertificaciones = inputCertificaciones.value;

    // Base Elements
    const div = document.createElement("div");
    const hr = document.createElement("hr");
    const p = document.createElement("p");
    const h5 = document.createElement("h5");



    // container
    const divcontainer = div.cloneNode();
    divcontainer.classList.add("container");

    // main container
    const divmaincontainer = divcontainer.cloneNode();

    
    const divrow = div.cloneNode();
    divrow.classList.add("row");

     
    const divcol4 = div.cloneNode();
    divcol4.setAttribute("class", "col-md-4 text-center")
    
    const divwrapper1 = divcontainer.cloneNode();

    
    const h1Name = document.createElement("h1"); 
    h1Name.innerHTML = valueName; 
    divwrapper1.appendChild(h1Name); 

    const h4contacto = document.createElement("h4");
    h4contacto.innerHTML = "Contacto";
    divwrapper1.appendChild(h4contacto);

    divwrapper1.appendChild(hr.cloneNode());

    const h5Direccion = h5.cloneNode();
    h5Direccion.innerHTML = "Direccion";
    divwrapper1.appendChild(h5Direccion);

    const PDireccion = p.cloneNode();
    PDireccion.innerHTML = valueDireccion;
    divwrapper1.appendChild(PDireccion);

    const h5Telefono = h5.cloneNode();
    h5Telefono.innerHTML = "Numero telefonico:";
    divwrapper1.appendChild(h5Telefono);

    const Ptelefono = p.cloneNode();
    Ptelefono.innerHTML = valueTelefono;
    divwrapper1.appendChild(Ptelefono);

    const h5email = h5.cloneNode();
    h5email.innerHTML = "Email:";
    divwrapper1.appendChild(h5email);

    const Pemail = p.cloneNode();
    Pemail.innerHTML = valuecorreo;
    divwrapper1.appendChild(Pemail);
    divwrapper1.appendChild(hr.cloneNode());


    const h5Lenguaje = h5.cloneNode(); 
   
    h5Lenguaje.innerHTML = "Lenguajes";
    
    divwrapper1.appendChild(h5Lenguaje);
   
    const lenguajes = valueidioma.split(","); 
    
    lenguajes.forEach((lenguaje) => {

        const PLenguaje = p.cloneNode();
        PLenguaje.innerHTML = lenguaje;
        divwrapper1.appendChild(PLenguaje);
        
    });


    const h5Paginaweb = h5.cloneNode();
    h5Paginaweb.innerText = "Pagina Web:"
    divwrapper1.appendChild(h5Paginaweb);

    const PURL = p.cloneNode();
    PURL.innerHTML = valueURL;
    divwrapper1.appendChild(PURL);

    divcol4.appendChild(divwrapper1);
    divrow.appendChild(divcol4);
    
    divmaincontainer.appendChild(divrow);
    
    document.querySelector("#Cv");
    const Cv = document.querySelector("#Cv");
    Cv.appendChild(divmaincontainer);


    const divcol8 = document.createElement("div"); // clase padre
    divcol8.setAttribute("class", "col-md-8")

    const divcard1 = document.createElement("div"); //1r card mt-4
    divcard1.setAttribute("class", "card mt-4");

    const h5cardheader = document.createElement("h5");//h5Descripcion/resumen
    h5cardheader.setAttribute("class", "card-header bg-primary") //1ro card-header
    h5cardheader.innerText = "Descripcion/resumen";
    let PDescripcion = document.createElement("p");
    PDescripcion.innerHTML = valueresumen;

    divcard1.appendChild(h5cardheader);
    divcard1.appendChild(PDescripcion);


    const divcard2 = document.createElement("div"); // 2do card mt-4
    divcard2.setAttribute("class", "card mt-4");

    const divcard3 = document.createElement("div"); // 2do card header
    divcard3.setAttribute("class", "card-header bg-primary");


    const h5cardheader3 = document.createElement("h5");
    h5cardheader3.innerText = "Skill/Habilidades";

    divcard3.appendChild(h5cardheader3);
    divcard2.appendChild(divcard3);


    const cardbody1 = document.createElement("div"); //3ro div card t-4
    cardbody1.setAttribute("class", "card-body");

    divcard2.appendChild(cardbody1);

    const ListSkill = document.createElement("ul"); //lista de las skill


    const habilidades = valueSkill.split(",");

    habilidades.forEach((Skill) => {

        const liSkill = document.createElement("li");

        liSkill.innerHTML = Skill;
        ListSkill.appendChild(liSkill);

    });

    cardbody1.appendChild(ListSkill);

    const divcard4 = document.createElement("div"); // 4to card mt-4
    divcard4.setAttribute("class", "card mt-4");


    const cardheader4 = document.createElement("div");
    cardheader4.setAttribute("class", "card-header bg-primary")
    const h5cardheader4 = document.createElement("h5");
    h5cardheader4.innerText = "Certificaciones";

    cardheader4.appendChild(h5cardheader4);
    divcard4.appendChild(cardheader4);

    const divbody = document.createElement("div");
    divbody.setAttribute("class", "card-body");

    const ListCertificaciones = document.createElement("ul");
    const liCertficaciones = document.createElement("li");
    liCertficaciones.innerHTML = valueCertificaciones;

    const certificados = valueCertificaciones.split(",");

    certificados.forEach((certi) => {

        const liCertficaciones = document.createElement("li")

        liCertficaciones.innerHTML = certi;

        ListCertificaciones.appendChild(liCertficaciones);

    });

    divbody.appendChild(ListCertificaciones);
    divcard4.appendChild(divbody);


    const divcard5 = document.createElement("div"); //1r card mt-4
    divcard5.setAttribute("class", "card mt-4  mt-12");

    const cardheader5 = document.createElement("div");
    cardheader5.setAttribute("class", "card-header bg-primary")


    const h5cardheader5 = document.createElement("h5");
    h5cardheader5.innerText = "Experiencias";

    cardheader5.appendChild(h5cardheader5);
    divcard5.appendChild(cardheader5);


    const divbody5 = document.createElement("div");
    divbody5.setAttribute("class", "card-body");

    divcard5.appendChild(divbody5);

    const Lissexperiencias = document.createElement("ul");

    divbody5.appendChild(Lissexperiencias);

    const experien = valueCertificaciones.split(",");

    experien.forEach((conocimiento) => {

        const liexpert = document.createElement("li");

        liexpert.innerHTML = conocimiento;
        Lissexperiencias.appendChild(liexpert);
    });

    const divcard6 = document.createElement("div"); //1r card mt-4
    divcard6.setAttribute("class", "card mt-4");

    const cardheader6 = document.createElement("div");
    cardheader6.setAttribute("class", "card-header bg-primary")

    divcard6.appendChild(cardheader6);

    const h5cardheader6 = document.createElement("h5");
    h5cardheader6.innerText = "Empleos";

    cardheader6.appendChild(h5cardheader6);
    divcard6.appendChild(cardheader6);

    const divbody6 = document.createElement("div");
    divbody6.setAttribute("class", "card-body");

    divcard6.appendChild(divbody6);

    const Lisempleos = document.createElement("ul");
    divbody6.appendChild(Lisempleos);

    const empleos = valueempleo.split(",");

    empleos.forEach((empleo) => {

        const liempleos = document.createElement("li");

        liempleos.innerHTML = empleo;
        Lisempleos.appendChild(liempleos);
    });


    const divcard7 = document.createElement("div"); //1r card mt-4
    divcard7.setAttribute("class", "card mt-4");

    const cardheader7 = document.createElement("div");
    cardheader7.setAttribute("class", "card-header bg-primary")

    divcard7.appendChild(cardheader7);

    const h5cardheader7 = document.createElement("h5");
    h5cardheader7.innerText = "Educacion";

    const divbody7 = document.createElement("div");
    divbody7.setAttribute("class", "card-body");
    divcard7.appendChild(divbody7);

    cardheader7.appendChild(h5cardheader7);

    const Lieducacion = document.createElement("ul");

    divbody7.appendChild(Lieducacion);

    const educaciones = valueeducacion.split(",");

    educaciones.forEach((educa) => {

        const lieduca = document.createElement("li");

        lieduca.innerHTML = valueeducacion;
        Lieducacion.appendChild(lieduca);
    });

    const btnDelete = document.createElement("button");
    btnDelete.type = "button";
    btnDelete.setAttribute("class", "btn btn-primary");
    btnDelete.innerText = "Eliminar Cv";
    btnDelete.addEventListener("click",function(){

        if(confirm("Esta seguro que desea eliminar?")){
            divcontainer.removeChild(divmaincontainer);
        };
    })
    
    divcol8.appendChild(divcard1);
    divcol8.appendChild(divcard2);
    divcol8.appendChild(divcard4);
    divcol8.appendChild(divcard5);
    divcol8.appendChild(divcard6);
    divcol8.appendChild(divcard7);
    divrow.appendChild(divcol8);

    Clear();
}

// EMD CODE (MOV)

function Clear() {
    inputName.value = "";
    inputName.classList.remove("input-error");
    inputName.classList.remove("input-access");
    inputName.focus();

    inputDireccion.value = "";
    inputDireccion.classList.remove("input-error");
    inputDireccion.classList.remove("input-access");

    inputTelefono.value = "";
    inputTelefono.classList.remove("input-error");
    inputTelefono.classList.remove("input-access");

    inputcorreo.value = "";
    inputcorreo.classList.remove("input-error");
    inputcorreo.classList.remove("input-access");

    inputURL.value = "";
    inputURL.classList.remove("input-error");
    inputURL.classList.remove("input-access");

    inputresumen.value = "";
    inputresumen.classList.remove("input-error");
    inputresumen.classList.remove("input-access");

    inputidioma.value = "";
    inputidioma.classList.remove("input-error");
    inputidioma.classList.remove("input-access");

    inputempleo.value = "";
    inputempleo.classList.remove("input-error");
    inputempleo.classList.remove("input-access");

    inputeducacion.value = "";
    inputeducacion.classList.remove("input-error");
    inputeducacion.classList.remove("input-access");

    inputSkill.value = "";
    inputSkill.classList.remove("input-error");
    inputSkill.classList.remove("input-access");

    inputCertificaciones.value = "";
    inputCertificaciones.classList.remove("input-error");
    inputCertificaciones.classList.remove("input-access");
}

function GenerarCv() {
    if (validar()) {

        tempFunc()

    } else {
        alert("Debe completar todos los campos son requeridos")
    }
}

function validar() {
    let isvalie = true;

    const inputName = document.getElementById("name");
    const valueName = inputName.value;

    const inputDireccion = document.getElementById("Direccion");
    const valueDireccion = inputDireccion.value;

    const inputTelefono = document.getElementById("telefono");
    const valueTelefono = inputTelefono.value;

    const inputcorreo = document.getElementById("correo");
    const valuecorreo = inputcorreo.value;

    const inputURL = document.getElementById("URL");
    const valueURL = inputURL.value;

    const inputresumen = document.getElementById("resumen");
    const valueresumen = inputresumen.value;

    const inputidioma = document.getElementById("idioma");
    const valueidioma = inputidioma.value;

    const inputempleo = document.getElementById("empleo");
    const valueempleo = inputempleo.value;

    const inputeducacion = document.getElementById("educacion");
    const valueeducacion = inputeducacion.value;

    const inputSkill = document.getElementById("Skill");
    const valueSkill = inputSkill.value;

    const inputCertificaciones = document.getElementById("Certificaciones");
    const valueCertificaciones = inputCertificaciones.value;

    if (valueName == "" || valueName == null || valueName == undefined) {
        isvalie = false
        inputName.classList.add("input-error");
        inputName.classList.remove("input-access");
    } else {
        inputName.classList.remove("input-error");
        inputName.classList.add("input-access");
    }

    if (valueDireccion == "" || valueDireccion == null || valueDireccion == undefined) {
        isvalie = false
        inputDireccion.classList.add("input-error");
        inputDireccion.classList.remove("input-access");
    } else {
        inputDireccion.classList.remove("input-error");
        inputDireccion.classList.add("input-access");
    }


    if (valueTelefono == "" || valueTelefono == null || valueTelefono == undefined) {
        isvalie = false
        inputTelefono.classList.add("input-error");
        inputTelefono.classList.remove("input-access");
    } else {
        inputTelefono.classList.remove("input-error");
        inputTelefono.classList.add("input-access");
    }

    if (valuecorreo == "" || valuecorreo == null || valuecorreo == undefined) {
        isvalie = false
        inputcorreo.classList.add("input-error");
        inputcorreo.classList.remove("input-access");
    } else {
        inputcorreo.classList.remove("input-error");
        inputcorreo.classList.add("input-access");
    }

    if (valueURL == "" || valueURL == null || valueURL == undefined) {
        isvalie = false
        inputURL.classList.add("input-error");
        inputURL.classList.remove("input-access");
    } else {
        inputURL.classList.remove("input-error");
        inputURL.classList.add("input-access");
    }

    if (valueresumen == "" || valueresumen == null || valueresumen == undefined) {
        isvalie = false
        inputresumen.classList.add("input-error");
        inputresumen.classList.remove("input-access");
    } else {
        inputresumen.classList.remove("input-error");
        inputresumen.classList.add("input-access");
    }

    if (valueidioma == "" || valueidioma == null || valueidioma == undefined) {
        isvalie = false
        inputidioma.classList.add("input-error");
        inputidioma.classList.remove("input-access");
    } else {
        inputidioma.classList.remove("input-error");
        inputidioma.classList.add("input-access");
    }

    if (valueempleo == "" || valueempleo == null || valueempleo == undefined) {
        isvalie = false
        inputempleo.classList.add("input-error");
        inputempleo.classList.remove("input-access");
    } else {
        inputempleo.classList.remove("input-error");
        inputempleo.classList.add("input-access");
    }

    if (valueeducacion == "" || valueeducacion == null || valueeducacion == undefined) {
        isvalie = false
        inputeducacion.classList.add("input-error");
        inputeducacion.classList.remove("input-access");
    } else {
        inputeducacion.classList.remove("input-error");
        inputeducacion.classList.add("input-access");
    }

    if (valueSkill == "" || valueSkill == null || valueSkill == undefined) {
        isvalie = false
        inputSkill.classList.add("input-error");
        inputSkill.classList.remove("input-access");
    } else {
        inputSkill.classList.remove("input-error");
        inputSkill.classList.add("input-access");
    }
    if (valueCertificaciones == "" || valueCertificaciones == null || valueCertificaciones == undefined) {
        isvalie = false
        inputCertificaciones.classList.add("input-error");
        inputCertificaciones.classList.remove("input-access");
    } else {
        inputCertificaciones.classList.remove("input-error");
        inputCertificaciones.classList.add("input-access");
    }

    return isvalie;
}