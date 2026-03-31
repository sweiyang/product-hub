import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  ArrowLeft, 
  BarChart3, 
  History, 
  MessageSquare, 
  Info,
  Users,
  DollarSign,
  Activity,
  Filter,
  LayoutGrid,
  Star,
  Cpu,
  Heart,
  ShieldCheck,
  Zap,
  Globe,
  Settings,
  HelpCircle,
  TrendingUp,
  TrendingDown,
  Clock
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { PRODUCTS } from './data';
import { Product, Category, QuarterMetric } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'Featured', label: 'Featured', icon: Star },
    { id: 'All', label: 'All', icon: LayoutGrid },
    { id: 'Central Service', label: 'Central Service', icon: Globe },
    { id: 'Risk', label: 'Risk', icon: ShieldCheck },
    { id: 'Fraud', label: 'Fraud', icon: Zap },
  ] as const;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || 
                             (selectedCategory === 'Featured' ? p.id === '1' || p.id === '2' : p.category === selectedCategory);
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="min-h-screen bg-ocbc-bg relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-ocbc-red/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-ocbc-red/10 rounded-full blur-3xl" />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black text-ocbc-text mb-8 tracking-tighter"
        >
          GDO Product Inventory
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-ocbc-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium"
        >
          A centralized dashboard for OCBC internal products, featuring metrics, change logs, and project details.
        </motion.p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative mb-16">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-ocbc-secondary w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search products, categories, or features..." 
            className="w-full pl-14 pr-6 py-6 bg-white border border-ocbc-border rounded-2xl shadow-sm text-lg outline-none focus:ring-4 focus:ring-ocbc-red/10 focus:border-ocbc-red transition-all text-ocbc-text placeholder:text-ocbc-secondary/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Icons */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as Category)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all font-bold text-sm tracking-tight",
                selectedCategory === cat.id 
                  ? "bg-ocbc-red border-ocbc-red text-white shadow-lg shadow-ocbc-red/20 scale-105" 
                  : "bg-white border-ocbc-border text-ocbc-secondary hover:border-ocbc-red hover:text-ocbc-red hover:bg-ocbc-red/5"
              )}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProduct(product)}
                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-ocbc-border group relative overflow-hidden flex flex-col h-full"
              >
                {/* Subtle Red Accent Top Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-ocbc-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                {/* Decorative background element */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-ocbc-red/5 rounded-full blur-2xl group-hover:bg-ocbc-red/10 transition-colors" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-ocbc-panel rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {product.logo}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 bg-ocbc-panel text-ocbc-secondary text-[9px] font-black rounded-lg uppercase tracking-widest border border-ocbc-border">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 text-[8px] font-black rounded-md border border-green-100 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Active
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-ocbc-text tracking-tight group-hover:text-ocbc-red transition-colors mb-1">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-3 text-ocbc-secondary/50 text-[9px] font-black uppercase tracking-widest">
                      <span>Est. {product.sinceDate}</span>
                      <span className="w-1 h-1 bg-ocbc-border rounded-full" />
                      <span>OCBC Internal</span>
                    </div>
                  </div>
                  
                  <p className="text-ocbc-secondary text-sm leading-relaxed mb-8 line-clamp-2 font-medium flex-grow">
                    {product.description}
                  </p>

                  {/* Quick Stats Row */}
                  <div className="grid grid-cols-2 gap-3 mb-8 p-5 bg-ocbc-panel/40 rounded-2xl border border-ocbc-border/40 group-hover:bg-ocbc-panel/60 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-ocbc-secondary/60 uppercase tracking-widest">
                        <Users className="w-3 h-3" />
                        <span>Active Users</span>
                      </div>
                      <div className="text-lg font-black text-ocbc-text">{(product.metrics[0].activeUsers / 1000).toFixed(1)}K</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-ocbc-secondary/60 uppercase tracking-widest">
                        <DollarSign className="w-3 h-3" />
                        <span>Quarterly Cost</span>
                      </div>
                      <div className="text-lg font-black text-ocbc-text">${(product.metrics[0].cost / 1000).toFixed(0)}K</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-ocbc-border/50">
                    <span className="text-[10px] font-black text-ocbc-red uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-ocbc-panel flex items-center justify-center group-hover:bg-ocbc-red group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function ProductDetail({ product, onBack }: { product: Product, onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'intro' | 'metrics' | 'changelog' | 'feedback'>('intro');
  const [selectedQuarter, setSelectedQuarter] = useState(product.metrics[0].quarter);

  const currentMetric = useMemo(() => {
    return product.metrics.find(m => m.quarter === selectedQuarter) || product.metrics[0];
  }, [selectedQuarter, product.metrics]);

  const tabs = [
    { id: 'intro', label: 'OVERVIEW', icon: Info },
    { id: 'metrics', label: 'METRICS', icon: BarChart3 },
    { id: 'changelog', label: 'UPDATES', icon: History },
    { id: 'feedback', label: 'FEEDBACK', icon: MessageSquare },
  ] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Detail Header */}
      <div className="border-b border-slate-100 sticky top-0 bg-white z-20">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-800 transition-colors font-bold text-xs tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> BACK
          </button>
          <div className="flex gap-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative py-7 text-xs font-bold tracking-widest transition-all",
                  activeTab === tab.id ? "text-ocbc-red" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 right-0 h-1 bg-ocbc-red" />
                )}
              </button>
            ))}
          </div>
          <div className="w-12" />
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16"
            >
              {/* Loud Header Section */}
              <div className="relative overflow-hidden rounded-[4rem] bg-slate-50 border border-slate-100 p-12 lg:p-20">
                {/* Background Large Text */}
                <div className="absolute -bottom-10 -right-10 text-[20vw] font-black text-slate-200/40 select-none pointer-events-none uppercase tracking-tighter leading-none">
                  {product.title.split(' ')[0]}
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  <div className="lg:col-span-5 space-y-10">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-32 h-32 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 flex items-center justify-center text-6xl border border-slate-50"
                    >
                      {product.logo}
                    </motion.div>
                    <div className="space-y-6">
                      <div>
                        <motion.h1 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="text-6xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-none"
                        >
                          {product.title}
                        </motion.h1>
                        <p className="text-ocbc-red font-black text-sm uppercase tracking-[0.4em]">{product.category} • EST. {product.sinceDate}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-6 py-2 bg-slate-900 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Internal Ecosystem</span>
                        <span className="px-6 py-2 bg-green-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest">Live & Active</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-ocbc-red rounded-full" />
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">The Purpose</h3>
                      </div>
                      <p className="text-slate-800 text-2xl leading-tight font-black tracking-tight">
                        {product.why}
                      </p>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-1 bg-slate-300 rounded-full" />
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">The Solution</h3>
                      </div>
                      <p className="text-slate-600 text-lg leading-relaxed font-medium">
                        {product.what}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Impressive Quarter Overview - Bento Grid Style */}
              <div className="space-y-12 pt-12 border-t border-slate-100">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Quarterly Overview</h2>
                    <p className="text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">Performance Snapshot • {product.metrics[0].quarter}</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="px-6 py-2 bg-slate-900 text-white text-[10px] font-black rounded-full tracking-[0.2em] uppercase">
                      Live Data
                    </div>
                  </div>
                </div>

                <motion.div 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                  {/* Main Usage Card - Large */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-8 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-ocbc-red/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-ocbc-red/30 transition-colors" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-12">
                        <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                          <Activity className="w-7 h-7 text-ocbc-red" />
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Status</div>
                          <div className="flex items-center gap-2 text-green-400 text-xs font-black uppercase tracking-widest">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Trending Up
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-end">
                        <div className="space-y-2">
                          <div className="text-7xl font-black tracking-tighter">{(currentMetric.usage / 1000).toFixed(0)}<span className="text-3xl text-white/30 ml-1">K</span></div>
                          <div className="space-y-1">
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-tight">Weekly Active Users</p>
                            <p className="text-red-400 text-[10px] font-black uppercase tracking-widest">-8.2% vs Q3</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-7xl font-black tracking-tighter">{(currentMetric.usage / 2.5 / 1000).toFixed(0)}<span className="text-3xl text-white/30 ml-1">K</span></div>
                          <div className="space-y-1">
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-tight">Total Exercises</p>
                            <p className="text-green-400 text-[10px] font-black uppercase tracking-widest">+2.4% vs Q3</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-7xl font-black tracking-tighter">{(currentMetric.usage / 100000).toFixed(1)}<span className="text-3xl text-white/30 ml-1">M</span></div>
                          <div className="space-y-1">
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-tight">Hours Logged</p>
                            <p className="text-red-400 text-[10px] font-black uppercase tracking-widest">-10.1% vs Q3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Team Card - Tall */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-4 bg-ocbc-red rounded-[3rem] p-10 text-white shadow-2xl shadow-ocbc-red/20 flex flex-col justify-between relative overflow-hidden group"
                  >
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xs font-black text-white/60 uppercase tracking-[0.3em] mb-4">The Squad</h3>
                      <div className="text-8xl font-black tracking-tighter mb-8 group-hover:scale-110 transition-transform origin-left">{currentMetric.teamMembers}</div>
                    </div>
                    <div className="relative z-10 space-y-6">
                      <div className="flex -space-x-4">
                        {currentMetric.team.length > 0 ? (
                          currentMetric.team.slice(0, 6).map((member, i) => (
                            <img 
                              key={i}
                              src={member.avatar} 
                              alt={member.name}
                              className="w-14 h-14 rounded-full border-4 border-ocbc-red shadow-xl object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ))
                        ) : (
                          [...Array(Math.min(currentMetric.teamMembers, 6))].map((_, i) => (
                            <img 
                              key={i}
                              src={`https://picsum.photos/seed/${product.id}-${i}-team/100/100`} 
                              className="w-14 h-14 rounded-full border-4 border-ocbc-red shadow-xl object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ))
                        )}
                        {currentMetric.teamMembers > Math.max(currentMetric.team.length, 6) && (
                          <div className="w-14 h-14 rounded-full border-4 border-ocbc-red bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-black text-white shadow-xl">
                            +{currentMetric.teamMembers - Math.max(currentMetric.team.length, 6)}
                          </div>
                        )}
                      </div>
                      <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                        Cross-functional team driving innovation across OCBC internal ecosystem.
                      </p>
                    </div>
                  </motion.div>

                  {/* Cost Card */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-5 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-ocbc-red group-hover:text-white transition-colors">
                        <DollarSign className="w-7 h-7" />
                      </div>
                      <div className="px-4 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-black rounded-full uppercase tracking-widest">Budget</div>
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Quarterly Burn</h3>
                      <div className="text-6xl font-black text-slate-900 tracking-tighter mb-4">${currentMetric.cost.toLocaleString()}</div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '75%' }}
                          className="h-full bg-ocbc-red" 
                        />
                      </div>
                      <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>Spent: 75%</span>
                        <span>Remaining: $45K</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Efficiency Card */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-3 bg-blue-600 rounded-[3rem] p-10 text-white shadow-xl shadow-blue-600/20 flex flex-col justify-between group"
                  >
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-white/60 uppercase tracking-[0.3em] mb-2">Efficiency</h3>
                      <div className="text-5xl font-black tracking-tighter mb-2">${(currentMetric.cost / currentMetric.usage).toFixed(2)}</div>
                      <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-tight">Cost per hour of exercise</p>
                    </div>
                  </motion.div>

                  {/* CSAT Card */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5 }}
                    className="md:col-span-4 bg-slate-50 rounded-[3rem] p-10 border border-slate-200 shadow-inner flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:text-ocbc-red transition-colors">
                        <Heart className="w-7 h-7" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-ocbc-red text-ocbc-red" />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="text-3xl font-black text-slate-900 tracking-tighter">94.9%</div>
                        <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">User CSAT</p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-3xl font-black text-slate-900 tracking-tighter">62.8%</div>
                        <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">Admin CSAT</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'metrics' && (
            <motion.div
              key="metrics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              {/* Trend Chart */}
              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Performance Trends</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Monthly data grouped by quarter</p>
                  </div>
                  <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-ocbc-red" />
                      <span className="text-slate-500">Usage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300" />
                      <span className="text-slate-500">Active Users</span>
                    </div>
                  </div>
                </div>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={[...product.metrics].reverse().flatMap(q => 
                      q.monthlyData.length > 0 
                        ? q.monthlyData.map(m => ({ ...m, quarter: q.quarter }))
                        : [{ month: q.quarter, usage: q.usage, activeUsers: q.activeUsers, quarter: q.quarter }]
                    )}>
                      <defs>
                        <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ED1C24" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#ED1C24" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 800 }}
                        dy={15}
                      />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '16px' }}
                        labelFormatter={(label, payload) => {
                          if (payload && payload.length > 0) {
                            return `${label} (${payload[0].payload.quarter})`;
                          }
                          return label;
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="usage" 
                        stroke="#ED1C24" 
                        strokeWidth={4}
                        fillOpacity={1} 
                        fill="url(#colorUsage)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="activeUsers" 
                        stroke="#94a3b8" 
                        strokeWidth={2}
                        fill="transparent"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Quarter Selector Stats */}
              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Deep Dive Statistics</h3>
                  <div className="relative">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select 
                      className="bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-6 py-3 text-xs font-black text-slate-700 outline-none focus:ring-4 focus:ring-ocbc-red/10 appearance-none cursor-pointer uppercase tracking-widest"
                      value={selectedQuarter}
                      onChange={(e) => setSelectedQuarter(e.target.value)}
                    >
                      {product.metrics.map(m => (
                        <option key={m.quarter} value={m.quarter}>{m.quarter}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-8 bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <Users className="w-8 h-8 text-ocbc-red" />
                      </div>
                      <div className="text-5xl font-black text-slate-900 tracking-tighter">{currentMetric.teamMembers}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Team Members</div>
                      <div className="flex flex-wrap gap-3">
                        {currentMetric.team.map((member, i) => (
                          <div key={i} className="group relative">
                            <img 
                              src={member.avatar} 
                              alt={member.name}
                              className="w-12 h-12 rounded-2xl border-2 border-white shadow-md group-hover:scale-110 transition-transform cursor-help"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[9px] font-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none uppercase tracking-widest">
                              {member.name} • {member.role}
                            </div>
                          </div>
                        ))}
                        {currentMetric.teamMembers > currentMetric.team.length && (
                          <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-sm">
                            +{currentMetric.teamMembers - currentMetric.team.length}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <DollarSign className="w-8 h-8 text-ocbc-red" />
                      </div>
                      <div className="text-5xl font-black text-slate-900 tracking-tighter">${(currentMetric.cost / 1000).toFixed(1)}K</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Cost Breakdown</div>
                      <div className="space-y-3">
                        {currentMetric.costBreakdown.length > 0 ? currentMetric.costBreakdown.map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{item.category}</span>
                            <span className="text-[10px] font-black text-slate-900">${(item.amount / 1000).toFixed(1)}K</span>
                          </div>
                        )) : (
                          <p className="text-[10px] text-slate-400 italic">No breakdown available for this quarter.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8 bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-100">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        <Activity className="w-8 h-8 text-ocbc-red" />
                      </div>
                      <div className="text-5xl font-black text-slate-900 tracking-tighter">{(currentMetric.usage / 1000).toFixed(0)}K</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Usage Dimensions</div>
                      <div className="space-y-4">
                        {currentMetric.usageDimensions.length > 0 ? currentMetric.usageDimensions.map((dim, i) => (
                          <div key={i} className="group relative cursor-help">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{dim.name}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-slate-900">{dim.value}</span>
                                <span className={cn(
                                  "text-[8px] font-black px-1.5 py-0.5 rounded-full",
                                  dim.isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                                )}>
                                  {dim.change}
                                </span>
                              </div>
                            </div>
                            <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[9px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 z-20 pointer-events-none leading-relaxed">
                              {dim.description}
                            </div>
                          </div>
                        )) : (
                          <p className="text-[10px] text-slate-400 italic">No dimensions listed for this quarter.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'changelog' && (
            <motion.div
              key="changelog"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative space-y-16 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-1 before:bg-slate-100">
                {product.changeLogs.map((log, idx) => (
                  <div key={log.quarter} className="relative pl-24">
                    <div className={cn(
                      "absolute left-0 top-2 w-16 h-16 rounded-full border-8 border-white flex items-center justify-center z-10 shadow-xl",
                      idx === 0 ? "bg-ocbc-red text-white" : "bg-slate-100 text-slate-400"
                    )}>
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="text-3xl font-black text-slate-900 tracking-tight">{log.quarter}</h4>
                        {idx === 0 && (
                          <span className="px-4 py-1.5 bg-green-50 text-green-700 text-[10px] font-black rounded-full border border-green-100 uppercase tracking-widest">
                            Latest Release
                          </span>
                        )}
                      </div>
                      <ul className="space-y-6">
                        {log.updates.map((update, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-600 text-lg font-medium leading-relaxed">
                            <div className="w-2 h-2 bg-ocbc-red rounded-full mt-2.5 shrink-0" />
                            {update}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'feedback' && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12 max-w-3xl mx-auto"
            >
              <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-12">User Feedbacks</h3>
                {product.feedbacks.length > 0 ? (
                  <div className="space-y-12">
                    {product.feedbacks.map((f, i) => (
                      <div key={i} className="flex gap-8">
                        <div className="w-16 h-16 bg-ocbc-red/10 text-ocbc-red rounded-3xl flex items-center justify-center font-black text-2xl shrink-0">
                          {f.user.charAt(0)}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <span className="font-black text-slate-900 text-lg tracking-tight">{f.user}</span>
                            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{f.date}</span>
                          </div>
                          <p className="text-slate-600 text-xl leading-relaxed font-medium italic">
                            "{f.comment}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <MessageSquare className="w-20 h-20 text-slate-100 mx-auto mb-6" />
                    <p className="text-slate-400 text-lg font-bold">No feedback received yet for this product.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-[#111827] p-16 rounded-[4rem] text-center shadow-2xl">
                <h4 className="text-3xl font-black text-white mb-4 tracking-tight">Have a suggestion?</h4>
                <p className="text-white/60 text-lg font-medium mb-10 max-w-md mx-auto">Your feedback helps us drive innovation across OCBC's internal services.</p>
                <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform active:scale-95">
                  Submit Feedback
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
