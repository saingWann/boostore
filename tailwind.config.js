/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://c1.wallpaperflare.com/preview/127/366/443/library-book-bookshelf-read.jpg')",

        'storeBg' : "url('https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-empty-bookshop-stacked-with-books-image_2924924.jpg')",
       'storeBg1' : "url(./src/assets/storepageHeroBg.jpg)",
       'storeBg2' : "url(./src/assets/storepageHeroBg1.jpg)",
       'ctaBg' : "url(./src/assets/ctaBg.png)",
       
      }
    },
  },
  plugins: [],
}