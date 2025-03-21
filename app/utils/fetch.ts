interface FetchOptions extends RequestInit {
  params?: any;
  baseURL?: string;
  timeout?: number;
  responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData';
}

export async function fetchData<T>(
  url: string,
  options: FetchOptions = {
    params: null,
  },
): Promise<T> {
  const {
    baseURL = '',
    timeout,
    responseType = 'json',
    headers = {},
    ...restOptions
  } = options;

  const fullUrl = `${baseURL}${url}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const controller = new AbortController();
  const timeoutId =
    timeout ? setTimeout(() => controller.abort(), timeout) : undefined;

  try {
    const finalUrl = new URL(fullUrl);
    if (options.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          finalUrl.searchParams.append(key, String(value));
        }
      });
    }

    const response = await fetch(finalUrl.toString(), {
      ...restOptions,
      headers: defaultHeaders,
      signal: controller.signal,
    });

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    switch (responseType) {
      case 'json':
        return (await response.json()) as T;
      case 'text':
        return (await response.text()) as unknown as T;
      case 'blob':
        return (await response.blob()) as unknown as T;
      case 'arrayBuffer':
        return (await response.arrayBuffer()) as unknown as T;
      case 'formData':
        return (await response.formData()) as unknown as T;
      default:
        return (await response.json()) as T;
    }
  } catch (error) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout}ms`);
    }

    throw error;
  }
}

export default fetchData;
