
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';
import { formatCurrency, formatPercentage } from '@/utils/formatters';

interface Investment {
  id: string;
  name: string;
  type: string;
  amount: number;
  units: number;
  currentValue: number;
  profitLoss: number;
  change: number;
}

export function InvestmentList() {
  const investments: Investment[] = [
    {
      id: '1',
      name: 'AAPL',
      type: 'Stock',
      amount: 1000,
      units: 5,
      currentValue: 1120,
      profitLoss: 120,
      change: 12
    },
    {
      id: '2',
      name: 'Bitcoin',
      type: 'Cryptocurrency',
      amount: 2000,
      units: 0.05,
      currentValue: 2320,
      profitLoss: 320,
      change: 16
    },
    {
      id: '3',
      name: 'Vanguard S&P 500 ETF',
      type: 'ETF',
      amount: 5000,
      units: 15,
      currentValue: 5250,
      profitLoss: 250,
      change: 5
    },
    {
      id: '4',
      name: 'US Treasury Bond',
      type: 'Bond',
      amount: 3000,
      units: 3,
      currentValue: 3060,
      profitLoss: 60,
      change: 2
    },
    {
      id: '5',
      name: 'Real Estate Fund',
      type: 'Real Estate',
      amount: 10000,
      units: 100,
      currentValue: 9800,
      profitLoss: -200,
      change: -2
    }
  ];

  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Investment Portfolio</CardTitle>
        <CardDescription>Your current investments and their performance</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Units</TableHead>
              <TableHead className="text-right">Invested</TableHead>
              <TableHead className="text-right">Current Value</TableHead>
              <TableHead className="text-right">Profit/Loss</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investments.map((investment) => (
              <TableRow key={investment.id}>
                <TableCell className="font-medium">{investment.name}</TableCell>
                <TableCell>{investment.type}</TableCell>
                <TableCell className="text-right">{investment.units}</TableCell>
                <TableCell className="text-right">{formatCurrency(investment.amount)}</TableCell>
                <TableCell className="text-right">{formatCurrency(investment.currentValue)}</TableCell>
                <TableCell className={`text-right ${investment.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(investment.profitLoss)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {investment.change > 0 ? (
                      <ArrowUp className="h-4 w-4 text-green-600" />
                    ) : investment.change < 0 ? (
                      <ArrowDown className="h-4 w-4 text-red-600" />
                    ) : (
                      <Minus className="h-4 w-4 text-gray-400" />
                    )}
                    <span className={investment.change > 0 ? 'text-green-600' : investment.change < 0 ? 'text-red-600' : 'text-gray-400'}>
                      {formatPercentage(Math.abs(investment.change))}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
