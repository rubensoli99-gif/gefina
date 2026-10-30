
import express, { Request, Response } from 'express';

import InvoiceRouter from "./invoice.route.ts";

const app = express();
app.use(express.json());

// Verificar se a API está ativa
app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
});

// http://localhost:3000/api/invoice

app.use("/api/invoices", InvoiceRouter);

// Rota para recursos não encontrados
app.use((_req: Request, res: Response) => {
    res.status(404).json({
        error: {
            status: 404,
            message: 'Recurso não encontrado.'
        }
    });
});

app.listen(3000);
   
