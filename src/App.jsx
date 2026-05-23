import { useState, useEffect } from "react";

const COLORS = {
  green: "#22c55e",
  greenDark: "#16a34a",
  greenLight: "#dcfce7",
  orange: "#f97316",
  orangeLight: "#ffedd5",
  red: "#ef4444",
  redLight: "#fee2e2",
  amber: "#f59e0b",
  amberLight: "#fef3c7",
  blue: "#3b82f6",
  blueLight: "#dbeafe",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  sidebar: "#1a1f2e",
  sidebarHover: "#252b3b",
  sidebarActive: "rgba(34,197,94,0.15)",
  white: "#ffffff",
};

const gradientBtn = `linear-gradient(90deg, ${COLORS.green} 0%, ${COLORS.orange} 100%)`;

const styles = {
  app: { display: "flex", height: "100vh", fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, color: COLORS.gray800, background: COLORS.gray50, overflow: "hidden" },
  sidebar: { width: 185, background: COLORS.sidebar, display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden" },
  sidebarLogo: { padding: "20px 16px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid rgba(255,255,255,0.08)` },
  logoIcon: { width: 36, height: 36, borderRadius: 8, background: gradientBtn, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 },
  logoText: { color: COLORS.white, fontWeight: 700, fontSize: 15, lineHeight: 1.1 },
  logoSub: { color: COLORS.gray400, fontSize: 11 },
  sidebarNav: { flex: 1, padding: "12px 8px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 2 },
  navItem: (active) => ({ display: "flex", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, cursor: "pointer", color: active ? COLORS.green : COLORS.gray400, background: active ? COLORS.sidebarActive : "transparent", fontWeight: active ? 600 : 400, fontSize: 13, transition: "all 0.15s", userSelect: "none" }),
  navIcon: { fontSize: 16, width: 18, textAlign: "center", flexShrink: 0 },
  sidebarBottom: { padding: "12px 8px", borderTop: `1px solid rgba(255,255,255,0.08)`, display: "flex", flexDirection: "column", gap: 2 },
  main: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" },
  content: { flex: 1, overflowY: "auto", padding: "28px 32px" },
  pageTitle: { fontSize: 22, fontWeight: 700, color: COLORS.gray900, marginBottom: 4 },
  pageSub: { fontSize: 13, color: COLORS.gray500, marginBottom: 24 },
  card: { background: COLORS.white, border: `1px solid ${COLORS.gray200}`, borderRadius: 12, padding: "20px 24px" },
  statCard: { background: COLORS.white, border: `1px solid ${COLORS.gray200}`, borderRadius: 12, padding: "16px 20px" },
  statLabel: { fontSize: 12, color: COLORS.gray500, marginBottom: 6 },
  statValue: { fontSize: 24, fontWeight: 700, color: COLORS.gray900 },
  statSub: { fontSize: 11, color: COLORS.gray500, marginTop: 4 },
  grid4: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 },
  grid3: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 20 },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 },
  btnPrimary: { background: gradientBtn, color: COLORS.white, border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 },
  btnOutline: { background: "transparent", color: COLORS.green, border: `1px solid ${COLORS.green}`, borderRadius: 8, padding: "7px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer" },
  btnGray: { background: COLORS.gray100, color: COLORS.gray700, border: `1px solid ${COLORS.gray200}`, borderRadius: 8, padding: "7px 14px", fontSize: 13, cursor: "pointer" },
  input: { width: "100%", padding: "9px 12px", border: `1px solid ${COLORS.gray200}`, borderRadius: 8, fontSize: 13, color: COLORS.gray800, background: COLORS.gray50, boxSizing: "border-box", outline: "none" },
  badge: (color, bg) => ({ display: "inline-block", padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 600, color, background: bg }),
  tag: (color) => ({ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 10px", borderRadius: 99, fontSize: 11, fontWeight: 600, color: color === "green" ? COLORS.greenDark : color === "orange" ? COLORS.orange : COLORS.red, background: color === "green" ? COLORS.greenLight : color === "orange" ? COLORS.orangeLight : COLORS.redLight }),
  premiumBadge: { background: gradientBtn, color: COLORS.white, borderRadius: 8, padding: "2px 8px", fontSize: 11, fontWeight: 700, display: "inline-block" },
  tableWrap: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 13 },
  th: { textAlign: "left", padding: "10px 12px", color: COLORS.gray500, fontWeight: 500, borderBottom: `1px solid ${COLORS.gray200}`, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.04em" },
  td: { padding: "12px 12px", borderBottom: `1px solid ${COLORS.gray100}`, color: COLORS.gray700, verticalAlign: "middle" },
  searchInput: { width: "100%", padding: "9px 12px 9px 36px", border: `1px solid ${COLORS.gray200}`, borderRadius: 8, fontSize: 13, background: COLORS.gray50, color: COLORS.gray800, outline: "none", boxSizing: "border-box" },
  searchWrap: { position: "relative", marginBottom: 16 },
  searchIcon: { position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: COLORS.gray400, fontSize: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 600, color: COLORS.gray800, marginBottom: 4 },
  sectionSub: { fontSize: 12, color: COLORS.gray500, marginBottom: 16 },
  divider: { borderBottom: `1px solid ${COLORS.gray100}`, margin: "16px 0" },
  avatarCircle: (bg, color) => ({ width: 34, height: 34, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }),
  row: { display: "flex", alignItems: "center", gap: 10 },
  upTrend: { color: COLORS.green, fontSize: 11, fontWeight: 600 },
  downTrend: { color: COLORS.red, fontSize: 11, fontWeight: 600 },
};

const avatarColors = [
  ["#dbeafe","#1d4ed8"],["#dcfce7","#15803d"],["#fef3c7","#92400e"],
  ["#fce7f3","#be185d"],["#ede9fe","#6d28d9"],["#ffedd5","#c2410c"],
];
const getAvatar = (name, idx=0) => {
  const [bg, fg] = avatarColors[idx % avatarColors.length];
  return { initials: name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase(), bg, fg };
};

// ── Mini bar chart ──
function BarChart({ data, height=80, color=COLORS.green }) {
  const max = Math.max(...data.map(d=>d.v));
  return (
    <div style={{display:"flex",alignItems:"flex-end",gap:4,height}}>
      {data.map((d,i)=>(
        <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
          <div style={{width:"100%",background:color,borderRadius:"3px 3px 0 0",height:Math.max(4,(d.v/max)*height*0.85),opacity:0.85+i*0.02}}/>
          <span style={{fontSize:10,color:COLORS.gray400}}>{d.l}</span>
        </div>
      ))}
    </div>
  );
}

function LineChart({ data, color=COLORS.green, height=80, width=300 }) {
  if(!data.length) return null;
  const max=Math.max(...data), min=Math.min(...data);
  const pts = data.map((v,i)=>{
    const x = (i/(data.length-1))*(width-20)+10;
    const y = height-10-((v-min)/(max-min||1))*(height-20);
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{width:"100%",height}}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <polyline points={`10,${height-10} ${pts} ${width-10},${height-10}`} fill={color} fillOpacity="0.1" stroke="none"/>
    </svg>
  );
}

function Donut({ segments, size=100 }) {
  const total = segments.reduce((a,b)=>a+b.v,0);
  let offset=0;
  const r=38, cx=50, cy=50, circ=2*Math.PI*r;
  return (
    <svg viewBox="0 0 100 100" style={{width:size,height:size}}>
      {segments.map((s,i)=>{
        const dash=(s.v/total)*circ;
        const el=<circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth="14" strokeDasharray={`${dash} ${circ-dash}`} strokeDashoffset={-offset} style={{transition:"all 0.4s"}}/>;
        offset+=dash;
        return el;
      })}
      <circle cx={cx} cy={cy} r={30} fill={COLORS.white}/>
    </svg>
  );
}

function ProgressBar({ value, max=100, color=COLORS.green }) {
  return (
    <div style={{background:COLORS.gray100,borderRadius:99,height:6,overflow:"hidden"}}>
      <div style={{width:`${(value/max)*100}%`,height:"100%",background:color,borderRadius:99}}/>
    </div>
  );
}

// ── useLimits hook ──
function useLimits() {
  const [limits, setLimits] = useState(null);
  const fetchLimits = async () => {
    const token = localStorage.getItem('token');
    try {
      const res  = await fetch('https://backend-repo-teal.vercel.app//api/premium/limits', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setLimits(data);
    } catch(e) {}
  };
  useEffect(() => { fetchLimits(); }, []);
  return { limits, refetch: fetchLimits };
}

// ── Upgrade Modal ──
function UpgradeModal({ reason, onClose }) {
  const [showBilling, setShowBilling] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successCycle, setSuccCycle]  = useState('monthly');
  const [selectedCycle, setSelected]  = useState('monthly'); // ← tracks which card is picked

  const handleSuccess = (cycle) => {
    setShowBilling(false);
    setSuccCycle(cycle);
    setShowSuccess(true);
  };

  if (showSuccess) return <UpgradeSuccessModal cycle={successCycle} onClose={onClose} />;
  if (showBilling) return <BillingModal initialCycle={selectedCycle} initialStep={2} onClose={() => setShowBilling(false)} onSuccess={handleSuccess} />;

  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:2000}}>
      <div style={{background:'#fff',borderRadius:16,padding:'36px 32px',width:420,textAlign:'center',boxShadow:'0 8px 40px rgba(0,0,0,0.2)'}}>
        <div style={{position:'relative',marginBottom:12}}>
          <div style={{fontSize:48}}>👑</div>
          <button
            onClick={onClose}
            style={{
              position:'absolute',top:-12,right:-12,
              width:28,height:28,borderRadius:'50%',
              background:COLORS.gray100,border:`1px solid ${COLORS.gray200}`,
              cursor:'pointer',fontSize:16,color:COLORS.gray500,
              display:'flex',alignItems:'center',justifyContent:'center',
              lineHeight:1,
            }}
          >×</button>
        </div>
        <div style={{fontSize:20,fontWeight:700,color:'#111827',marginBottom:8}}>Upgrade to Premium</div>
        <div style={{fontSize:14,color:'#6b7280',marginBottom:20}}>{reason}</div>

        <div style={{background:'#f9fafb',borderRadius:12,padding:'16px',marginBottom:24,textAlign:'left'}}>
          {[
            'Unlimited inventory products',
            'Unlimited recipes',
            'Unlimited POS orders',
            'Last 30 Days & All Time analytics',
            'Profit margin breakdown per product',
            'Alerts & Notifications (auto + manual)',
            'Priority support',
          ].map(f => (
            <div key={f} style={{display:'flex',alignItems:'center',gap:8,marginBottom:8,fontSize:13}}>
              <span style={{color:'#22c55e',fontWeight:700}}>✓</span>
              <span style={{color:'#374151'}}>{f}</span>
            </div>
          ))}
        </div>

        {/* Clickable plan cards */}
        <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:16}}>

          {/* Monthly card */}
          <div
            onClick={() => setSelected('monthly')}
            style={{
              background: selectedCycle === 'monthly'
                ? 'linear-gradient(90deg,#22c55e,#f97316)'
                : '#f9fafb',
              borderRadius:10, padding:'14px', cursor:'pointer',
              border: selectedCycle === 'monthly' ? 'none' : '2px solid #e5e7eb',
              color: selectedCycle === 'monthly' ? '#fff' : '#111827',
              transition:'all 0.15s',
            }}
          >
            <div style={{fontWeight:700,fontSize:16}}>₱149 / month</div>
            <div style={{fontSize:12,opacity:0.85}}>Billed monthly</div>
          </div>

          {/* Yearly card */}
          <div
            onClick={() => setSelected('yearly')}
            style={{
              borderRadius:10, padding:'14px', cursor:'pointer', position:'relative',
              border: selectedCycle === 'yearly'
                ? '2px solid #22c55e'
                : '2px solid #e5e7eb',
              background: selectedCycle === 'yearly' ? '#f0fdf4' : '#fff',
              transition:'all 0.15s',
            }}
          >
            <div style={{position:'absolute',top:-10,left:'50%',transform:'translateX(-50%)',background:'#22c55e',color:'#fff',fontSize:11,fontWeight:700,padding:'2px 10px',borderRadius:99}}>BEST VALUE</div>
            <div style={{fontWeight:700,fontSize:16,color:'#111827'}}>₱1,699 / year</div>
            <div style={{fontSize:12,color:'#22c55e',fontWeight:600}}>Save ₱89 vs monthly</div>
          </div>
        </div>

        {/* Continue button — appears after a plan is selected (always visible, reflects selection) */}
        <button
          onClick={() => setShowBilling(true)}
          style={{
            width:'100%',padding:'13px',borderRadius:10,marginBottom:10,
            background:'linear-gradient(90deg,#22c55e,#f97316)',
            color:'#fff',border:'none',fontWeight:700,fontSize:15,cursor:'pointer',
            boxShadow:'0 4px 16px rgba(34,197,94,0.3)',
          }}
        >
          🚀 Continue with {selectedCycle === 'yearly' ? 'Yearly · ₱1,699' : 'Monthly · ₱149'} →
        </button>
        <button
          style={{background:'#f3f4f6',color:'#374151',border:'none',borderRadius:8,padding:'10px',width:'100%',cursor:'pointer',fontSize:13}}
          onClick={onClose}
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
}

// ── Login ──
function LoginPage({ onLogin, onSignup, onAdmin }) {
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [error,setError]=useState("");
  const handleLogin = async () => {
    try {
      const res = await fetch('https://backend-repo-teal.vercel.app//api/auth/login', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ email, password: pass })
      });
      const data = await res.json();
      if (data.token) { localStorage.setItem('token', data.token); onLogin(); }
      else setError(data.message || 'Invalid email or password');
    } catch { setError('Cannot connect to server. Is the backend running?'); }
  };
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#f0fdf4 0%,#fef9f0 50%,#fdf2f8 100%)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:COLORS.white,borderRadius:16,boxShadow:"0 4px 32px rgba(0,0,0,0.10)",padding:"40px 36px",width:360}}>
        <div style={{textAlign:"center",marginBottom:28}}>
          <div style={{width:52,height:52,borderRadius:12,background:gradientBtn,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,margin:"0 auto 14px"}}>🍽️</div>
          <div style={{fontSize:22,fontWeight:700,color:COLORS.gray900}}>ProCIS</div>
          <div style={{fontSize:13,color:COLORS.gray500}}>Profit, Cost, and Inventory Monitoring System</div>
        </div>
        <div style={{marginBottom:14}}>
          <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>Email</label>
          <input style={styles.input} placeholder="youremail@gmail.com" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div style={{marginBottom:20}}>
          <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>Password</label>
          <input style={styles.input} type="password" placeholder="••••••••••" value={pass} onChange={e=>setPass(e.target.value)}/>
        </div>
        {error && <div style={{color:'#ef4444',fontSize:12,marginBottom:10,textAlign:'center'}}>{error}</div>}
        <button style={{...styles.btnPrimary,width:"100%",justifyContent:"center",padding:"11px",fontSize:14}} onClick={handleLogin}>Sign In</button>
        <div style={{textAlign:"center",marginTop:14,fontSize:13,color:COLORS.gray500}}>
          Don't have an account? <span style={{color:COLORS.green,cursor:"pointer",fontWeight:600}} onClick={onSignup}>Sign up</span>
        </div>
        <div style={{textAlign:"center",marginTop:10}}>
          <span style={{fontSize:13,color:COLORS.gray500,cursor:"pointer",textDecoration:"underline"}} onClick={onAdmin}>Log in as ADMIN</span>
        </div>
      </div>
    </div>
  );
}

// ── Signup ──
function SignupPage({ onBack }) {
  const [form, setForm] = useState({ businessName:'', ownerName:'', email:'', phone:'', password:'', confirm:'' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const handleSignup = async () => {
    if (!form.businessName || !form.email || !form.password) return setError('Business name, email and password are required');
    if (form.password !== form.confirm) return setError('Passwords do not match');
    setLoading(true); setError('');
    try {
      const res = await fetch('https://backend-repo-teal.vercel.app//api/auth/signup', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ businessName:form.businessName, ownerName:form.ownerName, email:form.email, phone:form.phone, password:form.password })
      });
      const data = await res.json();
      if (data.token) { localStorage.setItem('token', data.token); onBack(); }
      else setError(data.message || 'Signup failed');
    } catch { setError('Cannot connect to server. Is the backend running?'); }
    finally { setLoading(false); }
  };
  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#f0fdf4 0%,#fef9f0 50%,#fdf2f8 100%)",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:COLORS.white,borderRadius:16,boxShadow:"0 4px 32px rgba(0,0,0,0.10)",padding:"40px 36px",width:400}}>
        <div style={{textAlign:"center",marginBottom:24}}>
          <div style={{width:52,height:52,borderRadius:12,background:gradientBtn,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,margin:"0 auto 14px"}}>🍽️</div>
          <div style={{fontSize:20,fontWeight:700,color:COLORS.gray900}}>Create Your ProCIS Account</div>
          <div style={{fontSize:13,color:COLORS.gray500,marginTop:4}}>Start managing your food business</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
          {[['businessName','Business Name *','Your Food Business'],['ownerName','Owner Name *','John Doe'],['email','Email Address *','your@email.com'],['phone','Phone Number','+63 912 345 6789']].map(([f,l,p])=>(
            <div key={f}><label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>{l}</label><input style={styles.input} placeholder={p} value={form[f]} onChange={handleChange(f)}/></div>
          ))}
          <div><label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>Password *</label><input style={styles.input} type="password" placeholder="••••••••" value={form.password} onChange={handleChange('password')}/></div>
          <div><label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>Confirm Password *</label><input style={styles.input} type="password" placeholder="••••••••" value={form.confirm} onChange={handleChange('confirm')}/></div>
        </div>
        {error && <div style={{color:COLORS.red,fontSize:12,marginBottom:12,textAlign:"center",background:COLORS.redLight,padding:"8px 12px",borderRadius:8}}>{error}</div>}
        <button style={{...styles.btnPrimary,width:"100%",justifyContent:"center",padding:"11px",fontSize:14,opacity:loading?0.7:1}} onClick={handleSignup} disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
        <div style={{textAlign:"center",marginTop:14,fontSize:13,color:COLORS.gray500}}>
          Already have an account? <span style={{color:COLORS.green,cursor:"pointer",fontWeight:600}} onClick={onBack}>Log in here</span>
        </div>
      </div>
    </div>
  );
}

