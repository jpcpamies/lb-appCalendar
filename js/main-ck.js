// Facebook
function toggleMenu(e){var t=document.getElementById(e);t.className=="boto"?t.className="botoOn":t.className="boto"}function resizer(e){for(var t=0;t<texto.length;t++){texto[t].style.fontSize==""&&(texto[t].style.fontSize="1.0em");texto[t].style.fontSize=parseFloat(texto[t].style.fontSize)+e*.1+"em"}}function mostrar(e){resetearProg();var t=document.getElementById(e);t.className="llistaVisible"}function resetearProg(){for(var e=0;e<prog.length;e++)prog[e].className=="llistaVisible"?prog[e].className="llistaInvisible":prog[e].className="llistaInvisible"}function togglePes(e){var t=document.getElementById(e);$(t).slideToggle("fast")}function vistaDia(){var e=$("link")[2];if(e.href="css/estilosNoche.css"){e.href="css/estilosDia.css";$("#inici").addClass("boto");$("#inici").removeClass("botoOn")}}function vistaNoche(){var e=$("link")[2];if(e.href="css/estilosDia.css"){e.href="css/estilosNoche.css";$("#inici").addClass("boto");$("#inici").removeClass("botoOn")}}(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n))return;r=e.createElement(t);r.id=n;r.src="//connect.facebook.net/es_ES/all.js#xfbml=1";i.parentNode.insertBefore(r,i)})(document,"script","facebook-jssdk");!function(e,t,n){var r,i=e.getElementsByTagName(t)[0],s=/^http:/.test(e.location)?"http":"https";if(!e.getElementById(n)){r=e.createElement(t);r.id=n;r.src=s+"://platform.twitter.com/widgets.js";i.parentNode.insertBefore(r,i)}}(document,"script","twitter-wjs");var fecha=new Date,numero=fecha.getDate(),dia=fecha.getDay(),mes=fecha.getMonth(),horas=fecha.getHours(),minutos=fecha.getMinutes(),texto=document.getElementsByClassName("detallEvent"),prog=document.getElementsByClassName("llistaVisible"),bot=document.getElementsByClassName("dia"),meses=["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],diasSemana=["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"];document.getElementById("divDia").innerHTML=diasSemana[dia];document.getElementById("divNumero").innerHTML=numero;document.getElementById("divMes").innerHTML=meses[mes];