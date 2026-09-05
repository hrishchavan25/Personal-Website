import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Building2, 
  FileText,
  Calendar,
  UserCheck,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CopyrightCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CopyrightCertificateModal: React.FC<CopyrightCertificateModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedNo, setCopiedNo] = useState(false);
  const [activeTab, setActiveTab] = useState<'certificate' | 'details'>('certificate');

  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#9333ea', '#a855f7', '#ec4899', '#f43f5e']
    });
    window.print();
  };

  const handleCopyCertNumber = () => {
    navigator.clipboard.writeText('LD-20260194125');
    setCopiedNo(true);
    setTimeout(() => setCopiedNo(false), 2000);
  };

  return (
    <div 
      id="copyright-certificate-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div 
        id="copyright-certificate-container"
        className="relative w-full max-w-4xl rounded-[32px] bg-white text-slate-900 border-2 border-purple-200 shadow-2xl p-4 sm:p-8 my-6 max-h-[94vh] overflow-y-auto print:max-h-none print:shadow-none print:p-0 print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on Print) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-purple-100 gap-3 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
              <Award className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider">
                  Official Copyright Certificate
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Registered 2025-26
                </span>
              </div>
              <p className="text-xs text-slate-600 font-chic">
                Government of India • Extracts from the Register of Copyrights
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCertNumber}
              className="px-3 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="Copy Certificate Number"
            >
              {copiedNo ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-purple-600" />}
              <span>{copiedNo ? 'Copied No.!' : 'Cert: LD-20260194125'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-purple-600/20 cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save PDF / Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 transition-colors cursor-pointer"
              aria-label="Close certificate"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 mb-6 print:hidden">
          <button
            onClick={() => setActiveTab('certificate')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'certificate'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200'
            }`}
          >
            Official Certificate View
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'details'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200'
            }`}
          >
            Registration Metadata & Verification
          </button>
        </div>

        {/* ================= CERTIFICATE REPLICA CONTAINER ================= */}
        {activeTab === 'certificate' ? (
          <div className="space-y-6">
            
            {/* PAGE 1: Official Register Extract */}
            <div className="relative p-6 sm:p-10 rounded-2xl border-4 border-amber-700/60 bg-[#fffdfa] shadow-inner font-serif text-slate-900 overflow-hidden print:border-2 print:p-6 print:m-0">
              
              {/* Subtle Guilloche Watermark Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              {/* Certificate Top Header */}
              <div className="relative z-10 text-center pb-4 border-b-2 border-amber-800/40">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <div className="text-left font-mono text-[11px] text-amber-900/90 font-bold leading-tight">
                    <span className="block text-xs uppercase tracking-wider text-amber-950">INTELLECTUAL PROPERTY INDIA</span>
                    <span className="text-[10px] text-amber-800 font-sans">PATENTS | DESIGNS | TRADE MARKS | GEOGRAPHICAL INDICATIONS</span>
                  </div>

                  <div className="text-right font-mono text-xs text-amber-950 font-bold bg-amber-100/70 px-3 py-1 rounded-md border border-amber-300">
                    <div>प्रमाणपत्र सं. / Certificate No.:</div>
                    <div className="text-sm tracking-widest text-amber-900">LD-20260194125</div>
                  </div>
                </div>

                <div className="my-3">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    प्रतिलिप्यधिकार कार्यालय, भारत सरकार
                  </h1>
                  <h2 className="text-lg sm:text-xl font-bold text-amber-950 tracking-normal uppercase">
                    Copyright Office, Government of India
                  </h2>
                  <div className="mt-1 font-sans text-xs text-slate-700 font-semibold">
                    प्रतिलिप्यधिकार प्रमाणपत्र | Copyright Certificate
                  </div>
                  <div className="text-[11px] font-sans text-slate-600">
                    प्रतिलिप्यधिकार नियम का नियम 70 | Rule 70 of The Copyright Rules
                  </div>
                  <div className="text-xs font-serif italic text-amber-900 mt-0.5">
                    प्रतिलिप्यधिकार रजिस्टर से उद्धरण | Extracts from the Register of Copyrights
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs font-mono text-slate-800 pt-2 border-t border-amber-200 flex-wrap gap-2">
                  <div>
                    <span className="text-slate-600">आवेदन सं. / Application No.: </span>
                    <strong className="text-slate-950 font-bold">LD-10379/2026-CO</strong>
                  </div>
                  <div>
                    <span className="text-slate-600">दाखिल करने की तिथि / Date of Filing: </span>
                    <strong className="text-slate-950 font-bold">07/03/2026</strong>
                  </div>
                </div>
              </div>

              {/* Certification Statement */}
              <div className="my-5 p-4 rounded-xl bg-amber-50/60 border border-amber-300/80 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
                <p className="italic text-slate-700 mb-1.5 text-xs">
                  एतद्द्वारा यह प्रमाणित किया जाता है कि प्रतिलिप्यधिकार अधिनियम, 1957 के प्रावधानों के अनुसार, उपर्युक्त आवेदन में प्रकट किए गए &ldquo;Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress&rdquo; नामक कार्य के लिए प्रतिलिप्यधिकार प्रदान किया गया है।
                </p>
                <p className="font-semibold text-slate-950">
                  This is to certify that a copyright has been registered for the work titled <span className="text-amber-950 uppercase font-bold">&ldquo;Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress&rdquo;</span> as disclosed in the below mentioned application in accordance with the provisions of the Copyright Act, 1957.
                </p>
              </div>

              {/* Table of Authors */}
              <div className="space-y-4 text-xs font-sans">
                <div>
                  <h3 className="font-bold text-amber-950 uppercase text-xs tracking-wider pb-1 border-b border-amber-200">
                    रचयिता / Authors:
                  </h3>
                  <div className="mt-2 divide-y divide-amber-200/80 border border-amber-200 rounded-lg overflow-hidden bg-white/80">
                    <div className="p-2.5 grid grid-cols-12 gap-2 text-slate-800">
                      <span className="col-span-1 font-mono font-bold text-amber-900">1</span>
                      <span className="col-span-4 font-bold text-slate-950">HRISHITA CHAVAN</span>
                      <span className="col-span-7 text-[11px] text-slate-700">
                        D5-37 GREEN FIELDS ROCKS END CHS LTD, OPPOSITE OBEROI INTERNATIONAL SCHOOL JVLR, ANDHERI EAST, MUMBAI-400093
                      </span>
                    </div>

                    <div className="p-2.5 grid grid-cols-12 gap-2 text-slate-800 bg-amber-50/30">
                      <span className="col-span-1 font-mono font-bold text-amber-900">2</span>
                      <span className="col-span-4 font-bold text-slate-950">DR. SHARMILA NILESH RATHOD</span>
                      <span className="col-span-7 text-[11px] text-slate-700">
                        B203 RAJ RESIDENCY, MG ROAD, GOREGAON WEST, MUMBAI-400104
                      </span>
                    </div>

                    <div className="p-2.5 grid grid-cols-12 gap-2 text-slate-800">
                      <span className="col-span-1 font-mono font-bold text-amber-900">3</span>
                      <span className="col-span-4 font-bold text-slate-950">ARYAN PANCHAL</span>
                      <span className="col-span-7 text-[11px] text-slate-700">
                        A114 UNIVERSITY VILLAGE DRIVE, CENTRAL, CLEMSON, SC, USA-029630
                      </span>
                    </div>
                  </div>
                </div>

                {/* Table of Owners */}
                <div>
                  <h3 className="font-bold text-amber-950 uppercase text-xs tracking-wider pb-1 border-b border-amber-200">
                    स्वामी / Owners:
                  </h3>
                  <div className="mt-2 divide-y divide-amber-200/80 border border-amber-200 rounded-lg overflow-hidden bg-white/80">
                    <div className="p-2.5 grid grid-cols-12 gap-2 text-slate-800">
                      <span className="col-span-1 font-mono font-bold text-amber-900">1</span>
                      <span className="col-span-4 font-bold text-slate-950">HRISHITA CHAVAN</span>
                      <span className="col-span-7 text-[11px] text-slate-700">
                        D5-37 GREEN FIELDS ROCKS END CHS LTD, OPPOSITE OBEROI INTERNATIONAL SCHOOL JVLR, ANDHERI EAST, MUMBAI-400093
                      </span>
                    </div>

                    <div className="p-2.5 grid grid-cols-12 gap-2 text-slate-800 bg-amber-50/30">
                      <span className="col-span-1 font-mono font-bold text-amber-900">2</span>
                      <span className="col-span-4 font-bold text-slate-950">DR. SHARMILA NILESH RATHOD</span>
                      <span className="col-span-7 text-[11px] text-slate-700">
                        B203 RAJ RESIDENCY, MG ROAD, GOREGAON WEST, MUMBAI-400104
                      </span>
                    </div>

                    <div className="p-2.5 grid grid-cols-12 gap-2 text-slate-800">
                      <span className="col-span-1 font-mono font-bold text-amber-900">3</span>
                      <span className="col-span-4 font-bold text-slate-950">ARYAN PANCHAL</span>
                      <span className="col-span-7 text-[11px] text-slate-700">
                        A114 UNIVERSITY VILLAGE DRIVE, CENTRAL, CLEMSON, SC, USA-029630
                      </span>
                    </div>
                  </div>
                </div>

                {/* Work & Language Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono">
                  <div className="p-2 rounded bg-amber-50/60 border border-amber-200">
                    <span className="text-slate-500 block">प्रकाशक / Publisher:</span>
                    <span className="font-bold text-slate-900">N.A.</span>
                  </div>
                  <div className="p-2 rounded bg-amber-50/60 border border-amber-200">
                    <span className="text-slate-500 block">भाषा / Language:</span>
                    <span className="font-bold text-slate-900">English</span>
                  </div>
                  <div className="p-2 rounded bg-amber-50/60 border border-amber-200">
                    <span className="text-slate-500 block">कार्य का विवरण:</span>
                    <span className="font-bold text-slate-900">N.A.</span>
                  </div>
                  <div className="p-2 rounded bg-amber-50/60 border border-amber-200">
                    <span className="text-slate-500 block">ROC Date:</span>
                    <span className="font-bold text-purple-900">25/08/2026</span>
                  </div>
                </div>

                {/* Seal and Signature Footer */}
                <div className="pt-6 mt-4 border-t-2 border-amber-800/40 flex items-end justify-between">
                  <div className="text-left font-mono text-[11px] text-slate-700">
                    <p className="font-bold text-amber-950">आर. ओ. सी. जारी होने की तिथि / Date of ROC:</p>
                    <p className="text-xs font-bold text-slate-900">25/08/2026 (Registration Year 2025-26)</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border-2 border-amber-800/60 mx-auto flex items-center justify-center bg-amber-50/80 shadow-xs mb-1">
                      <span className="text-[9px] font-bold text-amber-900 uppercase">OFFICIAL SEAL</span>
                    </div>
                    <span className="font-serif italic font-bold text-sm text-slate-900 block border-t border-slate-400 pt-1 px-4">
                      Registrar of Copyrights
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        ) : (
          /* ================= METADATA & VERIFICATION TAB ================= */
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3">
              <div className="flex items-center gap-2 text-purple-950 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-purple-700" />
                <span>Intellectual Property Registration Summary</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-chic">
                This copyright registration formally protects the algorithmic models, cognitive stress quantification constructs, and tailored digital health intervention frameworks developed by Hrishita Chavan and co-researchers under the Copyright Act, 1957.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-chic">
              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-purple-800 font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-purple-600" />
                  Certificate Number
                </span>
                <p className="text-base font-mono font-bold text-slate-900">LD-20260194125</p>
                <p className="text-[11px] text-slate-500 font-mono">Application: LD-10379/2026-CO</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-purple-800 font-bold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-600" />
                  Registration Year & Dates
                </span>
                <p className="text-base font-mono font-bold text-slate-900">Year 2025-26</p>
                <p className="text-[11px] text-slate-500 font-mono">Filing: 07/03/2026 • ROC: 25/08/2026</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-1.5 sm:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-purple-800 font-bold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  Registered Title of Work
                </span>
                <p className="text-sm font-bold text-purple-950 leading-snug">
                  &ldquo;Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress&rdquo;
                </p>
                <p className="text-xs text-slate-600">
                  Domain: Digital Mental Health & Applied AI Recommendation Systems
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-2 sm:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-purple-800 font-bold flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-purple-600" />
                  Registered Authors & Owners
                </span>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-purple-700">01.</span>
                    <div>
                      <strong className="text-slate-900">Hrishita Chavan</strong> — Primary Researcher & Software Developer (Andheri East, Mumbai-400093)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-purple-700">02.</span>
                    <div>
                      <strong className="text-slate-900">Dr. Sharmila Nilesh Rathod</strong> — Co-Author & Academic Mentor (Goregaon West, Mumbai-400104)
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-mono font-bold text-purple-700">03.</span>
                    <div>
                      <strong className="text-slate-900">Aryan Panchal</strong> — Co-Author (Central, Clemson, SC, USA-029630)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t border-purple-100 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-purple-800 font-folklore">
            Hrishita Chavan • applied ai & intellectual property
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ios-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Save Certificate</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-semibold transition-all cursor-pointer ios-btn"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
