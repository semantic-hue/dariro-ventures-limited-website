/* ═══════════════════════════════════════════════
   js/fleet.js
   Renders vehicle cards from data.js
   and handles category tab filtering
   ═══════════════════════════════════════════════ */

/**
 * Build a single vehicle card HTML string
 * @param {Object} v - vehicle object from data.js
 * @returns {string} HTML string
 */
function buildVehicleCard(v) {
  const featureTags = v.features
    .map(f => `<span class="feature-tag">${f}</span>`)
    .join('');

  const priceBlock = v.price === 'Contact Us'
    ? `<div>
         <div class="vehicle-price">${v.price}</div>
         <div class="vehicle-quote">Get a custom quote</div>
       </div>`
    : `<div>
         <div class="vehicle-price">${v.price}<span>/day</span></div>
       </div>`;

  return `
    <div class="vehicle-card">
      <div class="vehicle-img">
        <span class="vehicle-badge ${v.badge}">${v.label}</span>
        <img
          src="${v.image}"
          alt="${v.name}"
          loading="lazy"
          onerror="this.style.display='none'"
        >
      </div>
      <div class="vehicle-info">
        <h3>${v.name}</h3>
        <p class="vehicle-engine">${v.spec}</p>
        <div class="vehicle-specs">
          <div class="vehicle-spec">👤 ${v.passengers} Pax</div>
          <div class="vehicle-spec">🧳 ${v.bags} Bags</div>
          <div class="vehicle-spec">⛽ ${v.fuel}</div>
        </div>
        <div class="vehicle-features">
          ${featureTags}
        </div>
        <div class="vehicle-footer">
          ${priceBlock}
          <a href="#book" class="btn-primary" style="padding:10px 20px;font-size:13px;">
            Book Now
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Render filtered fleet into #fleetGrid
 * @param {string} filter - category key or 'all'
 */
function renderFleet(filter) {
  const grid = document.getElementById('fleetGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? vehicles
    : vehicles.filter(v => v.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--gray-mid);grid-column:1/-1;">No vehicles in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map(buildVehicleCard).join('');
}

/**
 * Handle tab click — update active state and re-render
 * @param {string} filter
 * @param {HTMLElement} btn
 */
function filterFleet(filter, btn) {
  document.querySelectorAll('.fleet-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderFleet(filter);
}

// Initial render on page load
document.addEventListener('DOMContentLoaded', () => {
  renderFleet('all');
});
