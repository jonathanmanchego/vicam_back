# vicam_back

guardar prestamista: localhost:3000/api/prestamistas/save
{
"user_nick": "76651725 ",
"user_password":"kkasmdkmas",
"prestamista":{
"prestamista_codigo": "dni",
"prestamista_nombres": "mois",
"prestamista_apellidos": "Fer",
"prestamista_dni": "9445422",
"prestamista_celular1": "89846546",
"prestamista_celular2": "797897988",
"prestamista_telefono": "95465464564",
"prestamista_correo": "correo",
"prestamista_password": "password",
"prestamista_direccion": "direccion"
}
}

guardar tarjeta y cuenta ahorro: localhost:3000/api/tarjetas/save
{
"prestamista_id": 1,
"banco_id": 2,
"tarjeta_num": "",
"cuenta_ahorro": {
"prestamista_id": 1,
"banco_id": 2,
"cuenta_numero": "00894564654"
}
}

guardar solicitud: localhost:3000/api/solicitudes/save
{
"estado_solicitud_id": 1,
"cuenta_ahorro_id": 1,
"tarjeta_id": 1,
"prestamista_id": 1,
"banco_id": 2,
"plazo_pago_id": 1,
"solicitud_numero": "8778787",
"solicitud_fecha": "2020-02-02",
"solicitud_numero_deposito": "646546",
"solicitud_boucher": "ruta",
"solicitud_duracion_meses": 5,
"solicitud_monto": 300
}

guardar contrato: localhost:3000/api/contratos/save
{
"prestamista_id": 1,
"estado_contrato_id": 1,
"solicitud_id": 4,
"contrato_fecha": "03-03-2020",
"contrato_url_file": "OSADOAJSF"
}

////ESTADO SOLICITUD

- 1 PENDIENTE
- 2 ACEPTADO
- 3 RECHAZADO
- 4 EN CONTRATO

////ESTADO DE CONTRATO

- 1 PENDIENTE
- 2 ACEPTADO
- 3 RECHAZADO CLIENTE
- 4 RECHAZADO EMPRESA

///ROLES

- 1 ADMIN
- 2 EMPLEADO

////////////// PENDIENTES

- DEPARTAMENTO
- PROVINCIA
-