import { useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const PaymentTable = (props: any) => {
    const { payments, paymentActions } = props;

    useEffect(() => {
        paymentActions.getAllPayments();
    }, [])

    return (
        <><TableContainer component={Paper} sx={{ maxHeight: 600 }}>
            <Table sx={{ minWidth: 500 }} aria-label="product table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Payment Id</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Payment Type</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {payments.map((payment: any) => (
                        <TableRow
                            key={payment._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >   <TableCell>{new Date(payment.createdAt).toLocaleDateString('en-US')}</TableCell>
                            <TableCell component="th" scope="row">
                                {payment.paymentId}
                            </TableCell>
                            <TableCell>{payment.email}</TableCell>
                            <TableCell>{String(payment.currency).toLocaleUpperCase()} {payment.amount}</TableCell>
                            <TableCell>{payment.source.brand} {String(payment.source.object).charAt(0).toUpperCase() + String(payment.source.object).slice(1)}</TableCell>
                            <TableCell>{String(payment.status).charAt(0).toUpperCase() + String(payment.status).slice(1)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></>
    )
}

export default PaymentTable;