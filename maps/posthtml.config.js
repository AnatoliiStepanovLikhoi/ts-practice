module.exports = {
  plugins: {
    'posthtml-expressions': {
      locals: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  },
};
