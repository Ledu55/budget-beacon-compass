
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { FileUploader } from '@/components/transactions/FileUploader';
import { TransactionList } from '@/components/transactions/TransactionList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Transactions() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-64">
        <Navbar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Transactions</h1>

          <Tabs defaultValue="list">
            <TabsList className="mb-6">
              <TabsTrigger value="list">Transaction List</TabsTrigger>
              <TabsTrigger value="import">Import Transactions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="space-y-6">
              <TransactionList />
            </TabsContent>
            
            <TabsContent value="import" className="space-y-6">
              <FileUploader />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
