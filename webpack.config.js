import path from 'path';

export default {
  entry: './src/index.js', // Asegúrate de que esta ruta sea correcta
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true, // Limpia la carpeta de salida antes de cada compilación
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'development',
};