const libreconv = require('libreoffice-convert');

exports.handler = async (event) => {
  const inputFile = 'input.docx';
  const outputFile = 'output.pdf';
  const convert = libreconv();

  convert(inputFile, outputFile, (err, done) => {
    if (err) {
      console.error('Conversion error:', err);
    } else {
      console.log('File converted successfully');
    }
  });
};
