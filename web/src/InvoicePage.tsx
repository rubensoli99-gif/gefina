import { Invoice } from './invoiceType.ts';

import InvoiceTable from './InvoiceTable.tsx';

export default function InvoicePage() {
    const invoices: Invoice[] = [{
        id: 1,
        amount: 125037,
        status: 'pending',
        issueDate: '2026-09-03',
        dueDate: '2026-10-04',
        customer: {
            id: 7,
            name: 'Construtora Meridiano',
            email: 'comercial@meridiano.com.br'
        }
    }, {
        id: 2,
        amount: 35000,
        status: 'paid',
        issueDate: '2026-10-01',
        dueDate: '2026-11-02',
        customer: {
            id: 4,
            name: 'Gráfica Nova',
            email: 'grafica@nova.com.br'
        }
    }, {
        id: 3,
        amount: 301260,
        status: 'pending',
        issueDate: '2026-09-10',
        dueDate: '2026-10-05',
        customer: {
            id: 15,
            name: 'Tenditudo',
            email: 'contato@tenditudo.com.br'
        }
    }];

    return <>
        <h1>Faturas</h1>

        <main>
            <InvoiceTable datas={invoices} />
        </main>
    </>;
}
