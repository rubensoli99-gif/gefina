import{useState , useEffect}from"react";

import { Invoice } from './invoiceType.ts';

import InvoiceTable from './InvoiceTable.tsx';

export default function InvoicePage() {
    const[invoices, setInvoices] = useState<Invoice[]>([]);
    const[error, setError] = useState<null | string>(null);
    const[ loading, setLoading] = useState(true);

    useEffect(() => {
        async function getInvoices() {
            try {
                setError(null);
                setLoading(true);

                setLoading(true);


                 const response = await  fetch("/api/invoices")
                 const datas = await response.json();
                 setInvoices (datas);

            } catch{
                setError("não foi possivel obter relaçao de faturas");
            } finally {
                setLoading(false);
            }

        }

     getInvoices();
    }, []);

  


   
  
    return <> 
        <h1>Faturas</h1>

        <main>
           {loading ? <p>carregando...</p> : error ? <p>{error}</p> : <InvoiceTable datas={invoices} /> }
        </main>
    </>;
}
