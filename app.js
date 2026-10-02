* {
  box-sizing: border-box;
}

:root {
  --bg: #f4f7fb;
  --panel: #ffffff;
  --primary: #2d6cdf;
  --primary-dark: #214ea9;
  --success: #1f9d61;
  --warning: #d97706;
  --text: #1f2a37;
  --muted: #667085;
  --border: #e5e7eb;
  --shadow: 0 12px 32px rgba(17, 24, 39, 0.08);
}

body {
  margin: 0;
  font-family: "Microsoft YaHei", "Segoe UI", sans-serif;
  background: linear-gradient(180deg, #edf4ff 0%, var(--bg) 100%);
  color: var(--text);
}

.container {
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 20px 40px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--primary);
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(28px, 3vw, 42px);
}

h2 {
  margin: 0 0 18px;
  font-size: 22px;
}

.status-pill {
  background: rgba(45, 108, 223, 0.1);
  color: var(--primary-dark);
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 700;
}

.stats-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: var(--panel);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 4px solid transparent;
}

.stat-card span {
  color: var(--muted);
}

.stat-card strong {
  font-size: 34px;
  line-height: 1;
}

.accent-blue { border-top-color: var(--primary); }
.accent-green { border-top-color: var(--success); }
.accent-orange { border-top-color: var(--warning); }

.content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.panel {
  background: var(--panel);
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 22px;
}

.stack-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: grid;
  gap: 16px;
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text);
  font-weight: 600;
}

input, select, button {
  font: inherit;
}

input, select {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fff;
  color: var(--text);
}

input:focus, select:focus {
  outline: 2px solid rgba(45, 108, 223, 0.16);
  border-color: var(--primary);
}

.primary-btn {
  border: none;
  border-radius: 12px;
  padding: 13px 18px;
  background: var(--primary);
  color: white;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s ease;
}

.primary-btn:hover {
  background: var(--primary-dark);
}

.success-btn {
  background: var(--success);
}

.success-btn:hover {
  background: #177a4f;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

#searchInput {
  max-width: 260px;
}

.table-panel {
  margin-bottom: 20px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
}

thead th {
  text-align: left;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
  background: #fafbff;
}

tbody td {
  padding: 14px 12px;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

.badge {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
}

.badge.in {
  background: rgba(31, 157, 97, 0.12);
  color: var(--success);
}

.badge.out {
  background: rgba(217, 119, 6, 0.12);
  color: var(--warning);
}

.small-btn {
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
}

.small-btn.delete {
  color: #c0392b;
  border-color: rgba(192, 57, 43, 0.18);
}

.small-btn:hover {
  background: #f8fafc;
}

.empty-text {
  text-align: center;
  color: var(--muted);
  padding: 18px;
}

@media (max-width: 760px) {
  .stats-panel,
  .content-grid,
  .two-col {
    grid-template-columns: 1fr;
  }

  .topbar,
  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  #searchInput {
    max-width: none;
    width: 100%;
  }
}

