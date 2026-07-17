(() => {
  const analyzeButton = document.getElementById('cla-analyze');
  const emptyState = document.getElementById('cla-empty');
  const analysis = document.getElementById('cla-analysis');
  const filters = [...document.querySelectorAll('.cla-filter')];
  const transcriptMarks = [...document.querySelectorAll('#cla-transcript mark[data-category]')];
  const insights = [...document.querySelectorAll('.cla-insight[data-category]')];

  if (!analyzeButton || !emptyState || !analysis) return;

  let hasAnalyzed = false;

  function applyFilter(category) {
    filters.forEach((button) => {
      const active = button.dataset.filter === category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    transcriptMarks.forEach((mark) => {
      const matches = category === 'all' || mark.dataset.category === category;
      mark.classList.toggle('is-highlighted', matches && category !== 'all');
      mark.classList.toggle('is-muted', !matches && category !== 'all');
    });

    insights.forEach((card) => {
      const matches = category === 'all' || card.dataset.category === category;
      card.classList.toggle('is-muted', !matches);
    });
  }

  analyzeButton.addEventListener('click', () => {
    hasAnalyzed = true;
    emptyState.hidden = true;
    analysis.hidden = false;
    analyzeButton.textContent = 'Analysis revealed';
    analyzeButton.disabled = true;
    applyFilter('all');
    analysis.focus?.();
  });

  filters.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      if (!hasAnalyzed) {
        emptyState.hidden = true;
        analysis.hidden = false;
        analyzeButton.textContent = 'Analysis revealed';
        analyzeButton.disabled = true;
        hasAnalyzed = true;
      }
      applyFilter(button.dataset.filter || 'all');
    });
  });
})();