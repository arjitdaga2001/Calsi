import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const fmt = (v) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

const fmtShort = (v) => {
  if (v >= 10000000) return `₹${(v / 10000000).toFixed(2)}Cr`;
  if (v >= 100000)   return `₹${(v / 100000).toFixed(2)}L`;
  if (v >= 1000)     return `₹${(v / 1000).toFixed(1)}K`;
  return `₹${v}`;
};

/* ── Custom Tooltip ── */
function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const entry = payload[0];
  const total = entry.payload.total;
  const pct = total > 0 ? ((entry.value / total) * 100).toFixed(1) : 0;
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      padding: '10px 14px',
      boxShadow: '0 8px 24px rgba(15,23,42,0.12)',
      fontSize: '13px',
      minWidth: '140px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: entry.fill, display: 'inline-block', flexShrink: 0 }} />
        <span style={{ color: '#475569', fontWeight: 600 }}>{entry.name}</span>
      </div>
      <div style={{ color: '#0f172a', fontWeight: 800, fontSize: '15px', letterSpacing: '-0.03em' }}>
        {fmt(entry.value)}
      </div>
      <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '12px', marginTop: '2px' }}>
        {pct}% of total
      </div>
    </div>
  );
}

export function DonutChart({ data, total }) {
  const totalVal = total ?? data.reduce((sum, d) => sum + d.value, 0);

  // Attach total to each data point so the tooltip can access it
  const enriched = data.map(d => ({ ...d, total: totalVal }));

  return (
    <div style={{ width: '100%' }}>
      {/* Interactive chart with center label */}
      <div style={{ width: '100%', height: 210, position: 'relative', userSelect: 'none' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={enriched}
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
              startAngle={90}
              endAngle={-270}
              isAnimationActive={true}
              animationDuration={700}
              animationEasing="ease-out"
            >
              {enriched.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  style={{ cursor: 'pointer', outline: 'none' }}
                />
              ))}
            </Pie>
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ zIndex: 10 }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '4px' }}>
            Total
          </div>
          <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.04em', lineHeight: 1 }}>
            {fmtShort(totalVal)}
          </div>
        </div>
      </div>

      {/* Legend — name + color dot only, no % */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 4px' }}>
        {data.map((entry, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: 10, height: 10, borderRadius: '50%',
              background: entry.color, flexShrink: 0, display: 'inline-block'
            }} />
            <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)', fontWeight: 500 }}>{entry.name}</span>
            <span style={{ marginLeft: 'auto', fontSize: '12.5px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {fmt(entry.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
