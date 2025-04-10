
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function FileUploader() {
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    
    if (droppedFiles.length > 0) {
      processFile(droppedFiles[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.name.endsWith('.csv') && !file.name.endsWith('.pdf')) {
      toast({
        title: "Invalid file format",
        description: "Please upload a CSV or PDF file.",
        variant: "destructive"
      });
      return;
    }
    
    setFile(file);
    
    toast({
      title: "File uploaded",
      description: `Successfully uploaded ${file.name}`,
    });
  };

  const handleUpload = () => {
    if (file) {
      // Here we would actually process the file
      toast({
        title: "Processing file",
        description: "Your file is being processed...",
      });
      
      setTimeout(() => {
        toast({
          title: "Import complete",
          description: "Your transactions have been imported successfully.",
        });
        setFile(null);
      }, 2000);
    }
  };

  return (
    <Card className="finance-card">
      <CardHeader>
        <CardTitle>Import Transactions</CardTitle>
        <CardDescription>Upload a CSV or PDF file to import your transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isDragging ? 'border-finance-primary bg-finance-primary/5' : 'border-muted'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <div className="mb-4">
            <h3 className="text-lg font-medium">Drag & Drop your file here</h3>
            <p className="text-sm text-muted-foreground mt-1">
              or click to browse from your computer
            </p>
          </div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".csv,.pdf"
            onChange={handleFileChange}
          />
          <Button asChild variant="outline">
            <label htmlFor="file-upload" className="cursor-pointer">
              Browse Files
            </label>
          </Button>
          {file && (
            <div className="mt-4 text-sm">
              Selected file: <span className="font-medium">{file.name}</span>
            </div>
          )}
        </div>
      </CardContent>
      {file && (
        <CardFooter>
          <Button onClick={handleUpload} className="w-full">
            Upload and Process
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
