module.exports = {
  content: ["./public/**/*.{html,js}"],
   mode: 'jit',

   // These paths are just examples, customize them to match your project structure

   purge: [

     './public/**/*.html',

     './src/**/*.{js,jsx,ts,tsx,vue}',

   ],
  theme: {
    extend: {
      screens: {
        'tablet': '440px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
    
  },
  plugins: [],
};