
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

type InvoiceStatus = 'pending' | 'paid';

interface Customer {
    id: number;
    name: string;
    email: string;
}

interface Invoice {
    id: number;
    amount: number;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: Customer;
}

const invoices: Invoice[] = [
    {
        id: 1,
        amount: 125037,
        status: 'pending',
        issueDate: '2026-10-03',
        dueDate: '2026-11-03',
        customer: {
            id: 7,
            name: 'Construtora Meridiano',
            email: 'contato@meridiano.com'
        }
    },
    {
        id: 2,
        amount: 35000,
        status: 'paid',
        issueDate: '2026-10-02',
        dueDate: '2026-11-05',
        customer: {
            id: 7,
            name: 'Construtora Meridiano',
            email: 'contato@meridiano.com'
        }
    },
    {
        id: 3,
        amount: 250037,
        status: 'pending',
        issueDate: '2026-10-03',
        dueDate: '2026-11-03',
        customer: {
            id: 7,
            name: 'Construtora Meridiano',
            email: 'contato@meridiano.com'
        }
    },
];

// Verificar se a API está ativa
app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
});

// Obter todas as faturas
app.get('/api/invoices', (_req: Request, res: Response) => {
    res.status(200).json(invoices);
});

// Obter uma fatura pelo ID
app.get('/api/invoices/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            error: {
                status: 400,
                message: 'ID da fatura inválido.'
            }
        });
    }

    const foundInvoice = invoices.find(item => item.id === id);

    if (!foundInvoice) {
        return res.status(404).json({
            error: {
                status: 404,
                message: 'Fatura não encontrada.'
            }
        });
    }

    return res.status(200).json(foundInvoice);
});

// Rota para recursos não encontrados
app.use((_req: Request, res: Response) => {
    res.status(404).json({
        error: {
            status: 404,
            message: 'Recurso não encontrado.'
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado em http://localhost:3000');
});
