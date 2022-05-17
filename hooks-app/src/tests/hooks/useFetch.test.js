import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../Hooks/useFetch'


describe('Pruebas en useFetch', () => {
  test('Debe retornar la informacion por defecto', () => {
    const { result } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
    const { data, loading, error } = result.current;

    expect(data).toBe(null)
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Debe retornar la informacion encontrada', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
    await waitForNextUpdate({ timeout: false });

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1)
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('Debe controlar el error', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(`https://reqres.in/api12121/users?page=2`));
    await waitForNextUpdate({ timeout: false });

    const { data, loading, error } = result.current;

    expect(data).toBe(null)
    expect(loading).toBe(false);
    expect(error).toBe('No se puedo cargar la info');
  });
});
