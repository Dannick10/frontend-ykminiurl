export const copyToClipboard = (text: string) => {
  if (!text) return;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
    }).catch((error) => {
      console.error('Erro ao copiar o texto: ', error);
    });
  } 
};
