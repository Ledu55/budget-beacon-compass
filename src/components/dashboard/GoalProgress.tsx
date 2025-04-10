
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { demoCategories } from '@/utils/formatters';

export function GoalProgress() {
  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Spending Goals</CardTitle>
        <CardDescription>Your progress towards your budget goals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {demoCategories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-sm font-medium">{category.percentage}%</span>
            </div>
            <Progress 
              value={Math.min(85, Math.max(40, Math.random() * 100))} 
              className="h-2"
              style={{ 
                backgroundColor: `${category.color}20`, 
                "--progress-foreground": category.color 
              } as React.CSSProperties} 
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
