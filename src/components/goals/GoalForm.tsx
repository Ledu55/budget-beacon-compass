
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { demoCategories } from '@/utils/formatters';

export function GoalForm() {
  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Create New Goal</CardTitle>
        <CardDescription>Set a new financial goal to track your progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Goal Name</Label>
          <Input id="name" placeholder="e.g., New Car, Emergency Fund" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {demoCategories.map((category, index) => (
                <SelectItem key={index} value={category.name.toLowerCase()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="target">Target Amount</Label>
            <Input id="target" type="number" placeholder="5000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="current">Current Amount</Label>
            <Input id="current" type="number" placeholder="0" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="deadline">Deadline (Optional)</Label>
          <Input id="deadline" type="date" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="percentage">Budget Percentage</Label>
          <div className="flex items-center gap-2">
            <Input id="percentage" type="number" placeholder="20" />
            <span className="text-lg font-medium">%</span>
          </div>
          <p className="text-xs text-muted-foreground">Percentage of your income to allocate to this goal</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Goal</Button>
      </CardFooter>
    </Card>
  );
}
