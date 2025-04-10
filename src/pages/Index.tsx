
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { FinancialSummary } from '@/components/dashboard/FinancialSummary';
import { ExpenseChart } from '@/components/dashboard/ExpenseChart';
import { GoalProgress } from '@/components/dashboard/GoalProgress';
import { TransactionList } from '@/components/transactions/TransactionList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { demoCategories } from '@/utils/formatters';

export default function Index() {
  const totalIncome = 5000;
  const totalExpenses = 3200;
  const totalSavings = 800;
  const totalInvestments = 1000;

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-64">
        <Navbar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>
          
          <FinancialSummary 
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            totalSavings={totalSavings}
            totalInvestments={totalInvestments}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <ExpenseChart />
            </div>
            <div>
              <Card className="finance-card h-96">
                <CardHeader>
                  <CardTitle>Spending Breakdown</CardTitle>
                  <CardDescription>Where your money goes</CardDescription>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={demoCategories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="percentage"
                      >
                        {demoCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TransactionList />
            </div>
            <div>
              <GoalProgress />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
