//** USUARIOS */
const user1 =
{
    "user_nick": "00000001",
    "user_password":"prestamista1",
    "prestamista":{
        "localia_id": 1,
        "provincia_id": 1,
        "departamento_id": 1,
        "pais_id": 1,
        "prestamista_codigo": "001",
        "prestamista_nombres": "Luis Manuel",
        "prestamista_apellidos": "Lopes Copa",
        "prestamista_dni": "00000001",
        "prestamista_celular1": "89846546",
        "prestamista_celular2": "797897988",
        "prestamista_telefono": "95465464564",
        "prestamista_correo": "lmlc@gmail.com",
        "prestamista_direccion": "calle los caminos S/N"
    }
}
const user2=
{
    "user_nick": "00000002",
    "user_password":"prestamista2",
    "prestamista":{
        "localia_id": 2,
        "provincia_id": 2,
        "departamento_id": 1,
        "pais_id": 1,
        "prestamista_codigo": "002",
        "prestamista_nombres": "Ronald",
        "prestamista_apellidos": "Chavez Chavez",
        "prestamista_dni": "00000002",
        "prestamista_celular1": "89846546",
        "prestamista_celular2": "797897988",
        "prestamista_telefono": "95465464564",
        "prestamista_correo": "rcc@gmail.com",
        "prestamista_direccion": "calle los olvidados S/N"
    }
}
const user3=
{
    "user_nick": "00000003",
    "user_password":"prestamista3",
    "prestamista":{
        "localia_id": 3,
        "provincia_id": 1,
        "departamento_id": 1,
        "pais_id": 1,
        "prestamista_codigo": "003",
        "prestamista_nombres": "Eudis",
        "prestamista_apellidos": "Roman Vaca",
        "prestamista_dni": "00000003",
        "prestamista_celular1": "89846546",
        "prestamista_celular2": "797897988",
        "prestamista_telefono": "95465464564",
        "prestamista_correo": "erv@gmail.com",
        "prestamista_direccion": "calle los pinos S/N"
    }
}
const user4=
{
    "user_nick": "00000004",
    "user_password":"prestamista4",
    "prestamista":{
        "localia_id": 4,
        "provincia_id": 1,
        "departamento_id": 1,
        "pais_id": 1,
        "prestamista_codigo": "004",
        "prestamista_nombres": "Esmeralda",
        "prestamista_apellidos": "Cruz Pacheco",
        "prestamista_dni": "00000004",
        "prestamista_celular1": "89846546",
        "prestamista_celular2": "797897988",
        "prestamista_telefono": "95465464564",
        "prestamista_correo": "ecp@gmail.com",
        "prestamista_direccion": "calle los olivos S/N"
    }
}
//// TARJETAS - CUENTAS
const tc1 =
{
    "prestamista_id": 1,
    "banco_id": 2,
    "tipo_tarjeta_id":1,
    "tarjeta_num": "",
    "cuenta_ahorro": {
        "prestamista_id": 1,
        "banco_id": 2,
        "cuenta_numero": "0879564321-1"
    }
}
const tc2 =
{
    "prestamista_id": 2,
    "banco_id": 2,
    "tipo_tarjeta_id":1,
    "tarjeta_num": "",
    "cuenta_ahorro": {
        "prestamista_id": 2,
        "banco_id": 2,
        "cuenta_numero": "0879564321-2"
    }
}
const tc3 =
{
    "prestamista_id": 3,
    "banco_id": 3,
    "tipo_tarjeta_id":1,
    "tarjeta_num": "",
    "cuenta_ahorro": {
        "prestamista_id": 3,
        "banco_id": 3,
        "cuenta_numero": "0879564321-3"
    }
}
const tc4 =
{
    "prestamista_id": 4,
    "banco_id": 1,
    "tipo_tarjeta_id":1,
    "tarjeta_num": "",
    "cuenta_ahorro": {
        "prestamista_id": 4,
        "banco_id": 1,
        "cuenta_numero": "0879564321-4"
    }
}

//SOLICITUDES

const solicitud1 =
{
    "estado_solicitud_id": 1,
    "cuenta_ahorro_id": 1,
    "tarjeta_id": 1,
    "prestamista_id": 1,
    "banco_id": 2,
    "plazo_pago_id": 1,
    "solicitud_fecha": "2020-02-02",
    "solicitud_numero_deposito": "00001",
    "solicitud_boucher": "ruta",
    "solicitud_duracion_meses": 6,
    "solicitud_monto": 20000,
    "solicitud_tasa_interes_personalizado":0.6
}
const solicitud2 =
{
    "estado_solicitud_id": 1,
    "cuenta_ahorro_id": 2,
    "tarjeta_id": 2,
    "prestamista_id": 2,
    "banco_id": 2,
    "plazo_pago_id": 1,
    "solicitud_fecha": "2020-03-15",
    "solicitud_numero_deposito": "00002",
    "solicitud_boucher": "ruta",
    "solicitud_duracion_meses": 6,
    "solicitud_monto": 15000,
    "solicitud_tasa_interes_personalizado":0.6
}
const solicitud3 =
{
    "estado_solicitud_id": 1,
    "cuenta_ahorro_id": 3,
    "tarjeta_id": 3,
    "prestamista_id": 3,
    "banco_id": 3,
    "plazo_pago_id": 1,
    "solicitud_fecha": "2020-05-20",
    "solicitud_numero_deposito": "00003",
    "solicitud_boucher": "ruta",
    "solicitud_duracion_meses": 6,
    "solicitud_monto": 32000,
    "solicitud_tasa_interes_personalizado":0.6
}
const solicitud4 =
{
    "estado_solicitud_id": 1,
    "cuenta_ahorro_id": 4,
    "tarjeta_id": 4,
    "prestamista_id": 4,
    "banco_id": 1,
    "plazo_pago_id": 2,
    "solicitud_fecha": "2020-06-21",
    "solicitud_numero_deposito": "00004",
    "solicitud_boucher": "ruta",
    "solicitud_duracion_meses": 12,
    "solicitud_monto": 12000,
    "solicitud_tasa_interes_personalizado":0.6
}