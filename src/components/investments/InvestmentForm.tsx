
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export function InvestmentForm() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Investment added",
      description: "Your investment has been added successfully.",
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Add Investment</CardTitle>
        <CardDescription>Record a new investment in your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Investment Name</Label>
            <Input id="name" placeholder="e.g., AAPL, BTC, ETF" required />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Investment Type</Label>
              <Select required>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stock">Stock</SelectItem>
                  <SelectItem value="crypto">Cryptocurrency</SelectItem>
                  <SelectItem value="etf">ETF</SelectItem>
                  <SelectItem value="bond">Bond</SelectItem>
                  <SelectItem value="realestate">Real Estate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="amount">Amount Invested</Label>
              <Input id="amount" type="number" step="0.01" placeholder="1000" required />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units">Number of Units</Label>
              <Input id="units" type="number" step="0.000001" placeholder="10" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price">Purchase Price per Unit</Label>
              <Input id="price" type="number" step="0.01" placeholder="100" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date">Date of Investment</Label>
            <Input id="date" type="date" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Input id="notes" placeholder="Additional information" />
          </div>
          
          <Button type="submit" className="w-full">Add Investment</Button>
        </form>
      </CardContent>
    </Card>
  );
}
