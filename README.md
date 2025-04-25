# dw3_und2_tar
Tarefa: Análise de Etiquetas em Histórico de Chat

Objetivo: Desenvolver um programa em Node.js que processe um arquivo contendo o histórico de mensagens de um chat, identifique as etiquetas (hashtags) presentes nas mensagens e organize as mensagens por etiqueta em um novo arquivo de saída.

Tarefa: Análise de Etiquetas em Histórico de Chat
Objetivo: Desenvolver um programa em Node.js que processe um arquivo contendo o histórico de mensagens de um chat, identifique as etiquetas (hashtags) presentes nas mensagens e organize as mensagens por etiqueta em um novo arquivo de saída.

Descrição Detalhada:

Leitura do Arquivo de Entrada:

O programa deverá receber como entrada o caminho para um arquivo de texto (.txt) que contém o histórico de mensagens do chat.
Cada linha do arquivo representa uma mensagem individual.
Identificação de Etiquetas:

O programa deve percorrer cada linha (mensagem) do arquivo de entrada.
Para cada mensagem, o programa deverá identificar todas as ocorrências de etiquetas.
As etiquetas seguem o formato #<nome-da-etiqueta>, onde <nome-da-etiqueta> é uma sequência de um ou mais caracteres alfanuméricos (a-z, A-Z, 0-9), underscores (_) ou hífens (-).
Uma mesma mensagem pode conter múltiplas etiquetas.
Organização por Etiquetas:

O programa deverá armazenar as etiquetas encontradas e as mensagens correspondentes de forma organizada. Uma estrutura de dados adequada (como um objeto JavaScript) pode ser utilizada para associar cada etiqueta a uma lista de mensagens que a contêm.
É importante garantir que cada etiqueta única seja identificada e que todas as mensagens que a contêm sejam registradas sob essa etiqueta.
Geração do Arquivo de Saída:

O programa deverá gerar um novo arquivo de texto (.txt) como saída.
Neste arquivo de saída, as mensagens deverão ser listadas e agrupadas por etiqueta.
O formato do arquivo de saída deve ser o seguinte:
Cada etiqueta única encontrada no arquivo de entrada deve aparecer como um cabeçalho, precedida pelo símbolo # (exemplo: #geral).
Abaixo de cada etiqueta, todas as mensagens do arquivo de entrada que continham essa etiqueta devem ser listadas, com cada mensagem precedida por um marcador (por exemplo, -).
Deve haver uma linha em branco entre os grupos de mensagens de diferentes etiquetas para melhor organização.
Tratamento de Erros (Opcional, mas recomendado):

O programa pode incluir tratamento de erros para situações como arquivo de entrada não encontrado ou problemas durante a leitura/escrita de arquivos.
Exemplo:

Arquivo de Entrada (chat.txt):

[10:00] UsuárioA: Olá a todos! #boasvindas #geral
[10:05] UsuárioB: Alguém viu a atualização sobre #noticias-tech?
[10:10] UsuárioC: Sim, interessante! #noticias-tech #inovacao
[10:15] UsuárioA: Concordo! #geral
[10:20] UsuárioD: Preciso de ajuda com #javascript_iniciantes.
Arquivo de Saída (etiquetas.txt):

#boasvindas
- [10:00] UsuárioA: Olá a todos! #boasvindas #geral

#geral
- [10:00] UsuárioA: Olá a todos! #boasvindas #geral
- [10:15] UsuárioA: Concordo! #geral

#noticias-tech
- [10:05] UsuárioB: Alguém viu a atualização sobre #noticias-tech?
- [10:10] UsuárioC: Sim, interessante! #noticias-tech #inovacao

#inovacao
- [10:10] UsuárioC: Sim, interessante! #noticias-tech #inovacao

#javascript_iniciantes
- [10:20] UsuárioD: Preciso de ajuda com #javascript_iniciantes.
Objetivos de Aprendizagem:

Prática de leitura e escrita de arquivos utilizando o módulo fs do Node.js.
Utilização de expressões regulares para identificar padrões de texto específicos (neste caso, as etiquetas).
Manipulação de strings e arrays em JavaScript.
Implementação de lógica para organizar e agrupar dados.
(Opcional) Tratamento básico de erros em operações de arquivo.
Entrega:

O código-fonte do programa em Node.js (.js file).
Um arquivo de exemplo de entrada (chat.txt) utilizado para testar o programa.
O arquivo de saída gerado pelo programa (etiquetas.txt) para o arquivo de entrada fornecido.
Esta tarefa visa consolidar os conhecimentos dos alunos em manipulação de arquivos, expressões regulares e estruturas de dados em um contexto prático de análise de texto.
