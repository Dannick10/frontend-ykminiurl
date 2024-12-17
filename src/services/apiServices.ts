export const apiService = async <T>(
  url: string,
  method: string = "GET",
  body: unknown = null
): Promise<T> => {

  const baseURL = process.env.NEXT_PUBLIC_API;


  const response = await fetch(`${baseURL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    if (response.status == 400) {
      throw new Error("URL não é válida");
    }
    
    if (response.status == 401) {
      throw new Error("Esse link tem segurança, Por favor digite a senha!")
    }
    if (response.status == 403) {
      throw new Error("Senha incorreta");
    }


    if (response.status == 404) {
      throw new Error("não existe esse link");
    }

    if (response.status == 500) {
      throw new Error("Error ao rederecionar Link");
    }

    throw new Error("Erro ao fazer a requisição");
  }

  const data = await response.json();
  return data as T;
};
