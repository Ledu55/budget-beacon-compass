
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { demoMonthlyData } from '@/utils/formatters';

export function ExpenseChart() {
  return (
    <Card className="finance-card h-96">
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
        <CardDescription>Your income and expenses over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={demoMonthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`$${value}`, ``]}
              labelStyle={{ color: '#1f2937' }}
              contentStyle={{ backgroundColor: '#ffffff', borderRadius: '0.5rem' }}
            />
            <Legend />
            <Bar dataKey="income" name="Income" fill="#9b87f5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" name="Expenses" fill="#ea384c" radius={[4, 4, 0, 0]} />
            <Bar dataKey="investments" name="Investments" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
