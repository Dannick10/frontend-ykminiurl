export const apiService = async <T>(url: string, method: string = 'GET', body: any = null): Promise<T> => {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    });
  
    if (!response.ok) {
      throw new Error('Erro ao fazer a requisição');
    }
  
    const data = await response.json();
    return data as T;
  };
  