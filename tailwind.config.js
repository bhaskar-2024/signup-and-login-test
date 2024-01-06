/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'login-view' : "url('https://images.pexels.com/photos/10322845/pexels-photo-10322845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'home-view' : "url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      })
    },
  },
  plugins: [],
}

