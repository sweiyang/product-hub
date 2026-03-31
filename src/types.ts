export type Category = 'Featured' | 'All' | 'Central Service' | 'Risk' | 'Fraud';

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface MonthlyData {
  month: string;
  usage: number;
  activeUsers: number;
}

export interface CostBreakdown {
  category: string;
  amount: number;
}

export interface UsageDimension {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  description: string;
}

export interface QuarterMetric {
  quarter: string;
  activeUsers: number;
  usage: number;
  cost: number;
  teamMembers: number;
  team: TeamMember[];
  monthlyData: MonthlyData[];
  costBreakdown: CostBreakdown[];
  usageDimensions: UsageDimension[];
}

export interface ChangeLog {
  quarter: string;
  updates: string[];
}

export interface Feedback {
  user: string;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  title: string;
  category: Category;
  sinceDate: string;
  description: string;
  logo: string;
  why: string;
  what: string;
  metrics: QuarterMetric[];
  changeLogs: ChangeLog[];
  feedbacks: Feedback[];
}
