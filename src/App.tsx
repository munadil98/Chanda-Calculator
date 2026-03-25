/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Calculator, Info, Landmark, Calendar, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [income, setIncome] = useState<number | string>('');
  const [selectedDivisor, setSelectedDivisor] = useState<number>(16);

  const monthlyIncome = typeof income === 'number' ? income : parseFloat(income) || 0;

  const selectedChanda = monthlyIncome / selectedDivisor;
  const jalsaChanda = monthlyIncome / 10;

  const totalMonthly = selectedChanda;
  const totalYearly = (totalMonthly * 12) + jalsaChanda;

  const chandaOptions = [
    { label: 'চাদা আম (১/১৬)', divisor: 16 },
    { label: 'হিসসা আমদ (১/১০)', divisor: 10 },
    { label: 'হিসসা আমদ (১/৯)', divisor: 9 },
    { label: 'হিসসা আমদ (১/৮)', divisor: 8 },
    { label: 'হিসসা আমদ (১/৭)', divisor: 7 },
    { label: 'হিসসা আমদ (১/৬)', divisor: 6 },
    { label: 'হিসসা আমদ (১/৫)', divisor: 5 },
    { label: 'হিসসা আমদ (১/৪)', divisor: 4 },
    { label: 'হিসসা আমদ (১/৩)', divisor: 3 },
  ];

  const formatNumber = (num: number) => {
    return num.toLocaleString('bn-BD', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-blue-100">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="mb-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-200"
          >
            <Calculator className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            চাদা ক্যালকুলেটর
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg max-w-md mx-auto"
          >
            আপনার মাসিক আয়ের ভিত্তিতে চাদার পরিমাণ সহজে গণনা করুন।
          </motion.p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Section */}
          <section className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-8"
            >
              <label htmlFor="income" className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                মাসিক আয় (টাকা)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-medium text-gray-400">৳</span>
                <input
                  id="income"
                  type="number"
                  placeholder="আপনার আয় লিখুন"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full pl-10 pr-4 py-5 bg-gray-50 border-none rounded-2xl text-3xl font-bold focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-gray-300"
                />
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-2xl flex gap-4 items-start">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 leading-relaxed">
                  সঠিক হিসাবের জন্য আপনার মোট মাসিক আয় প্রদান করুন। এটি আপনার চাদা আম এবং হিসসা আমদ নির্ধারণে সাহায্য করবে।
                </p>
              </div>
            </motion.div>
          </section>

          {/* Results Section */}
          <section className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              {monthlyIncome > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6"
                >
                  {/* Primary Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <Landmark className="w-5 h-5 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-700">চাদা আমদ/ হিসসা আমদ</h3>
                      </div>
                      <p className="text-3xl font-bold text-green-600">৳ {formatNumber(selectedChanda)}</p>
                      <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">মাসিক প্রদেয়</p>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-50 rounded-lg">
                          <Calendar className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-gray-700">জলসা চাদা (১/১০)</h3>
                      </div>
                      <p className="text-3xl font-bold text-purple-600">৳ {formatNumber(jalsaChanda)}</p>
                      <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">বার্ষিক একবার</p>
                    </div>
                  </div>

                  {/* Dropdown Section */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <label htmlFor="chanda-type" className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      চাদা আমদ/ হিসসা আমদ অংশ
                    </label>
                    <div className="relative">
                      <select
                        id="chanda-type"
                        value={selectedDivisor}
                        onChange={(e) => setSelectedDivisor(parseInt(e.target.value))}
                        className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl text-xl font-bold focus:ring-2 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                      >
                        {chandaOptions.map((option) => (
                          <option key={option.divisor} value={option.divisor}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <TrendingUp className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Totals Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-600 p-6 rounded-3xl shadow-lg shadow-blue-100 text-white">
                      <h3 className="text-sm font-semibold opacity-80 uppercase tracking-wider mb-2">মোট মাসিক চাদা</h3>
                      <p className="text-3xl font-bold">৳ {formatNumber(totalMonthly)}</p>
                      <p className="text-[10px] mt-2 opacity-60 italic">নির্বাচিত চাদার পরিমাণ</p>
                    </div>
                    <div className="bg-indigo-600 p-6 rounded-3xl shadow-lg shadow-indigo-100 text-white">
                      <h3 className="text-sm font-semibold opacity-80 uppercase tracking-wider mb-2">মোট বার্ষিক চাদা</h3>
                      <p className="text-3xl font-bold">৳ {formatNumber(totalYearly)}</p>
                      <p className="text-[10px] mt-2 opacity-60 italic">(মাসিক × ১২) + জলসা চাদা</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white p-12 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Calculator className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">ফলাফল দেখতে আয় লিখুন</h3>
                  <p className="text-gray-300 max-w-xs">
                    বাম দিকের বক্সে আপনার মাসিক আয় লিখলে এখানে বিস্তারিত হিসাব দেখা যাবে।
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </main>

        <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} চাদা ক্যালকুলেটর • আপনার সেবায় নিয়োজিত</p>
        </footer>
      </div>
    </div>
  );
}
