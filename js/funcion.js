
var arreglo = new Array();
var opp;
var pro1;
var causa1;
var solucion1;
var aux;
var i;
var uno=0,dos=0,tres=0,cuatro=0,cinco=0,seis=0,siete=0,ocho=0,nueve=0,diez=0;
pro1="<h2>1. PC con bajo rendimiento</h2>";
arreglo.push(pro1);
causa1="Este es el problema mas habitual entre los usuarios. Pueden haber muchas razones que expliquen una baja en el rendimiento de la PC. La mas comun es la presencia de datos fragmentados, presencia de spyware, registro corrupto, y programas innecesarios. ";
arreglo.push(causa1);
solucion1="-Chequear los programas que tenemos instalados, borrar los archivos innecesarios, y ganar velocidad y rendimiento, ya sea desfragmentando el disco, o bien anadiendo memoria a la maquina. Para Mejorar EL Sistema Pueden Instalarse EL CClear ";
arreglo.push(solucion1);



pro1="<h2>2. La computadora se reinicia automáticamente o se apaga</h2>";
arreglo.push(pro1);
causa1="Pueden ser dos. La presencia de un “gusano” (un tipo de virus), o alguna obstrucción dentro del gabinete o el cooler. Esto último sucede cuando la PC no puede refrescarse: antes de recalentarse, sencillamente se apaga. ";
arreglo.push(causa1);
solucion1="Si se trata de un virus, correr los antivirus correspondientes. Si el problema es una obstrucción, una buena forma de evitarlo es mantener el interior del gabinete y el cooler limpios, tener la cpu en un lugar ventilado, y evitar su exposición al humo. Si el problema persiste, el problema puede ser la fuente de la PC, por lo que habría que chequear si ésta funciona correctamente o si está bien conectada.";
arreglo.push(solucion1);

pro1="<h2>3. Problemas con unidades de CD/DVD </h2>";
arreglo.push(pro1);
causa1="El polvo y la suciedad pueden acumularse en la bandeja o ranura de CD/DVD, lo cual puede interrumpir la capacidad del escáner para leer discos";
arreglo.push(causa1);
solucion1="Ve al PANEL DE CONTROL / ADMINISTRADOR DEL SISTEMA / CD-ROM y desactiva el administrador de los dispositivos.O si no puedes intentar limpiar el propio CD o DVD.";
arreglo.push(solucion1);


pro1="<h2>4. Windows falla al arrancar </h2>";
arreglo.push(pro1);
causa1="Otro problema frecuente con las computadoras es que Windows falla al arrancar al inicio, lo cual evita que accedas a tus archivos.";
arreglo.push(causa1);
solucion1=" Si esto ocurre, puedes tratar de iniciar tu computadora en modo seguro o arrancar con la ayuda de un CD de sistema. Si estas opciones no funcionan, es probable que tengas que reinstalar el sistema operativo con tu disco de recuperación de Windows.";
arreglo.push(solucion1);


pro1="<h2>5. Incapacidad para conectarse a Internet </h2>";
arreglo.push(pro1);
causa1="Los problemas de conexión a Internet pueden tener una amplia gama de causas. Cables de red conectados de forma inapropiada, una dirección IP incorrecta y conflictos con aplicaciones firewall pueden provocar problemas de conexión.";
arreglo.push(causa1);
solucion1=" Desbes checkear que los cables de red esten conectados apropiadamente. Verfificar que todos los componentes de tu pc que permiten la conectividad funcionen correctamente. SI el problema persiste debes ponerte en contacto con un tecnico, o con tu proveedor de servicios";
arreglo.push(solucion1);

pro1="<h2>6. WINDOWS NO PUEDE ENCONTRAR EL NUEVO HADWARE </h2>";
arreglo.push(pro1);
causa1="Primero consulta el manual para verificar que el dispositivo esté correctamente instalado";
arreglo.push(causa1);
solucion1=" Encuentra el dispositivo que tiene el problema. Si se levanta la bandera, utilice PROPIEDADES para ver cuál es el problema. Si no se soluciona, haz clic en QUITAR y reinicie el equipo. Ahora Windows debe volver a reconocer el hardware que acabas de quitar y debe instalar los controladores adecuados, para lo cual necesita tener primero una copia del nuevo controlador del sistema. Si no funciona, utiliza el asistente AGREGAR NUEVO HARDWARE para seleccionar el dispositivo y controladores manualmente. ";
arreglo.push(solucion1);


pro1="<h2>7. La computadora no arranca</h2>";
arreglo.push(pro1);
causa1="Si la computadora no enciende, es posible que se deba a un problema con la toma de alimentación. ";
arreglo.push(causa1);
solucion1=" Para probarla puedes conectar otro dispositivo eléctrico para ver si funciona. Si la toma está operativa, la computadora puede necesitar una reparación.";
arreglo.push(solucion1);



pro1="<h2>8. Incapacidad para borrar archivos</h2>";
arreglo.push(pro1);
causa1="En ocasiones la computadora no te permitirá eliminar archivos. Eso generalmente se debe a una violación de los derechos de intercambio, lo que significa que otro programa se encuentra usando ese archivo,. ";
arreglo.push(causa1);
solucion1=" La solución es cerrar el programa que está utilizando el archivo.";
arreglo.push(solucion1);


pro1="<h2>9. Plantallas azules o se reinicia sola</h2>";
arreglo.push(pro1);
causa1="Los problemas con el hardware pueden causar problemas en la computadora. Si algunas piezas generadoras de energía se están gastando o si hay piezas defectuosas, pueden ser culpables de estos problemas.";
arreglo.push(causa1);
solucion1="  Mantén el ventilador limpio y asegúrate de que todos los cables y enchufes estén bien conectados";
arreglo.push(solucion1);



pro1="<h2>10. No responde </h2>";
arreglo.push(pro1);
causa1="Cuando tu computadora no encuentra un driver actualizado, no responde o se cuelga..";
arreglo.push(causa1);
solucion1="  Los drivers de hardware se deben actualizar de manera regular. Además eso ayuda a incrementar la memoria RAM virtual de tu computadora.";
arreglo.push(solucion1);


/*Imprimimos los valores del arreglo*/
for(i=0;i<=29;i++)
{
document.write(arreglo[i]+"<br>"+"<br>");

}


document.write("<h5>PROBLEMAS MAS COMUNES</h5>");

