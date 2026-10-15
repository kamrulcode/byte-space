export default function DashboardCards() {
  return (
    <div className="dashboard-stack">
      <div className="dashboard-card w-3/5">
        <span>Total Revenue</span>
        <small>July 2026</small>
        <strong>$120.29</strong>
        <div className="dashboard-progress">
          <div />
        </div>
      </div>

      <div className="dashboard-card w-1/3">
        <span>Year to Date</span>
        <small>2026</small>
        <strong>$1,200.38</strong>
        <span className="dashboard-growth">+12%</span>
      </div>
    </div>
  );
}
