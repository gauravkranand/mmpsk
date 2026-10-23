/**
 * Tailwind CSS Theme Configuration
 * Separated into external script for security & maintainability
 */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'] },
            colors: {
                primary: '#0d9488',
                'primary-hover': '#0f766e',
                sidebar: '#134e4a',
                'sidebar-hover': '#115e59',
                'sidebar-active': '#042f2e',
                'medical-red': '#e11d48'
            }
        }
    }
};
