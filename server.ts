import express from 'express';

const app = express()


type InvoiceStatus = 'pending' | 'paid';

interface Customer  { 
    id: number;
    name : string;
    email : string ;

}

interface Invoice {
    id: number;
    amount : number;
    status : InvoiceStatus;
    issueDate : string;
    dueDate : string;
    customer : Customer

}

const invoice: Invoice[] = [{
    id : 1,
    amount : 125000,
    status : 'pending',
    issueDate : '03-10-2026',
    dueDate : '03-11-2026',
    customer : {
        id : 7,
        name : 'construtora Meridiano',
        email : 'contato@meridiano.com'
    }
}, {
    id : 2,
    amount : 35000,
    status : 'paid',
    issueDate : '02-10-2026',
    dueDate : '05-11-2026',
    customer : {
        id : 7,
        name : 'construtora Meridiano',
        email : 'contato@meridiano.com'
    }
}];

app.get('/api/health', (request,response) => {
    response.status(200).json({status : 'ok' })
});

app.get('/api/invoices', (request, response) => {
    response.status(200).json(invoice);
})

app.get('/api/invoices/:id', (request, response) => {
    const id = +request.params.id

    const invoice= invoices.find(invoice => invoice.id === id);

    if (!invoice) response.status(404).json({error : {status : 404,
        message: 'fatura não encontrada'
    }});

    response.status(200).json(invoice);
})

app.use((request, response) => {
    response.status(404).json({ error: { 
        status : 404,
        message : 'Recurso não encontrado.' } });
});

app.listen(3000,);