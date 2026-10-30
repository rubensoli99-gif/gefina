import{ Router }from "express";

import {findALLInvoices,
    findInvoiceById
 } from "./invoice.service.ts";

 const router = Router();



// Obter todas as faturas
router.get('/', (_req , res) => {
   const invoice = findALLInvoices();

   res.status(200).json(invoice);

});

// Obter uma fatura pelo ID
router.get(':id', (req, res) => {
    const id = Number(req.params.id);

    const invoice = findInvoiceById(id);

    if (!invoice) {
        return res.status(404).json({
            error: {
                status: 404,
                message: 'ID da fatura inválido.'
            }
        });
    }

   
    

    res.status(200).json(invoice);
});

    export default router;