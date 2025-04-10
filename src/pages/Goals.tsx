
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { GoalCard } from '@/components/goals/GoalCard';
import { GoalForm } from '@/components/goals/GoalForm';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Goals() {
  const [showForm, setShowForm] = React.useState(false);

  const goals = [
    {
      title: "Emergency Fund",
      category: "Savings",
      targetAmount: 10000,
      currentAmount: 6500,
      deadline: new Date(2024, 11, 31),
      color: "#F97316"
    },
    {
      title: "New Car",
      category: "Big Purchase",
      targetAmount: 25000,
      currentAmount: 8200,
      deadline: new Date(2025, 5, 1),
      color: "#9b87f5"
    },
    {
      title: "Home Renovation",
      category: "Housing",
      targetAmount: 15000,
      currentAmount: 3750,
      color: "#7E69AB"
    },
    {
      title: "Vacation Fund",
      category: "Travel",
      targetAmount: 5000,
      currentAmount: 3200,
      deadline: new Date(2024, 7, 15),
      color: "#0EA5E9"
    },
    {
      title: "Retirement",
      category: "Long-term",
      targetAmount: 100000,
      currentAmount: 42000,
      color: "#8B5CF6"
    }
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-64">
        <Navbar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Financial Goals</h1>
            <Button onClick={() => setShowForm(!showForm)}>
              <Plus className="h-4 w-4 mr-2" />
              {showForm ? "Hide Form" : "Add Goal"}
            </Button>
          </div>

          {showForm && (
            <div className="mb-8">
              <GoalForm />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <GoalCard key={index} {...goal} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