// ── Dashboard ──
function Dashboard() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);

  const token   = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch('https://backend-repo-teal.vercel.app//api/dashboard', { headers });
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Dashboard fetch failed:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const catColors = [COLORS.green, COLORS.orange, COLORS.blue, COLORS.amber, COLORS.red];

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '80px 0', color: COLORS.gray400 }}>
      Loading dashboard...
    </div>
  );

  if (!data) return (
    <div style={{ textAlign: 'center', padding: '80px 0', color: COLORS.red }}>
      Failed to load dashboard data.
    </div>
  );

  const revTrendPos   = data.today.revTrend >= 0;
  const orderTrendPos = data.today.orderTrend >= 0;
  const profitPos     = data.monthly.profit >= 0;

  const maxWeeklyRev = Math.max(...data.weeklyData.map(d => d.revenue), 1);
  const maxCatRev    = Math.max(...data.salesByCategory.map(c => c.revenue), 1);

  return (
    <div>
      <div style={styles.pageTitle}>Dashboard Overview</div>
      <div style={styles.pageSub}>Welcome back! Here's your business summary.</div>

      {/* ── Stat cards ── */}
      <div style={styles.grid4}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Today's Revenue</div>
          <div style={styles.statValue}>
            ₱{data.today.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <div style={{ ...styles.statSub, color: revTrendPos ? COLORS.green : COLORS.red }}>
            {revTrendPos ? '↑' : '↓'} {Math.abs(data.today.revTrend)}% from yesterday
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statLabel}>Net Profit (This Month)</div>
          <div style={{ ...styles.statValue, color: profitPos ? COLORS.green : COLORS.red }}>
            ₱{Math.abs(data.monthly.profit).toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <div style={styles.statSub}>
            vs ₱{data.monthly.cost.toLocaleString('en-US', { minimumFractionDigits: 2 })} stocking cost
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statLabel}>Total Orders Today</div>
          <div style={styles.statValue}>{data.today.orders}</div>
          <div style={{ ...styles.statSub, color: orderTrendPos ? COLORS.green : COLORS.red }}>
            {orderTrendPos ? '↑' : '↓'} {Math.abs(data.today.orderTrend)}% from yesterday
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statLabel}>Low Stock Alerts</div>
          <div style={{ ...styles.statValue, color: data.lowStockCount > 0 ? COLORS.red : COLORS.green }}>
            {data.lowStockCount}
          </div>
          <div style={styles.statSub}>
            {data.lowStockCount > 0 ? 'Products need restocking' : 'All stock levels OK'}
          </div>
        </div>
      </div>

      {/* ── Charts row ── */}
      <div style={styles.grid2}>

        {/* Weekly revenue bar chart */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Revenue & Cost Analysis</div>
          <div style={styles.sectionSub}>Last 7 days</div>
          {data.weeklyData.every(d => d.revenue === 0) ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: COLORS.gray400, fontSize: 13 }}>
              No sales recorded yet this week.
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 110 }}>
              {data.weeklyData.map((d, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: '100%', background: COLORS.green, borderRadius: '4px 4px 0 0', height: Math.max(4, (d.revenue / maxWeeklyRev) * 95), opacity: 0.85 }}/>
                  <span style={{ fontSize: 10, color: COLORS.gray400 }}>{d.label}</span>
                </div>
              ))}
            </div>
          )}
          {/* Weekly total */}
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${COLORS.gray100}`, display: 'flex', gap: 24, fontSize: 12 }}>
            <div>
              <div style={{ color: COLORS.gray500, marginBottom: 2 }}>Weekly Revenue</div>
              <div style={{ fontWeight: 700, color: COLORS.green }}>
                ₱{data.weeklyData.reduce((a, d) => a + d.revenue, 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
            <div>
              <div style={{ color: COLORS.gray500, marginBottom: 2 }}>Monthly Revenue</div>
              <div style={{ fontWeight: 700, color: COLORS.gray800 }}>
                ₱{data.monthly.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </div>

        {/* Sales by category */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Sales by Category</div>
          <div style={styles.sectionSub}>Revenue distribution</div>
          {data.salesByCategory.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: COLORS.gray400, fontSize: 13 }}>
              No sales recorded yet.
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Donut
                size={110}
                segments={data.salesByCategory.map((c, i) => ({
                  v: c.revenue,
                  color: catColors[i % catColors.length],
                }))}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                {data.salesByCategory.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                    <div style={{ width: 10, height: 10, borderRadius: 3, background: catColors[i % catColors.length], flexShrink: 0 }}/>
                    <span style={{ color: COLORS.gray600, flex: 1 }}>{c.category}</span>
                    <span style={{ fontWeight: 600, color: COLORS.gray800 }}>
                      ₱{c.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom row ── */}
      <div style={styles.grid2}>

        {/* Top selling recipes */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Top Selling Recipes</div>
          <div style={styles.sectionSub}>By units sold — all time</div>
          {data.topProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px 0', color: COLORS.gray400, fontSize: 13 }}>
              No sales recorded yet.
            </div>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  {['#', 'Recipe', 'Units Sold', 'Revenue'].map(h => (
                    <th key={h} style={styles.th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.topProducts.map((p, i) => (
                  <tr key={i}>
                    <td style={styles.td}>
                      <span style={{ fontWeight: 600, color: COLORS.gray400 }}>{i + 1}</span>
                    </td>
                    <td style={styles.td}>
                      <span style={{ fontWeight: 500 }}>{p.name}</span>
                    </td>
                    <td style={styles.td}>{p.units}</td>
                    <td style={styles.td}>
                      <span style={{ fontWeight: 600, color: COLORS.green }}>
                        ₱{p.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Low stock alerts */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Low Stock Alerts</div>
          <div style={styles.sectionSub}>Items needing attention</div>
          {data.lowStockItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px 0', color: COLORS.green, fontSize: 13, fontWeight: 600 }}>
              ✅ All stock levels are OK!
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {data.lowStockItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 14px', borderRadius: 8,
                  background: item.status === 'critical' ? COLORS.redLight : COLORS.orangeLight,
                  border: `1px solid ${item.status === 'critical' ? COLORS.red : COLORS.orange}22`,
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.gray900 }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: COLORS.gray500, marginTop: 2 }}>
                      Min required: {item.minStock} {item.unit}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: item.status === 'critical' ? COLORS.red : COLORS.orange }}>
                      {item.quantity} {item.unit}
                    </div>
                    <span style={styles.tag(item.status === 'critical' ? 'red' : 'orange')}>
                      {item.status === 'critical' ? 'Critical' : 'Low'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Inventory Modal ──
function InventoryModal({ editItem, form, setForm, formError, saving, onSave, onClose }) {
  const categories = ['Main Dish','Sides','Appetizers','Beverages','Others'];
  const units      = ['pcs','kg','g','L','mL','pack','bottle','box','sachet','tray'];
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>
      <div style={{background:COLORS.white,borderRadius:14,padding:'28px 32px',width:460,boxShadow:'0 8px 40px rgba(0,0,0,0.18)'}}>
        <div style={{fontWeight:700,fontSize:17,marginBottom:20,color:COLORS.gray900}}>
          {editItem ? '✏️ Edit Product' : '➕ Add Product'}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:20}}>
          <div>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Product Name *</label>
            <input style={styles.input} placeholder="e.g. Lumpia, Chicken, Lemon Juice"
              value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div>
              <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Category *</label>
              <select style={{...styles.input,cursor:'pointer'}} value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))}>
                <option value=''>Select category</option>
                {categories.map(c=><option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Unit *</label>
              <select style={{...styles.input,cursor:'pointer'}} value={form.unit} onChange={e=>setForm(f=>({...f,unit:e.target.value}))}>
                {units.map(u=><option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div>
              <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Current Stock</label>
              <input style={styles.input} type="number" min="0" placeholder="0"
                value={form.quantity} onChange={e=>setForm(f=>({...f,quantity:e.target.value}))}/>
            </div>
            <div>
              <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Min Stock (alert)</label>
              <input style={styles.input} type="number" min="0" placeholder="0"
                value={form.minStock} onChange={e=>setForm(f=>({...f,minStock:e.target.value}))}/>
            </div>
          </div>
          <div>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>
              Stocking Price (₱) <span style={{color:COLORS.gray400,fontWeight:400}}>— total cost to stock current quantity</span>
            </label>
            <input style={styles.input} type="number" min="0" step="0.01" placeholder="e.g. 500.00"
              value={form.stockPrice} onChange={e=>setForm(f=>({...f,stockPrice:e.target.value}))}/>
          </div>
        </div>
        {formError && <div style={{color:COLORS.red,fontSize:12,marginBottom:12,background:COLORS.redLight,padding:'8px 12px',borderRadius:8}}>{formError}</div>}
        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button style={styles.btnGray} onClick={onClose}>Cancel</button>
          <button style={{...styles.btnPrimary,opacity:saving?0.7:1}} onClick={onSave} disabled={saving}>
            {saving ? 'Saving...' : editItem ? 'Save Changes' : 'Add Product'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Inventory Page ──
function Inventory() {
  const { limits } = useLimits();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [items, setItems]         = useState([]);
  const [search, setSearch]       = useState('');
  const [loading, setLoading]     = useState(true);
  const [totalValue, setTV]       = useState(0);
  const [lowCount, setLow]        = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem]   = useState(null);
  const [deleting, setDeleting]   = useState(null);
  const [form, setForm]           = useState({ name:'', category:'', quantity:'', unit:'pcs', stockPrice:'', minStock:'' });
  const [formError, setFormError] = useState('');
  const [saving, setSaving]       = useState(false);

  const token   = localStorage.getItem('token');
  const headers = { 'Content-Type':'application/json', 'Authorization':`Bearer ${token}` };

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res  = await fetch('https://backend-repo-teal.vercel.app//api/inventory', { headers });
      const data = await res.json();
      setItems(data.items || []);
      setTV(data.totalValue || 0);
      setLow(data.lowStockCount || 0);
    } catch(err) { console.error(err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchItems(); }, []);

  const openAdd = () => {
    if (limits?.isLimited && limits.usage.inventory >= limits.limits.inventory) {
      setShowUpgrade(true); return;
    }
    setEditItem(null);
    setForm({ name:'', category:'', quantity:'', unit:'pcs', stockPrice:'', minStock:'' });
    setFormError(''); setShowModal(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setForm({ name:item.name, category:item.category, quantity:String(item.quantity), unit:item.unit, stockPrice:String(item.stock_price||0), minStock:String(item.min_stock||0) });
    setFormError(''); setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.category || !form.unit) return setFormError('Name, category, and unit are required.');
    setSaving(true); setFormError('');
    try {
      const url    = editItem ? `https://backend-repo-teal.vercel.app//api/inventory/${editItem.id}` : 'https://backend-repo-teal.vercel.app//api/inventory';
      const method = editItem ? 'PUT' : 'POST';
      const res    = await fetch(url, { method, headers, body: JSON.stringify(form) });
      const data   = await res.json();
      if (!res.ok) return setFormError(data.message || 'Failed to save.');
      setShowModal(false); fetchItems();
    } catch { setFormError('Cannot connect to server.'); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    setDeleting(id);
    try { await fetch(`https://backend-repo-teal.vercel.app//api/inventory/${id}`, { method:'DELETE', headers }); fetchItems(); }
    finally { setDeleting(null); }
  };

  const statusColor = s => s==='good' ? 'green' : s==='low' ? 'orange' : 'red';
  const statusLabel = s => s==='good' ? 'In Stock' : s==='low' ? 'Low Stock' : 'Critical';
  const filtered    = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {showUpgrade && <UpgradeModal reason={`Free accounts can only add up to ${limits.limits.inventory} inventory products. Upgrade to add unlimited products.`} onClose={()=>setShowUpgrade(false)}/>}
      {showModal && <InventoryModal editItem={editItem} form={form} setForm={setForm} formError={formError} saving={saving} onSave={handleSave} onClose={()=>setShowModal(false)}/>}

      <div style={{...styles.row,justifyContent:'space-between',marginBottom:8}}>
        <div>
          <div style={styles.pageTitle}>Inventory Tracking</div>
          <div style={styles.pageSub}>Monitor and manage your product stock levels</div>
        </div>
        <button style={styles.btnPrimary} onClick={openAdd}>+ Add Product</button>
      </div>

      <div style={styles.grid3}>
        <div style={styles.statCard}><div style={styles.statLabel}>Total Products</div><div style={styles.statValue}>{items.length}</div><div style={styles.statSub}>Active products {limits?.isLimited ? `(${limits.usage.inventory}/${limits.limits.inventory} free limit)` : ''}</div></div>
        <div style={styles.statCard}><div style={styles.statLabel}>Total Stocking Cost</div><div style={{...styles.statValue,color:COLORS.green}}>₱{totalValue.toLocaleString('en-US',{minimumFractionDigits:2})}</div><div style={styles.statSub}>Sum of all stocking prices</div></div>
        <div style={styles.statCard}><div style={styles.statLabel}>Low Stock Alerts</div><div style={{...styles.statValue,color:COLORS.red}}>{lowCount}</div><div style={styles.statSub}>Products need attention</div></div>
      </div>

      <div style={styles.card}>
        <div style={styles.searchWrap}>
          <span style={styles.searchIcon}>🔍</span>
          <input style={styles.searchInput} placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)}/>
        </div>
        {loading ? (
          <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>Loading inventory...</div>
        ) : filtered.length === 0 ? (
          <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>
            {items.length === 0 ? 'No products yet. Click "+ Add Product" to get started.' : 'No products match your search.'}
          </div>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>{['Product','Category','Stock','Stocking Price','Min Stock','Status','Actions'].map(h=><th key={h} style={styles.th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {filtered.map(item=>(
                  <tr key={item.id}>
                    <td style={styles.td}><span style={{fontWeight:500}}>{item.name}</span></td>
                    <td style={styles.td}><span style={styles.badge(COLORS.gray600,COLORS.gray100)}>{item.category}</span></td>
                    <td style={styles.td}>{item.quantity} {item.unit}</td>
                    <td style={styles.td}><span style={{fontWeight:600,color:COLORS.green}}>₱{parseFloat(item.stock_price||0).toLocaleString('en-US',{minimumFractionDigits:2})}</span></td>
                    <td style={styles.td}>{item.min_stock} {item.unit}</td>
                    <td style={styles.td}><span style={styles.tag(statusColor(item.status))}>{statusLabel(item.status)}</span></td>
                    <td style={styles.td}>
                      <div style={{display:'flex',gap:6}}>
                        <button style={{...styles.btnGray,padding:'5px 10px',fontSize:11}} onClick={()=>openEdit(item)}>Edit</button>
                        <button style={{background:COLORS.redLight,color:COLORS.red,border:'none',borderRadius:6,padding:'5px 10px',fontSize:11,cursor:'pointer',opacity:deleting===item.id?0.6:1}} onClick={()=>handleDelete(item.id)} disabled={deleting===item.id}>
                          {deleting===item.id?'...':'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Recipe Modal ──
function RecipeModal({ editItem, form, setForm, ingredients, setIngredients, inventoryItems, formError, saving, onSave, onClose }) {
  const categories = ['Main Dish','Sides','Appetizers','Beverages','Others'];
  const units      = ['pcs','kg','g','L','mL','oz','pack','bottle','box','sachet'];

  const addRow = () => setIngredients(prev=>[...prev,{inventoryId:'',name:'',quantity:'',unit:'pcs',isManual:false}]);
  const removeRow = idx => setIngredients(prev=>prev.filter((_,i)=>i!==idx));
  const updateRow = (idx, field, value) => {
    setIngredients(prev=>prev.map((ing,i)=>{
      if(i!==idx) return ing;
      if(field==='inventoryId'){
        if(value==='__manual__') return {...ing,inventoryId:'',name:'',unit:'pcs',isManual:true};
        if(value==='') return {...ing,inventoryId:'',name:'',unit:'pcs',isManual:false};
        const inv=inventoryItems.find(it=>String(it.id)===String(value));
        if(inv) return {...ing,inventoryId:inv.id,name:inv.name,unit:inv.unit,isManual:false};
      }
      return {...ing,[field]:value};
    }));
  };

  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000,overflowY:'auto',padding:'20px 0'}}>
      <div style={{background:COLORS.white,borderRadius:14,padding:'28px 32px',width:580,boxShadow:'0 8px 40px rgba(0,0,0,0.18)',margin:'auto'}}>
        <div style={{fontWeight:700,fontSize:17,marginBottom:20,color:COLORS.gray900}}>
          {editItem ? '✏️ Edit Recipe' : '➕ Add Recipe'}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:20}}>
          <div style={{gridColumn:'span 2'}}>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Recipe Name *</label>
            <input style={styles.input} placeholder="e.g. Lemon Iced Tea, Lumpia Shanghai"
              value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/>
          </div>
          <div>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Category *</label>
            <select style={{...styles.input,cursor:'pointer'}} value={form.category} onChange={e=>setForm(f=>({...f,category:e.target.value}))}>
              <option value=''>Select category</option>
              {categories.map(c=><option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Selling Price *</label>
            <div style={{display:'flex',gap:6}}>
              <div style={{position:'relative',flex:'0 0 80px'}}>
                <span style={{position:'absolute',left:10,top:'50%',transform:'translateY(-50%)',color:COLORS.gray500,fontSize:13}}>₱</span>
                <input style={{...styles.input,paddingLeft:22}} type="number" min="0" step="0.01" placeholder="50"
                  value={form.sellingPrice} onChange={e=>setForm(f=>({...f,sellingPrice:e.target.value}))}/>
              </div>
              <span style={{display:'flex',alignItems:'center',color:COLORS.gray500,fontSize:13,fontWeight:500}}>/</span>
              <input style={{...styles.input,flex:1}} placeholder="e.g. 3pcs, 12oz, 1L"
                value={form.sellingUnit} onChange={e=>setForm(f=>({...f,sellingUnit:e.target.value}))}/>
            </div>
            {form.sellingPrice && form.sellingUnit && (
              <div style={{marginTop:6,fontSize:12,color:COLORS.greenDark,fontWeight:600}}>
                Preview: ₱{form.sellingPrice} / {form.sellingUnit}
              </div>
            )}
          </div>
          <div style={{gridColumn:'span 2'}}>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Description (optional)</label>
            <input style={styles.input} placeholder="Short description"
              value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}/>
          </div>
        </div>

        <div style={{fontWeight:600,fontSize:14,color:COLORS.gray800,marginBottom:10}}>Products Used</div>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 28px',gap:8,marginBottom:6}}>
          {['Product','Quantity','Unit',''].map((h,i)=><div key={i} style={{fontSize:11,color:COLORS.gray500,fontWeight:500}}>{h}</div>)}
        </div>
        {ingredients.map((ing,idx)=>(
          <div key={idx} style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 28px',gap:8,marginBottom:8,alignItems:'center'}}>
            {ing.isManual ? (
              <input style={styles.input} placeholder="Type product name" value={ing.name} onChange={e=>updateRow(idx,'name',e.target.value)}/>
            ) : (
              <select style={{...styles.input,cursor:'pointer'}} value={ing.inventoryId} onChange={e=>updateRow(idx,'inventoryId',e.target.value)}>
                <option value=''>Pick from inventory</option>
                {inventoryItems.map(it=><option key={it.id} value={it.id}>{it.name} ({it.unit})</option>)}
                <option value='__manual__'>✏️ Type manually...</option>
              </select>
            )}
            <input style={styles.input} type="number" min="0" step="any" placeholder="0"
              value={ing.quantity} onChange={e=>updateRow(idx,'quantity',e.target.value)}/>
            {ing.isManual ? (
              <select style={{...styles.input,cursor:'pointer'}} value={ing.unit} onChange={e=>updateRow(idx,'unit',e.target.value)}>
                {units.map(u=><option key={u} value={u}>{u}</option>)}
              </select>
            ) : (
              <div style={{...styles.input,background:COLORS.gray100,color:COLORS.gray500,fontSize:12}}>{ing.unit||'—'}</div>
            )}
            <button onClick={()=>removeRow(idx)} style={{background:'transparent',border:'none',cursor:'pointer',color:COLORS.red,fontSize:18,padding:0}}>×</button>
          </div>
        ))}
        <button onClick={addRow} style={{...styles.btnGray,fontSize:12,marginBottom:20,marginTop:4}}>+ Add Product Row</button>

        {formError && <div style={{color:COLORS.red,fontSize:12,marginBottom:12,background:COLORS.redLight,padding:'8px 12px',borderRadius:8}}>{formError}</div>}
        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button style={styles.btnGray} onClick={onClose}>Cancel</button>
          <button style={{...styles.btnPrimary,opacity:saving?0.7:1}} onClick={onSave} disabled={saving}>
            {saving ? 'Saving...' : editItem ? 'Save Changes' : 'Add Recipe'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Recipes Page ──
function Recipes() {
  const { limits } = useLimits();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [recipes, setRecipes]         = useState([]);
  const [inventoryItems, setInventory] = useState([]);
  const [search, setSearch]           = useState('');
  const [loading, setLoading]         = useState(true);
  const [showModal, setShowModal]     = useState(false);
  const [editItem, setEditItem]       = useState(null);
  const [deleting, setDeleting]       = useState(null);
  const [form, setForm]               = useState({ name:'', category:'', sellingPrice:'', sellingUnit:'', description:'' });
  const [ingredients, setIngredients] = useState([]);
  const [formError, setFormError]     = useState('');
  const [saving, setSaving]           = useState(false);

  const token   = localStorage.getItem('token');
  const headers = { 'Content-Type':'application/json', 'Authorization':`Bearer ${token}` };

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [rRes, iRes] = await Promise.all([
        fetch('https://backend-repo-teal.vercel.app//api/recipes',   { headers }),
        fetch('https://backend-repo-teal.vercel.app//api/inventory', { headers }),
      ]);
      const rData = await rRes.json();
      const iData = await iRes.json();
      setRecipes(rData.recipes || []);
      setInventory(iData.items || []);
    } catch (err) { console.error('Failed to load:', err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchAll(); }, []);

  const openAdd = () => {
    if (limits?.isLimited && limits.usage.recipes >= limits.limits.recipes) {
      setShowUpgrade(true); return;
    }
    setEditItem(null);
    setForm({ name:'', category:'', sellingPrice:'', sellingUnit:'', description:'' });
    setIngredients([{ inventoryId:'', name:'', quantity:'', unit:'pcs', isManual:false }]);
    setFormError('');
    setShowModal(true);
  };

  const openEdit = (recipe) => {
    setEditItem(recipe);
    setForm({ name:recipe.name, category:recipe.category, sellingPrice:String(recipe.selling_price), sellingUnit:recipe.selling_unit||'', description:recipe.description||'' });
    setIngredients(recipe.ingredients.map(ing=>({ inventoryId:ing.inventory_id||'', name:ing.name, quantity:String(ing.quantity), unit:ing.unit, isManual:!ing.inventory_id })));
    setFormError('');
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.category) return setFormError('Recipe name and category are required.');
    if (!form.sellingPrice || parseFloat(form.sellingPrice) <= 0) return setFormError('Please enter a valid selling price.');
    if (!form.sellingUnit) return setFormError('Please enter a selling unit (e.g. 3pcs, 12oz).');
    if (ingredients.length === 0 || ingredients.some(i => !i.name || !i.quantity)) return setFormError('All ingredients need a name and quantity.');
    setSaving(true); setFormError('');
    try {
      const url    = editItem ? `https://backend-repo-teal.vercel.app//api/recipes/${editItem.id}` : 'https://backend-repo-teal.vercel.app//api/recipes';
      const method = editItem ? 'PUT' : 'POST';
      const res    = await fetch(url, { method, headers, body: JSON.stringify({ ...form, ingredients }) });
      const data   = await res.json();
      if (!res.ok) return setFormError(data.message || 'Failed to save.');
      setShowModal(false); fetchAll();
    } catch { setFormError('Cannot connect to server.'); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this recipe?')) return;
    setDeleting(id);
    try { await fetch(`https://backend-repo-teal.vercel.app//api/recipes/${id}`, { method:'DELETE', headers }); fetchAll(); }
    finally { setDeleting(null); }
  };

  const filtered = recipes.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      {showUpgrade && <UpgradeModal reason={`Free accounts can only create up to ${limits.limits.recipes} recipes. Upgrade for unlimited recipes.`} onClose={()=>setShowUpgrade(false)}/>}
      {showModal && <RecipeModal editItem={editItem} form={form} setForm={setForm} ingredients={ingredients} setIngredients={setIngredients} inventoryItems={inventoryItems} formError={formError} saving={saving} onSave={handleSave} onClose={()=>setShowModal(false)}/>}

      <div style={{...styles.row,justifyContent:'space-between',marginBottom:8}}>
        <div>
          <div style={styles.pageTitle}>Product Recipes</div>
          <div style={styles.pageSub}>Manage recipes and menu items</div>
        </div>
        <button style={styles.btnPrimary} onClick={openAdd}>+ Add Recipe</button>
      </div>

      <div style={styles.grid2}>
        <div style={styles.statCard}><div style={styles.statLabel}>Total Recipes</div><div style={styles.statValue}>{recipes.length}</div><div style={styles.statSub}>Active menu items {limits?.isLimited ? `(${limits.usage.recipes}/${limits.limits.recipes} free limit)` : ''}</div></div>
        <div style={styles.statCard}><div style={styles.statLabel}>Categories</div><div style={styles.statValue}>{[...new Set(recipes.map(r=>r.category))].length}</div><div style={styles.statSub}>Unique categories</div></div>
      </div>

      <div style={styles.searchWrap}>
        <span style={styles.searchIcon}>🔍</span>
        <input style={styles.searchInput} placeholder="Search recipes..." value={search} onChange={e=>setSearch(e.target.value)}/>
      </div>

      {loading ? (
        <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>Loading recipes...</div>
      ) : filtered.length === 0 ? (
        <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>
          {recipes.length === 0 ? 'No recipes yet. Click "+ Add Recipe" to get started.' : 'No recipes match your search.'}
        </div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:16}}>
          {filtered.map(r=>(
            <div key={r.id} style={styles.card}>
              <div style={{...styles.row,justifyContent:'space-between',marginBottom:14}}>
                <div>
                  <div style={{fontWeight:700,fontSize:17,color:COLORS.gray900}}>{r.name}</div>
                  <span style={{...styles.badge(COLORS.gray600,COLORS.gray100),marginTop:4}}>{r.category}</span>
                  {r.description && <div style={{fontSize:12,color:COLORS.gray500,marginTop:4}}>{r.description}</div>}
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:20,fontWeight:700,color:COLORS.green}}>₱{parseFloat(r.selling_price).toFixed(2)}</div>
                  <div style={{fontSize:12,color:COLORS.gray500}}>per {r.selling_unit||'pcs'}</div>
                </div>
              </div>
              <div style={{fontWeight:600,fontSize:13,color:COLORS.gray700,marginBottom:8}}>Products Used</div>
              {r.ingredients.length === 0 ? (
                <div style={{fontSize:13,color:COLORS.gray400}}>No ingredients listed.</div>
              ) : r.ingredients.map((ing,j)=>(
                <div key={j} style={{...styles.row,justifyContent:'space-between',padding:'7px 0',borderBottom:`1px solid ${COLORS.gray100}`,fontSize:13}}>
                  <span style={{color:COLORS.gray700}}>{ing.name}</span>
                  <span style={{color:COLORS.gray500}}>{ing.quantity} {ing.unit}</span>
                </div>
              ))}
              <div style={{...styles.row,justifyContent:'flex-end',marginTop:14,gap:8}}>
                <button style={styles.btnOutline} onClick={()=>openEdit(r)}>Edit Recipe</button>
                <button style={{background:COLORS.redLight,color:COLORS.red,border:'none',borderRadius:8,padding:'7px 14px',fontSize:13,cursor:'pointer',opacity:deleting===r.id?0.6:1}} onClick={()=>handleDelete(r.id)} disabled={deleting===r.id}>
                  {deleting===r.id?'...':'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Payment Modal ──
function PaymentModal({ total, paymentMethod, setPaymentMethod, amountPaid, setAmountPaid, onConfirm, onClose, saving }) {
  const paid   = parseFloat(amountPaid) || 0;
  const change = paymentMethod === 'Cash' ? Math.max(0, paid - total) : 0;
  const isValid = paymentMethod !== 'Cash' || paid >= total;
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>
      <div style={{background:COLORS.white,borderRadius:14,padding:'28px 32px',width:400,boxShadow:'0 8px 40px rgba(0,0,0,0.18)'}}>
        <div style={{fontWeight:700,fontSize:17,marginBottom:4,color:COLORS.gray900}}>💳 Complete Payment</div>
        <div style={{fontSize:13,color:COLORS.gray500,marginBottom:20}}>Select payment method and confirm</div>
        <div style={{background:COLORS.greenLight,borderRadius:10,padding:'14px 16px',marginBottom:20,textAlign:'center'}}>
          <div style={{fontSize:12,color:COLORS.greenDark,marginBottom:4}}>Order Total</div>
          <div style={{fontSize:28,fontWeight:800,color:COLORS.greenDark}}>₱{total.toFixed(2)}</div>
        </div>
        <div style={{marginBottom:16}}>
          <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:8}}>Payment Method</label>
          <div style={{display:'flex',gap:10}}>
            {['Cash','GCash','Card'].map(method=>(
              <button key={method} onClick={()=>setPaymentMethod(method)} style={{flex:1,padding:'10px 0',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer',border:`2px solid ${paymentMethod===method?COLORS.green:COLORS.gray200}`,background:paymentMethod===method?COLORS.greenLight:COLORS.white,color:paymentMethod===method?COLORS.greenDark:COLORS.gray600}}>
                {method==='Cash'?'💵':method==='GCash'?'📱':'💳'} {method}
              </button>
            ))}
          </div>
        </div>
        {paymentMethod==='Cash' && (
          <>
            <div style={{marginBottom:14}}>
              <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:6}}>Amount Paid (₱)</label>
              <input style={{...styles.input,fontSize:16,fontWeight:600}} type="number" min={total} step="1" placeholder={total.toFixed(2)} value={amountPaid} onChange={e=>setAmountPaid(e.target.value)}/>
            </div>
            <div style={{background:change>=0&&paid>0?COLORS.greenLight:COLORS.gray50,borderRadius:10,padding:'12px 16px',marginBottom:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{fontSize:13,color:COLORS.gray600}}>Change</span>
              <span style={{fontSize:20,fontWeight:800,color:paid>=total?COLORS.greenDark:COLORS.red}}>₱{change.toFixed(2)}</span>
            </div>
          </>
        )}
        {paymentMethod!=='Cash' && (
          <div style={{background:COLORS.blueLight,borderRadius:10,padding:'12px 16px',marginBottom:16,fontSize:13,color:COLORS.blue,textAlign:'center'}}>
            {paymentMethod==='GCash'?'📱 Send ₱':'💳 Charge ₱'}{total.toFixed(2)} via {paymentMethod}
          </div>
        )}
        <div style={{display:'flex',gap:10}}>
          <button style={{...styles.btnGray,flex:1,justifyContent:'center'}} onClick={onClose}>Cancel</button>
          <button style={{...styles.btnPrimary,flex:2,justifyContent:'center',padding:'11px',opacity:(!isValid||saving)?0.6:1}} onClick={onConfirm} disabled={!isValid||saving}>
            {saving?'Processing...':'✓ Confirm Payment'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Success Modal ──
function SuccessModal({ order, onClose }) {
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>
      <div style={{background:COLORS.white,borderRadius:14,padding:'32px',width:360,boxShadow:'0 8px 40px rgba(0,0,0,0.18)',textAlign:'center'}}>
        <div style={{fontSize:48,marginBottom:12}}>✅</div>
        <div style={{fontWeight:700,fontSize:18,marginBottom:4,color:COLORS.gray900}}>Order Complete!</div>
        <div style={{fontSize:13,color:COLORS.gray500,marginBottom:20}}>Order #{order.orderId} has been recorded</div>
        <div style={{background:COLORS.gray50,borderRadius:10,padding:'14px 16px',marginBottom:20,fontSize:13}}>
          <div style={{...styles.row,justifyContent:'space-between',marginBottom:8}}><span style={{color:COLORS.gray500}}>Total</span><span style={{fontWeight:700}}>₱{order.total.toFixed(2)}</span></div>
          <div style={{...styles.row,justifyContent:'space-between',marginBottom:8}}><span style={{color:COLORS.gray500}}>Payment</span><span style={{fontWeight:600}}>{order.paymentMethod}</span></div>
          {order.paymentMethod==='Cash' && <div style={{...styles.row,justifyContent:'space-between'}}><span style={{color:COLORS.gray500}}>Change</span><span style={{fontWeight:700,color:COLORS.green}}>₱{order.change.toFixed(2)}</span></div>}
        </div>
        <button style={{...styles.btnPrimary,width:'100%',justifyContent:'center',padding:'11px'}} onClick={onClose}>New Order</button>
      </div>
    </div>
  );
}

// ── POS ──
function POS() {
  const { limits } = useLimits();
  const [showUpgrade, setShowUpgrade]   = useState(false);
  const [products, setProducts]         = useState([]);
  const [order, setOrder]               = useState([]);
  const [search, setSearch]             = useState('');
  const [loading, setLoading]           = useState(true);
  const [showPayment, setShowPayment]   = useState(false);
  const [showSuccess, setShowSuccess]   = useState(false);
  const [lastOrder, setLastOrder]       = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [amountPaid, setAmountPaid]     = useState('');
  const [saving, setSaving]             = useState(false);
  const [activeTab, setActiveTab]       = useState('products');
  const [orderHistory, setOrderHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);

  const token   = localStorage.getItem('token');
  const headers = { 'Content-Type':'application/json', 'Authorization':`Bearer ${token}` };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res  = await fetch('https://backend-repo-teal.vercel.app//api/pos/products', { headers });
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const fetchHistory = async () => {
    setHistoryLoading(true);
    try {
      const res  = await fetch('https://backend-repo-teal.vercel.app//api/pos/orders', { headers });
      const data = await res.json();
      setOrderHistory(data.orders || []);
    } catch (err) { console.error(err); }
    finally { setHistoryLoading(false); }
  };

  useEffect(() => { fetchProducts(); }, []);
  useEffect(() => { if (activeTab==='history') fetchHistory(); }, [activeTab]);

  const addItem = (product) => {
    setOrder(prev => {
      const existing = prev.find(o=>o.id===product.id);
      return existing ? prev.map(o=>o.id===product.id?{...o,qty:o.qty+1}:o) : [...prev,{...product,qty:1}];
    });
  };
  const changeQty = (id, delta) => setOrder(prev=>prev.map(o=>o.id===id?{...o,qty:Math.max(0,o.qty+delta)}:o).filter(o=>o.qty>0));
  const removeItem = (id) => setOrder(prev=>prev.filter(o=>o.id!==id));
  const clearOrder = () => setOrder([]);
  const subtotal = order.reduce((sum,o)=>sum+o.selling_price*o.qty, 0);

  const openPayment = () => {
    if (limits?.isLimited && limits.usage.posOrders >= limits.limits.posOrders) {
      setShowUpgrade(true); return;
    }
    setPaymentMethod('Cash'); setAmountPaid(''); setShowPayment(true);
  };

  const handleConfirmOrder = async () => {
    setSaving(true);
    try {
      const res = await fetch('https://backend-repo-teal.vercel.app//api/pos/orders', {
        method:'POST', headers,
        body: JSON.stringify({
          items: order.map(o=>({ recipeId:o.id, name:o.name, quantity:o.qty, unitPrice:o.selling_price })),
          paymentMethod,
          amountPaid: paymentMethod==='Cash' ? parseFloat(amountPaid) : subtotal,
        }),
      });
      const data = await res.json();
      if (!res.ok) return alert(data.message || 'Order failed.');
      setLastOrder({ orderId:data.orderId, total:subtotal, paymentMethod, change:data.change||0 });
      setShowPayment(false); setShowSuccess(true); clearOrder();
    } catch { alert('Cannot connect to server.'); }
    finally { setSaving(false); }
  };

  const catIcon = (cat) => ({'Main Dish':'🍽️','Appetizers':'🥗','Sides':'🍟','Beverages':'🥤','Others':'🍴'}[cat]||'🍴');
  const filtered = products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
  const grouped  = filtered.reduce((acc,p)=>{ if(!acc[p.category]) acc[p.category]=[]; acc[p.category].push(p); return acc; }, {});

  return (
    <div>
      {showUpgrade && <UpgradeModal reason={`Free accounts are limited to ${limits.limits.posOrders} POS orders per month. Upgrade for unlimited orders.`} onClose={()=>setShowUpgrade(false)}/>}
      {showPayment && <PaymentModal total={subtotal} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} amountPaid={amountPaid} setAmountPaid={setAmountPaid} onConfirm={handleConfirmOrder} onClose={()=>setShowPayment(false)} saving={saving}/>}
      {showSuccess && lastOrder && <SuccessModal order={lastOrder} onClose={()=>setShowSuccess(false)}/>}

      <div style={styles.pageTitle}>Point of Sale</div>
      <div style={styles.pageSub}>
        Select items and complete orders
        {limits?.isLimited && <span style={{marginLeft:8,fontSize:12,color:COLORS.orange,fontWeight:600}}>({limits.usage.posOrders}/{limits.limits.posOrders} orders this month)</span>}
      </div>

      <div style={{display:'flex',gap:8,marginBottom:20}}>
        {[['products','🛒 Products'],['history','📋 Order History']].map(([id,label])=>(
          <button key={id} onClick={()=>setActiveTab(id)} style={{padding:'8px 18px',borderRadius:8,fontSize:13,fontWeight:500,cursor:'pointer',border:`1px solid ${activeTab===id?COLORS.green:COLORS.gray200}`,background:activeTab===id?COLORS.greenLight:'transparent',color:activeTab===id?COLORS.greenDark:COLORS.gray600}}>
            {label}
          </button>
        ))}
      </div>

      {activeTab==='products' && (
        <div style={{display:'flex',gap:20}}>
          <div style={{flex:1}}>
            <div style={styles.searchWrap}>
              <span style={styles.searchIcon}>🔍</span>
              <input style={styles.searchInput} placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>
            {loading ? <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>Loading products...</div>
            : products.length===0 ? <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>No products yet. Add recipes first to sell them here.</div>
            : filtered.length===0 ? <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>No products match your search.</div>
            : Object.entries(grouped).map(([category,items])=>(
              <div key={category} style={{marginBottom:20}}>
                <div style={{fontWeight:600,fontSize:13,color:COLORS.gray500,marginBottom:10,textTransform:'uppercase',letterSpacing:'0.05em'}}>{catIcon(category)} {category}</div>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',gap:12}}>
                  {items.map(p=>{
                    const inCart=order.find(o=>o.id===p.id);
                    return (
                      <div key={p.id} onClick={()=>addItem(p)} style={{...styles.card,cursor:'pointer',textAlign:'center',padding:'16px 12px',border:`2px solid ${inCart?COLORS.green:COLORS.gray200}`,background:inCart?COLORS.greenLight:COLORS.white,transition:'all 0.15s'}}>
                        <div style={{width:44,height:44,borderRadius:10,background:inCart?COLORS.green:COLORS.gray100,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,margin:'0 auto 8px'}}>{catIcon(p.category)}</div>
                        <div style={{fontWeight:600,fontSize:12,color:COLORS.gray900,marginBottom:3,lineHeight:1.3}}>{p.name}</div>
                        <div style={{fontWeight:700,color:COLORS.green,fontSize:14}}>₱{parseFloat(p.selling_price).toFixed(2)}</div>
                        {inCart && <div style={{marginTop:6,background:COLORS.green,color:COLORS.white,borderRadius:99,fontSize:11,fontWeight:700,padding:'2px 8px',display:'inline-block'}}>×{inCart.qty} in cart</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{width:290,flexShrink:0}}>
            <div style={{...styles.card,position:'sticky',top:0}}>
              <div style={{fontWeight:700,fontSize:15,marginBottom:16,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span>🛒 Current Order</span>
                {order.length>0 && <button onClick={clearOrder} style={{background:'transparent',border:'none',color:COLORS.red,fontSize:12,cursor:'pointer'}}>Clear all</button>}
              </div>
              {order.length===0 ? <div style={{color:COLORS.gray400,fontSize:13,textAlign:'center',padding:'30px 0'}}>Tap a product to add it</div> : (
                <>
                  {order.map(o=>(
                    <div key={o.id} style={{padding:'10px 0',borderBottom:`1px solid ${COLORS.gray100}`}}>
                      <div style={{...styles.row,justifyContent:'space-between',marginBottom:6}}>
                        <span style={{fontWeight:500,fontSize:13,flex:1}}>{o.name}</span>
                        <button onClick={()=>removeItem(o.id)} style={{background:'transparent',border:'none',color:COLORS.gray400,cursor:'pointer',fontSize:14,padding:0}}>×</button>
                      </div>
                      <div style={{...styles.row,justifyContent:'space-between'}}>
                        <div style={{...styles.row,gap:6}}>
                          <button onClick={()=>changeQty(o.id,-1)} style={{width:24,height:24,borderRadius:6,border:`1px solid ${COLORS.gray200}`,background:COLORS.gray100,cursor:'pointer',fontSize:14,display:'flex',alignItems:'center',justifyContent:'center'}}>−</button>
                          <span style={{fontWeight:600,minWidth:20,textAlign:'center'}}>{o.qty}</span>
                          <button onClick={()=>changeQty(o.id,1)} style={{width:24,height:24,borderRadius:6,border:`1px solid ${COLORS.gray200}`,background:COLORS.gray100,cursor:'pointer',fontSize:14,display:'flex',alignItems:'center',justifyContent:'center'}}>+</button>
                        </div>
                        <span style={{fontWeight:700,fontSize:13}}>₱{(o.selling_price*o.qty).toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  <div style={styles.divider}/>
                  <div style={{...styles.row,justifyContent:'space-between',fontWeight:700,fontSize:16,marginBottom:14}}>
                    <span>Total</span><span style={{color:COLORS.green}}>₱{subtotal.toFixed(2)}</span>
                  </div>
                  <button style={{...styles.btnPrimary,width:'100%',justifyContent:'center',padding:'12px',fontSize:14}} onClick={openPayment}>💳 Proceed to Payment</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab==='history' && (
        <div style={styles.card}>
          <div style={{...styles.row,justifyContent:'space-between',marginBottom:16}}>
            <div style={styles.sectionTitle}>Recent Orders</div>
            <button style={styles.btnGray} onClick={fetchHistory}>🔄 Refresh</button>
          </div>
          {historyLoading ? <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>Loading orders...</div>
          : orderHistory.length===0 ? <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>No orders yet.</div>
          : (
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead><tr>{['Order #','Date & Time','Items','Payment','Total','Change'].map(h=><th key={h} style={styles.th}>{h}</th>)}</tr></thead>
                <tbody>
                  {orderHistory.map(o=>(
                    <tr key={o.id}>
                      <td style={styles.td}><span style={{fontWeight:600}}>#{o.id}</span></td>
                      <td style={styles.td}><span style={{fontSize:12,color:COLORS.gray500}}>{new Date(o.created_at).toLocaleString('en-PH',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})}</span></td>
                      <td style={styles.td}><div style={{fontSize:12}}>{o.items.map((item,i)=><div key={i} style={{color:COLORS.gray600}}>{item.name} ×{item.quantity}</div>)}</div></td>
                      <td style={styles.td}><span style={styles.tag('green')}>{o.payment_method}</span></td>
                      <td style={styles.td}><span style={{fontWeight:700,color:COLORS.green}}>₱{parseFloat(o.total).toFixed(2)}</span></td>
                      <td style={styles.td}><span style={{color:COLORS.gray600}}>{o.payment_method==='Cash'?`₱${parseFloat(o.change_given).toFixed(2)}`:'—'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// REPLACE the entire Purchases() function in App.jsx with this.
// Also replace PurchaseModal() with RestockModal() below.
// ─────────────────────────────────────────────────────────────

// ── Restock Modal ──
function RestockModal({ inventoryItems, onClose, onSaved }) {
  const UNITS = ['pcs', 'kg', 'g', 'L', 'mL', 'pack', 'bottle', 'box', 'sachet', 'tray'];

  const blankRow = () => ({ inventoryId: '', name: '', quantity: '', unit: 'pcs', totalCost: '', isManual: false });
  const [items, setItems]     = useState([blankRow()]);
  const [notes, setNotes]     = useState('');
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState('');

  const addRow    = () => setItems(p => [...p, blankRow()]);
  const removeRow = idx => setItems(p => p.filter((_, i) => i !== idx));

  const updateRow = (idx, field, value) => {
    setItems(prev => prev.map((row, i) => {
      if (i !== idx) return row;
      if (field === 'inventoryId') {
        if (value === '__manual__') return { ...row, inventoryId: '', name: '', unit: 'pcs', isManual: true };
        if (value === '')           return { ...row, inventoryId: '', name: '', unit: 'pcs', isManual: false };
        const inv = inventoryItems.find(it => String(it.id) === String(value));
        if (inv) return { ...row, inventoryId: inv.id, name: inv.name, unit: inv.unit, isManual: false };
      }
      return { ...row, [field]: value };
    }));
  };

  const grandTotal = items.reduce((s, i) => s + (parseFloat(i.totalCost) || 0), 0);

  const handleSave = async () => {
    setError('');
    for (const item of items) {
      if (!item.name.trim())               return setError('All items need a product name.');
      if (!item.quantity || parseFloat(item.quantity) <= 0) return setError(`Enter a valid quantity for "${item.name || 'item'}".`);
    }
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('https://backend-repo-teal.vercel.app//api/purchases', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          notes,
          items: items.map(i => ({
            inventoryId: i.inventoryId || null,
            name:        i.name.trim(),
            quantity:    parseFloat(i.quantity),
            unit:        i.unit,
            totalCost:   parseFloat(i.totalCost) || 0,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Failed to save.'); setSaving(false); return; }
      onSaved(data);
    } catch {
      setError('Cannot connect to server.');
      setSaving(false);
    }
  };

  // ── Styles reused from parent (COLORS / styles must be in scope) ──
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.48)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, overflowY: 'auto', padding: '20px 0',
    }}>
      <div style={{
        background: COLORS.white, borderRadius: 16, width: 660,
        boxShadow: '0 12px 48px rgba(0,0,0,0.22)', margin: 'auto', overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.green} 0%, ${COLORS.orange} 100%)`,
          padding: '20px 28px',
        }}>
          <div style={{ color: COLORS.white, fontWeight: 800, fontSize: 18, marginBottom: 2 }}>
            📦 Record Restock Purchase
          </div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
            Inventory is updated immediately when you save
          </div>
        </div>

        <div style={{ padding: '24px 28px' }}>
          {/* Notes */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 12, color: COLORS.gray600, fontWeight: 600, display: 'block', marginBottom: 6 }}>
              Notes <span style={{ fontWeight: 400, color: COLORS.gray400 }}>(optional)</span>
            </label>
            <input
              style={styles.input}
              placeholder="e.g. Weekly restock from market, bulk buy"
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>

          {/* Column headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2.5fr 1fr 1fr 1.3fr 28px',
            gap: 8, marginBottom: 6,
          }}>
            {['Product', 'Quantity', 'Unit', 'Total Cost (₱)', ''].map((h, i) => (
              <div key={i} style={{ fontSize: 11, color: COLORS.gray500, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</div>
            ))}
          </div>

          {/* Item rows */}
          {items.map((item, idx) => (
            <div key={idx} style={{
              display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 1.3fr 28px',
              gap: 8, marginBottom: 10, alignItems: 'center',
            }}>
              {/* Product picker or manual input */}
              {item.isManual ? (
                <input
                  style={styles.input}
                  placeholder="Type product name"
                  value={item.name}
                  onChange={e => updateRow(idx, 'name', e.target.value)}
                />
              ) : (
                <select
                  style={{ ...styles.input, cursor: 'pointer' }}
                  value={item.inventoryId}
                  onChange={e => updateRow(idx, 'inventoryId', e.target.value)}
                >
                  <option value="">Pick from inventory…</option>
                  {inventoryItems.map(inv => (
                    <option key={inv.id} value={inv.id}>{inv.name} ({inv.unit})</option>
                  ))}
                  <option value="__manual__">✏️ Type manually…</option>
                </select>
              )}

              {/* Quantity */}
              <input
                style={styles.input}
                type="number" min="0" step="any" placeholder="0"
                value={item.quantity}
                onChange={e => updateRow(idx, 'quantity', e.target.value)}
              />

              {/* Unit */}
              {item.isManual ? (
                <select style={{ ...styles.input, cursor: 'pointer' }} value={item.unit} onChange={e => updateRow(idx, 'unit', e.target.value)}>
                  {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              ) : (
                <div style={{ ...styles.input, background: COLORS.gray100, color: COLORS.gray500, fontSize: 12 }}>
                  {item.unit || '—'}
                </div>
              )}

              {/* Total cost */}
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: COLORS.gray400, fontSize: 13 }}>₱</span>
                <input
                  style={{ ...styles.input, paddingLeft: 22 }}
                  type="number" min="0" step="0.01" placeholder="0.00"
                  value={item.totalCost}
                  onChange={e => updateRow(idx, 'totalCost', e.target.value)}
                />
              </div>

              {/* Remove */}
              <button
                onClick={() => removeRow(idx)}
                disabled={items.length === 1}
                style={{
                  background: 'transparent', border: 'none', cursor: items.length === 1 ? 'not-allowed' : 'pointer',
                  color: items.length === 1 ? COLORS.gray300 : COLORS.red, fontSize: 20, padding: 0, lineHeight: 1,
                }}
              >×</button>
            </div>
          ))}

          <button
            onClick={addRow}
            style={{ ...styles.btnGray, fontSize: 12, marginBottom: 20, marginTop: 4 }}
          >
            + Add Another Item
          </button>

          {/* Grand total */}
          <div style={{
            background: `linear-gradient(90deg, ${COLORS.greenLight} 0%, #fff9f0 100%)`,
            borderRadius: 10, padding: '14px 18px', marginBottom: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            border: `1px solid ${COLORS.gray200}`,
          }}>
            <div>
              <div style={{ fontSize: 12, color: COLORS.gray500, marginBottom: 2 }}>Total Restocking Cost</div>
              <div style={{ fontSize: 11, color: COLORS.gray400 }}>Will be added to stocking cost in inventory</div>
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: COLORS.greenDark }}>
              ₱{grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>

          {/* Info note */}
          <div style={{
            background: COLORS.blueLight, borderRadius: 8, padding: '10px 14px',
            fontSize: 12, color: COLORS.blue, marginBottom: 16, display: 'flex', gap: 8,
          }}>
            <span>ℹ️</span>
            <span>Saving will <strong>immediately add</strong> these quantities to your inventory and record the cost for profit/loss tracking.</span>
          </div>

          {error && (
            <div style={{
              color: COLORS.red, fontSize: 12, marginBottom: 12,
              background: COLORS.redLight, padding: '8px 12px', borderRadius: 8,
            }}>{error}</div>
          )}

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            <button style={styles.btnGray} onClick={onClose}>Cancel</button>
            <button
              style={{ ...styles.btnPrimary, opacity: saving ? 0.7 : 1, minWidth: 180, justifyContent: 'center' }}
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? 'Saving…' : '✅ Save & Update Inventory'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Success Toast (inline, not a blocking modal) ──
function RestockSuccessToast({ data, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 2000,
      background: COLORS.white, border: `1px solid ${COLORS.green}`,
      borderRadius: 12, padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
      display: 'flex', alignItems: 'center', gap: 14, minWidth: 320,
      animation: 'slideUp 0.3s ease',
    }}>
      <div style={{
        width: 42, height: 42, borderRadius: 10, background: COLORS.greenLight,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0,
      }}>✅</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.gray900 }}>Restock Saved!</div>
        <div style={{ fontSize: 12, color: COLORS.gray500, marginTop: 2 }}>
          {data.itemCount} item{data.itemCount !== 1 ? 's' : ''} added · ₱{parseFloat(data.totalCost).toLocaleString('en-US', { minimumFractionDigits: 2 })} recorded
        </div>
      </div>
      <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: COLORS.gray400, fontSize: 18 }}>×</button>
    </div>
  );
}

// ── Purchases Page (Restock System) ──
function Purchases() {
  const [purchases, setPurchases]       = useState([]);
  const [inventoryItems, setInventory]  = useState([]);
  const [loading, setLoading]           = useState(true);
  const [stats, setStats]               = useState({ totalRestocks: 0, totalSpent: 0, thisMonthSpent: 0, itemsRestocked: 0 });
  const [showModal, setShowModal]       = useState(false);
  const [toast, setToast]               = useState(null);
  const [search, setSearch]             = useState('');
  const [deleting, setDeleting]         = useState(null);
  const [expanded, setExpanded]         = useState(null);

  const token   = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [pRes, iRes] = await Promise.all([
        fetch('https://backend-repo-teal.vercel.app//api/purchases',  { headers }),
        fetch('https://backend-repo-teal.vercel.app//api/inventory',  { headers }),
      ]);
      const pData = await pRes.json();
      const iData = await iRes.json();
      setPurchases(pData.purchases || []);
      setStats(pData.stats || { totalRestocks: 0, totalSpent: 0, thisMonthSpent: 0, itemsRestocked: 0 });
      setInventory(iData.items || []);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchAll(); }, []);

  const handleSaved = (data) => {
    setShowModal(false);
    setToast(data);
    fetchAll();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this restock record? (Inventory quantities will NOT be reversed.)')) return;
    setDeleting(id);
    try {
      await fetch(`https://backend-repo-teal.vercel.app//api/purchases/${id}`, { method: 'DELETE', headers });
      fetchAll();
    } finally { setDeleting(null); }
  };

  const filtered = purchases.filter(p =>
    (p.notes || '').toLowerCase().includes(search.toLowerCase()) ||
    (p.items || []).some(i => i.name.toLowerCase().includes(search.toLowerCase()))
  );

  const formatDate = (dt) => new Date(dt).toLocaleDateString('en-PH', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });

  return (
    <div>
      {/* Toast */}
      {toast && <RestockSuccessToast data={toast} onClose={() => setToast(null)} />}

      {/* Modal */}
      {showModal && (
        <RestockModal
          inventoryItems={inventoryItems}
          onClose={() => setShowModal(false)}
          onSaved={handleSaved}
        />
      )}

      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <div style={styles.pageTitle}>Restock & Purchases</div>
          <div style={styles.pageSub}>Record what you bought and how much it cost — inventory updates instantly</div>
        </div>
        <button style={styles.btnPrimary} onClick={() => setShowModal(true)}>
          + Record Restock
        </button>
      </div>

      {/* Stat cards */}
      <div style={styles.grid4}>
        {[
          { l: 'Total Restocks',      v: stats.totalRestocks,  sub: 'All time records' },
          { l: 'Total Spent',         v: `₱${(stats.totalSpent||0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`, sub: 'All time cost', c: COLORS.orange },
          { l: 'This Month',          v: `₱${(stats.thisMonthSpent||0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`, sub: 'Month-to-date cost', c: COLORS.red },
          { l: 'Items Restocked',     v: stats.itemsRestocked, sub: 'Total line items recorded' },
        ].map((s, i) => (
          <div key={i} style={styles.statCard}>
            <div style={styles.statLabel}>{s.l}</div>
            <div style={{ ...styles.statValue, color: s.c || COLORS.gray900 }}>{s.v}</div>
            <div style={styles.statSub}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* How it works banner (shown when empty) */}
      {!loading && purchases.length === 0 && (
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.greenLight} 0%, #fff9f0 100%)`,
          border: `1px solid ${COLORS.gray200}`, borderRadius: 12,
          padding: '24px 28px', marginBottom: 20,
          display: 'flex', gap: 32, flexWrap: 'wrap',
        }}>
          {[
            { icon: '1️⃣', title: 'Record a purchase', desc: 'Click "+ Record Restock" and enter what you bought' },
            { icon: '2️⃣', title: 'Enter qty & cost', desc: 'Add the quantity purchased and how much you paid in total' },
            { icon: '3️⃣', title: 'Instant update', desc: 'Inventory stock and stocking cost are updated immediately' },
            { icon: '📈', title: 'Track profit/loss', desc: 'Analytics uses your costs to compute real margins' },
          ].map((step, i) => (
            <div key={i} style={{ flex: 1, minWidth: 150 }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{step.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 13, color: COLORS.gray900, marginBottom: 3 }}>{step.title}</div>
              <div style={{ fontSize: 12, color: COLORS.gray500 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* Search + list */}
      <div style={styles.card}>
        <div style={{ ...styles.row, justifyContent: 'space-between', marginBottom: 16, gap: 12 }}>
          <div style={{ ...styles.searchWrap, flex: 1, marginBottom: 0 }}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              style={styles.searchInput}
              placeholder="Search by item name or notes…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <button style={styles.btnGray} onClick={fetchAll}>🔄 Refresh</button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: COLORS.gray400 }}>Loading restock history…</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0', color: COLORS.gray400 }}>
            {purchases.length === 0
              ? 'No restocks recorded yet. Click "+ Record Restock" to get started.'
              : 'No records match your search.'}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {filtered.map((p, idx) => {
              const isExpanded = expanded === p.id;
              return (
                <div key={p.id} style={{
                  borderBottom: `1px solid ${COLORS.gray100}`,
                  background: isExpanded ? COLORS.gray50 : COLORS.white,
                  transition: 'background 0.15s',
                }}>
                  {/* Summary row */}
                  <div
                    onClick={() => setExpanded(isExpanded ? null : p.id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      padding: '14px 12px', cursor: 'pointer',
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.orange})`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>📦</div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.gray900 }}>
                        {p.items?.length || 0} item{p.items?.length !== 1 ? 's' : ''} restocked
                        {p.notes ? <span style={{ color: COLORS.gray400, fontWeight: 400 }}> · {p.notes}</span> : ''}
                      </div>
                      <div style={{ fontSize: 11, color: COLORS.gray400, marginTop: 2 }}>
                        {formatDate(p.created_at)} · Record #{p.id}
                      </div>
                    </div>

                    {/* Item pills preview */}
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
                      {(p.items || []).slice(0, 3).map((item, j) => (
                        <span key={j} style={{
                          background: COLORS.gray100, color: COLORS.gray600,
                          borderRadius: 99, fontSize: 11, padding: '2px 8px', fontWeight: 500,
                        }}>
                          {item.name}
                        </span>
                      ))}
                      {(p.items || []).length > 3 && (
                        <span style={{
                          background: COLORS.gray200, color: COLORS.gray500,
                          borderRadius: 99, fontSize: 11, padding: '2px 8px',
                        }}>+{p.items.length - 3} more</span>
                      )}
                    </div>

                    {/* Total cost */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontWeight: 800, fontSize: 16, color: COLORS.orange }}>
                        ₱{parseFloat(p.total_cost || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </div>
                      <div style={{ fontSize: 10, color: COLORS.gray400 }}>total cost</div>
                    </div>

                    {/* Chevron */}
                    <div style={{ color: COLORS.gray300, fontSize: 14, flexShrink: 0, transition: 'transform 0.2s', transform: isExpanded ? 'rotate(90deg)' : 'none' }}>▶</div>
                  </div>

                  {/* Expanded detail */}
                  {isExpanded && (
                    <div style={{ padding: '0 12px 16px 66px' }}>
                      <table style={{ ...styles.table, marginBottom: 12 }}>
                        <thead>
                          <tr>
                            {['Product', 'Quantity', 'Total Cost', 'Unit Cost'].map(h => (
                              <th key={h} style={styles.th}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {(p.items || []).map((item, j) => {
                            const unitCost = parseFloat(item.quantity) > 0
                              ? (parseFloat(item.total_cost) / parseFloat(item.quantity))
                              : 0;
                            return (
                              <tr key={j}>
                                <td style={styles.td}>
                                  <span style={{ fontWeight: 500 }}>{item.name}</span>
                                </td>
                                <td style={styles.td}>
                                  {item.quantity} {item.unit}
                                </td>
                                <td style={styles.td}>
                                  <span style={{ fontWeight: 700, color: COLORS.orange }}>
                                    ₱{parseFloat(item.total_cost || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                  </span>
                                </td>
                                <td style={styles.td}>
                                  <span style={{ color: COLORS.gray500, fontSize: 12 }}>
                                    ₱{unitCost.toFixed(2)} / {item.unit}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr style={{ background: COLORS.gray50 }}>
                            <td style={{ ...styles.td, fontWeight: 700 }} colSpan={2}>Total</td>
                            <td style={{ ...styles.td, fontWeight: 800, color: COLORS.orange }} colSpan={2}>
                              ₱{parseFloat(p.total_cost || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </td>
                          </tr>
                        </tfoot>
                      </table>

                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                          style={{
                            background: COLORS.redLight, color: COLORS.red,
                            border: 'none', borderRadius: 8, padding: '6px 14px',
                            fontSize: 12, cursor: 'pointer',
                            opacity: deleting === p.id ? 0.6 : 1,
                          }}
                          onClick={() => handleDelete(p.id)}
                          disabled={deleting === p.id}
                        >
                          {deleting === p.id ? '…' : '🗑 Delete Record'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Analytics ──
function Analytics() {
  const { limits } = useLimits();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [range, setRange]     = useState('daily');
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
 
  const isPremium = limits && !limits.isLimited;
 
  const token   = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };
 
  const fetchAnalytics = async (r) => {
    setLoading(true); setError(null);
    try {
      const res = await fetch(`https://backend-repo-teal.vercel.app//api/analytics?range=${r}`, { headers });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      setData(await res.json());
    } catch (err) { console.error(err); setError(err.message); }
    finally { setLoading(false); }
  };
 
  useEffect(() => { fetchAnalytics(range); }, [range]);
 
  const handleRangeClick = (id, premiumOnly) => {
    if (premiumOnly && !isPremium) { setShowUpgrade(true); return; }
    setRange(id);
  };
 
  // Free: only Today + Last 7 Days. Premium: all four.
  const ranges = [
    { id: 'daily',   label: 'Today',        premiumOnly: false },
    { id: 'weekly',  label: 'Last 7 Days',  premiumOnly: false },
    { id: 'monthly', label: 'Last 30 Days', premiumOnly: true  },
    { id: 'alltime', label: 'All Time',     premiumOnly: true  },
  ];
 
  const maxCatRev = data?.salesByCategory?.length
    ? Math.max(...data.salesByCategory.map(c => parseFloat(c.revenue))) : 1;
  const catColors = [COLORS.green, COLORS.orange, COLORS.blue, COLORS.amber, COLORS.red];
 
  function GroupedTrendChart({ profitTrend = [], height = 140 }) {
    if (!profitTrend.length) return (
      <div style={{ textAlign: 'center', padding: '30px 0', color: COLORS.gray400, fontSize: 13 }}>
        No sales data for this period yet.
      </div>
    );
    const maxVal = Math.max(...profitTrend.flatMap(d => [d.revenue, d.cost, Math.abs(d.profit)])) || 1;
    return (
      <div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 12, fontSize: 12 }}>
          {[{ color: COLORS.green, label: 'Revenue' }, { color: COLORS.orange, label: 'Cost' }, { color: COLORS.blue, label: 'Profit' }].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: l.color }} />
              <span style={{ color: COLORS.gray600 }}>{l.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height }}>
          {profitTrend.map((d, i) => {
            const revH = Math.max(4, (d.revenue / maxVal) * (height - 20));
            const cstH = Math.max(4, (d.cost / maxVal) * (height - 20));
            const prfH = Math.max(4, (Math.abs(d.profit) / maxVal) * (height - 20));
            const prfColor = d.profit >= 0 ? COLORS.blue : COLORS.red;
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                  <div style={{ width: '33%', minWidth: 4, background: COLORS.green,  borderRadius: '2px 2px 0 0', height: revH }} />
                  <div style={{ width: '33%', minWidth: 4, background: COLORS.orange, borderRadius: '2px 2px 0 0', height: cstH }} />
                  <div style={{ width: '33%', minWidth: 4, background: prfColor,      borderRadius: '2px 2px 0 0', height: prfH }} />
                </div>
                <span style={{ fontSize: 9, color: COLORS.gray400, textAlign: 'center', lineHeight: 1.2 }}>{d.label}</span>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 14, fontSize: 12, borderTop: `1px solid ${COLORS.gray100}`, paddingTop: 10 }}>
          {[
            { label: 'Total Revenue', value: data.summary.totalRevenue, color: COLORS.green  },
            { label: 'Total Cost',    value: data.summary.totalCost,    color: COLORS.orange },
            { label: 'Net Profit',    value: data.summary.totalProfit,  color: data.summary.totalProfit >= 0 ? COLORS.blue : COLORS.red },
          ].map(s => (
            <div key={s.label}>
              <div style={{ color: COLORS.gray500, marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: s.color }}>
                ₱{parseFloat(s.value).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
 
  return (
    <div>
      {showUpgrade && (
        <UpgradeModal
          reason="Extended date ranges and profit margin breakdown are Premium features. Upgrade to unlock your full business analytics."
          onClose={() => setShowUpgrade(false)}
        />
      )}
 
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
        <div>
          <div style={styles.pageTitle}>Analytics & Reports</div>
          <div style={styles.pageSub}>Real business insights — revenue, cost, and profit</div>
        </div>
        {!isPremium && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#fffbeb', border: `1px solid ${COLORS.amber}`,
            borderRadius: 8, padding: '7px 12px', fontSize: 12,
          }}>
            <span>🔒</span>
            <span style={{ color: COLORS.gray700 }}>
              <strong>Free plan:</strong> Today & Last 7 Days only · Profit Margins locked
            </span>
            <button onClick={() => setShowUpgrade(true)} style={{
              background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.orange})`,
              color: COLORS.white, border: 'none', borderRadius: 6,
              padding: '4px 10px', fontSize: 11, fontWeight: 700, cursor: 'pointer',
            }}>Upgrade</button>
          </div>
        )}
      </div>
 
      {/* Range tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, marginTop: 16 }}>
        {ranges.map(r => {
          const isLocked = r.premiumOnly && !isPremium;
          const isActive = range === r.id && !isLocked;
          return (
            <button key={r.id} onClick={() => handleRangeClick(r.id, r.premiumOnly)} style={{
              padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer',
              border:      `1px solid ${isLocked ? COLORS.gray200 : isActive ? COLORS.green : COLORS.gray200}`,
              background:  isLocked ? COLORS.gray100 : isActive ? COLORS.greenLight : 'transparent',
              color:       isLocked ? COLORS.gray400  : isActive ? COLORS.greenDark  : COLORS.gray600,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {isLocked && '🔒'} {r.label}
            </button>
          );
        })}
      </div>
 
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: COLORS.gray400 }}>Loading analytics...</div>
      ) : error ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: COLORS.red }}>Failed to load: {error}</div>
      ) : !data ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: COLORS.gray400 }}>No data available.</div>
      ) : (
        <>
          {/* Stat cards */}
          <div style={styles.grid4}>
            {[
              { label: 'Total Revenue', value: `₱${data.summary.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, sub: 'Gross sales',           color: COLORS.green  },
              { label: 'Total Cost',    value: `₱${data.summary.totalCost.toLocaleString('en-US',    { minimumFractionDigits: 2 })}`, sub: 'Ingredient costs',     color: COLORS.orange },
              { label: 'Net Profit',    value: `₱${data.summary.totalProfit.toLocaleString('en-US',  { minimumFractionDigits: 2 })}`, sub: `${data.summary.profitMargin}% margin`, color: data.summary.totalProfit >= 0 ? COLORS.green : COLORS.red },
              { label: 'Total Orders',  value: data.summary.totalOrders, sub: 'Completed transactions', color: COLORS.blue },
            ].map((s, i) => (
              <div key={i} style={styles.statCard}>
                <div style={styles.statLabel}>{s.label}</div>
                <div style={{ ...styles.statValue, color: s.color }}>{s.value}</div>
                <div style={styles.statSub}>{s.sub}</div>
              </div>
            ))}
          </div>
 
          {/* Trend chart */}
          <div style={{ ...styles.card, marginBottom: 20 }}>
            <div style={styles.sectionTitle}>Revenue, Cost & Profit Trend</div>
            <div style={styles.sectionSub}>{ranges.find(r => r.id === range)?.label}</div>
            <GroupedTrendChart profitTrend={data.profitTrend || []} height={140} />
          </div>
 
          {/* Top products + Sales by category */}
          <div style={styles.grid2}>
            <div style={styles.card}>
              <div style={styles.sectionTitle}>Top Selling Products</div>
              <div style={styles.sectionSub}>By units sold</div>
              {data.topProducts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 0', color: COLORS.gray400, fontSize: 13 }}>No sales yet.</div>
              ) : (
                <table style={{ ...styles.table, marginTop: 8 }}>
                  <thead><tr>{['#','Product','Units','Revenue'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr></thead>
                  <tbody>
                    {data.topProducts.map((p, i) => (
                      <tr key={i}>
                        <td style={styles.td}><span style={{ fontWeight: 600, color: COLORS.gray500 }}>{i + 1}</span></td>
                        <td style={styles.td}><span style={{ fontWeight: 500 }}>{p.name}</span></td>
                        <td style={styles.td}>{p.unitsSold}</td>
                        <td style={styles.td}><span style={{ fontWeight: 600, color: COLORS.green }}>₱{parseFloat(p.revenue).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div style={styles.card}>
              <div style={styles.sectionTitle}>Sales by Category</div>
              <div style={styles.sectionSub}>Revenue distribution</div>
              {data.salesByCategory.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 0', color: COLORS.gray400, fontSize: 13 }}>No sales yet.</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
                  {data.salesByCategory.map((c, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 13 }}>
                        <span style={{ color: COLORS.gray700 }}>{c.category}</span>
                        <span style={{ fontWeight: 600 }}>₱{parseFloat(c.revenue).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <ProgressBar value={parseFloat(c.revenue)} max={maxCatRev} color={catColors[i % catColors.length]} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
 
          {/* Profit Margin table — always locked for free */}
          <div style={styles.card}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <div>
                <div style={styles.sectionTitle}>
                  Profit Margin by Product
                  {!isPremium && (
                    <span style={{
                      marginLeft: 10,
                      background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.orange})`,
                      color: COLORS.white, fontSize: 10, fontWeight: 700,
                      padding: '2px 8px', borderRadius: 99,
                    }}>👑 PREMIUM</span>
                  )}
                </div>
                <div style={styles.sectionSub}>Cost vs selling price · {ranges.find(r => r.id === range)?.label}</div>
              </div>
            </div>
 
            {isPremium ? (
              data.productMargins.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '20px 0', color: COLORS.gray400, fontSize: 13 }}>No recipes yet.</div>
              ) : (
                <div style={styles.tableWrap}>
                  <table style={{ ...styles.table, marginTop: 8 }}>
                    <thead>
                      <tr>{['Product','Price','Cost/Unit','Margin','Units','Revenue','Cost','Profit'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {data.productMargins.map((p, i) => {
                        const profit     = parseFloat(p.totalProfit) || 0;
                        const marginNum  = parseFloat(p.margin) || 0;
                        return (
                          <tr key={i}>
                            <td style={styles.td}><span style={{ fontWeight: 500 }}>{p.name}</span></td>
                            <td style={styles.td}>₱{parseFloat(p.sellingPrice).toFixed(2)}</td>
                            <td style={styles.td}>₱{parseFloat(p.cost).toFixed(2)}</td>
                            <td style={styles.td}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ fontWeight: 700, color: marginNum >= 50 ? COLORS.green : COLORS.orange, minWidth: 48 }}>{p.margin}%</span>
                                <div style={{ flex: 1, background: COLORS.gray100, borderRadius: 99, height: 6, minWidth: 60 }}>
                                  <div style={{ width: `${Math.min(marginNum, 100)}%`, height: '100%', background: marginNum >= 50 ? COLORS.green : COLORS.orange, borderRadius: 99 }} />
                                </div>
                              </div>
                            </td>
                            <td style={styles.td}>{p.unitsSold}</td>
                            <td style={styles.td}><span style={{ fontWeight: 600, color: COLORS.green }}>₱{parseFloat(p.totalRevenue).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></td>
                            <td style={styles.td}><span style={{ color: COLORS.orange }}>₱{parseFloat(p.totalCost).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></td>
                            <td style={styles.td}><span style={{ fontWeight: 700, color: profit >= 0 ? COLORS.green : COLORS.red }}>{profit >= 0 ? '' : '-'}₱{Math.abs(profit).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr style={{ background: COLORS.gray50 }}>
                        <td style={{ ...styles.td, fontWeight: 700, color: COLORS.gray800 }} colSpan={5}>TOTAL ({ranges.find(r => r.id === range)?.label})</td>
                        <td style={styles.td}><span style={{ fontWeight: 700, color: COLORS.green }}>₱{data.summary.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></td>
                        <td style={styles.td}><span style={{ fontWeight: 700, color: COLORS.orange }}>₱{data.summary.totalCost.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></td>
                        <td style={styles.td}><span style={{ fontWeight: 700, color: data.summary.totalProfit >= 0 ? COLORS.green : COLORS.red }}>{data.summary.totalProfit >= 0 ? '' : '-'}₱{Math.abs(data.summary.totalProfit).toLocaleString('en-US', { minimumFractionDigits: 2 })}</span></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )
            ) : (
              <LockedOverlay
                reason="See exact profit margins, cost per unit, and total profit per product. Upgrade to Premium to unlock the full breakdown."
                onUpgrade={() => setShowUpgrade(true)}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ── Premium Page ──
function PremiumPage() {
  const [showBilling,  setShowBilling]  = useState(false);
  const [showSuccess,  setShowSuccess]  = useState(false);
  const [showCancel,   setShowCancel]   = useState(false);
  const [successCycle, setSuccCycle]    = useState('monthly');
  const [subscription, setSub]          = useState(null);
  const [subLoading,   setSubLoad]      = useState(true);
  const { limits, refetch }             = useLimits();
 
  // Fetch subscription details
  const fetchSub = async () => {
    try {
      const token = localStorage.getItem('token');
      const res   = await fetch('https://backend-repo-teal.vercel.app//api/premium/status', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data  = await res.json();
      setSub(data);
    } catch(e) {}
    finally { setSubLoad(false); }
  };
 
  useState(()=>{ fetchSub(); }, []);
  // useEffect equivalent — call on mount
  const [mounted, setMounted] = useState(false);
  if (!mounted) { setMounted(true); fetchSub(); }
 
  const isPremium = limits && !limits.isLimited;
 
  const handleSuccess = (cycle) => {
    setShowBilling(false);
    setSuccCycle(cycle);
    setShowSuccess(true);
  };
 
  const handleCancelled = () => {
    setShowCancel(false);
    refetch();
    fetchSub();
  };
 
  // ── Premium / Subscribed view ──
  if (isPremium) {
    return (
      <div>
        {showCancel && (
          <CancelSubscriptionModal
            subscription={subscription?.subscription}
            onClose={()=>setShowCancel(false)}
            onCancelled={handleCancelled}
          />
        )}
 
        <div style={{textAlign:'center',marginBottom:32}}>
          <div style={{
            display:'inline-flex',alignItems:'center',gap:8,
            background:gradientBtn,color:COLORS.white,
            padding:'6px 16px',borderRadius:99,fontSize:13,fontWeight:600,marginBottom:16,
          }}>👑 Premium Active</div>
          <div style={styles.pageTitle}>You're on Premium!</div>
          <div style={{fontSize:14,color:COLORS.gray500}}>
            Enjoy unlimited access to all ProCIS features.
          </div>
        </div>
 
        <div style={{maxWidth:680,margin:'0 auto'}}>
          {/* Subscribed card */}
          <div style={{
            background:'linear-gradient(135deg,#16a34a 0%,#ea580c 100%)',
            borderRadius:16,padding:'28px 32px',color:COLORS.white,
            marginBottom:20,position:'relative',overflow:'hidden',
          }}>
            {/* Decorative circle */}
            <div style={{
              position:'absolute',right:-40,top:-40,
              width:180,height:180,borderRadius:'50%',
              background:'rgba(255,255,255,0.08)',
            }}/>
            <div style={{
              position:'absolute',right:20,bottom:-30,
              width:120,height:120,borderRadius:'50%',
              background:'rgba(255,255,255,0.06)',
            }}/>
 
            <div style={{...styles.row,marginBottom:20,position:'relative'}}>
              <div style={{
                width:52,height:52,borderRadius:14,
                background:'rgba(255,255,255,0.2)',
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,
              }}>👑</div>
              <div>
                <div style={{fontWeight:700,fontSize:20}}>ProCIS Premium</div>
                <div style={{opacity:0.8,fontSize:13}}>
                  {subscription?.subscription?.billing_cycle === 'yearly'
                    ? '₱1,699 / year · Yearly Plan'
                    : '₱149 / month · Monthly Plan'}
                </div>
              </div>
              <div style={{marginLeft:'auto'}}>
                <span style={{
                  background:'rgba(255,255,255,0.25)',
                  color:COLORS.white,fontSize:12,fontWeight:700,
                  padding:'4px 12px',borderRadius:99,
                }}>● ACTIVE</span>
              </div>
            </div>
 
            <div style={{
              display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16,
              background:'rgba(255,255,255,0.12)',borderRadius:10,padding:'14px 16px',
              position:'relative',
            }}>
              {[
                {label:'Plan Started', value: subscription?.subscription?.started_at
                  ? new Date(subscription.subscription.started_at).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'})
                  : '—'},
                {label:'Renews / Expires', value: subscription?.subscription?.expires_at
                  ? new Date(subscription.subscription.expires_at).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'})
                  : '—'},
                {label:'Billing', value: subscription?.subscription?.billing_cycle === 'yearly' ? 'Yearly' : 'Monthly'},
              ].map((s,i)=>(
                <div key={i}>
                  <div style={{fontSize:11,opacity:0.7,marginBottom:3}}>{s.label}</div>
                  <div style={{fontWeight:700,fontSize:13}}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
 
          {/* Included features */}
          <div style={{...styles.card,marginBottom:20}}>
            <div style={{fontWeight:700,fontSize:15,marginBottom:16}}>✅ Your Premium Features</div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              {[
                {icon:'📦',label:'Unlimited Inventory',    sub:'No product limits (free: 10 items)'},
                {icon:'📖',label:'Unlimited Recipes',      sub:'No recipe limits (free: 5 recipes)'},
                {icon:'🛒',label:'Unlimited POS Orders',  sub:'No monthly cap (free: 50/month)'},
                {icon:'📈',label:'Full Analytics Range',   sub:'Last 30 Days & All Time views'},
                {icon:'📊',label:'Profit Margin Table',    sub:'Cost per unit & margin per product'},
                {icon:'🔔',label:'Alerts & Notifications', sub:'Auto + manual alerts, full history'},
                {icon:'🎯',label:'Priority Support',       sub:'Fast response times'},
                {icon:'💡',label:'Advanced Insights',      sub:'Complete profit/loss breakdown'},
              ].map((f,i)=>(
                <div key={i} style={{
                  ...styles.row,padding:'10px 12px',borderRadius:8,
                  background:COLORS.gray50,border:`1px solid ${COLORS.gray100}`,
                }}>
                  <span style={{fontSize:20}}>{f.icon}</span>
                  <div>
                    <div style={{fontWeight:600,fontSize:13,color:COLORS.gray800}}>{f.label}</div>
                    <div style={{fontSize:11,color:COLORS.gray500}}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
 
          {/* Cancel section */}
          <div style={{
            ...styles.card,
            border:`1px solid ${COLORS.gray200}`,
            display:'flex',alignItems:'center',justifyContent:'space-between',
          }}>
            <div>
              <div style={{fontWeight:600,fontSize:14,color:COLORS.gray800,marginBottom:2}}>
                Cancel Subscription
              </div>
              <div style={{fontSize:12,color:COLORS.gray500}}>
                You'll keep access until the end of your billing period.
              </div>
            </div>
            <button
              onClick={()=>setShowCancel(true)}
              style={{
                background:COLORS.redLight,color:COLORS.red,
                border:`1px solid ${COLORS.red}33`,borderRadius:8,
                padding:'8px 16px',fontSize:13,cursor:'pointer',fontWeight:500,
                flexShrink:0,
              }}
            >
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    );
  }
 
  // ── Free / non-premium view ──
  return (
    <div>
      {showBilling && (
        <BillingModal
          onClose={()=>setShowBilling(false)}
          onSuccess={handleSuccess}
        />
      )}
      {showSuccess && (
        <UpgradeSuccessModal
          cycle={successCycle}
          onClose={()=>setShowSuccess(false)}
        />
      )}
 
      <div style={{textAlign:"center",marginBottom:32}}>
        <div style={{
          display:"inline-flex",alignItems:"center",gap:8,
          background:gradientBtn,color:COLORS.white,
          padding:"6px 16px",borderRadius:99,fontSize:13,fontWeight:600,marginBottom:16,
        }}>👑 Premium Features</div>
        <div style={styles.pageTitle}>Choose Your Plan</div>
        <div style={{fontSize:14,color:COLORS.gray500}}>
          Unlock advanced features to scale your food business
        </div>
      </div>
 
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,maxWidth:760,margin:"0 auto 32px"}}>
        {/* Free card */}
        <div style={{...styles.card,border:`1px solid ${COLORS.gray200}`}}>
          <div style={{fontSize:18,fontWeight:600,marginBottom:4}}>Regular</div>
          <div style={{fontSize:32,fontWeight:800,marginBottom:4}}>Free</div>
          <div style={{fontSize:13,color:COLORS.gray500,marginBottom:20}}>
            Perfect for getting started
          </div>
          {[
            "Dashboard Overview",
            "Inventory Tracking (up to 10 items)",
            "Recipe Management (up to 5 recipes)",
            "Sales / POS (50 orders/month)",
            "Purchase & Restocking",
            "Analytics & Reports",
          ].map(f=>(
            <div key={f} style={{...styles.row,gap:8,marginBottom:10,fontSize:13}}>
              <span style={{color:COLORS.green}}>✓</span>{f}
            </div>
          ))}
          <div style={{fontWeight:600,fontSize:13,marginTop:16,marginBottom:10}}>Not Included:</div>
          {["Unlimited inventory, recipes & orders","Low Stock & Alerts","Priority Support"].map(f=>(
            <div key={f} style={{...styles.row,gap:8,marginBottom:10,fontSize:13,color:COLORS.gray400}}>
              <span>✕</span>{f}
            </div>
          ))}
          {limits?.isLimited && (
            <div style={{
              background:COLORS.gray50,borderRadius:8,padding:'10px 12px',
              marginTop:16,fontSize:12,borderTop:`1px solid ${COLORS.gray100}`,
            }}>
              <div style={{color:COLORS.gray500,marginBottom:6,fontWeight:500}}>Your usage</div>
              {[
                ['Inventory', limits.usage.inventory, limits.limits.inventory],
                ['Recipes',   limits.usage.recipes,   limits.limits.recipes],
                ['POS Orders',limits.usage.posOrders, limits.limits.posOrders],
              ].map(([l,u,m])=>(
                <div key={l} style={{marginBottom:6}}>
                  <div style={{...styles.row,justifyContent:'space-between',marginBottom:3}}>
                    <span style={{color:COLORS.gray600}}>{l}</span>
                    <span style={{fontWeight:600,color:u>=m?COLORS.red:COLORS.gray700}}>{u}/{m}</span>
                  </div>
                  <ProgressBar value={u} max={m} color={u>=m?COLORS.red:COLORS.green}/>
                </div>
              ))}
            </div>
          )}
        </div>
 
        {/* Premium card */}
        <div style={{
          background:"linear-gradient(135deg,#16a34a 0%,#ea580c 100%)",
          borderRadius:12,padding:"24px",color:COLORS.white,position:"relative",
        }}>
          <div style={{
            position:"absolute",top:16,right:16,
            background:"rgba(255,255,255,0.25)",padding:"3px 10px",
            borderRadius:99,fontSize:11,fontWeight:700,
          }}>POPULAR</div>
          <div style={{fontSize:18,fontWeight:700,marginBottom:4}}>👑 Premium</div>
          <div style={{fontSize:32,fontWeight:800,marginBottom:2}}>
            ₱149<span style={{fontSize:16,fontWeight:400}}>/month</span>
          </div>
          <div style={{fontSize:13,opacity:0.85,marginBottom:4}}>
            or ₱1,699/year{' '}
            <span style={{background:"rgba(255,255,255,0.2)",padding:"1px 8px",borderRadius:99,fontSize:11}}>
              Save ₱89
            </span>
          </div>
          <div style={{fontSize:13,opacity:0.75,marginBottom:20}}>
            Complete solution for growing food businesses
          </div>
          {[
            "All Regular Features",
            "UNLIMITED Inventory Products",
            "UNLIMITED Recipes",
            "UNLIMITED POS Orders",
            "Low Stock & Expiry Alerts",
            "Advanced Analytics",
            "Priority Support",
          ].map(f=>(
            <div key={f} style={{...styles.row,gap:8,marginBottom:10,fontSize:13}}>
              <span>✅</span>{f}
            </div>
          ))}
 
          {/* GCash badge */}
          <div style={{
            background:'rgba(255,255,255,0.15)',borderRadius:8,
            padding:'8px 12px',marginBottom:16,
            display:'flex',alignItems:'center',gap:8,fontSize:12,
          }}>
            <span style={{fontSize:16}}>📱</span>
            <span>Pay securely via <strong>GCash</strong></span>
          </div>
 
          <button
            onClick={()=>setShowBilling(true)}
            style={{
              width:"100%",padding:"14px",borderRadius:10,
              background:COLORS.white,color:COLORS.greenDark,
              border:"none",fontWeight:700,fontSize:15,cursor:"pointer",
              boxShadow:"0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            🚀 Upgrade Plan
          </button>
          <div style={{textAlign:"center",fontSize:12,opacity:0.75,marginTop:8}}>
            Secure GCash billing · Cancel anytime
          </div>
        </div>
      </div>
    </div>
  );
}
// ── Alerts Modal ──
function AlertModal({ form, setForm, saving, formError, onSave, onClose }) {
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>
      <div style={{background:COLORS.white,borderRadius:14,padding:'28px 32px',width:460,boxShadow:'0 8px 40px rgba(0,0,0,0.18)'}}>
        <div style={{fontWeight:700,fontSize:17,marginBottom:20,color:COLORS.gray900}}>🔔 Create Manual Alert</div>
        <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:20}}>
          <div>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Title *</label>
            <input style={styles.input} placeholder="e.g. Equipment maintenance needed" value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))}/>
          </div>
          <div>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Severity</label>
            <div style={{display:'flex',gap:10}}>
              {[['critical','🔴 Critical'],['warning','🟡 Warning'],['info','🔵 Info']].map(([val,label])=>(
                <button key={val} onClick={()=>setForm(f=>({...f,severity:val}))} style={{flex:1,padding:'8px',borderRadius:8,fontSize:12,fontWeight:600,cursor:'pointer',border:`2px solid ${form.severity===val?(val==='critical'?COLORS.red:val==='warning'?COLORS.amber:COLORS.blue):COLORS.gray200}`,background:form.severity===val?(val==='critical'?COLORS.redLight:val==='warning'?COLORS.amberLight:COLORS.blueLight):COLORS.white,color:val==='critical'?COLORS.red:val==='warning'?COLORS.amber:COLORS.blue}}>{label}</button>
              ))}
            </div>
          </div>
          <div>
            <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:5}}>Message (optional)</label>
            <input style={styles.input} placeholder="Additional details" value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}/>
          </div>
        </div>
        {formError && <div style={{color:COLORS.red,fontSize:12,marginBottom:12,background:COLORS.redLight,padding:'8px 12px',borderRadius:8}}>{formError}</div>}
        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button style={styles.btnGray} onClick={onClose}>Cancel</button>
          <button style={{...styles.btnPrimary,opacity:saving?0.7:1}} onClick={onSave} disabled={saving}>{saving?'Creating...':'Create Alert'}</button>
        </div>
      </div>
    </div>
  );
}

// ── Alerts Page ──
function Alerts({ onAlertChange }) {
  const { limits } = useLimits();
  const [showUpgrade, setShowUpgrade] = useState(false);
  const isPremium = limits && !limits.isLimited;
 
  const [autoAlerts, setAutoAlerts]     = useState([]);
  const [manualAlerts, setManualAlerts] = useState([]);
  const [summary, setSummary]           = useState({ total: 0, critical: 0, warning: 0, resolved: 0 });
  const [loading, setLoading]           = useState(true);
  const [activeTab, setActiveTab]       = useState('all');
  const [showModal, setShowModal]       = useState(false);
  const [form, setForm]                 = useState({ title: '', message: '', severity: 'warning' });
  const [formError, setFormError]       = useState('');
  const [saving, setSaving]             = useState(false);
  const [actioning, setActioning]       = useState(null);
 
  const token   = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
 
  const fetchAlerts = async () => {
    setLoading(true);
    try {
      const res  = await fetch('https://backend-repo-teal.vercel.app//api/alerts', { headers });
      const data = await res.json();
      setAutoAlerts(data.autoAlerts || []);
      setManualAlerts(data.manualAlerts || []);
      setSummary(data.summary || { total: 0, critical: 0, warning: 0, resolved: 0 });
      if (onAlertChange) onAlertChange();
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };
 
  useEffect(() => { fetchAlerts(); }, []);
 
  // ── If free user — show full-page lock screen ──
  if (limits !== null && !isPremium) {
    return (
      <div>
        {showUpgrade && (
          <UpgradeModal
            reason="Alerts & Notifications is a Premium feature. Upgrade to get automatic low-stock alerts, manual alerts, and resolution history."
            onClose={() => setShowUpgrade(false)}
          />
        )}
 
        <div style={styles.pageTitle}>Alerts & Notifications</div>
        <div style={styles.pageSub}>Monitor stock levels and business alerts</div>
 
        {/* Full-page lock card */}
        <div style={{
          ...styles.card,
          marginTop: 24,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '60px 40px', textAlign: 'center', gap: 16,
        }}>
          {/* Big lock icon */}
          <div style={{
            width: 80, height: 80, borderRadius: 20,
            background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.orange})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
            boxShadow: '0 8px 24px rgba(34,197,94,0.25)',
          }}>🔒</div>
 
          <div style={{ fontWeight: 800, fontSize: 22, color: COLORS.gray900 }}>
            Alerts & Notifications
          </div>
          <div style={{ fontSize: 14, color: COLORS.gray500, maxWidth: 420, lineHeight: 1.7 }}>
            Get notified when your stock runs low, create manual alerts for your team,
            and track what's been resolved — all in one place.
          </div>
 
          {/* Feature list */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
            margin: '8px 0', width: '100%', maxWidth: 480,
          }}>
            {[
              { icon: '📉', label: 'Auto Low Stock Alerts',    sub: 'Triggered when stock hits minimum' },
              { icon: '🔔', label: 'Manual Custom Alerts',     sub: 'Create alerts for anything' },
              { icon: '⚠️', label: 'Critical & Warning Levels', sub: 'Prioritize what needs action' },
              { icon: '✅', label: 'Resolution History',        sub: 'Track what was fixed and when' },
            ].map((f, i) => (
              <div key={i} style={{
                background: COLORS.gray50, border: `1px solid ${COLORS.gray200}`,
                borderRadius: 10, padding: '12px 14px', textAlign: 'left',
                display: 'flex', alignItems: 'flex-start', gap: 10,
              }}>
                <span style={{ fontSize: 20 }}>{f.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.gray800 }}>{f.label}</div>
                  <div style={{ fontSize: 11, color: COLORS.gray500, marginTop: 2 }}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
 
          {/* Pricing hint */}
          <div style={{
            background: `linear-gradient(135deg, ${COLORS.greenLight}, #fff9f0)`,
            border: `1px solid ${COLORS.gray200}`, borderRadius: 10,
            padding: '14px 24px', fontSize: 13, color: COLORS.gray700,
          }}>
            Starting at <strong style={{ color: COLORS.greenDark }}>₱149/month</strong> · Cancel anytime
          </div>
 
          <button onClick={() => setShowUpgrade(true)} style={{
            background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.orange})`,
            color: COLORS.white, border: 'none', borderRadius: 10,
            padding: '13px 36px', fontSize: 15, fontWeight: 800, cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(34,197,94,0.3)',
          }}>
            👑 Upgrade to Unlock Alerts
          </button>
        </div>
      </div>
    );
  }
 
  // ── Premium user — full Alerts UI ──
  const handleCreate = async () => {
    if (!form.title) return setFormError('Title is required.');
    setSaving(true); setFormError('');
    try {
      const res  = await fetch('https://backend-repo-teal.vercel.app//api/alerts', { method: 'POST', headers, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) return setFormError(data.message || 'Failed to create.');
      setShowModal(false); fetchAlerts();
    } catch { setFormError('Cannot connect to server.'); }
    finally { setSaving(false); }
  };
 
  const handleResolve = async (id) => {
    setActioning(id);
    try { await fetch(`https://backend-repo-teal.vercel.app//api/alerts/${id}/resolve`, { method: 'PUT', headers }); fetchAlerts(); }
    finally { setActioning(null); }
  };
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this alert?')) return;
    setActioning(id + '-del');
    try { await fetch(`https://backend-repo-teal.vercel.app//api/alerts/${id}`, { method: 'DELETE', headers }); fetchAlerts(); }
    finally { setActioning(null); }
  };
 
  const activeManual   = manualAlerts.filter(a => a.status === 'active');
  const resolvedManual = manualAlerts.filter(a => a.status === 'resolved');
  const tabData = {
    all:      [...autoAlerts, ...activeManual],
    critical: [...autoAlerts.filter(a => a.severity === 'critical'), ...activeManual.filter(a => a.severity === 'critical')],
    warning:  [...autoAlerts.filter(a => a.severity === 'warning'),  ...activeManual.filter(a => a.severity === 'warning')],
    lowstock: autoAlerts,
    manual:   activeManual,
    resolved: resolvedManual,
  };
  const currentAlerts = tabData[activeTab] || [];
  const sevColor  = s => s === 'critical' ? 'red'  : s === 'warning' ? 'orange' : 'green';
  const sevBg     = s => s === 'critical' ? '#fff5f5' : s === 'warning' ? '#fffbeb' : '#f0fdf4';
  const sevBorder = s => s === 'critical' ? COLORS.redLight : s === 'warning' ? COLORS.amberLight : COLORS.greenLight;
  const sevIcon   = s => s === 'critical' ? '⚠️' : s === 'warning' ? '🔔' : 'ℹ️';
  const tabs = [
    { id: 'all',      label: `All Active (${summary.total})` },
    { id: 'critical', label: `Critical (${summary.critical})` },
    { id: 'warning',  label: `Warning (${summary.warning})` },
    { id: 'lowstock', label: `Low Stock (${autoAlerts.length})` },
    { id: 'manual',   label: `Manual (${activeManual.length})` },
    { id: 'resolved', label: `Resolved (${summary.resolved})` },
  ];
 
  return (
    <div>
      {showModal && (
        <AlertModal
          form={form} setForm={setForm} saving={saving}
          formError={formError} onSave={handleCreate}
          onClose={() => setShowModal(false)}
        />
      )}
      <div style={{ ...styles.row, justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <div style={styles.pageTitle}>Alerts & Notifications</div>
          <div style={styles.pageSub}>Monitor stock levels and business alerts</div>
        </div>
        <div style={styles.row}>
          <button style={styles.btnGray} onClick={fetchAlerts}>🔄 Refresh</button>
          <button style={styles.btnPrimary} onClick={() => { setForm({ title: '', message: '', severity: 'warning' }); setFormError(''); setShowModal(true); }}>
            + Create Alert
          </button>
        </div>
      </div>
      <div style={styles.grid4}>
        {[
          { l: 'Active Alerts', v: summary.total,    c: COLORS.orange },
          { l: 'Critical',      v: summary.critical, c: COLORS.red    },
          { l: 'Warning',       v: summary.warning,  c: COLORS.amber  },
          { l: 'Resolved',      v: summary.resolved, c: COLORS.green  },
        ].map((s, i) => (
          <div key={i} style={styles.statCard}>
            <div style={styles.statLabel}>{s.l}</div>
            <div style={{ ...styles.statValue, color: s.c }}>{s.v}</div>
          </div>
        ))}
      </div>
      <div style={styles.card}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              padding: '6px 14px', borderRadius: 99, fontSize: 12, fontWeight: 500, cursor: 'pointer',
              border:     `1px solid ${activeTab === t.id ? COLORS.green : COLORS.gray200}`,
              background: activeTab === t.id ? COLORS.greenLight : 'transparent',
              color:      activeTab === t.id ? COLORS.greenDark  : COLORS.gray600,
            }}>{t.label}</button>
          ))}
        </div>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: COLORS.gray400 }}>Loading alerts...</div>
        ) : currentAlerts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: COLORS.gray400 }}>
            {activeTab === 'resolved' ? 'No resolved alerts yet.' : '✅ No alerts in this category — all good!'}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {currentAlerts.map((a, i) => (
              <div key={i} style={{
                border: `1px solid ${sevBorder(a.severity)}`, borderRadius: 10,
                padding: '16px 20px',
                background: a.status === 'resolved' ? COLORS.gray50 : sevBg(a.severity),
                opacity: a.status === 'resolved' ? 0.75 : 1,
              }}>
                <div style={{ ...styles.row, justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={styles.row}>
                    <span style={{ fontSize: 20 }}>{sevIcon(a.severity)}</span>
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{a.title}</span>
                    <span style={styles.tag(sevColor(a.severity))}>{a.severity}</span>
                    {a.type === 'inventory' && <span style={{ ...styles.badge(COLORS.blue, COLORS.blueLight), fontSize: 10 }}>Auto</span>}
                    {a.type === 'manual'    && <span style={{ ...styles.badge(COLORS.gray600, COLORS.gray100), fontSize: 10 }}>Manual</span>}
                  </div>
                  {a.createdAt && <span style={{ fontSize: 11, color: COLORS.gray400 }}>{new Date(a.createdAt).toLocaleDateString('en-PH', { month: 'short', day: 'numeric' })}</span>}
                </div>
                {a.message && <p style={{ fontSize: 13, color: COLORS.gray600, marginBottom: 12 }}>{a.message}</p>}
                {a.type === 'inventory' && (
                  <div style={{ background: COLORS.white, borderRadius: 8, padding: '10px 14px', marginBottom: 12, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                    <div><div style={{ fontSize: 11, color: COLORS.gray500 }}>Item:</div><div style={{ fontWeight: 600 }}>{a.item}</div></div>
                    <div><div style={{ fontSize: 11, color: COLORS.gray500 }}>Current Stock:</div><div style={{ fontWeight: 600, color: COLORS.red }}>{a.current}</div></div>
                    <div><div style={{ fontSize: 11, color: COLORS.gray500 }}>Minimum Required:</div><div style={{ fontWeight: 600 }}>{a.minimum}</div></div>
                  </div>
                )}
                {a.type === 'manual' && a.status === 'active' && (
                  <div style={styles.row}>
                    <button style={styles.btnOutline} onClick={() => handleResolve(a.id)} disabled={actioning === a.id}>{actioning === a.id ? '...' : '✓ Mark as Resolved'}</button>
                    <button style={{ background: COLORS.redLight, color: COLORS.red, border: 'none', borderRadius: 8, padding: '7px 14px', fontSize: 13, cursor: 'pointer' }} onClick={() => handleDelete(a.id)} disabled={actioning === a.id + '-del'}>{actioning === a.id + '-del' ? '...' : 'Delete'}</button>
                  </div>
                )}
                {a.status === 'resolved' && <div style={{ fontSize: 12, color: COLORS.green, fontWeight: 600 }}>✅ Resolved {a.resolvedAt ? `on ${new Date(a.resolvedAt).toLocaleDateString('en-PH', { month: 'short', day: 'numeric' })}` : ''}</div>}
                {a.type === 'inventory' && a.status === 'active' && <div style={{ fontSize: 12, color: COLORS.gray500, marginTop: 8 }}>💡 Go to <strong>Purchases</strong> to restock this item.</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Profile ──
function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { limits } = useLimits();

  useEffect(()=>{
    (async()=>{
      try {
        const token=localStorage.getItem('token');
        const res=await fetch('https://backend-repo-teal.vercel.app//api/auth/me',{headers:{'Authorization':`Bearer ${token}`}});
        const data=await res.json();
        if(data.user) setUser(data.user);
      } catch(err){console.error(err);}
      finally{setLoading(false);}
    })();
  },[]);

  if(loading) return <div style={{padding:40,textAlign:"center",color:COLORS.gray400}}>Loading profile...</div>;
  if(!user) return <div style={{padding:40,textAlign:"center",color:COLORS.red}}>Failed to load profile.</div>;

  return (
    <div>
      <div style={styles.pageTitle}>Business Profile</div>
      <div style={styles.pageSub}>Manage your business information and account settings</div>
      <div style={styles.grid2}>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          <div style={styles.card}>
            <div style={{...styles.row,justifyContent:"space-between",marginBottom:16}}>
              <div><div style={{fontWeight:700,fontSize:15}}>🏢 Business Information</div><div style={{fontSize:12,color:COLORS.gray500}}>Your food business details</div></div>
              <button style={styles.btnPrimary}>Edit Profile</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {[{label:"Business Name",value:user.businessName||'—'},{label:"Owner Name",value:user.ownerName||'—'},{label:"Email Address",value:user.email||'—'},{label:"Phone Number",value:user.phone||'—'}].map((f,i)=>(
                <div key={i}><div style={{fontSize:11,color:COLORS.gray500,marginBottom:6}}>{f.label}</div><div style={{background:COLORS.gray50,border:`1px solid ${COLORS.gray200}`,borderRadius:8,padding:"9px 12px",fontSize:13,color:COLORS.gray700}}>{f.value}</div></div>
              ))}
            </div>
          </div>
          <div style={styles.card}>
            <div style={{fontWeight:700,fontSize:15,marginBottom:4}}>🔒 Change Password</div>
            <div style={{fontSize:12,color:COLORS.gray500,marginBottom:16}}>Update your account password</div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <div><label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>Current Password</label><input style={styles.input} type="password" placeholder="••••••••"/></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                <div><label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>New Password</label><input style={styles.input} type="password" placeholder="••••••••"/></div>
                <div><label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:"block",marginBottom:6}}>Confirm Password</label><input style={styles.input} type="password" placeholder="••••••••"/></div>
              </div>
              <button style={{...styles.btnPrimary,alignSelf:"flex-start"}}>Update Password</button>
            </div>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
          <div style={styles.card}>
            <div style={{fontWeight:700,fontSize:15,marginBottom:14}}>👑 Subscription</div>
            <div style={{border:`1px solid ${COLORS.green}`,borderRadius:10,padding:"14px 16px",marginBottom:14}}>
              <div style={{...styles.row,justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontWeight:600}}>{user.plan==='premium'?'Premium Plan':'Regular Plan'}</span>
                <span style={styles.tag("green")}>Active</span>
              </div>
              <div style={{fontSize:13,color:COLORS.gray500,marginBottom:12}}>
                {user.plan==='premium'?'Unlimited access to all features':'Limited free tier access'}
              </div>
              {user.plan!=='premium'&&limits?.isLimited&&(
                <div style={{background:COLORS.gray50,borderRadius:8,padding:'10px 12px',marginBottom:12,fontSize:12}}>
                  <div style={{...styles.row,justifyContent:'space-between',marginBottom:4}}><span style={{color:COLORS.gray600}}>Inventory</span><span style={{fontWeight:600}}>{limits.usage.inventory}/{limits.limits.inventory}</span></div>
                  <div style={{...styles.row,justifyContent:'space-between',marginBottom:4}}><span style={{color:COLORS.gray600}}>Recipes</span><span style={{fontWeight:600}}>{limits.usage.recipes}/{limits.limits.recipes}</span></div>
                  <div style={{...styles.row,justifyContent:'space-between'}}><span style={{color:COLORS.gray600}}>POS Orders (this month)</span><span style={{fontWeight:600}}>{limits.usage.posOrders}/{limits.limits.posOrders}</span></div>
                </div>
              )}
              {user.plan!=='premium'&&<button style={{...styles.btnPrimary,width:"100%",justifyContent:"center"}}>Upgrade to Premium</button>}
            </div>
            <div style={{fontSize:13,color:COLORS.gray600,display:"flex",flexDirection:"column",gap:8}}>
              <div style={styles.row}><span>📅</span><span>Member since: {user.createdAt?new Date(user.createdAt).toLocaleDateString('en-US',{month:'long',year:'numeric'}):'—'}</span></div>
              <div style={styles.row}><span>💳</span><span>Billing: {user.plan==='premium'?'Active':'N/A (Free)'}</span></div>
            </div>
          </div>
          <div style={styles.card}>
            <div style={{fontWeight:700,fontSize:15,marginBottom:14}}>⚡ Quick Actions</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              <button style={{...styles.btnGray,width:"100%",textAlign:"left",padding:"10px 14px"}}>✉️ Email Support</button>
              <button style={{background:COLORS.redLight,color:COLORS.red,border:`1px solid ${COLORS.redLight}`,borderRadius:8,padding:"10px 14px",fontSize:13,cursor:"pointer",textAlign:"left"}}>🗑️ Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Admin User Actions ──
function AdminUserActions({ user, onRefresh }) {
  const [loading, setLoading] = useState(false);
  const token   = localStorage.getItem('token');
  const headers = {'Content-Type':'application/json','Authorization':`Bearer ${token}`};

  const upgrade = async (billingCycle) => {
    setLoading(true);
    await fetch(`https://backend-repo-teal.vercel.app//api/premium/admin/upgrade/${user.id}`,{method:'PUT',headers,body:JSON.stringify({billingCycle})});
    setLoading(false); onRefresh();
  };
  const downgrade = async () => {
    if(!window.confirm('Downgrade this user to free?')) return;
    setLoading(true);
    await fetch(`https://backend-repo-teal.vercel.app//api/premium/admin/downgrade/${user.id}`,{method:'PUT',headers});
    setLoading(false); onRefresh();
  };

  if(user.plan==='premium') return (
    <button style={{background:COLORS.redLight,color:COLORS.red,border:'none',borderRadius:6,padding:'5px 10px',fontSize:11,cursor:'pointer',opacity:loading?0.6:1}} onClick={downgrade} disabled={loading}>
      {loading?'...':'Downgrade'}
    </button>
  );
  return (
    <div style={{display:'flex',gap:4}}>
      <button style={{...styles.btnPrimary,padding:'5px 8px',fontSize:11,opacity:loading?0.6:1}} onClick={()=>upgrade('monthly')} disabled={loading}>{loading?'...':'👑 Monthly'}</button>
      <button style={{background:COLORS.greenLight,color:COLORS.greenDark,border:`1px solid ${COLORS.green}`,borderRadius:6,padding:'5px 8px',fontSize:11,cursor:'pointer',opacity:loading?0.6:1}} onClick={()=>upgrade('yearly')} disabled={loading}>{loading?'...':'👑 Yearly'}</button>
    </div>
  );
}

// ── Sidebar Nav ──
const navItems = [
  {id:"dashboard",label:"Dashboard",icon:"📊"},
  {id:"inventory",label:"Inventory",icon:"📦"},
  {id:"recipes",label:"Recipes",icon:"📖"},
  {id:"pos",label:"Sales / POS",icon:"🛒"},
  {id:"purchases",label:"Purchases",icon:"🛍️"},
  {id:"analytics",label:"Analytics",icon:"📈"},
  {id:"premium",label:"Premium",icon:"👑",badge:"NEW"},
  {id:"alerts",label:"Alerts",icon:"🔔"},
];

function Sidebar({ page, setPage, onLogout, alertCount }) {
  return (
    <div style={styles.sidebar}>
      <div style={styles.sidebarLogo}>
        <div style={styles.logoIcon}>🍽️</div>
        <div><div style={styles.logoText}>ProCIS</div><div style={styles.logoSub}>Food Business</div></div>
      </div>
      <div style={styles.sidebarNav}>
        {navItems.map(item=>(
          <div key={item.id} style={styles.navItem(page===item.id)} onClick={()=>setPage(item.id)}>
            <span style={styles.navIcon}>{item.icon}</span>
            <span style={{flex:1}}>{item.label}</span>
            {item.badge==="NEW" && (
              <span style={{background:gradientBtn,color:COLORS.white,fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99}}>NEW</span>
            )}
            {item.id==="alerts" && alertCount > 0 && (
              <span style={{background:COLORS.red,color:COLORS.white,fontSize:10,fontWeight:700,padding:"1px 6px",borderRadius:99,minWidth:18,textAlign:'center'}}>
                {alertCount}
              </span>
            )}
          </div>
        ))}
      </div>
      <div style={styles.sidebarBottom}>
        <div style={styles.navItem(page==="profile")} onClick={()=>setPage("profile")}><span style={styles.navIcon}>👤</span><span>Profile</span></div>
        <div style={styles.navItem(false)} onClick={onLogout}><span style={styles.navIcon}>🚪</span><span>Logout</span></div>
      </div>
    </div>
  );
}

// ── Main App ──
export default function App() {
  const [screen, setScreen]       = useState("login");
  const [page, setPage]           = useState("dashboard");
  const [alertCount, setAlertCount] = useState(0);

  // Fetch alert count whenever user is in the app
  useEffect(() => {
    if (screen !== "app") return;
    const fetchAlertCount = async () => {
      try {
        const token = localStorage.getItem('token');
        const res   = await fetch('https://backend-repo-teal.vercel.app//api/alerts', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setAlertCount(data.summary?.total || 0);
      } catch(e) {}
    };
    fetchAlertCount();
    // Refresh every 60 seconds
    const interval = setInterval(fetchAlertCount, 60000);
    return () => clearInterval(interval);
  }, [screen]);

  if(screen==="login") return <LoginPage onLogin={()=>setScreen("app")} onSignup={()=>setScreen("signup")} onAdmin={()=>setScreen("adminLogin")}/>;
  if(screen==="signup") return <SignupPage onBack={()=>setScreen("login")}/>;
  if(screen==="adminLogin") return <AdminLogin onBack={()=>setScreen("login")} onLogin={()=>setScreen("admin")}/>;
  if(screen==="admin") return <AdminApp onLogout={()=>setScreen("login")}/>;

  const pageMap = {
    dashboard:<Dashboard/>, inventory:<Inventory/>, recipes:<Recipes/>,
    pos:<POS/>, purchases:<Purchases/>, analytics:<Analytics/>,
    alerts:<Alerts onAlertChange={()=>{
      // Refresh badge when alerts page changes something
      fetch('https://backend-repo-teal.vercel.app//api/alerts', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }).then(r=>r.json()).then(d=>setAlertCount(d.summary?.total||0)).catch(()=>{});
    }}/>,
    premium:<PremiumPage/>, profile:<Profile/>
  };

  return (
    <div style={styles.app}>
      <Sidebar page={page} setPage={setPage} alertCount={alertCount} onLogout={()=>{ localStorage.removeItem('token'); setScreen("login"); }}/>
      <div style={styles.main}>
        <div style={styles.content}>{pageMap[page]||<Dashboard/>}</div>
      </div>
    </div>
  );
}

// ── Admin Login ──
function AdminLogin({ onBack, onLogin }) {
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [error,setError]=useState('');
  const handleAdminLogin = async () => {
    try {
      const res=await fetch('https://backend-repo-teal.vercel.app//api/auth/admin-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pass})});
      const data=await res.json();
      if(data.token){localStorage.setItem('token',data.token);onLogin();}
      else setError(data.message||'Invalid admin credentials');
    } catch{setError('Cannot connect to server.');}
  };
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div>
        <div style={{textAlign:"center",marginBottom:24}}>
          <div style={{width:56,height:56,borderRadius:14,background:"linear-gradient(135deg,#22c55e,#f97316)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,margin:"0 auto 12px"}}>🛡️</div>
          <div style={{fontSize:22,fontWeight:700,color:"#fff"}}>ProCIS Admin</div>
          <div style={{fontSize:13,color:"#94a3b8"}}>Platform Administration Portal</div>
        </div>
        <div style={{background:"#fff",borderRadius:16,padding:"32px 36px",width:360}}>
          <div style={{fontWeight:700,fontSize:18,marginBottom:4}}>Admin Login</div>
          <div style={{fontSize:13,color:COLORS.gray500,marginBottom:20}}>Access the ProCIS platform management dashboard</div>
          <div style={{marginBottom:14}}><label style={{fontSize:12,fontWeight:500,color:COLORS.gray600,display:"block",marginBottom:6}}>Admin Email</label><input style={styles.input} placeholder="admin@procis.com" value={email} onChange={e=>setEmail(e.target.value)}/></div>
          <div style={{marginBottom:20}}><label style={{fontSize:12,fontWeight:500,color:COLORS.gray600,display:"block",marginBottom:6}}>Password</label><input style={styles.input} type="password" placeholder="••••••••" value={pass} onChange={e=>setPass(e.target.value)}/></div>
          {error&&<div style={{color:COLORS.red,fontSize:12,marginBottom:10,textAlign:"center"}}>{error}</div>}
          <button style={{...styles.btnPrimary,width:"100%",justifyContent:"center",padding:"11px"}} onClick={handleAdminLogin}>Sign in as Admin</button>
          <div style={{textAlign:"center",marginTop:14}}><span style={{color:COLORS.green,cursor:"pointer",fontSize:13}} onClick={onBack}>🍽️ Back to User log in</span></div>
        </div>
        <div style={{textAlign:"center",marginTop:16,fontSize:12,color:"#475569"}}>Authorized personnel only. All actions are logged.</div>
      </div>
    </div>
  );
}

// ── Admin App ──
function AdminApp({ onLogout }) {
  const [page,setPage]=useState("overview");
  const adminNav=[{id:"overview",label:"Overview",icon:"📊"},{id:"users",label:"User Management",icon:"👥"},{id:"subscriptions",label:"Subscriptions",icon:"💳"},{id:"usage",label:"Platform Usage",icon:"📈"}];
  const pageMap={overview:<AdminOverview/>,users:<AdminUsers/>,subscriptions:<AdminSubs/>,usage:<AdminUsage/>};
  return (
    <div style={styles.app}>
      <div style={{...styles.sidebar,background:"#0f172a"}}>
        <div style={styles.sidebarLogo}>
          <div style={{...styles.logoIcon,background:"linear-gradient(135deg,#22c55e,#f97316)"}}>🛡️</div>
          <div><div style={styles.logoText}>ProCIS Admin</div><div style={styles.logoSub}>Platform Control</div></div>
        </div>
        <div style={styles.sidebarNav}>
          {adminNav.map(item=>(
            <div key={item.id} style={styles.navItem(page===item.id)} onClick={()=>setPage(item.id)}>
              <span style={styles.navIcon}>{item.icon}</span><span>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={styles.sidebarBottom}>
          <div style={{background:"rgba(255,255,255,0.06)",borderRadius:10,padding:"10px 12px",marginBottom:10}}>
            <div style={{fontSize:11,color:COLORS.gray400,marginBottom:3}}>Logged in as</div>
            <div style={{color:COLORS.white,fontWeight:600,fontSize:13}}>Admin User</div>
          </div>
          <div style={styles.navItem(false)} onClick={onLogout}><span style={styles.navIcon}>🚪</span><span>Log Out</span></div>
        </div>
      </div>
      <div style={styles.main}><div style={styles.content}>{pageMap[page]}</div></div>
    </div>
  );
}

function AdminOverview() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const token   = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch('https://backend-repo-teal.vercel.app//api/admin/overview', { headers });
        const json = await res.json();
        setData(json);
      } catch(err) { console.error(err); }
      finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <div style={{textAlign:'center',padding:'60px 0',color:COLORS.gray400}}>Loading overview...</div>;
  if (!data)   return <div style={{textAlign:'center',padding:'60px 0',color:COLORS.red}}>Failed to load overview.</div>;

  const { stats, growthData, recentSignups, platform } = data;
  const conversionRate = stats.totalUsers > 0
    ? ((stats.premiumUsers / stats.totalUsers) * 100).toFixed(1) : '0.0';
  const userTrend = stats.newLastMonth > 0
    ? (((stats.newThisMonth - stats.newLastMonth) / stats.newLastMonth) * 100).toFixed(1)
    : stats.newThisMonth > 0 ? '100.0' : '0.0';
  const maxGrowth = Math.max(...growthData.map(d => d.users), 1);

  return (
    <div>
      <div style={styles.pageTitle}>Platform Overview</div>
      <div style={styles.pageSub}>Real-time metrics across all registered businesses</div>

      {/* Stat cards */}
      <div style={styles.grid4}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Total Users</div>
          <div style={styles.statValue}>{stats.totalUsers}</div>
          <div style={{...styles.statSub, color: +userTrend >= 0 ? COLORS.green : COLORS.red}}>
            {+userTrend >= 0 ? '↑' : '↓'} {Math.abs(userTrend)}% vs last month
          </div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Premium Subscribers</div>
          <div style={{...styles.statValue, color: COLORS.green}}>{stats.premiumUsers}</div>
          <div style={styles.statSub}>{conversionRate}% conversion rate</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Monthly Revenue (MRR)</div>
          <div style={{...styles.statValue, color: COLORS.green}}>
            ₱{stats.monthlyRevenue.toLocaleString('en-US', {minimumFractionDigits:2})}
          </div>
          <div style={styles.statSub}>From {stats.premiumUsers} premium users</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>New Users This Month</div>
          <div style={styles.statValue}>{stats.newThisMonth}</div>
          <div style={styles.statSub}>Active accounts: {stats.activeUsers}</div>
        </div>
      </div>

      <div style={styles.grid2}>
        {/* User growth chart */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>User Growth</div>
          <div style={styles.sectionSub}>New registrations — last 6 months</div>
          {growthData.length === 0 ? (
            <div style={{textAlign:'center',padding:'30px 0',color:COLORS.gray400,fontSize:13}}>No data yet.</div>
          ) : (
            <div style={{display:'flex',alignItems:'flex-end',gap:6,height:100}}>
              {growthData.map((d,i)=>(
                <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                  <div style={{width:'100%',background:COLORS.green,borderRadius:'4px 4px 0 0',height:Math.max(4,(d.users/maxGrowth)*85),opacity:0.85}}/>
                  <span style={{fontSize:10,color:COLORS.gray400}}>{d.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Plan distribution */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Plan Distribution</div>
          <div style={styles.sectionSub}>Free vs Premium users</div>
          <div style={{display:'flex',alignItems:'center',gap:20,marginTop:8}}>
            <Donut size={100} segments={[
              {v: Math.max(stats.freeUsers, 0.1),    color: COLORS.gray300},
              {v: Math.max(stats.premiumUsers, 0.1), color: COLORS.green},
            ]}/>
            <div style={{display:'flex',flexDirection:'column',gap:12,fontSize:13}}>
              <div style={styles.row}>
                <div style={{width:10,height:10,background:COLORS.gray300,borderRadius:3}}/>
                <span style={{color:COLORS.gray600}}>Free Users</span>
                <span style={{fontWeight:700}}>{stats.freeUsers}</span>
              </div>
              <div style={styles.row}>
                <div style={{width:10,height:10,background:COLORS.green,borderRadius:3}}/>
                <span style={{color:COLORS.gray600}}>Premium Users</span>
                <span style={{fontWeight:700,color:COLORS.green}}>{stats.premiumUsers}</span>
              </div>
              <div style={{fontSize:12,color:COLORS.gray500,marginTop:4}}>
                Conversion: <span style={{fontWeight:700,color:COLORS.green}}>{conversionRate}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16,marginBottom:20}}>
        {/* Platform stats */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Platform Activity</div>
          <div style={{display:'flex',flexDirection:'column',gap:12,marginTop:12}}>
            {[
              {l:'Total POS Orders',    v: platform.totalOrders,    c: COLORS.green},
              {l:'Total Revenue (all)', v: `₱${platform.totalRevenue.toLocaleString('en-US',{minimumFractionDigits:2})}`, c: COLORS.green},
              {l:'Total Recipes',       v: platform.totalRecipes,   c: COLORS.blue},
              {l:'Total Inventory Items',v:platform.totalInventory, c: COLORS.orange},
            ].map((s,i)=>(
              <div key={i} style={{...styles.row,justifyContent:'space-between',fontSize:13,paddingBottom:8,borderBottom:`1px solid ${COLORS.gray100}`}}>
                <span style={{color:COLORS.gray600}}>{s.l}</span>
                <span style={{fontWeight:700,color:s.c}}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System status */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>System Status</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:10}}>
            {[
              {n:'API Server',    s:'Operational'},
              {n:'Database',      s:'Operational'},
              {n:'Auth Service',  s:'Operational'},
              {n:'Storage',       s:'Operational'},
            ].map((srv,i)=>(
              <div key={i} style={{...styles.row,justifyContent:'space-between',fontSize:13}}>
                <span style={{color:COLORS.gray700}}>{srv.n}</span>
                <span style={{fontWeight:600,color:COLORS.green}}>● {srv.s}</span>
              </div>
            ))}
            <div style={{...styles.row,justifyContent:'space-between',fontSize:13,borderTop:`1px solid ${COLORS.gray100}`,paddingTop:10}}>
              <span style={{color:COLORS.gray500}}>Uptime</span>
              <span style={{fontWeight:700}}>99.9%</span>
            </div>
          </div>
        </div>

        {/* Recent signups */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Recent Signups</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:10}}>
            {recentSignups.length === 0 ? (
              <div style={{textAlign:'center',padding:'20px 0',color:COLORS.gray400,fontSize:13}}>No signups yet.</div>
            ) : recentSignups.map((u,i)=>(
              <div key={i} style={styles.row}>
                <div style={{width:8,height:8,borderRadius:'50%',background:u.plan==='premium'?COLORS.green:COLORS.gray300,flexShrink:0}}/>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:13,fontWeight:500,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{u.businessName}</div>
                  <div style={{fontSize:11,color:COLORS.gray500}}>
                    {u.plan==='premium'?'👑 Premium':'Free'} • {new Date(u.createdAt).toLocaleDateString('en-PH',{month:'short',day:'numeric'})}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminUsers() {
  const [users, setUsers]     = useState([]);
  const [filter, setFilter]   = useState('All');
  const [loading, setLoading] = useState(true);
  const [search, setSearch]   = useState('');
  const [expanded, setExpanded] = useState(null);
  const token   = localStorage.getItem('token');
  const headers = {'Content-Type':'application/json','Authorization':`Bearer ${token}`};

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res  = await fetch('https://backend-repo-teal.vercel.app//api/admin/users', { headers });
      const data = await res.json();
      setUsers(data.users || []);
    } catch(err) { console.error(err); }
    finally { setLoading(false); }
  };
  useEffect(() => { fetchUsers(); }, []);

  const filtered = users.filter(u => {
    const matchFilter = filter==='All'
      || (filter==='Premium' && u.plan==='premium')
      || (filter==='Free'    && u.plan!=='premium');
    const matchSearch = u.business_name?.toLowerCase().includes(search.toLowerCase())
      || u.email?.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div>
      <div style={styles.pageTitle}>User Management</div>
      <div style={styles.pageSub}>Manage all registered businesses and their subscriptions</div>

      <div style={styles.grid4}>
        {[
          {l:'Total Users',   v:users.length},
          {l:'Premium',       v:users.filter(u=>u.plan==='premium').length,  c:COLORS.green},
          {l:'Free',          v:users.filter(u=>u.plan!=='premium').length},
          {l:'Active',        v:users.filter(u=>u.status==='active').length, c:COLORS.blue},
        ].map((s,i)=>(
          <div key={i} style={styles.statCard}>
            <div style={styles.statLabel}>{s.l}</div>
            <div style={{...styles.statValue,color:s.c||COLORS.gray900}}>{s.v}</div>
          </div>
        ))}
      </div>

      <div style={styles.card}>
        <div style={{...styles.row,marginBottom:16,justifyContent:'space-between'}}>
          <div style={{...styles.searchWrap,flex:1,marginRight:16,marginBottom:0}}>
            <span style={styles.searchIcon}>🔍</span>
            <input style={styles.searchInput} placeholder="Search by business name or email..."
              value={search} onChange={e=>setSearch(e.target.value)}/>
          </div>
          <div style={styles.row}>
            {['All','Premium','Free'].map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{padding:'7px 16px',borderRadius:8,fontSize:13,cursor:'pointer',border:`1px solid ${filter===f?COLORS.green:COLORS.gray200}`,background:filter===f?COLORS.green:'transparent',color:filter===f?COLORS.white:COLORS.gray700,fontWeight:filter===f?600:400}}>{f}</button>
            ))}
          </div>
        </div>

        {loading ? (
          <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>Loading users...</div>
        ) : filtered.length === 0 ? (
          <div style={{textAlign:'center',padding:'40px 0',color:COLORS.gray400}}>No users found.</div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {filtered.map((u,i)=>{
              const av  = getAvatar(u.business_name||'?', i);
              const isX = expanded === u.id;
              return (
                <div key={u.id} style={{borderBottom:`1px solid ${COLORS.gray100}`}}>
                  {/* Row */}
                  <div style={{display:'grid',gridTemplateColumns:'2fr 2fr 1fr 1fr 1fr 1.5fr',gap:12,padding:'12px 8px',alignItems:'center',cursor:'pointer'}}
                    onClick={()=>setExpanded(isX ? null : u.id)}>
                    <div style={styles.row}>
                      <div style={styles.avatarCircle(av.bg,av.fg)}>{av.initials}</div>
                      <div>
                        <div style={{fontWeight:500,fontSize:13}}>{u.business_name}</div>
                        <div style={{fontSize:11,color:COLORS.gray500}}>{u.owner_name||'—'}</div>
                      </div>
                    </div>
                    <div style={{fontSize:12,color:COLORS.gray600}}>{u.email}</div>
                    <div>
                      <span style={u.plan==='premium'?styles.premiumBadge:{...styles.badge(COLORS.orange,COLORS.orangeLight)}}>
                        {u.plan==='premium'?'👑 Premium':'Free'}
                      </span>
                    </div>
                    <div><span style={styles.tag(u.status==='active'?'green':'orange')}>{u.status}</span></div>
                    <div style={{fontSize:12,color:COLORS.gray500}}>
                      {u.created_at ? new Date(u.created_at).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'}) : '—'}
                    </div>
                    <div onClick={e=>e.stopPropagation()}>
                      <AdminUserActions user={u} onRefresh={fetchUsers}/>
                    </div>
                  </div>

                  {/* Expanded detail */}
                  {isX && (
                    <div style={{background:COLORS.gray50,padding:'12px 16px',borderTop:`1px solid ${COLORS.gray100}`}}>
                      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,fontSize:12}}>
                        {[
                          {l:'Phone',           v: u.phone||'—'},
                          {l:'Total Orders',    v: u.total_orders||0},
                          {l:'Inventory Items', v: u.total_inventory||0},
                          {l:'Recipes',         v: u.total_recipes||0},
                          {l:'Billing Cycle',   v: u.billing_cycle||'—'},
                          {l:'Plan Started',    v: u.started_at ? new Date(u.started_at).toLocaleDateString('en-PH') : '—'},
                          {l:'Plan Expires',    v: u.expires_at ? new Date(u.expires_at).toLocaleDateString('en-PH') : '—'},
                          {l:'Member Since',    v: u.created_at ? new Date(u.created_at).toLocaleDateString('en-PH',{month:'long',year:'numeric'}) : '—'},
                        ].map((f,j)=>(
                          <div key={j}>
                            <div style={{color:COLORS.gray500,marginBottom:3}}>{f.l}</div>
                            <div style={{fontWeight:600,color:COLORS.gray800}}>{f.v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div style={{...styles.row,justifyContent:'space-between',marginTop:16,paddingTop:14,borderTop:`1px solid ${COLORS.gray100}`,fontSize:13,color:COLORS.gray500}}>
          <span>Showing {filtered.length} of {users.length} users</span>
          <button style={styles.btnGray} onClick={fetchUsers}>🔄 Refresh</button>
        </div>
      </div>
    </div>
  );
}

function AdminSubs() {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [requests, setReqs]  = useState([]);
  const [reqLoad,  setReqL]  = useState(true);
  const [acting,   setAct]   = useState(null);
 
  const token   = localStorage.getItem('token');
  const headers = { 'Content-Type':'application/json', Authorization: `Bearer ${token}` };
 
  useEffect(() => {
    (async () => {
      try {
        const [sRes, rRes] = await Promise.all([
          fetch('https://backend-repo-teal.vercel.app//api/admin/subscriptions', { headers }),
          fetch('https://backend-repo-teal.vercel.app//api/admin/upgrade-requests', { headers }),
        ]);
        setData(await sRes.json());
        const rData = await rRes.json();
        setReqs(rData.requests || []);
      } catch(err) { console.error(err); }
      finally { setLoading(false); setReqL(false); }
    })();
  }, []);
 
  const handleApprove = async (reqId, userId, billingCycle) => {
    setAct(reqId);
    try {
      // Upgrade the user
      await fetch(`https://backend-repo-teal.vercel.app//api/premium/admin/upgrade/${userId}`, {
        method:'PUT', headers,
        body: JSON.stringify({ billingCycle }),
      });
      // Mark request as approved
      await fetch(`https://backend-repo-teal.vercel.app//api/admin/upgrade-requests/${reqId}/approve`, {
        method:'PUT', headers,
      });
      // Refresh
      const [sRes, rRes] = await Promise.all([
        fetch('https://backend-repo-teal.vercel.app//api/admin/subscriptions', { headers }),
        fetch('https://backend-repo-teal.vercel.app//api/admin/upgrade-requests', { headers }),
      ]);
      setData(await sRes.json());
      setReqs((await rRes.json()).requests || []);
    } catch(err) { console.error(err); }
    finally { setAct(null); }
  };
 
  const handleReject = async (reqId) => {
    if (!window.confirm('Reject this upgrade request?')) return;
    setAct(reqId + '-rej');
    try {
      await fetch(`https://backend-repo-teal.vercel.app//api/admin/upgrade-requests/${reqId}/reject`, {
        method:'PUT', headers,
      });
      const rRes = await fetch('https://backend-repo-teal.vercel.app//api/admin/upgrade-requests', { headers });
      setReqs((await rRes.json()).requests || []);
    } catch(err) { console.error(err); }
    finally { setAct(null); }
  };
 
  if (loading) return <div style={{textAlign:'center',padding:'60px 0',color:COLORS.gray400}}>Loading subscriptions...</div>;
  if (!data)   return <div style={{textAlign:'center',padding:'60px 0',color:COLORS.red}}>Failed to load.</div>;
 
  const { stats, trend, recentPremium } = data;
  const maxTrend = Math.max(...trend.map(t=>t.total), 1);
  const pendingReqs = requests.filter(r => r.status === 'pending');
  const allReqs     = requests;
 
  return (
    <div>
      <div style={styles.pageTitle}>Subscriptions & Revenue</div>
      <div style={styles.pageSub}>Track subscription metrics and financial performance</div>
 
      {/* ── Pending upgrade requests banner ── */}
      {pendingReqs.length > 0 && (
        <div style={{
          background: '#fffbeb',border:`1px solid ${COLORS.amber}`,
          borderRadius:12,padding:'16px 20px',marginBottom:20,
        }}>
          <div style={{...styles.row,marginBottom:12}}>
            <span style={{fontSize:20}}>⏳</span>
            <div style={{fontWeight:700,fontSize:15,color:COLORS.gray900}}>
              {pendingReqs.length} Pending Upgrade Request{pendingReqs.length>1?'s':''}
            </div>
            <span style={{
              background:COLORS.amber,color:COLORS.white,
              fontSize:11,fontWeight:700,padding:'2px 8px',borderRadius:99,
            }}>{pendingReqs.length} NEW</span>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {pendingReqs.map(r=>(
              <div key={r.id} style={{
                background:COLORS.white,borderRadius:10,padding:'14px 16px',
                border:`1px solid ${COLORS.gray200}`,
                display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,
              }}>
                <div style={{flex:1}}>
                  <div style={{fontWeight:600,fontSize:14}}>{r.business_name}</div>
                  <div style={{fontSize:12,color:COLORS.gray500,marginTop:2}}>
                    {r.email} · Requested{' '}
                    <strong style={{color:r.billing_cycle==='yearly'?COLORS.green:COLORS.orange}}>
                      {r.billing_cycle==='yearly'?'Yearly (₱1,699)':'Monthly (₱149)'}
                    </strong>
                    {' '}· {new Date(r.created_at).toLocaleDateString('en-PH',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})}
                  </div>
                </div>
                <div style={styles.row}>
                  <button
                    style={{...styles.btnPrimary,padding:'7px 14px',fontSize:12,opacity:acting===r.id?0.6:1}}
                    onClick={()=>handleApprove(r.id, r.user_id, r.billing_cycle)}
                    disabled={!!acting}
                  >
                    {acting===r.id ? '...' : '✅ Approve & Activate'}
                  </button>
                  <button
                    style={{
                      background:COLORS.redLight,color:COLORS.red,
                      border:'none',borderRadius:8,padding:'7px 12px',fontSize:12,cursor:'pointer',
                      opacity:acting===r.id+'-rej'?0.6:1,
                    }}
                    onClick={()=>handleReject(r.id)}
                    disabled={!!acting}
                  >
                    {acting===r.id+'-rej' ? '...' : 'Reject'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
 
      <div style={styles.grid4}>
        {[
          {l:'MRR',           v:`₱${stats.mrr.toLocaleString('en-US',{minimumFractionDigits:2})}`,  c:COLORS.green},
          {l:'ARR',           v:`₱${stats.arr.toLocaleString('en-US',{minimumFractionDigits:2})}`,  c:COLORS.green},
          {l:'Premium Users', v: stats.premiumCount,  c:COLORS.green},
          {l:'ARPU',          v:`₱${stats.arpu.toLocaleString('en-US',{minimumFractionDigits:2})}`, c:COLORS.blue},
        ].map((s,i)=>(
          <div key={i} style={styles.statCard}>
            <div style={styles.statLabel}>{s.l}</div>
            <div style={{...styles.statValue,color:s.c}}>{s.v}</div>
          </div>
        ))}
      </div>
 
      <div style={styles.grid2}>
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Signup Trend</div>
          <div style={styles.sectionSub}>Total vs Premium — last 6 months</div>
          {trend.length === 0 ? (
            <div style={{textAlign:'center',padding:'30px 0',color:COLORS.gray400,fontSize:13}}>No data yet.</div>
          ) : (
            <>
              <div style={{display:'flex',alignItems:'flex-end',gap:8,height:100}}>
                {trend.map((t,i)=>(
                  <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                    <div style={{display:'flex',gap:3,alignItems:'flex-end'}}>
                      <div style={{width:12,background:COLORS.gray200,borderRadius:'3px 3px 0 0',height:Math.max(4,(t.total/maxTrend)*85)}}/>
                      <div style={{width:12,background:COLORS.green,borderRadius:'3px 3px 0 0',height:Math.max(2,(t.premium/maxTrend)*85)}}/>
                    </div>
                    <span style={{fontSize:10,color:COLORS.gray400}}>{t.label}</span>
                  </div>
                ))}
              </div>
              <div style={{...styles.row,gap:16,marginTop:10,fontSize:12}}>
                <div style={styles.row}><div style={{width:10,height:10,background:COLORS.gray200,borderRadius:2}}/><span style={{color:COLORS.gray600}}>Total</span></div>
                <div style={styles.row}><div style={{width:10,height:10,background:COLORS.green,borderRadius:2}}/><span style={{color:COLORS.gray600}}>Premium</span></div>
              </div>
            </>
          )}
        </div>
 
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Billing Breakdown</div>
          <div style={styles.sectionSub}>Monthly vs Yearly subscribers</div>
          <div style={{display:'flex',alignItems:'center',gap:20,marginTop:8}}>
            <Donut size={100} segments={[
              {v: Math.max(stats.monthlyCount, 0.1), color: COLORS.orange},
              {v: Math.max(stats.yearlyCount,  0.1), color: COLORS.green},
            ]}/>
            <div style={{display:'flex',flexDirection:'column',gap:14,fontSize:13}}>
              <div>
                <div style={styles.row}>
                  <div style={{width:10,height:10,background:COLORS.orange,borderRadius:3}}/>
                  <span style={{color:COLORS.gray600}}>Monthly (₱149/mo)</span>
                </div>
                <div style={{fontWeight:700,marginTop:4,marginLeft:18}}>{stats.monthlyCount} users → ₱{(stats.monthlyCount*149).toLocaleString()}/mo</div>
              </div>
              <div>
                <div style={styles.row}>
                  <div style={{width:10,height:10,background:COLORS.green,borderRadius:3}}/>
                  <span style={{color:COLORS.gray600}}>Yearly (₱1,699/yr)</span>
                </div>
                <div style={{fontWeight:700,marginTop:4,marginLeft:18}}>{stats.yearlyCount} users → ₱{(stats.yearlyCount*1699).toLocaleString()}/yr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* All upgrade requests history */}
      <div style={{...styles.card,marginBottom:20}}>
        <div style={{...styles.row,justifyContent:'space-between',marginBottom:16}}>
          <div>
            <div style={styles.sectionTitle}>Upgrade Request History</div>
            <div style={styles.sectionSub}>All submitted upgrade requests</div>
          </div>
        </div>
        {allReqs.length === 0 ? (
          <div style={{textAlign:'center',padding:'20px 0',color:COLORS.gray400,fontSize:13}}>No upgrade requests yet.</div>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>{['Business','Email','Billing','Requested','Status','Action'].map(h=><th key={h} style={styles.th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {allReqs.map((r,i)=>(
                  <tr key={i}>
                    <td style={styles.td}><span style={{fontWeight:500}}>{r.business_name}</span></td>
                    <td style={styles.td}><span style={{fontSize:12,color:COLORS.gray500}}>{r.email}</span></td>
                    <td style={styles.td}>
                      <span style={styles.badge(
                        r.billing_cycle==='yearly'?COLORS.greenDark:COLORS.orange,
                        r.billing_cycle==='yearly'?COLORS.greenLight:COLORS.orangeLight
                      )}>
                        {r.billing_cycle==='yearly'?'Yearly':'Monthly'}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <span style={{fontSize:12}}>
                        {new Date(r.created_at).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'})}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <span style={styles.tag(
                        r.status==='approved'?'green':r.status==='rejected'?'red':'orange'
                      )}>
                        {r.status==='approved'?'✅ Approved':r.status==='rejected'?'❌ Rejected':'⏳ Pending'}
                      </span>
                    </td>
                    <td style={styles.td}>
                      {r.status==='pending' && (
                        <div style={{display:'flex',gap:6}}>
                          <button
                            style={{...styles.btnPrimary,padding:'5px 10px',fontSize:11,opacity:acting===r.id?0.6:1}}
                            onClick={()=>handleApprove(r.id,r.user_id,r.billing_cycle)}
                            disabled={!!acting}
                          >
                            {acting===r.id?'...':'Approve'}
                          </button>
                          <button
                            style={{background:COLORS.redLight,color:COLORS.red,border:'none',borderRadius:6,padding:'5px 10px',fontSize:11,cursor:'pointer'}}
                            onClick={()=>handleReject(r.id)}
                            disabled={!!acting}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                      {r.status!=='pending' && <span style={{fontSize:12,color:COLORS.gray400}}>—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
 
      <div style={styles.card}>
        <div style={styles.sectionTitle}>Active Premium Subscribers</div>
        <div style={styles.sectionSub}>Most recently upgraded</div>
        {recentPremium.length === 0 ? (
          <div style={{textAlign:'center',padding:'20px 0',color:COLORS.gray400,fontSize:13}}>No premium subscribers yet.</div>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>{['Business','Email','Billing','Started','Expires'].map(h=><th key={h} style={styles.th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {recentPremium.map((u,i)=>(
                  <tr key={i}>
                    <td style={styles.td}><span style={{fontWeight:500}}>{u.businessName}</span></td>
                    <td style={styles.td}><span style={{fontSize:12,color:COLORS.gray500}}>{u.email}</span></td>
                    <td style={styles.td}>
                      <span style={styles.badge(
                        u.billingCycle==='yearly'?COLORS.greenDark:COLORS.orange,
                        u.billingCycle==='yearly'?COLORS.greenLight:COLORS.orangeLight
                      )}>
                        {u.billingCycle==='yearly'?'Yearly':'Monthly'}
                      </span>
                    </td>
                    <td style={styles.td}><span style={{fontSize:12}}>{u.startedAt ? new Date(u.startedAt).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'}) : '—'}</span></td>
                    <td style={styles.td}><span style={{fontSize:12}}>{u.expiresAt ? new Date(u.expiresAt).toLocaleDateString('en-PH',{month:'short',day:'numeric',year:'numeric'}) : '—'}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function AdminUsage() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const token   = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch('https://backend-repo-teal.vercel.app//api/admin/usage', { headers });
        const json = await res.json();
        setData(json);
      } catch(err) { console.error(err); }
      finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <div style={{textAlign:'center',padding:'60px 0',color:COLORS.gray400}}>Loading usage data...</div>;
  if (!data)   return <div style={{textAlign:'center',padding:'60px 0',color:COLORS.red}}>Failed to load.</div>;

  const { dailyOrders, topUsers, featureUsage, totals } = data;
  const maxOrders  = Math.max(...dailyOrders.map(d=>d.orders), 1);
  const maxFeature = Math.max(...featureUsage.map(f=>f.v), 1);

  return (
    <div>
      <div style={styles.pageTitle}>Platform Usage Analytics</div>
      <div style={styles.pageSub}>Real activity data across all businesses</div>

      {/* Platform totals */}
      <div style={styles.grid4}>
        {[
          {l:'Total Users',    v: totals.users,    c: COLORS.blue},
          {l:'Total Orders',   v: totals.orders,   c: COLORS.green},
          {l:'Total Revenue',  v: `₱${totals.revenue.toLocaleString('en-US',{minimumFractionDigits:2})}`, c: COLORS.green},
          {l:'Total Recipes',  v: totals.recipes,  c: COLORS.orange},
        ].map((s,i)=>(
          <div key={i} style={styles.statCard}>
            <div style={styles.statLabel}>{s.l}</div>
            <div style={{...styles.statValue,color:s.c}}>{s.v}</div>
          </div>
        ))}
      </div>

      <div style={styles.grid2}>
        {/* Daily orders chart */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Daily POS Orders</div>
          <div style={styles.sectionSub}>All users — last 7 days</div>
          {dailyOrders.every(d=>d.orders===0) ? (
            <div style={{textAlign:'center',padding:'30px 0',color:COLORS.gray400,fontSize:13}}>No orders recorded yet.</div>
          ) : (
            <div style={{display:'flex',alignItems:'flex-end',gap:6,height:100}}>
              {dailyOrders.map((d,i)=>(
                <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                  <div style={{width:'100%',background:COLORS.blue,borderRadius:'4px 4px 0 0',height:Math.max(4,(d.orders/maxOrders)*85),opacity:0.8}}/>
                  <span style={{fontSize:10,color:COLORS.gray400}}>{d.label.split(' ')[1]||d.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Feature usage */}
        <div style={styles.card}>
          <div style={styles.sectionTitle}>Feature Usage</div>
          <div style={styles.sectionSub}>Total records per feature</div>
          <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:8}}>
            {featureUsage.map((f,i)=>(
              <div key={i} style={styles.row}>
                <span style={{width:100,fontSize:12,color:COLORS.gray600,flexShrink:0}}>{f.name}</span>
                <div style={{flex:1,background:COLORS.gray100,borderRadius:99,height:8}}>
                  <div style={{width:`${(f.v/maxFeature)*100}%`,height:'100%',background:COLORS.orange,borderRadius:99}}/>
                </div>
                <span style={{width:36,fontSize:12,color:COLORS.gray700,textAlign:'right',fontWeight:600}}>{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top users by activity */}
      <div style={styles.card}>
        <div style={styles.sectionTitle}>Most Active Users</div>
        <div style={styles.sectionSub}>Ranked by total POS orders</div>
        {topUsers.length === 0 ? (
          <div style={{textAlign:'center',padding:'20px 0',color:COLORS.gray400,fontSize:13}}>No activity yet.</div>
        ) : (
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>{['#','Business','Email','Plan','Orders','Revenue'].map(h=><th key={h} style={styles.th}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {topUsers.map((u,i)=>(
                  <tr key={i}>
                    <td style={styles.td}><span style={{fontWeight:600,color:COLORS.gray400}}>{i+1}</span></td>
                    <td style={styles.td}><span style={{fontWeight:500}}>{u.businessName}</span></td>
                    <td style={styles.td}><span style={{fontSize:12,color:COLORS.gray500}}>{u.email}</span></td>
                    <td style={styles.td}>
                      <span style={u.plan==='premium'?styles.premiumBadge:{...styles.badge(COLORS.orange,COLORS.orangeLight)}}>
                        {u.plan==='premium'?'👑 Premium':'Free'}
                      </span>
                    </td>
                    <td style={styles.td}><span style={{fontWeight:600}}>{u.orderCount}</span></td>
                    <td style={styles.td}><span style={{fontWeight:600,color:COLORS.green}}>₱{u.revenue.toLocaleString('en-US',{minimumFractionDigits:2})}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function BillingModal({ onClose, onSuccess, initialCycle, initialStep }) {
  const [cycle, setCycle] = useState(initialCycle || 'monthly');
  const [gcashNum, setGcash]  = useState('');
  const [name, setName]       = useState('');
  const [refCode, setRefCode] = useState('');
  const [step, setStep]   = useState(initialStep  || 1); // 1 = pick plan, 2 = send payment, 3 = confirm ref
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
 
  const price      = cycle === 'monthly' ? '₱149.00' : '₱1,699.00';
  const priceRaw   = cycle === 'monthly' ? 149 : 1699;
  const perLabel   = cycle === 'monthly' ? 'per month' : 'per year';
 
  const GCASH_NUMBER = '0927 667 9131'; // ← replace with your real GCash number
  const GCASH_NAME   = 'KI**T JA*****K A.'; // ← replace with account name
 
  const fmtPhone = (v) => {
    const d = v.replace(/\D/g,'').slice(0,11);
    if (d.length <= 4) return d;
    if (d.length <= 7) return d.slice(0,4) + ' ' + d.slice(4);
    return d.slice(0,4) + ' ' + d.slice(4,7) + ' ' + d.slice(7);
  };
 
  const handleSubmitRef = async () => {
    setError('');
    if (!refCode.trim()) return setError('Please enter your GCash reference number.');
    if (!gcashNum || gcashNum.replace(/\s/g,'').length < 11)
      return setError('Please enter your GCash number.');
    if (!name.trim()) return setError('Please enter the account name.');
 
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res   = await fetch('https://backend-repo-teal.vercel.app//api/premium/request-upgrade', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body:    JSON.stringify({ billingCycle: cycle, gcashRef: refCode.trim(), gcashNumber: gcashNum, gcashName: name }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Request failed.'); setLoading(false); return; }
      onSuccess(cycle);
    } catch {
      setError('Cannot connect to server.');
      setLoading(false);
    }
  };
 
  return (
    <div style={{
      position:'fixed',inset:0,background:'rgba(0,0,0,0.55)',
      display:'flex',alignItems:'center',justifyContent:'center',zIndex:2000,
      overflowY:'auto',padding:'20px 0',
    }}>
      <div style={{
        background:COLORS.white,borderRadius:18,width:440,
        boxShadow:'0 12px 56px rgba(0,0,0,0.25)',overflow:'hidden',margin:'auto',
      }}>
        {/* Header */}
        <div style={{
          background:'linear-gradient(135deg,#0070ba 0%,#00b4ff 100%)',
          padding:'20px 24px',
          display:'flex',alignItems:'center',justifyContent:'space-between',
        }}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{
              width:40,height:40,borderRadius:10,
              background:'rgba(255,255,255,0.2)',
              display:'flex',alignItems:'center',justifyContent:'center',
              fontSize:22,
            }}>📱</div>
            <div>
              <div style={{color:'#fff',fontWeight:700,fontSize:17}}>Pay via GCash</div>
              <div style={{color:'rgba(255,255,255,0.8)',fontSize:12,marginTop:1}}>
                ProCIS Premium — {price} {perLabel}
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{
            background:'rgba(255,255,255,0.2)',border:'none',borderRadius:8,
            color:'#fff',fontSize:18,width:32,height:32,cursor:'pointer',
            display:'flex',alignItems:'center',justifyContent:'center',
          }}>×</button>
        </div>
 
        {/* Step indicators */}
        <div style={{
          display:'flex',borderBottom:`1px solid ${COLORS.gray100}`,
          background:COLORS.gray50,
        }}>
          {['Choose Plan','Send Payment','Confirm'].map((s,i)=>(
            <div key={i} style={{
              flex:1,padding:'10px 8px',textAlign:'center',fontSize:11,
              fontWeight:step===i+1?700:400,
              color:step===i+1?'#0070ba':step>i+1?COLORS.green:COLORS.gray400,
              borderBottom:`2px solid ${step===i+1?'#0070ba':step>i+1?COLORS.green:'transparent'}`,
            }}>
              {step>i+1?'✓ ':''}{s}
            </div>
          ))}
        </div>
 
        <div style={{padding:'24px'}}>
 
          {/* ── Step 1: Choose plan ── */}
          {step===1 && (
            <>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:13,color:COLORS.gray600,fontWeight:600,marginBottom:10}}>
                  Select billing cycle
                </div>
                <div style={{display:'flex',gap:10}}>
                  {[
                    {id:'monthly',label:'₱149',sub:'Billed monthly',badge:null},
                    {id:'yearly', label:'₱1,699',sub:'Billed yearly',badge:'Save ₱89'},
                  ].map(opt=>(
                    <button key={opt.id} onClick={()=>setCycle(opt.id)} style={{
                      flex:1,padding:'14px 12px',borderRadius:10,cursor:'pointer',textAlign:'left',
                      border:`2px solid ${cycle===opt.id?'#0070ba':COLORS.gray200}`,
                      background:cycle===opt.id?'#e8f4ff':COLORS.white,
                      position:'relative',
                    }}>
                      {opt.badge && (
                        <div style={{
                          position:'absolute',top:-9,right:10,
                          background:COLORS.green,color:COLORS.white,
                          fontSize:10,fontWeight:700,padding:'2px 8px',borderRadius:99,
                        }}>{opt.badge}</div>
                      )}
                      <div style={{fontWeight:800,fontSize:18,color:cycle===opt.id?'#0070ba':COLORS.gray800}}>
                        {opt.label}
                      </div>
                      <div style={{fontSize:11,color:COLORS.gray500,marginTop:2}}>{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
 
              {/* Features */}
              <div style={{
                background:'#f0f9ff',borderRadius:10,padding:'14px',marginBottom:20,
                border:'1px solid #bae6fd',
              }}>
                <div style={{fontSize:12,color:'#0369a1',fontWeight:600,marginBottom:8}}>
                  👑 What you get with Premium
                </div>
                {[
                  '✅ Unlimited inventory products',
                  '✅ Unlimited recipes',
                  '✅ Unlimited POS orders',
                  '✅ Advanced analytics',
                  '✅ Priority support',
                ].map(f=>(
                  <div key={f} style={{fontSize:12,color:COLORS.gray700,marginBottom:4}}>{f}</div>
                ))}
              </div>
 
              <button
                style={{
                  width:'100%',padding:'13px',borderRadius:10,
                  background:'linear-gradient(135deg,#0070ba,#00b4ff)',
                  color:'#fff',border:'none',fontWeight:700,fontSize:15,cursor:'pointer',
                }}
                onClick={()=>setStep(2)}
              >
                Continue with GCash · {price}
              </button>
            </>
          )}
 
          {/* ── Step 2: Payment instructions ── */}
          {step===2 && (
            <>
              <div style={{
                background:'linear-gradient(135deg,#0070ba,#00b4ff)',
                borderRadius:12,padding:'20px',marginBottom:20,color:'#fff',textAlign:'center',
              }}>
                <div style={{fontSize:12,opacity:0.85,marginBottom:4}}>Send exactly</div>
                <div style={{fontSize:36,fontWeight:800,letterSpacing:'-1px'}}>
                  ₱{priceRaw.toLocaleString()}.00
                </div>
                <div style={{fontSize:12,opacity:0.75,marginTop:4}}>
                  {cycle==='monthly'?'Monthly subscription':'Yearly subscription'}
                </div>
              </div>
 
              <div style={{marginBottom:20}}>
                <div style={{fontSize:13,color:COLORS.gray600,fontWeight:600,marginBottom:10}}>
                  GCash Payment Details
                </div>
                <div style={{
                  background:COLORS.gray50,borderRadius:10,border:`1px solid ${COLORS.gray200}`,
                  overflow:'hidden',
                }}>
                  {[
                    {label:'GCash Number', value:GCASH_NUMBER, copy:true},
                    {label:'Account Name', value:GCASH_NAME,   copy:false},
                    {label:'Amount',       value:`₱${priceRaw.toLocaleString()}.00`, copy:false},
                    {label:'Reference', value:'Your subscription', copy:false},
                  ].map((row,i)=>(
                    <div key={i} style={{
                      display:'flex',justifyContent:'space-between',alignItems:'center',
                      padding:'11px 14px',
                      borderBottom:i<3?`1px solid ${COLORS.gray200}`:'none',
                    }}>
                      <span style={{fontSize:12,color:COLORS.gray500}}>{row.label}</span>
                      <span style={{fontSize:13,fontWeight:700,color:COLORS.gray900,letterSpacing:'0.02em'}}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
 
              <div style={{
                background:'#fefce8',border:'1px solid #fde68a',borderRadius:8,
                padding:'10px 14px',marginBottom:20,fontSize:12,color:'#92400e',
              }}>
                ⚠️ Please keep your GCash reference number — you'll need it in the next step.
              </div>
 
              <div style={{display:'flex',gap:10}}>
                <button onClick={()=>setStep(1)} style={{
                  flex:1,padding:'11px',borderRadius:8,border:`1px solid ${COLORS.gray200}`,
                  background:COLORS.white,color:COLORS.gray700,fontWeight:500,cursor:'pointer',fontSize:13,
                }}>← Back</button>
                <button onClick={()=>setStep(3)} style={{
                  flex:2,padding:'11px',borderRadius:8,
                  background:'linear-gradient(135deg,#0070ba,#00b4ff)',
                  color:'#fff',border:'none',fontWeight:700,fontSize:13,cursor:'pointer',
                }}>I've sent the payment →</button>
              </div>
            </>
          )}
 
          {/* ── Step 3: Enter reference number ── */}
          {step===3 && (
            <>
              <div style={{
                textAlign:'center',marginBottom:20,
                background:'#f0f9ff',borderRadius:10,padding:'16px',border:'1px solid #bae6fd',
              }}>
                <div style={{fontSize:28,marginBottom:6}}>📋</div>
                <div style={{fontSize:14,fontWeight:600,color:'#0369a1',marginBottom:4}}>
                  Enter your payment details
                </div>
                <div style={{fontSize:12,color:COLORS.gray500}}>
                  We'll verify your GCash payment and activate your account.
                </div>
              </div>
 
              <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:20}}>
                <div>
                  <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:6}}>
                    GCash Reference Number *
                  </label>
                  <input
                    style={{
                      ...styles.input,
                      fontWeight:700,letterSpacing:'0.08em',fontSize:15,
                      borderColor:refCode?'#0070ba':COLORS.gray200,
                    }}
                    placeholder="e.g. 1234567890"
                    value={refCode}
                    onChange={e=>setRefCode(e.target.value.replace(/\D/g,'').slice(0,13))}
                  />
                  <div style={{fontSize:11,color:COLORS.gray400,marginTop:4}}>
                    Found in your GCash app → Transaction History
                  </div>
                </div>
 
                <div>
                  <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:6}}>
                    Your GCash Number *
                  </label>
                  <input
                    style={styles.input}
                    placeholder="09XX XXX XXXX"
                    value={gcashNum}
                    onChange={e=>setGcash(fmtPhone(e.target.value))}
                  />
                </div>
 
                <div>
                  <label style={{fontSize:12,color:COLORS.gray600,fontWeight:500,display:'block',marginBottom:6}}>
                    GCash Account Name *
                  </label>
                  <input
                    style={styles.input}
                    placeholder="As shown in your GCash app"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                  />
                </div>
              </div>
 
              {error && (
                <div style={{
                  color:COLORS.red,fontSize:12,marginBottom:12,
                  background:COLORS.redLight,padding:'8px 12px',borderRadius:8,
                }}>{error}</div>
              )}
 
              <div style={{fontSize:11,color:COLORS.gray400,marginBottom:16,lineHeight:1.6}}>
                By submitting, you confirm you've sent ₱{priceRaw.toLocaleString()} to ProCIS via GCash.
                Your account will be activated within 24 hours after verification.
              </div>
 
              <div style={{display:'flex',gap:10}}>
                <button onClick={()=>setStep(2)} style={{
                  flex:1,padding:'11px',borderRadius:8,border:`1px solid ${COLORS.gray200}`,
                  background:COLORS.white,color:COLORS.gray700,fontWeight:500,cursor:'pointer',fontSize:13,
                }}>← Back</button>
                <button
                  style={{
                    flex:2,padding:'11px',borderRadius:8,
                    background:'linear-gradient(135deg,#0070ba,#00b4ff)',
                    color:'#fff',border:'none',fontWeight:700,fontSize:13,cursor:'pointer',
                    opacity:loading?0.7:1,
                  }}
                  onClick={handleSubmitRef}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : '✓ Submit Payment Proof'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
 
 
// ── Upgrade Success Modal ──
function UpgradeSuccessModal({ cycle, onClose }) {
  return (
    <div style={{
      position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',
      display:'flex',alignItems:'center',justifyContent:'center',zIndex:2100,
    }}>
      <div style={{
        background:COLORS.white,borderRadius:16,padding:'36px 32px',
        width:380,textAlign:'center',boxShadow:'0 8px 40px rgba(0,0,0,0.2)',
      }}>
        <div style={{fontSize:56,marginBottom:12}}>🎉</div>
        <div style={{fontSize:20,fontWeight:700,color:COLORS.gray900,marginBottom:8}}>
          Payment Submitted!
        </div>
        <div style={{fontSize:14,color:COLORS.gray500,marginBottom:20}}>
          Your GCash payment reference for a{' '}
          <strong>{cycle === 'yearly' ? 'yearly' : 'monthly'}</strong> subscription has been received.
          An admin will verify and activate your account shortly.
        </div>
        <div style={{
          background:'#f0f9ff',borderRadius:10,padding:'14px',
          marginBottom:24,fontSize:13,color:'#0369a1',fontWeight:500,
          border:'1px solid #bae6fd',
        }}>
          📱 GCash reference logged · Activation within 24 hours
        </div>
        <button style={{...styles.btnPrimary,width:'100%',justifyContent:'center'}} onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
}
 
 
// ── Cancel Subscription Modal ──
function CancelSubscriptionModal({ subscription, onClose, onCancelled }) {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
 
  const handleCancel = async () => {
    setLoading(true); setError('');
    try {
      const token = localStorage.getItem('token');
      const res   = await fetch('https://backend-repo-teal.vercel.app//api/premium/cancel-subscription', {
        method:  'POST',
        headers: { 'Content-Type':'application/json', Authorization:`Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Failed to cancel.'); setLoading(false); return; }
      onCancelled();
    } catch {
      setError('Cannot connect to server.');
      setLoading(false);
    }
  };
 
  return (
    <div style={{
      position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',
      display:'flex',alignItems:'center',justifyContent:'center',zIndex:2000,
    }}>
      <div style={{
        background:COLORS.white,borderRadius:16,padding:'32px',
        width:400,boxShadow:'0 8px 40px rgba(0,0,0,0.2)',
      }}>
        <div style={{fontSize:40,textAlign:'center',marginBottom:12}}>😔</div>
        <div style={{fontSize:18,fontWeight:700,color:COLORS.gray900,marginBottom:8,textAlign:'center'}}>
          Cancel Subscription?
        </div>
        <div style={{fontSize:13,color:COLORS.gray500,marginBottom:20,textAlign:'center',lineHeight:1.6}}>
          You'll lose access to all Premium features at the end of your billing period.
          Your data will be kept.
        </div>
 
        {/* What you'll lose */}
        <div style={{
          background:COLORS.redLight,borderRadius:10,padding:'14px',marginBottom:20,
          border:`1px solid ${COLORS.red}22`,
        }}>
          <div style={{fontSize:12,color:COLORS.red,fontWeight:600,marginBottom:8}}>You'll lose access to:</div>
          {[
            'Unlimited inventory, recipes & orders',
            'Advanced analytics',
            'Priority support',
            'Low stock & expiry alerts',
          ].map(f=>(
            <div key={f} style={{fontSize:12,color:COLORS.gray700,marginBottom:4,display:'flex',gap:6}}>
              <span style={{color:COLORS.red}}>✕</span>{f}
            </div>
          ))}
        </div>
 
        {subscription?.expires_at && (
          <div style={{
            fontSize:12,color:COLORS.gray500,textAlign:'center',marginBottom:20,
            background:COLORS.gray50,borderRadius:8,padding:'8px 12px',
          }}>
            Access remains until{' '}
            <strong style={{color:COLORS.gray800}}>
              {new Date(subscription.expires_at).toLocaleDateString('en-PH',{month:'long',day:'numeric',year:'numeric'})}
            </strong>
          </div>
        )}
 
        {error && (
          <div style={{
            color:COLORS.red,fontSize:12,marginBottom:12,
            background:COLORS.redLight,padding:'8px 12px',borderRadius:8,
          }}>{error}</div>
        )}
 
        <div style={{display:'flex',gap:10}}>
          <button style={{
            flex:2,padding:'11px',borderRadius:8,
            background:gradientBtn,color:COLORS.white,border:'none',
            fontWeight:700,cursor:'pointer',fontSize:13,
          }} onClick={onClose}>
            Keep Premium 👑
          </button>
          <button style={{
            flex:1,padding:'11px',borderRadius:8,
            background:COLORS.redLight,color:COLORS.red,
            border:`1px solid ${COLORS.red}44`,fontWeight:500,cursor:'pointer',fontSize:12,
            opacity:loading?0.6:1,
          }} onClick={handleCancel} disabled={loading}>
            {loading?'...':'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Reusable Lock Overlay (blurred preview + upgrade CTA) ──
function LockedOverlay({ reason, onUpgrade }) {
  return (
    <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', minHeight: 180 }}>
      {/* Blurred fake rows */}
      <div style={{ filter: 'blur(4px)', pointerEvents: 'none', userSelect: 'none', opacity: 0.45 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr>
              {['Product','Price','Cost/Unit','Margin','Units','Revenue','Cost','Profit'].map(h => (
                <th key={h} style={{ padding: '10px 12px', color: COLORS.gray500, fontWeight: 500, borderBottom: `1px solid ${COLORS.gray200}`, fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['Lumpia Shanghai','₱50.00','₱18.00','64%','120','₱6,000','₱2,160','₱3,840'],
              ['Lemon Iced Tea', '₱45.00','₱12.00','73%','98', '₱4,410','₱1,176','₱3,234'],
              ['Chicken Rice',   '₱80.00','₱35.00','56%','74', '₱5,920','₱2,590','₱3,330'],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: '12px 12px', borderBottom: `1px solid ${COLORS.gray100}`, color: COLORS.gray700 }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Lock overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(249,250,251,0.88)', gap: 12,
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14,
          background: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.orange})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
        }}>🔒</div>
        <div style={{ fontWeight: 700, fontSize: 15, color: COLORS.gray900 }}>Premium Feature</div>
        <div style={{ fontSize: 13, color: COLORS.gray500, textAlign: 'center', maxWidth: 300, lineHeight: 1.5 }}>{reason}</div>
        <button onClick={onUpgrade} style={{
          background: `linear-gradient(90deg, ${COLORS.green}, ${COLORS.orange})`,
          color: COLORS.white, border: 'none', borderRadius: 8,
          padding: '9px 22px', fontSize: 13, fontWeight: 700, cursor: 'pointer',
        }}>
          👑 Upgrade to Unlock
        </button>
      </div>
    </div>
  );
}