
/**
 * Format a number as currency
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format a number as percentage
 */
export function formatPercentage(value: number, digits = 1): string {
  return `${value.toFixed(digits)}%`;
}

/**
 * Format a date in the local format
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

/**
 * Generate random data for demonstration purposes
 */
export function generateDemoData(count: number, min = 1000, max = 10000) {
  return Array.from({ length: count }, () => ({
    amount: Math.floor(Math.random() * (max - min) + min),
    date: new Date(
      Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    ),
  }));
}

/**
 * Generate monthly data for charts
 */
export function generateMonthlyData() {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  return months.map(month => ({
    name: month,
    income: Math.floor(Math.random() * 5000) + 3000,
    expenses: Math.floor(Math.random() * 2500) + 1500,
    investments: Math.floor(Math.random() * 1000) + 500
  }));
}

/**
 * Generate random categories with percentages that sum to 100
 */
export function generateCategories() {
  const categories = [
    { name: 'Housing', color: '#9b87f5' },
    { name: 'Food', color: '#7E69AB' },
    { name: 'Transportation', color: '#6E59A5' },
    { name: 'Entertainment', color: '#ea384c' },
    { name: 'Healthcare', color: '#0EA5E9' },
    { name: 'Savings', color: '#F97316' },
    { name: 'Other', color: '#8B5CF6' }
  ];
  
  let remaining = 100;
  return categories.map((category, index) => {
    if (index === categories.length - 1) {
      return { ...category, percentage: remaining };
    }
    
    const percentage = index === 0 ? 30 : Math.floor(Math.random() * (remaining - 5)) + 5;
    remaining -= percentage;
    
    return { ...category, percentage };
  });
}

export const demoCategories = generateCategories();
export const demoMonthlyData = generateMonthlyData();
