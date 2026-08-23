(function () {
	'use strict';

	// Mobile navigation
	var toggle = document.querySelector('[data-nav-toggle]');
	var nav = document.querySelector('[data-nav]');

	if (toggle && nav) {
		toggle.addEventListener('click', function () {
			var open = nav.classList.toggle('is-open');
			toggle.setAttribute('aria-expanded', String(open));
		});

		nav.addEventListener('click', function (event) {
			if (event.target.closest('a')) {
				nav.classList.remove('is-open');
				toggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	// Curriculum: expand / collapse all
	var expandAll = document.querySelector('[data-expand-all]');
	var chapters = Array.prototype.slice.call(document.querySelectorAll('[data-chapter]'));

	function syncExpandAll() {
		if (!expandAll || !chapters.length) return;
		var allOpen = chapters.every(function (chapter) {
			return chapter.open;
		});
		expandAll.setAttribute('aria-expanded', String(allOpen));
		expandAll.textContent = allOpen ? 'Collapse all chapters' : 'Expand all chapters';
	}

	if (expandAll && chapters.length) {
		expandAll.addEventListener('click', function () {
			var shouldOpen = expandAll.getAttribute('aria-expanded') !== 'true';
			chapters.forEach(function (chapter) {
				chapter.open = shouldOpen;
			});
			syncExpandAll();
		});

		chapters.forEach(function (chapter) {
			chapter.addEventListener('toggle', syncExpandAll);
		});
	}
})();
