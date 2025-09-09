document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle
    const hamburger = document.querySelector('.hamburger');
    const dashboard = document.querySelector('.dashboard');
    
    hamburger.addEventListener('click', () => {
        dashboard.classList.toggle('sidebar-collapsed');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900 && 
            !e.target.closest('.sidebar') && 
            !e.target.closest('.hamburger') &&
            dashboard.classList.contains('sidebar-collapsed')) {
            dashboard.classList.remove('sidebar-collapsed');
        }
    });

    // Search input clear button

    // Table sorting
    document.querySelectorAll('th').forEach(header => {
        header.addEventListener('click', () => {
            const table = header.closest('table');
            const index = Array.from(header.parentElement.children).indexOf(header);
            const rows = Array.from(table.querySelectorAll('tbody tr'));
            const isAsc = header.classList.contains('sort-asc');

            // Clear all sort classes
            table.querySelectorAll('th').forEach(th => {
                th.classList.remove('sort-asc', 'sort-desc');
            });

            // Sort rows
            rows.sort((a, b) => {
                const aVal = a.children[index].textContent;
                const bVal = b.children[index].textContent;
                return isAsc 
                    ? bVal.localeCompare(aVal)
                    : aVal.localeCompare(bVal);
            });

            // Update DOM and sort indicator
            header.classList.toggle('sort-asc', !isAsc);
            header.classList.toggle('sort-desc', isAsc);
            table.querySelector('tbody').append(...rows);
        });
    });

    // Add tooltips to icons
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.setAttribute('title', element.dataset.tooltip);
    });
});
