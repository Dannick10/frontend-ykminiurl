export const endpointsData = [
    {
      title: "/shortlink",
      subtitle: "Redirecionar um link encurtado",
      type: "POST",
      colors: "border-green-500",
      exampleRequest: `{
  "shortUrl": "string",
  "password": "string"
}`,
      responses: [
        { text: "✅ 202: OK", colors: "green" },
        { text: "⚠️ 404: Link não encontrado", colors: "yellow" },
        { text: "❌ 500: Erro ao redirecionar para a URL", colors: "red" },
      ],
    },
    {
      title: "/getlink {getshortlink}",
      subtitle: "Redirecionar um link encurtado",
      type: "GET",
      colors: "border-blue-500",
      params: "/getlink/{getshortlink}",
      responses: [
        { text: "✅ 202: OK", colors: "text-green-800" },
        { text: "⚠️ 404: Link não encontrado", colors: "text-yellow-600" },
        { text: "❌ 500: Erro ao redirecionar para a URL", colors: "text-red-600" },
      ],
    },
    {
      title: "/info",
      subtitle: "Pegar informações do link",
      type: "POST",
      colors: "border-green-500",
      exampleRequest: `{
  "shortUrl": "string",
  "password": "string"
}`,
      responses: [
        { text: "✅ 200: OK", colors: "text-green-800" },
        { text: "⚠️ 401: É necessário digitar uma senha", colors: "text-yellow-800" },
        { text: "⚠️ 403: Senha incorreta", colors: "text-yellow-300" },
        { text: "⚠️ 404: Não existe esse link", colors: "text-yellow-600" },
        { text: "❌ 500: Erro ao redirecionar para a URL", colors: "text-red-600" },
      ],
    },
    {
      title: "/password",
      subtitle: "Autorizar link com senha",
      type: "POST",
      colors: "border-red-500",
      exampleRequest: `{
  "shortUrl": "string",
  "password": "string"
}`,
      responses: [
        { text: "✅ 200: OK", colors: "text-green-600" },
        { text: "⚠️ 403: Senha incorreta", colors: "text-yellow-600" },
        { text: "⚠️ 404: Não existe esse link", colors: "text-yellow-600" },
        { text: "❌ 500: Erro no servidor", colors: "text-red-600" },
      ],
    },
  ];
  