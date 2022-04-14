"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = __importDefault(require("../models/banco"));
const contrato_1 = __importDefault(require("../models/contrato"));
const cuentaAhorro_1 = __importDefault(require("../models/cuentaAhorro"));
const estadoContrato_1 = __importDefault(require("../models/estadoContrato"));
const prestamista_1 = __importDefault(require("../models/prestamista"));
const solicitud_1 = __importDefault(require("../models/solicitud"));
var pdf = require("html-pdf");
var fs = require("fs");
class ContratoController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataSave = req.body;
                const dbResponse = yield contrato_1.default.create(dataSave);
                res.json({
                    status: true,
                    msg: "Registro guardado",
                    data: dbResponse,
                });
            }
            catch (error) {
                res.json({
                    status: false,
                    msg: "ocurrio un error",
                    dataError: error,
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dbResponse = yield contrato_1.default.findAll({
                    include: [
                        {
                            model: estadoContrato_1.default,
                        },
                        {
                            model: prestamista_1.default,
                        },
                        {
                            model: solicitud_1.default,
                        },
                    ],
                });
                res.json({
                    status: true,
                    msg: "Lista de contratos",
                    data: dbResponse,
                });
            }
            catch (error) {
                res.json({
                    status: false,
                    msg: "ocurrio un error!",
                    dataError: error,
                });
            }
        });
    }
    contratoPDF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const dataContrato = yield contrato_1.default.findByPk(req.params.id);
                const dataPrestamista = yield prestamista_1.default.findByPk(dataContrato === null || dataContrato === void 0 ? void 0 : dataContrato.getDataValue("prestamista_id"));
                const dataSolicitud = yield solicitud_1.default.findByPk(dataContrato === null || dataContrato === void 0 ? void 0 : dataContrato.getDataValue("solicitud_id"));
                const dataCuenta = yield cuentaAhorro_1.default.findByPk(dataSolicitud === null || dataSolicitud === void 0 ? void 0 : dataSolicitud.getDataValue("cuenta_ahorro_id"));
                const dataBanco = yield banco_1.default.findByPk(dataSolicitud === null || dataSolicitud === void 0 ? void 0 : dataSolicitud.getDataValue("banco_id"));
                const allData = {
                    dataContrato,
                    dataPrestamista,
                    dataSolicitud,
                    dataCuenta,
                    dataBanco,
                };
                const dataPersona = {
                    fullname: (dataPrestamista === null || dataPrestamista === void 0 ? void 0 : dataPrestamista.getDataValue("prestamista_nombres")) +
                        " " +
                        (dataPrestamista === null || dataPrestamista === void 0 ? void 0 : dataPrestamista.getDataValue("prestamista_apellidos")),
                    dni: dataPrestamista === null || dataPrestamista === void 0 ? void 0 : dataPrestamista.getDataValue("prestamista_dni"),
                    domicilio: dataPrestamista === null || dataPrestamista === void 0 ? void 0 : dataPrestamista.getDataValue("prestamista_direccion"),
                    correo: dataPrestamista === null || dataPrestamista === void 0 ? void 0 : dataPrestamista.getDataValue("prestamista_correo"),
                    departamento: "EN MANTENIMIENTO",
                };
                const dataPrestamo = {
                    cant_prestamo: dataSolicitud === null || dataSolicitud === void 0 ? void 0 : dataSolicitud.getDataValue("solictud_monto"),
                    fecha_deposito: "2020-03-03",
                    dias_prestamo: 60,
                    fecha_inicio: "2020-03-03",
                    fecha_fin: "2020-03-03",
                    total_pagar_final: 80000,
                };
                const dataCuentaAhorro = {
                    num_cuenta: dataCuenta === null || dataCuenta === void 0 ? void 0 : dataCuenta.getDataValue("cuenta_numero"),
                    banco: dataBanco === null || dataBanco === void 0 ? void 0 : dataBanco.getDataValue("banco_name"),
                };
                const htmlPDF = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8" />
                    <title>PDF Result Template</title>
                    <style>
                    h4 {
                        color: black;
                        text-decoration: underline;
                        text-align: center
                    }
                    .justify{
                        text-align: justify;
                    }
                    .center{
                        text-align: center;
                    }
                    .blue{
                        color: blue
                    }
                    </style>
                </head>
                <body>
                    <div
                    id="pageHeader"
                    style="border-bottom: 1px solid #ddd; padding-bottom: 5px; text-align: center;"
                    >
                    <h1>VICAM <br> CORPORATION</h1>
                    <img src="https://vicamfront.herokuapp.com/assets/images/logo/logo-sidenav.jpg">
                    </div>
                    <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px">
                    <p
                        style="
                        color: #666;
                        width: 70%;
                        margin: 0;
                        padding-bottom: 5px;
                        text-align: let;
                        font-family: sans-serif;
                        font-size: 0.65em;
                        float: left;
                        "
                    >
                        <p class="center"> 
                            <a class="blue">jchung@vicamcg.com / schung@vicamcg.com</a> <br>
                            <a class="blue">www.vicamcg.com / 917-908-169</a>
                            <br>
                            SAN MIGUEL, LIMA - PERU
                        </p>                        

                    </p>
                    <p
                        style="
                        color: #666;
                        margin: 0;
                        padding-bottom: 5px;
                        text-align: right;
                        font-family: sans-serif;
                        font-size: 0.65em;
                        "
                    >
                        Página {{page}} de {{pages}}
                    </p>
                    </div>
                    
                    <h4>CONTRATO DE MUTUO DINERARIO N° “CODIGO DE LA PERSONA”</h4>
                    <div>
                    <p class="justify">
                        Conste por el presente contrato de mutuo dinerario que celebran de una parte ${dataPersona.fullname}, identificado con D.N.I. Nº ${dataPersona.dni}, con domicilio real en “DOMICILIO DE LA PERSONA” ${dataPersona.domicilio}, de la Provincia y Departamento de “DEPARTAMENTO DE LA PERSONA”, a quien en adelante se le denominará EL MUTUANTE y de la otra parte CORPORACIÓN VICAM identificado con RUC. N° 20602294979, debidamente representado Sergio Enrique Chung Chung en calidad de gerente general, identificado con DNI. Nº 46097329 y con domicilio en Calle Eugenio de la Torre Nro. 231 Dpto. 502 distrito de San Miguel de la Provincia y Departamento de Lima, a quien en adelante se le denominará EL MUTUATARIO; en los términos y condiciones siguientes:
                    </p>
                    <h6>PRIMERO: ANTECEDENTES</h6>
                    <p class="justify">
                        EL MUTUATARIO es una empresa constituida en la localidad de Lima dedicada a realizar inversiones en diferentes modalidades en construcción de edificaciones, carreteras y vías de ferrocarril y además dotación de aguas embotelladas y otros no perecibles dentro del territorio peruano.
                    </p>
                    <p class="justify">
                        EL MUTUANTE Es una persona natural que se encuentra en capacidad de facilitar dicho capital para que EL MUTUATARIO pueda desarrollar sus actividades empresariales.
                    </p>
                    <h6>SEGUNDO: DEL OBJETO DEL MUTUO</h6>
                    <p class="justify">
                        En virtud del presente contrato, EL MUTUANTE otorgó en calidad de préstamo con intereses a favor de EL MUTUATARIO la suma de S/. ${dataPrestamo.cant_prestamo} (“CANTIDAD DE PRESTAMO ESCRITO DE LA PERSONA” soles), los mismos que fueron depositados el día ${dataPrestamo.fecha_deposito} “FECHA DE DEPOSITO: DIA de MES del AÑO”, como consta en la última hoja del presente contrato.
                    </p>

                    <p class="justify">
                        En tal virtud, EL MUTUATARIO declara que ha recibido el íntegro del préstamo a entera satisfacción
                    </p>
                    <h6>TERCERO: DEL PAGO DE CAPITAL E INTERESES</h6>
                    <p class="justify">
                        EL MUTUATARIO se compromete a pagar la deuda capital y los intereses a EL MUTUANTE en el plazo improrrogable de ${dataPrestamo.dias_prestamo} días calendario, computados a partir del día “DIA SIGUIENTE DEL PRESTAMO: DIA de MES del AÑO”, hasta el día “DIA FINAL DEL PRESTAMO: DIA de MES del AÑO”.
                    </p>
                    <p class="justify">
                        <ol>
                            •	Al cumplirse dicho plazo, la suma total a pagar es de S/. ${dataPrestamo.total_pagar_final} “MONTO DE PRESTAMO MAS INTERESES DE LA PERSONA” (“CANTIDAD DE PRESTAMO MAS INTERESES ESCRITO DE LA PERSONA” soles).
                        </ol>
                    </p>


                    <h6>CUARTO: DE LAS OBLIGACIONES DE LAS PARTES</h6>
                    <p class="justify">
                        EL MUTUANTE entregó la suma de dinero objeto de mutuo, cantidad que ya fue entregada a EL MUTUATARIO con anterioridad y que en este acto y a la suscripción del presente contrato se confirma la entrega con las firmas de las partes puestas en el presente documento.
                    </p>

                    <h6>QUINTO: DE LA FORMA Y OPORTUNIDAD DEL PAGO</h6>
                    <p class="justify">
                        En virtud del presente contrato, EL MUTUATARIO devolverá la suma de dinero objeto del mutuo, tal como lo señala la cláusula 3, en la misma moneda y con el interés pactado.
                         
                    </p>
                    <p class="justify">
                        Las partes dejan constancia que la devolución del capital y pago de intereses se realizará a EL MUTUANTE en calidad de transferencia a:
                    </p>
                    <p class="justify">
                        CUENTA DE AHORROS ${dataCuentaAhorro.num_cuenta} ${dataCuentaAhorro.banco}, o cheque si este lo considere necesario.
                    </p>
                    
                    <h6>SEXTO: DEL PLAZO</h6>
                    <p class="justify">
                        El plazo en que se cancelará la deuda incluyendo el interés pactado por parte de EL MUTUATARIO es de ${dataPrestamo.dias_prestamo} (“DIAS DE PRESTAMO ESCRITOS”) días contabilizados al día siguiente de realizado el abono, en la forma y lugar señalado en las cláusulas anteriores.
                    </p>

                    <h6>SÉTIMO: LAVADO DE ACTIVOS</h6>
                    <p class="justify">
                        EL MUTUANTE declara que los fondos con los que realiza el préstamo a EL MUTUATARIO, tiene un origen lícito y por ende no provienen de actividades ilícitas o contrarias a las buenas costumbres.
                    </p>
                    <p class="justify">
                        EL MUTUANTE exime a EL MUTUATARIO de toda responsabilidad civil, penal o administrativa si la declaración contenida en esta cláusula fuera falsa.
                    </p>

                    <h6>OCTAVO: DE LA RESOLUCIÓN DEL CONTRATO</h6>
                    <p class="justify">
                        Las partes acuerdan que el presente contrato podrá ser resuelto de pleno derecho, ante el incumplimiento de las obligaciones asumidas por las partes intervinientes.
                    </p>

                    <h6>NOVENO: DE LA SOLUCIÓN DE CONTROVERSIAS</h6>
                    <p class="justify">
                        Toda controversia derivada de la interpretación o ejecución del presente contrato será resuelta directamente por las partes, para cuyo efecto éstas se comprometen a realizar sus mayores esfuerzos para la solución armónica de sus controversias con base en las reglas de la buena fe y atendiendo a la común intención expresada en el presente contrato, en un plazo que no exceda los (20) días hábiles.
                    </p>
                    <p class="justify">
                        En caso las diferencias subsistan, la controversia será sometida a CENTRO DE CONCILIACIÓN, ARBITRAJE, los Jueces y Tribunales de la Jurisdicción de Lima.
                    </p>

                    <h6>DÉCIMO: DE LA COMUNICACIÓN</h6>
                    <p class="justify">
                        Las partes señalan, que para la validez de todas las comunicaciones y notificaciones con motivo de la celebración o ejecución del presente contrato, los domicilios corresponderán a los señalados en los antecedentes del presente contrato.
                    </p>
                    <p class="justify">
                        El cambio de domicilio de cualquiera de las partes surtirá efecto desde la fecha de comunicación a la otra parte, por cualquier medio escrito.
                    </p>
                    <p class="justify">
                        Notificación electrónica. -
                    </p>
                    <p class="justify">
                        <ol>* MUTUARIO: CORPORACIÓN VICAM/ schung@vicamcg.com</ol>
                        <ol>* MUTUANTE: ${dataPersona.fullname} / ${dataPersona.correo}</ol>
                    </p>

                    <h6>DÉCIMO PRIMERO: DE APLICACIÓN SUPLETORIA</h6>
                    <p class="justify">
                        Las partes señalan, que en todo aquello que no fue previsto en el presente contrato, se aplicará supletoriamente lo dispuesto en el Código Civil Peruano en lo referente a la figura del mutuo, artículos 1648 al 1665 y demás normas aplicables.
                    </p>

                    <h6>DÉCIMO SEGUNDO: CONCLUSIÓN DE CONTRATO - RECEPCIÓN</h6>
                    <p class="justify">
                        Las partes señalan cuando el MUTUARIO abone el pago TOTAL en la cláusula quinta bastará la acreditación de depósito o voucher, se dará de forma automática la conclusión - recepción y finalización del presente contrato.
                    </p>

                    <h6>DÉCIMO TERCERO: BUENA FE</h6>
                    <p class="justify">
                        EL MUTUANTE y EL MUTUARIO se comprometen a legalizar notarialmente las firmas, posterior a la crisis del COVID-19 y cuando las medidas sanitaras lo permitan.
                    </p>
                    <p class="justify">
                        Todos los gastos que demande al otorgamiento del presente contrato, incluyendo los derechos notariales y registrales serán pagados el 50% por parte del MUTUARIO y 50% por parte del MUTUANTE.
                    </p>

                    <h6>DÉCIMO CUARTO: CONFORMIDAD</h6>
                    <p class="justify">
                        Todos los gastos que demande al otorgamiento del presente contrato, incluyendo los derechos notariales y registrales serán pagados el 50% por parte del MUTUARIO y 50% por parte del MUTUANTE.
                    </p>
                    <p align="right">
                        lima, ${dataPrestamo.fecha_deposito}
                    </p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <table Width=100% style="text-align:center; margin: 0 auto;">
                        <tr>
                            <td>
                                MUTANTE <br>
                                ${dataPersona.fullname} <br>
                                ${dataPersona.dni}
                            </td>
                            <td>
                                MUTUARIO <br>
                                Corporación VICAM <br>
                                RUC N° 20602294979
                            </td>
                        </tr>
                    </table>

                    </div>
                    
                </body>
                </html>
            `;
                const opt = {
                    format: "A4",
                    border: {
                        // top: "2in",            // default is 0, units: mm, cm, in, px
                        right: "1in",
                        // bottom: "2in",
                        left: "1in",
                    },
                };
                pdf
                    .create(htmlPDF, opt)
                    .toFile("./html-pdf.pdf", function (err, response) {
                    if (err) {
                        console.log(err);
                        res.status(400).json({
                            status: false,
                            msg: err,
                            data: null,
                        });
                    }
                    else {
                        console.log(response);
                        res.sendFile(response.filename);
                    }
                });
            }
            catch (error) { }
        });
    }
}
const contratoController = new ContratoController();
exports.default = contratoController;
