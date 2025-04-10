
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatCurrency, formatPercentage } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';

interface GoalCardProps {
  title: string;
  category: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: Date;
  color?: string;
}

export function GoalCard({ 
  title, 
  category, 
  targetAmount, 
  currentAmount, 
  deadline,
  color = "#9b87f5" 
}: GoalCardProps) {
  const progress = Math.min(100, Math.round((currentAmount / targetAmount) * 100));
  const progressStyle = {
    backgroundColor: `${color}20`,
    "--progress-foreground": color
  } as React.CSSProperties;

  return (
    <Card className="finance-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">{formatPercentage(progress)}</span>
          </div>
          <Progress value={progress} className="h-2" style={progressStyle} />
        </div>
        
        <div className="flex justify-between items-baseline">
          <div>
            <p className="text-sm text-muted-foreground">Current</p>
            <p className="text-lg font-semibold">{formatCurrency(currentAmount)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Target</p>
            <p className="text-lg font-semibold">{formatCurrency(targetAmount)}</p>
          </div>
        </div>

        {deadline && (
          <div className="pt-2">
            <p className="text-xs text-muted-foreground">Deadline</p>
            <p className="text-sm">
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }).format(deadline)}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        <Button variant="outline" size="sm" className="h-8 w-8 p-0">
          <Edit className="h-4 w-4" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
