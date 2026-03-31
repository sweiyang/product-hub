import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Sentinel Risk Engine',
    category: 'Risk',
    sinceDate: 'Jan 2023',
    description: 'Advanced real-time risk assessment engine for transaction monitoring and credit scoring.',
    logo: '🛡️',
    why: 'To reduce manual intervention in credit approvals and provide instant risk scoring for digital banking customers.',
    what: 'A high-throughput scoring engine that processes thousands of data points per second to generate risk profiles.',
    metrics: [
      { 
        quarter: 'Q2 2025', 
        activeUsers: 1250, 
        usage: 85000, 
        cost: 45000, 
        teamMembers: 12,
        team: [
          { name: 'Alice', role: 'PM', avatar: 'https://picsum.photos/seed/alice/100/100' },
          { name: 'Bob', role: 'Engineer', avatar: 'https://picsum.photos/seed/bob/100/100' },
          { name: 'Charlie', role: 'Designer', avatar: 'https://picsum.photos/seed/charlie/100/100' },
          { name: 'David', role: 'Ops', avatar: 'https://picsum.photos/seed/david/100/100' },
        ],
        monthlyData: [
          { month: 'Apr', usage: 25000, activeUsers: 1150 },
          { month: 'May', usage: 28000, activeUsers: 1200 },
          { month: 'Jun', usage: 32000, activeUsers: 1250 },
        ],
        costBreakdown: [
          { category: 'Infrastructure', amount: 25000 },
          { category: 'Personnel', amount: 15000 },
          { category: 'Software Licenses', amount: 5000 },
        ],
        usageDimensions: [
          { name: 'Weekly Active Users', value: '1.2K', change: '+5%', isPositive: true, description: 'Average weekly number of users who exercised' },
          { name: 'Total Exercises', value: '85K', change: '+12%', isPositive: true, description: 'Total number of users who exercised' },
          { name: 'Hours Logged', value: '0.8M', change: '-2%', isPositive: false, description: 'Total hours exercised' },
        ]
      },
      { 
        quarter: 'Q1 2025', 
        activeUsers: 1100, 
        usage: 78000, 
        cost: 42000, 
        teamMembers: 12,
        team: [],
        monthlyData: [
          { month: 'Jan', usage: 24000, activeUsers: 1050 },
          { month: 'Feb', usage: 26000, activeUsers: 1080 },
          { month: 'Mar', usage: 28000, activeUsers: 1100 },
        ],
        costBreakdown: [],
        usageDimensions: []
      },
      { 
        quarter: 'Q4 2024', 
        activeUsers: 950, 
        usage: 65000, 
        cost: 40000, 
        teamMembers: 10,
        team: [],
        monthlyData: [
          { month: 'Oct', usage: 20000, activeUsers: 900 },
          { month: 'Nov', usage: 22000, activeUsers: 930 },
          { month: 'Dec', usage: 23000, activeUsers: 950 },
        ],
        costBreakdown: [],
        usageDimensions: []
      },
      { 
        quarter: 'Q3 2024', 
        activeUsers: 800, 
        usage: 55000, 
        cost: 38000, 
        teamMembers: 10,
        team: [],
        monthlyData: [
          { month: 'Jul', usage: 17000, activeUsers: 750 },
          { month: 'Aug', usage: 18000, activeUsers: 780 },
          { month: 'Sep', usage: 20000, activeUsers: 800 },
        ],
        costBreakdown: [],
        usageDimensions: []
      },
    ],
    changeLogs: [
      { quarter: 'Q2 2025', updates: ['Integrated AI-driven behavioral analysis', 'Improved latency by 15%', 'New dashboard for risk analysts'] },
      { quarter: 'Q1 2025', updates: ['Added support for multi-currency scoring', 'Enhanced data encryption at rest'] },
      { quarter: 'Q4 2024', updates: ['Initial pilot launch for corporate customers'] },
    ],
    feedbacks: [
      { user: 'John Tan', comment: 'The new dashboard is much faster!', date: '2025-03-15' },
      { user: 'Sarah Lim', comment: 'Would love to see more granular reports.', date: '2025-02-10' },
    ],
  },
  {
    id: '2',
    title: 'FraudGuard Pro',
    category: 'Fraud',
    sinceDate: 'Mar 2023',
    description: 'Machine learning powered fraud detection system protecting customer accounts from unauthorized access.',
    logo: '🔍',
    why: 'Rising sophisticated phishing and account takeover attacks required a more proactive defense mechanism.',
    what: 'An AI-first fraud detection platform that monitors login patterns and unusual transaction behaviors.',
    metrics: [
      { 
        quarter: 'Q2 2025', 
        activeUsers: 5000, 
        usage: 120000, 
        cost: 60000, 
        teamMembers: 15,
        team: [
          { name: 'Eve', role: 'PM', avatar: 'https://picsum.photos/seed/eve/100/100' },
          { name: 'Frank', role: 'Engineer', avatar: 'https://picsum.photos/seed/frank/100/100' },
        ],
        monthlyData: [
          { month: 'Apr', usage: 38000, activeUsers: 4900 },
          { month: 'May', usage: 40000, activeUsers: 4950 },
          { month: 'Jun', usage: 42000, activeUsers: 5000 },
        ],
        costBreakdown: [
          { category: 'Security Services', amount: 40000 },
          { category: 'Personnel', amount: 20000 },
        ],
        usageDimensions: [
          { name: 'Logins Monitored', value: '1.2M', change: '+15%', isPositive: true, description: 'Total number of login attempts analyzed' },
          { name: 'Threats Blocked', value: '4.5K', change: '+8%', isPositive: true, description: 'Confirmed fraud attempts prevented' },
        ]
      },
      { quarter: 'Q1 2025', activeUsers: 4800, usage: 115000, cost: 58000, teamMembers: 15, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
      { quarter: 'Q4 2024', activeUsers: 4200, usage: 105000, cost: 55000, teamMembers: 14, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
      { quarter: 'Q3 2024', activeUsers: 3500, usage: 90000, cost: 50000, teamMembers: 12, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
    ],
    changeLogs: [
      { quarter: 'Q2 2025', updates: ['Biometric verification integration', 'Reduced false positive rate by 20%'] },
      { quarter: 'Q1 2025', updates: ['Real-time SMS alerts for suspicious logins'] },
    ],
    feedbacks: [
      { user: 'David Lee', comment: 'Saved me from a potential scam last week!', date: '2025-03-20' },
    ],
  },
  {
    id: '3',
    title: 'CoreConnect API',
    category: 'Central Service',
    sinceDate: 'Jun 2022',
    description: 'Unified API gateway for internal services to access core banking data securely.',
    logo: '🔌',
    why: 'Legacy systems were difficult to integrate with. We needed a standardized way for new apps to talk to the core.',
    what: 'A RESTful API gateway providing secure, audited access to customer, account, and transaction data.',
    metrics: [
      { 
        quarter: 'Q2 2025', 
        activeUsers: 300, 
        usage: 2500000, 
        cost: 30000, 
        teamMembers: 8,
        team: [
          { name: 'Grace', role: 'PM', avatar: 'https://picsum.photos/seed/grace/100/100' },
          { name: 'Hank', role: 'Engineer', avatar: 'https://picsum.photos/seed/hank/100/100' },
        ],
        monthlyData: [
          { month: 'Apr', usage: 800000, activeUsers: 290 },
          { month: 'May', usage: 850000, activeUsers: 295 },
          { month: 'Jun', usage: 850000, activeUsers: 300 },
        ],
        costBreakdown: [
          { category: 'API Gateway', amount: 15000 },
          { category: 'Personnel', amount: 15000 },
        ],
        usageDimensions: [
          { name: 'API Calls', value: '2.5M', change: '+20%', isPositive: true, description: 'Total number of API requests processed' },
          { name: 'Avg Latency', value: '45ms', change: '-5ms', isPositive: true, description: 'Average response time for API calls' },
        ]
      },
      { quarter: 'Q1 2025', activeUsers: 280, usage: 2200000, cost: 28000, teamMembers: 8, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
      { quarter: 'Q4 2024', activeUsers: 250, usage: 1800000, cost: 25000, teamMembers: 7, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
      { quarter: 'Q3 2024', activeUsers: 220, usage: 1500000, cost: 22000, teamMembers: 6, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
    ],
    changeLogs: [
      { quarter: 'Q2 2025', updates: ['GraphQL support added', 'Rate limiting enhancements'] },
      { quarter: 'Q1 2025', updates: ['New developer portal documentation'] },
    ],
    feedbacks: [
      { user: 'Kevin Ng', comment: 'Documentation is top-notch.', date: '2025-01-05' },
    ],
  },
  {
    id: '4',
    title: 'IdentityVault',
    category: 'Central Service',
    sinceDate: 'Sep 2023',
    description: 'Secure storage and management of customer identity documents and KYC data.',
    logo: '🆔',
    why: 'To centralize KYC documents and ensure compliance with data privacy regulations across all branches.',
    what: 'A secure, encrypted vault for storing and retrieving customer identity proofs with strict access controls.',
    metrics: [
      { 
        quarter: 'Q2 2025', 
        activeUsers: 1500, 
        usage: 45000, 
        cost: 25000, 
        teamMembers: 6,
        team: [
          { name: 'Ivy', role: 'PM', avatar: 'https://picsum.photos/seed/ivy/100/100' },
          { name: 'Jack', role: 'Engineer', avatar: 'https://picsum.photos/seed/jack/100/100' },
        ],
        monthlyData: [
          { month: 'Apr', usage: 14000, activeUsers: 1450 },
          { month: 'May', usage: 15000, activeUsers: 1480 },
          { month: 'Jun', usage: 16000, activeUsers: 1500 },
        ],
        costBreakdown: [
          { category: 'Storage', amount: 15000 },
          { category: 'Personnel', amount: 10000 },
        ],
        usageDimensions: [
          { name: 'Docs Stored', value: '45K', change: '+10%', isPositive: true, description: 'Total number of identity documents stored' },
          { name: 'KYC Checks', value: '12K', change: '+5%', isPositive: true, description: 'Total number of KYC verification requests' },
        ]
      },
      { quarter: 'Q1 2025', activeUsers: 1400, usage: 42000, cost: 24000, teamMembers: 6, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
      { quarter: 'Q4 2024', activeUsers: 1200, usage: 38000, cost: 22000, teamMembers: 5, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
      { quarter: 'Q3 2024', activeUsers: 1000, usage: 32000, cost: 20000, teamMembers: 5, team: [], monthlyData: [], costBreakdown: [], usageDimensions: [] },
    ],
    changeLogs: [
      { quarter: 'Q2 2025', updates: ['Auto-redaction of sensitive fields', 'Audit log export'] },
    ],
    feedbacks: [],
  },
];
