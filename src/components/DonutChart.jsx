import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const fmt = (v) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(v);

export function DonutChart({ data }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div style={{ width: '100%' }}>
      {/* Non-interactive chart */}
      <div style={{ width: '100%', height: 220, pointerEvents: 'none', userSelect: 'none' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={62}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend below the chart */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '12px',
        padding: '0 8px'
      }}>
        {data.map((entry, i) => {
          const pct = total > 0 ? ((entry.value / total) * 100).toFixed(1) : 0;
          return (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12.5px',
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: entry.color, flexShrink: 0, display: 'inline-block'
                }} />
                <span>{entry.name}</span>
              </div>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                {pct}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
