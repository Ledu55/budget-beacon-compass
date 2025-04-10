
import React from 'react';
import { ArrowDown, ArrowUp, Wallet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/utils/formatters';

interface FinancialSummaryProps {
  totalIncome: number;
  totalExpenses: number;
  totalSavings: number;
  totalInvestments: number;
}

export function FinancialSummary({
  totalIncome,
  totalExpenses,
  totalSavings,
  totalInvestments,
}: FinancialSummaryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card className="finance-card border-l-4 border-l-finance-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{formatCurrency(totalIncome)}</div>
            <div className="p-2 bg-green-100 rounded-full">
              <ArrowUp className="h-4 w-4 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">+14% from last month</p>
        </CardContent>
      </Card>

      <Card className="finance-card border-l-4 border-l-finance-expense">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{formatCurrency(totalExpenses)}</div>
            <div className="p-2 bg-red-100 rounded-full">
              <ArrowDown className="h-4 w-4 text-red-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">-2% from last month</p>
        </CardContent>
      </Card>

      <Card className="finance-card border-l-4 border-l-finance-savings">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Savings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{formatCurrency(totalSavings)}</div>
            <div className="p-2 bg-orange-100 rounded-full">
              <Wallet className="h-4 w-4 text-orange-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">+5% from last month</p>
        </CardContent>
      </Card>

      <Card className="finance-card border-l-4 border-l-finance-investment">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{formatCurrency(totalInvestments)}</div>
            <div className="p-2 bg-purple-100 rounded-full">
              <ArrowUp className="h-4 w-4 text-purple-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">+8% from last month</p>
        </CardContent>
      </Card>
    </div>
  );
}
