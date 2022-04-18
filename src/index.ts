import express, { Application, json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import { validarToken } from "./middlewares/validarToken";

import indexRoutes from "./routes/indexRoutes";
import authRoutes from "./routes/authRoutes";
import uploadRoutes from "./routes/uploadRoutes";
import prestamistaRoutes from "./routes/prestamistaRoutes";
import tarjetaRoutes from "./routes/tarjetaRoutes";
import bancoRoutes from "./routes/bancoRoutes";
import solicitudRoutes from "./routes/solicitudRoutes";
import contratoRoutes from "./routes/contratoRoutes";
import pagoRoutes from "./routes/pagoRoutes";
import estadoContratoRoutes from "./routes/estadoContratoRoutes";
import estadoSolicitudRoutes from "./routes/estadoSolicitudRoutes";
import plazoPagoRoutes from "./routes/plazoPagoRoutes";
import cuentaAhorroRoutes from "./routes/cuentaAhorroRoutes";
import empleadoRoutes from "./routes/empleadoRoutes";
import tipoTarjetaRoutes from "./routes/tipoTarjetaRoutes";
import paisRoutes from "./routes/paisRoutes";
import provinciaRoutes from "./routes/provinciaRoutes";
import departamentoRoutes from "./routes/departamentoRoutes";
import localidadRoutes from "./routes/localidadRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(express.static(path.join(__dirname, "public")));
  }

  routes(): void {
    this.app.use(indexRoutes);
    this.app.use("/api/auth", authRoutes);

    this.app.use("/api/prestamistas", prestamistaRoutes);
    this.app.use("/api/tarjetas", tarjetaRoutes);
    this.app.use("/api/bancos", bancoRoutes);
    this.app.use("/api/solicitudes", solicitudRoutes);
    this.app.use("/api/contratos", contratoRoutes);
    this.app.use("/api/pagos", pagoRoutes);
    this.app.use("/api/estadosContratos", estadoContratoRoutes);
    this.app.use("/api/estadosSolicitudes", estadoSolicitudRoutes);
    this.app.use("/api/plazosPagos", plazoPagoRoutes);
    this.app.use("/api/cuentasAhorros", cuentaAhorroRoutes);
    this.app.use("/api/empleados", empleadoRoutes);
    this.app.use("/api/tipoTarjetas", tipoTarjetaRoutes);
    this.app.use("/api/pais", paisRoutes);
    this.app.use("/api/provincia", provinciaRoutes);
    this.app.use("/api/departamento", departamentoRoutes);
    this.app.use("/api/localidad", localidadRoutes);

    /** RUTA ARCHIVOS */
    this.app.use("/api/upload", validarToken, uploadRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port ", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
