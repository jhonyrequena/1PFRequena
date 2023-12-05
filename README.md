# PFRequena

Este Proyecto fue generado utilizando: [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Servidor de Desarrollo

Para la utilización del servidor se debe utilizar el comando "json-server --watch db.json" en la terminal, esto
creara la conexión con el puerto http://localhost:3000 de desarrollo.

###

Para dar inicio a la aplicacion se debe utilizar el comando "ng serve -o" en la terminal, esto conectara el proyecto con el servidor local y dara acceso a la pantalla de autenticación.

####
Los usuarios fueron creados bajo dos roles, ADMIN Y EMPLOYEE.

#
El usuario con rol ADMIN es:
------------------
requena@mail.com
contraseña: 123456
-------------------
El mismo tiene todas las capacidades de uso dentro de la aplicación, como crear, editar y elimnar usuarios, cursos, alumnos e inscripciones.

#
El usuario con rol EMPLOYEE es:
--------------------
montenegro@mail.com
contraseña: 123456
--------------------
Este usuario tiene casi todas las capacidades de un administrador, con diferencia que el mismo no tiene acceso a la pantalla de usuarios, y no puede eliminar ni editar alumnos.

La aplicación cuenta con 5 pantallas, un toolbar y sidebar.

El toolbar muestra el nombre de la pantalla en la que te encuentras, el nombre y el email del usuario logueado, ademas cuenta con un boton a la izquierda para ocultar el sidebar y un boton a la derecha para desloguear al usuario.

En el sidebar encuentras un panel de tipo administrativo que tiene los botones de navegacion:

1.- Home, que se encuentra vacio solo con información del nombre de la institución. Espero poder mas adelante agregar informacion de manera dinamica para hacer la pantalla de inicio mas interesante.

2.- Usuarios, tiene cargado en una tabla los usuarios con toda su información, incluido: id, nombre completo, email, y la categoria.

3- Cursos, aqui se cargan los datos de los cursos que estaran a disposicion del panel administrativo para inscribir alumnos en estos cursos, contiene informacióin como un id, el nombre, una fecha de inicio y una fecha de fin.

4.- Alumnos, en esta pantalla se pueden ver todos los datos de los alumnos registrados.

5.- Inscripciones, en esta pantalla se tiene acceso tanto a la lista de alumnos como la de cursos, para asi poder inscribir alumnos en los cursos disponibles.

