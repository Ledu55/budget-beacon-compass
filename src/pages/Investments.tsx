
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { InvestmentForm } from '@/components/investments/InvestmentForm';
import { InvestmentList } from '@/components/investments/InvestmentList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function Investments() {
  const pieData = [
    { name: 'Stocks', value: 45 },
    { name: 'Crypto', value: 15 },
    { name: 'ETFs', value: 20 },
    { name: 'Bonds', value: 10 },
    { name: 'Real Estate', value: 10 }
  ];
  
  const COLORS = ['#9b87f5', '#7E69AB', '#6E59A5', '#ea384c', '#0EA5E9'];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-64">
        <Navbar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Investments</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="finance-card lg:col-span-2">
              <CardHeader>
                <CardTitle>Portfolio Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <InvestmentList />
              </CardContent>
            </Card>

            <Card className="finance-card">
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Your investment mix</CardDescription>
              </CardHeader>
              <CardContent className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <InvestmentForm />
          </div>
        </main>
      </div>
    </div>
  );
}
