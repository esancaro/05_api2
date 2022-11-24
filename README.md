# Ejercicio final - API REST Completo

Este ejercicio es continuación del "Ejercicio 3" por lo que deberá contener de base los mismos requisitos que se pedían para el Ejercicio 3 (CRUD posts, registro, ...) con las siguientes funcionalidades adicionales:

Confirmación de registro

Tras crear un usuario (POST /api/users) éste se creara con el campo active: false. El servidor enviará un email a la dirección de correo de registro compartiendo una URL con la que el usuario que reciba el correo pueda hacer GET para modificar el campo "active" de su cuenta a valor "true".

NOTA: no es necesario enviar un email. El enlace de validación de cuenta puede ser accedido sin necesidad de enviar un email.

Solo usuarios con el campo active == true podrán hacer login (POST /api/login)
