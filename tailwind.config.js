/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {

       
         "text-color": "#e5e7eb"
      },
      boxShadow: {
        'red-custom': '0 4px 6px rgba(255, 0, 0, 0.5)',
      },

      
    },
  },
  plugins: [],
}

