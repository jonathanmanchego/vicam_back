import pdfKit from 'pdfkit';
import fs from 'fs';
import axios from 'axios';
import { numeroALetras } from './numToLeter';
import { fechaALetras } from './fechaToLeter';

export default class ContratoToPDF {

    static async fetchImage(src: any) {
        const image = await axios
            .get(src, {
                responseType: 'arraybuffer'
            })
        return image.data;
    }

    static async getContratoPDF(contrato: any) {
        var options:any = { year: 'numeric', month: 'long', day: 'numeric' };
        const doc = new pdfKit;
        doc.pipe(fs.createWriteStream('file.pdf'));
        const logo = await ContratoToPDF.fetchImage("https://vicamfront.herokuapp.com/assets/images/logo/logo-sidenav.jpg");
        doc.fontSize(10.5);
        doc.image(logo,(doc.page.width - 180) /2,50,{ width: 180 });
        doc.text(`
        
        `);
        doc.text(`________________________________________________________________________________`, { align: 'center', underline: true });
        doc.text(`CONTRATO DE MUTUO DINERARIO N° ${contrato.prestamista.prestamista_codigo} - ${contrato.contrato_numero}`, { align: 'center', underline: true });
        doc.text(`
        `);
        doc.text(`Conste por el presente contrato de mutuo dinerario que celebran de una parte ${contrato.prestamista.prestamista_nombres} ${contrato.prestamista.prestamista_apellidos}, identificado con D.N.I. Nº ${contrato.prestamista.prestamista_dni}, con domicilio real en ${contrato.prestamista.prestamista_direccion}, de la Provincia de ${contrato.prestamista.provincia.provincia} y Departamento de ${contrato.prestamista.departamento.departamento}, a quien en adelante se le denominará EL MUTUANTE y de la otra parte CORPORACIÓN VICAM identificado con RUC. N° 20602294979, debidamente representado Sergio Enrique Chung Chung en calidad de gerente general, identificado con DNI. Nº 46097329 y con domicilio en Calle Eugenio de la Torre Nro. 231 Dpto. 502 distrito de San Miguel de la Provincia y Departamento de Lima, a quien en adelante se le denominará EL MUTUATARIO; en los términos y condiciones siguientes:
        `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`PRIMERO: ANTECEDENTES`);
        doc.font('Helvetica').text(`EL MUTUATARIO es una empresa constituida en la localidad de Lima dedicada a realizar inversiones en diferentes modalidades en construcción de edificaciones, carreteras y vías de ferrocarril y además dotación de aguas embotelladas y otros no perecibles dentro del territorio peruano.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`EL MUTUANTE Es una persona natural que se encuentra en capacidad de facilitar dicho capital para que EL MUTUATARIO pueda desarrollar sus actividades empresariales.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`SEGUNDO: DEL OBJETO DEL MUTUO`);
        doc.font('Helvetica').text(`En virtud del presente contrato, EL MUTUANTE otorgó en calidad de préstamo con intereses a favor de EL MUTUATARIO la suma de S/. ${contrato.contrato_monto_prestamo} (“CANTIDAD DE PRESTAMO ESCRITO DE LA PERSONA” soles), los mismos que fueron depositados el día ${fechaALetras(contrato.contrato_fecha_deposito)}, como consta en la última hoja del presente contrato.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`En tal virtud, EL MUTUATARIO declara que ha recibido el íntegro del préstamo a entera satisfacción.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`TERCERO: DEL PAGO DE CAPITAL E INTERESES`);
        doc.font('Helvetica').text(`EL MUTUATARIO se compromete a pagar la deuda capital y los intereses a EL MUTUANTE en el plazo improrrogable de ${contrato.contrato_dias_prestamo} días calendario, computados a partir del día ${contrato.contrato_dia_inicio}, hasta el día ${contrato.contrato_dia_fin}.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`Al cumplirse dicho plazo, la suma total a pagar es de S/. ${contrato.contrato_monto_total_pago} (${numeroALetras(contrato.contrato_monto_total_pago)} soles)
            `);
        doc.font('Helvetica-Bold').text(`CUARTO: DE LAS OBLIGACIONES DE LAS PARTES`);
        doc.font('Helvetica').text(`EL MUTUANTE entregó la suma de dinero objeto de mutuo, cantidad que ya fue entregada a EL MUTUATARIO con anterioridad y que en este acto y a la suscripción del presente contrato se confirma la entrega con las firmas de las partes puestas en el presente documento.
            `, { align: 'justify' });
        doc.text(`jchung@vicamcg.com - schung@vicamcg.com `, 190, doc.page.height - 50, {
            lineBreak: false, align: 'center'
        });
        doc.text(`www.vicamcg.com - 917-908-169 `, 218, doc.page.height - 40, {
            lineBreak: false, align: 'center'
        });
        doc.text(`SAN MIGUEL, LIMA - PERU`, 230, doc.page.height - 30, {
            lineBreak: false, align: 'center'
        });
        doc.addPage();
        doc.image(logo,(doc.page.width - 180) /2,50,{ width: 180 });
        doc.text(`
        
        `);
        doc.text(`________________________________________________________________________________`, { align: 'center', underline: true });
        doc.font('Helvetica-Bold').text(`QUINTO: DE LA FORMA Y OPORTUNIDAD DEL PAGO`);
        doc.font('Helvetica').text(`En virtud del presente contrato, EL MUTUATARIO devolverá la suma de dinero objeto del mutuo, tal como lo señala la cláusula 3, en la misma moneda y con el interés pactado.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`Las partes dejan constancia que la devolución del capital y pago de intereses se realizará a EL MUTUANTE en calidad de transferencia a:
            `, { align: 'justify' });
        doc.font('Helvetica').text(`CUENTA DE AHORROS ${contrato.cuenta_ahorro.cuenta_numero} ${contrato.banco.banco_name} , o cheque si este lo considere necesario.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`SEXTO: DEL PLAZO`);
        doc.font('Helvetica').text(`El plazo en que se cancelará la deuda incluyendo el interés pactado por parte de EL MUTUATARIO es de ${contrato.contrato_dias_prestamo} (${numeroALetras(contrato.contrato_dias_prestamo)}) días contabilizados al día siguiente de realizado el abono, en la forma y lugar señalado en las cláusulas anteriores.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`SÉTIMO: LAVADO DE ACTIVOS`);
        doc.font('Helvetica').text(`EL MUTUANTE declara que los fondos con los que realiza el préstamo a EL MUTUATARIO, tiene un origen lícito y por ende no provienen de actividades ilícitas o contrarias a las buenas costumbres.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`EL MUTUANTE exime a EL MUTUATARIO de toda responsabilidad civil, penal o administrativa si la declaración contenida en esta cláusula fuera falsa.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`OCTAVO: DE LA RESOLUCIÓN DEL CONTRATO`);
        doc.font('Helvetica').text(`Las partes acuerdan que el presente contrato podrá ser resuelto de pleno derecho, ante el incumplimiento de las obligaciones asumidas por las partes intervinientes.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`NOVENO: DE LA SOLUCIÓN DE CONTROVERSIAS`);
        doc.font('Helvetica').text(`Toda controversia derivada de la interpretación o ejecución del presente contrato será resuelta directamente por las partes, para cuyo efecto éstas se comprometen a realizar sus mayores esfuerzos para la solución armónica de sus controversias con base en las reglas de la buena fe y atendiendo a la común intención expresada en el presente contrato, en un plazo que no exceda los (20) días hábiles.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`En caso las diferencias subsistan, la controversia será sometida a CENTRO DE CONCILIACIÓN, ARBITRAJE, los Jueces y Tribunales de la Jurisdicción de Lima.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`DÉCIMO: DE LA COMUNICACIÓN`);
        doc.font('Helvetica').text(`Las partes señalan, que para la validez de todas las comunicaciones y notificaciones con motivo de la celebración o ejecución del presente contrato, los domicilios corresponderán a los señalados en los antecedentes del presente contrato.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`El cambio de domicilio de cualquiera de las partes surtirá efecto desde la fecha de comunicación a la otra parte, por cualquier medio escrito.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`              Notificación electrónica. -`);
        doc.font('Helvetica').text(`                  * MUTUARIO: CORPORACIÓN VICAM/ schung@vicamcg.com`);
        doc.font('Helvetica').text(`                  * MUTUANTE: ${contrato.prestamista.prestamista_nombres} ${contrato.prestamista.prestamista_apellidos}/ ${contrato.prestamista.prestamista_correo}
        `);
        doc.text(`jchung@vicamcg.com - schung@vicamcg.com `, 190, doc.page.height - 50, {
            lineBreak: false, align: 'center'
        });
        doc.text(`www.vicamcg.com - 917-908-169 `, 218, doc.page.height - 40, {
            lineBreak: false, align: 'center'
        });
        doc.text(`SAN MIGUEL, LIMA - PERU`, 230, doc.page.height - 30, {
            lineBreak: false, align: 'center'
        });
        doc.addPage();
        doc.image(logo,(doc.page.width - 180) /2,50,{ width: 180 });
        doc.text(`
        
        `);
        doc.text(`________________________________________________________________________________`, { align: 'center', underline: true });
        doc.font('Helvetica-Bold').text(`DÉCIMO PRIMERO: DE APLICACIÓN SUPLETORIA`);
        doc.font('Helvetica').text(`Las partes señalan, que en todo aquello que no fue previsto en el presente contrato, se aplicará supletoriamente lo dispuesto en el Código Civil Peruano en lo referente a la figura del mutuo, artículos 1648 al 1665 y demás normas aplicables.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`DÉCIMO SEGUNDO: CONCLUSIÓN DE CONTRATO - RECEPCIÓN`);
        doc.font('Helvetica').text(`Las partes señalan cuando el MUTUARIO abone el pago TOTAL en la cláusula quinta bastará la acreditación de depósito o voucher, se dará de forma automática la conclusión - recepción y finalización del presente contrato.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`DÉCIMO TERCERO: BUENA FE`);
        doc.font('Helvetica').text(`EL MUTUANTE y EL MUTUARIO se comprometen a legalizar notarialmente las firmas, posterior a la crisis del COVID-19 y cuando las medidas sanitaras lo permitan.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`Todos los gastos que demande al otorgamiento del presente contrato, incluyendo los derechos notariales y registrales serán pagados el 50% por parte del MUTUARIO y 50% por parte del MUTUANTE.
            `, { align: 'justify' });
        doc.font('Helvetica-Bold').text(`DÉCIMO CUARTO: CONFORMIDAD`);
        doc.font('Helvetica').text(`Ambas partes están conformes con el contenido del presente contrato de mutuo en fe de lo cual legalizan sus respectivas firmas.
            `, { align: 'justify' });
        doc.font('Helvetica').text(`Lima, ${(fechaALetras(contrato.contrato_fecha_deposito))}`,{align:'right'});
        doc.text(``);
        doc.text(``);
        doc.text(``);
        doc.text(`jchung@vicamcg.com - schung@vicamcg.com `, 190, doc.page.height - 50, {
            lineBreak: false, align: 'center'
        });
        doc.text(`www.vicamcg.com - 917-908-169 `, 218, doc.page.height - 40, {
            lineBreak: false, align: 'center'
        });
        doc.text(`SAN MIGUEL, LIMA - PERU`, 230, doc.page.height - 30, {
            lineBreak: false, align: 'center'
        });
        doc.end();
        return doc;
    }
    
}