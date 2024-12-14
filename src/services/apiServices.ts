export const apiService = async <T>(
  url: string,
  method: string = "GET",
  body: any = null
): Promise<T> => {
  const response = await fetch(url, {
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
