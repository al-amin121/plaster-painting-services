module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./node_modules/flowbite/**/*.js",
      'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
      'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#065f46'
        }
      },
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }