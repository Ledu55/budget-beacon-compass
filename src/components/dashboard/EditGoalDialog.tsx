
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EditGoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: {
    name: string;
    percentage: number;
    color: string;
  };
  onSave: (name: string, percentage: number) => void;
}

export function EditGoalDialog({ 
  open, 
  onOpenChange, 
  category, 
  onSave 
}: EditGoalDialogProps) {
  const [name, setName] = React.useState(category.name);
  const [percentage, setPercentage] = React.useState(category.percentage);
  
  React.useEffect(() => {
    // Update local state when category changes
    setName(category.name);
    setPercentage(category.percentage);
  }, [category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name, percentage);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Spending Goal</DialogTitle>
            <DialogDescription>
              Make changes to your spending goal. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Category
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="percentage" className="text-right">
                Percentage
              </Label>
              <div className="col-span-3 flex items-center gap-2">
                <Input
                  id="percentage"
                  type="number"
                  value={percentage}
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  min={0}
                  max={100}
                  className="flex-1"
                />
                <span>%</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
