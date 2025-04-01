# Ejercicios de XML y DTD

1) Se representarán las clases, donde debe existir al menos una clase que se deberá componer de al
menos un profesor, y al menos un alumno o alumna. Por cada profesor se registrará su nombre y
puede registrarse sus apellidos. por cada alumno o alumna se registrarán tanto nombre como
apellidos. por cada clase se establece que por defecto hay pizarra pudiendo no haberla

2) Inmobiliaria. Debe disponer de almenos una casa. Por cada casa se conocen los metros y la
dirección. Pueden aparecer propietarios y precio En la dirección texto y/o descripción

3) Banco. Se guardan las cuentas y clientes de cada uno debe haber al menos uno. De igual manera se guarda la información que vincula cuenta_cliente, que es una entidad vacía. De cliente se guarda nombre y apellidos y un id. De cuenta un id y el interés que tiene ( a modo de atributo) y el saldo. cuenta_cliente tiene un id y los atributos correspondientes para vincular los dos elementos.

4) Realizar el dtd que represente lo siguiente:

```xml
<Concesionario>
<Modelo id="Modelo556">No disponible</Modelo>
<Modelo id="Modelo555" Modelos_relacionados="Modelo444 Modelo556">
Este modelo tiene un <Motor Modelos_relacionados="Modelo556">1.998cc 16v. de cuatro cilindros</Motor> que
desarrolla una potencia de <Potencia>128</Potencia> CV. Dispone de cambio manual ... el consumo medio de este
monovolumen es <Consumo_medio Velocidad_km="100">11</Consumo_medio> a los 100 km. El precio base es de
2.225.000.
</Modelo>
<Modelo id="Modelo557">No disponible</Modelo>
<Modelo id="Modelo154">No disponible</Modelo>
<Modelo id="Modelo444" Modelos_relacionados="Modelo555 Modelo154">
Este modelo tiene un <Motor Modelos_relacionados="Modelo556">2.000cc 16v. de cuatro cilindros</Motor> con
<Potencia>128</Potencia> CV. Dispone de cambio manual ... el consumo medio de este monovolumen es
<Consumo_medio Velocidad_km="100">11</Consumo_medio> a los 100 km. El precio base es de 2.500.000.
</Modelo>
</Concesionario>
```

5) Información de personas. Por cada persona ( habrá al menos una): nombre y apellidos,
nacimiento es opcional, pero de estar presente será con atributos dia, mes anyo todos de obligada
presencia. Una persona puede tener varias direcciones. la dirección está compuesta por calle,
población, provincia, codigopostal donde éste último es opcional. Finalmente debe aparecer un
elemento varon o mujer mutuamente excluyente

6) Se guardará información de entrenamiento. Debe haber al menos un cliente y se registrarán de
haberlas las sesiones de cada cliente nombre, apellido1 y de haberlo apellido2 así como un id. De cada sesión su
duración, distancia, localización y ( de haberlo) comentario. Así como, por defecto el tipo de
actividad es running y las otras posibles natación, bicicleta. Como un atributo se guarda el número de pulsaciones ( es opcional) y una
referencia al id del cliente La duración tiene por atributo unidad ( por defecto minutos y las otras posibles: segundos, horas)
La distancia por defecto será kilómetros y los otros valores: millas, vuelta

7) Catálogo cursos:
como mínimo un alumno un curso y el vínculo entre ambos. Adicionalmente los profesores y su
vínculo con los cursos ( de haberlos)
Una entidad llamada nn que guarda: "Juan Luís de Todos Los Santos Ramón" que debe usarse en el
nombre de algún profesor. por cada alumno nombre y apellidos y un id. Igualmente para profesor.
Como los cursos se imparten una vez por año, basta con esa información junto con las referencias
para los elementos de vínculo que se realicen tanto para profesor como para alumno. Los elementos
de vínculo son vacíos salvo por los atributos
SE DEBEN RELLENAR LOS CURSOS CON LOS DATOS DE LOS MODULOS DEL CICLO
QUE ESTÁS CURSANDO
Un pequeño trozo de ejemplo ( falta bastante por rellenar )

```xml
<alumno idAlumno="alu04">
<nombre>Sofía</nombre>
<apellidos>Cáceres</apellidos>
</alumno>
<profesor idProfesor="prof01">
<nombre>&nn;</nombre>
<apellidos>Schmidt</apellidos>
</profesor>
<curso idCurso="cur02">Lenguaje de Marcas</curso>
<profesor_curso refCurso="cur01" refProfesor="prof01" año="2016"></profesor_curso>
.
.
.
```
