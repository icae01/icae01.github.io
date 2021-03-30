$(document).ready(function () {
    let vers = ["Y nosotros oímos esta voz enviada del cielo, cuando estábamos con él en el monte santo  Tenemos también la palabra profética más segura, a la cual hacéis bien en estar atentos como a una antorcha que alumbra en lugar oscuro, hasta que el día esclarezca y el lucero de la mañana salga en vuestros corazones;", "Todo lo puedo en Cristo que el me Fortaleze;"];
    let cita_vers = ["2da Pedro 1:19", "Filipenses 4:13"];

    for(let i = 0; i < vers.length; i++){
        if(cita_vers[i] == undefined){
            cita_vers[i] = "Cita no Definida";
        }
    }

    // Creando Items Versiculo
    for(let i = 0; i < vers.length; i++){
        let li = $("<li></li>");
        let cita = $("<div></div>");

        li.attr("class", "item-vers");
        li.text('" '+vers[i]+' "');

        cita.attr("class", "cita");
        cita.text(cita_vers[i]);

        $(li).append(cita);
        $(".v-slider").append(li);
    }

    // Funcion para mostrar

    let vi = 1;
    let wli = window.outerWidth;
    
    $(".v-slider li").hide();
    $(".v-slider li:nth-child("+vi+")").show();
    $(".v-slider li").css("left", wli+"px");
    $(".v-slider li:nth-child("+vi+")").animate({
        "left": "-="+wli+"px"
    });
    
    // Dinamizando los Items
    if(vers.length > 1){
        setInterval(() => {
            $(".v-slider li").hide();
            $(".v-slider li:nth-child("+vi+")").show();
            $(".v-slider li:nth-child("+vi+")").animate({
                "left": "+="+wli+"px"
            });
            
            setTimeout(() => {
                $(".v-slider li").hide();
                $(".v-slider li:nth-child("+vi+")").show();
                
                $(".v-slider li:nth-child("+vi+")").animate({
                    "left": "-="+wli+"px"
                });
            }, 1500);
    
            if(vi == vers.length){vi = 1;}else{
                vi++;
            }
        }, 15000);
    }
});