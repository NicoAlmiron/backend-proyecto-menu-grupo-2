import express from "express";
import cors from "cors";
import morgan from "morgan";
import 'dotenv/config';
import usuarioRouter from "./src/routes/usuarios.routes.js";
import menuRouter from "./src/routes/menus.routes.js";
import './src/database/database.js'
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log('puerto conectado: ' + app.get('port'))
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(_dirname, '/public')));
app.use('/api/users', usuarioRouter);
app.use('/api', menuRouter);
app.use("/api", pedidosRouter);

