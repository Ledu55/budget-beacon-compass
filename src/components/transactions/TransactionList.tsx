
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { formatCurrency, formatDate } from '@/utils/formatters';

type TransactionType = 'income' | 'expense' | 'transfer';

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  type: TransactionType;
}

export function TransactionList() {
  const transactions: Transaction[] = [
    {
      id: '1',
      date: new Date(2024, 3, 1),
      description: 'Salary',
      amount: 3500,
      category: 'Income',
      type: 'income'
    },
    {
      id: '2',
      date: new Date(2024, 3, 2),
      description: 'Grocery shopping',
      amount: -120,
      category: 'Food',
      type: 'expense'
    },
    {
      id: '3',
      date: new Date(2024, 3, 3),
      description: 'Gas bill',
      amount: -85,
      category: 'Utilities',
      type: 'expense'
    },
    {
      id: '4',
      date: new Date(2024, 3, 5),
      description: 'Transfer to savings',
      amount: -500,
      category: 'Transfer',
      type: 'transfer'
    },
    {
      id: '5',
      date: new Date(2024, 3, 8),
      description: 'Restaurant dinner',
      amount: -65,
      category: 'Food',
      type: 'expense'
    },
    {
      id: '6',
      date: new Date(2024, 3, 10),
      description: 'Freelance work',
      amount: 250,
      category: 'Income',
      type: 'income'
    },
    {
      id: '7',
      date: new Date(2024, 3, 15),
      description: 'Rent payment',
      amount: -1200,
      category: 'Housing',
      type: 'expense'
    }
  ];

  const getTransactionColor = (type: TransactionType) => {
    switch (type) {
      case 'income':
        return 'bg-green-100 text-green-800';
      case 'expense':
        return 'bg-red-100 text-red-800';
      case 'transfer':
        return 'bg-blue-100 text-blue-800';
      default:
        return '';
    }
  };

  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your most recent financial activities</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{formatDate(transaction.date)}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell className={transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {formatCurrency(Math.abs(transaction.amount))}
                </TableCell>
                <TableCell>
                  <Badge className={getTransactionColor(transaction.type)}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
