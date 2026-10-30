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

export function findALLInvoices():  Invoice[] {
    return invoices;
}

export function findInvoiceById(id:number ): Invoice | undefined{
    const invoice = invoices.find(invoice => invoice.id === id);

    if (!invoice) return undefined;

    return invoice;
}

