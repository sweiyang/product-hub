import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight,
  ChevronDown,
  ArrowLeft, 
  BarChart3, 
  History, 
  MessageSquare, 
  Info,
  Users,
  Activity,
  Filter,
  LayoutGrid,
  Star,
  Cpu,
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
  ] as const;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || 
                             (selectedCategory === 'Featured' ? true : p.category === selectedCategory);
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

                  {/* Primary Metric Showcase */}
                  {(() => {
                    const primaryDim = product.metrics[0].usageDimensions.find(d => d.primary !== false);
                    if (!primaryDim) return null;
                    return (
                      <div className="mb-8 p-6 bg-slate-50/40 rounded-[2rem] border border-slate-100/60 group-hover:bg-white group-hover:shadow-lg group-hover:border-slate-200 transition-all duration-300 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <div className="relative z-10">
                          <div className="text-4xl font-black text-ocbc-red tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-300 origin-center">{primaryDim.value}</div>
                          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{primaryDim.name}</p>
                          {primaryDim.change !== '-' && (
                            <div className={`inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${primaryDim.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                              {primaryDim.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                              {primaryDim.change}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })()}

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
  const [activeTab, setActiveTab] = useState<'intro' | 'changelog' | 'feedback'>('intro');
  const [selectedQuarter, setSelectedQuarter] = useState(product.metrics[0].quarter);
  const [showTrends, setShowTrends] = useState(false);
  const [visibleMetrics, setVisibleMetrics] = useState<Set<number>>(new Set([0]));

  const currentMetric = useMemo(() => {
    return product.metrics.find(m => m.quarter === selectedQuarter) || product.metrics[0];
  }, [selectedQuarter, product.metrics]);

  const tabs = [
    { id: 'intro', label: 'OVERVIEW', icon: Info },
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

              {/* Key Metrics Section */}
              <div className="space-y-8 pt-12 border-t border-slate-100">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Key Metrics</h2>
                    <p className="text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">Performance Snapshot • {currentMetric.quarter}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-black rounded-full border border-slate-200 uppercase tracking-widest">
                      Live Data
                    </span>
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
                </div>

                {/* Key Metrics (primary) */}
                {(() => {
                  const primaryDims = currentMetric.usageDimensions.filter(d => d.primary !== false);
                  const subDims = currentMetric.usageDimensions.filter(d => d.primary === false);
                  return (
                    <>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
                        }}
                        className={`grid grid-cols-1 sm:grid-cols-2 ${primaryDims.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}
                      >
                        {primaryDims.length > 0 ? primaryDims.map((dim, i) => (
                          <motion.div
                            key={i}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ y: -5 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-200/80 text-center cursor-default overflow-hidden hover:shadow-2xl hover:shadow-slate-300/40 hover:border-slate-200 transition-all duration-300"
                          >
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors duration-500 pointer-events-none" />
                            <div className="relative z-10">
                              <div className="text-6xl font-black text-ocbc-red tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-300 origin-center">{dim.value}</div>
                              <p className="text-slate-600 text-[11px] font-black uppercase tracking-[0.2em] mb-3">{dim.name}</p>
                              {dim.change !== '-' && (
                                <div className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${dim.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                                  {dim.isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                                  {dim.change}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )) : (
                          <div className="col-span-full text-center py-8">
                            <p className="text-slate-400 text-sm font-bold">No metrics available for this quarter.</p>
                          </div>
                        )}
                      </motion.div>

                      {/* Sub Metrics */}
                      {subDims.length > 0 && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                          }}
                          className={`grid grid-cols-2 sm:grid-cols-3 ${subDims.length >= 4 ? 'lg:grid-cols-4' : subDims.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-4`}
                        >
                          {subDims.map((dim, i) => (
                            <motion.div
                              key={i}
                              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                              whileHover={{ y: -3 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                              className="group relative bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center cursor-default overflow-hidden hover:shadow-lg hover:bg-white hover:border-slate-200 transition-all duration-300"
                            >
                              <div className="relative z-10">
                                <div className="text-3xl font-black text-slate-800 tracking-tighter mb-2 group-hover:text-ocbc-red transition-colors duration-300">{dim.value}</div>
                                <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1">{dim.name}</p>
                                {dim.change !== '-' && (
                                  <div className={`inline-flex items-center gap-1 text-[8px] font-black uppercase tracking-widest ${dim.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                                    {dim.isPositive ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                                    {dim.change}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </>
                  );
                })()}

                {/* Collapsible Trends Section */}
                {currentMetric.monthlyData.length > 0 && currentMetric.usageDimensions.length > 0 && (
                  <div>
                    <button
                      onClick={() => setShowTrends(!showTrends)}
                      className="w-full flex items-center justify-center gap-3 py-4 text-slate-400 hover:text-slate-600 transition-colors group"
                    >
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-slate-300 transition-colors" />
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                        <BarChart3 className="w-4 h-4" />
                        {showTrends ? 'Hide' : 'Show'} Monthly Trends
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showTrends ? 'rotate-180' : ''}`} />
                      </div>
                      <div className="h-px flex-1 bg-slate-200 group-hover:bg-slate-300 transition-colors" />
                    </button>

                    <AnimatePresence>
                      {showTrends && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 mt-4">
                            <div className="flex items-center justify-between mb-8">
                              <div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1">Performance Trends</h3>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Monthly data • {currentMetric.quarter}</p>
                              </div>
                              <div className="flex flex-wrap items-center gap-3">
                                {currentMetric.usageDimensions.map((dim, i) => {
                                  const colors = ['#ED1C24', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
                                  const color = colors[i % colors.length];
                                  const isVisible = visibleMetrics.has(i);
                                  return (
                                    <button
                                      key={i}
                                      onClick={() => {
                                        const next = new Set(visibleMetrics);
                                        if (isVisible && next.size > 1) {
                                          next.delete(i);
                                        } else {
                                          next.add(i);
                                        }
                                        setVisibleMetrics(next);
                                      }}
                                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${isVisible ? 'border-slate-300 bg-white shadow-sm' : 'border-slate-100 bg-slate-50 opacity-40'}`}
                                    >
                                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                                      {dim.name}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="h-[350px] w-full">
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={currentMetric.monthlyData.map(m => {
                                  const point: Record<string, string | number> = { month: m.month };
                                  currentMetric.usageDimensions.forEach((dim, di) => {
                                    if (dim.description.includes('Jan') || dim.description.includes('Feb') || dim.description.includes('Mar')) {
                                      const matches = dim.description.match(/Jan\s+(\d+).*Feb\s+(\d+).*Mar\s+(\d+)/i);
                                      if (matches) {
                                        const monthMap: Record<string, number> = { Jan: Number(matches[1]), Feb: Number(matches[2]), Mar: Number(matches[3]) };
                                        point[`dim_${di}`] = monthMap[m.month] || 0;
                                      } else {
                                        point[`dim_${di}`] = m.usage;
                                      }
                                    } else {
                                      point[`dim_${di}`] = m.usage;
                                    }
                                  });
                                  return point;
                                })}>
                                  <defs>
                                    {currentMetric.usageDimensions.map((_, i) => {
                                      const colors = ['#ED1C24', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
                                      return (
                                        <linearGradient key={i} id={`colorDim${i}`} x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="5%" stopColor={colors[i % colors.length]} stopOpacity={0.1}/>
                                          <stop offset="95%" stopColor={colors[i % colors.length]} stopOpacity={0}/>
                                        </linearGradient>
                                      );
                                    })}
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
                                  />
                                  {currentMetric.usageDimensions.map((dim, i) => {
                                    const colors = ['#ED1C24', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
                                    if (!visibleMetrics.has(i)) return null;
                                    return (
                                      <Area
                                        key={i}
                                        type="monotone"
                                        dataKey={`dim_${i}`}
                                        name={dim.name}
                                        stroke={colors[i % colors.length]}
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill={`url(#colorDim${i})`}
                                      />
                                    );
                                  })}
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {/* Team Members Section */}
              <div className="space-y-8 pt-12 border-t border-slate-100">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">The Squad</h2>
                    <p className="text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">{currentMetric.teamMembers} members • {currentMetric.quarter}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6">
                  {currentMetric.team.length > 0 ? (
                    currentMetric.team.map((member, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ y: -5 }}
                        className="group flex flex-col items-center gap-3 bg-white p-6 rounded-[2rem] border border-slate-200/80 hover:shadow-2xl hover:shadow-slate-300/40 transition-all duration-300 w-36"
                      >
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-20 h-20 rounded-full border-4 border-slate-100 shadow-lg object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-center">
                          <p className="text-sm font-black text-slate-900 tracking-tight">{member.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{member.role}</p>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-slate-400 text-sm font-bold">No team members listed for this quarter.</p>
                  )}
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
