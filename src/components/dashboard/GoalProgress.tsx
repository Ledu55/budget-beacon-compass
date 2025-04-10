
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { demoCategories } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { PencilIcon } from 'lucide-react';
import { EditGoalDialog } from './EditGoalDialog';
import { useToast } from '@/hooks/use-toast';

export function GoalProgress() {
  const { toast } = useToast();
  const [categories, setCategories] = useState(demoCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleEdit = (category: typeof categories[0]) => {
    setCurrentCategory(category);
    setIsDialogOpen(true);
  };

  const handleSaveChanges = (name: string, percentage: number) => {
    setCategories(prev => 
      prev.map(cat => 
        cat.name === currentCategory.name 
          ? { ...cat, name, percentage } 
          : cat
      )
    );
    
    toast({
      title: "Goal Updated",
      description: `${name} goal has been updated to ${percentage}%`,
    });
  };

  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Spending Goals</CardTitle>
        <CardDescription>Your progress towards your budget goals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">{category.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{category.percentage}%</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0" 
                  onClick={() => handleEdit(category)}
                >
                  <PencilIcon className="h-3 w-3" />
                  <span className="sr-only">Edit {category.name}</span>
                </Button>
              </div>
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

      <EditGoalDialog 
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        category={currentCategory}
        onSave={handleSaveChanges}
      />
    </Card>
  );
}
