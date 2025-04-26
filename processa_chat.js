const fs = require('node:fs/promises');
const path = require('node:path');

async function processarChat(arquivoEntrada, arquivoSaida) {
  try {
    const conteudo = await fs.readFile(arquivoEntrada, 'utf-8');
    const linhas = conteudo.trim().split('\n');
    const etiquetasMap = {};
    const regexEtiqueta = /#([a-zA-Z0-9_-]+)/g;

    for (const linha of linhas) {
      let match;
      const etiquetasNaLinha = new Set();
      while ((match = regexEtiqueta.exec(linha)) !== null) {
        etiquetasNaLinha.add(match[1]);
      }

      for (const etiqueta of etiquetasNaLinha) {
        if (!etiquetasMap[etiqueta]) {
          etiquetasMap[etiqueta] = [];
        }
        etiquetasMap[etiqueta].push(linha);
      }
    }

    let saida = '';
    for (const etiqueta in etiquetasMap) {
      saida += `#${etiqueta}\n`;
      for (const mensagem of etiquetasMap[etiqueta]) {
        saida += `- ${mensagem}\n`;
      }
      saida += '\n';
    }

    await fs.writeFile(arquivoSaida, saida.trim() + '\n', 'utf-8');
    console.log(`Arquivo de saída "${arquivoSaida}" gerado com sucesso.`);

  } catch (erro) {
    console.error(`Ocorreu um erro: ${erro.message}`);
  }
}

const arquivoEntrada = 'chat.txt';
const arquivoSaida = 'etiquetas.txt';

processarChat(arquivoEntrada, arquivoSaida);