$(document).ready(function(){

    //Eventos

    $("#Guardar").on("click", function() {
        Generar();
    } );


    function Generar(){
        if (validate()){
            alert("todo nitido")
        }else{
            ("aun no")
        }
    }

    function validate(){
        let isvalie = true;
        const valueName = $("#name").val();
        const valueProvincia = $("#Provincia").val();
        const valueCiudad = $("#Ciudad").val();
        const valueSector = $("#Sector").val();
        const valueCalle = $("#Calle").val();

        if (valueName == "" || valueName == null || valueName == undefined) {
            isvalie = false;
            $("#name").addclass("input-error")
            $("#name").removeclass("input-access");
        } else {
            $("#name").addclass("input-access");
            $("#name").removeclass("input-error");
        }

        if (valueProvincia == "" || valueProvincia == null || valueProvincia == undefined) {
            isvalie = false;
            $("#Provincia").addclass("input-error");
            $("#Provincia").removeclass("input-access");
        } else {
            $("#Provincia").addclass("input-access");
            $("#Provincia").removeclass("input-error");
        }

        if (valueCiudad == "" || valueCiudad == null || valueCiudad == undefined) {
            isvalie = false;
            $("#Ciudad").addclass("input-error");
            $("#Ciudad").removeclass("input-access");
        } else {
            $("#Ciudad").addclass("input-access");
            $("#Ciudad").removeclass("input-error");
        }

        if (valueSector == "" || valueSector == null || valueSector == undefined) {
            isvalie = false;
            $("#Sector").addclass("input-error");
            $("#Sector").removeclass("input-access");
        } else {
            $("#Sector").addclass("input-access");
            $("#Sector").removeclass("input-error");
        }

        if (valueCalle == "" || valueCalle == null || valueCalle == undefined) {
            isvalie = false;
            $("#Calle").addclass("input-error");
            $("#Calle").removeclass("input-access");
        } else {
            $("#Calle").addclass("input-access");
            $("#Calle").removeclass("input-error");
        }
    return isvalie;
    }
    
})