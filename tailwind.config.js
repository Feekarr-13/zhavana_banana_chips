/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FDF9ED",        // Teal utama
        primaryHalf: "rgba(0, 150, 136, 0.5)",
        secondary: "#FFC265",      // Coral aksen
        accent: "#F9A825",         // Kuning madu
        chocolate: "#6D4C41",      // Cokelat lembut
        balado: "#E53935",         // Merah hangat
        baladoHalf: "rgba(229, 57, 53, 0.5)",
        txtcolor: "#1E1E1E",       // Teks utama
        bkg: "#FEFEFE",            // Background cream dari gambar
      },
      fontFamily: {
        poppins: ["Poppins"],
        gsub: ["gsub", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sl: "930px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
