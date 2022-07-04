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
    }
    
  },
  plugins: [],
};