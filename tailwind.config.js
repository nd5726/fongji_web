/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/fongji_web/" // 這裡要換成你的儲存庫名稱
      : "/",
};
