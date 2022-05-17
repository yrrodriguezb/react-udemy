import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../Hooks/useCounter";

describe('Pruebas en useCounter', () => {
  test('Debe retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    // console.log(result.current);
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  })

  test('Debe retornar el counter segun el parametro pasado en useCounter', () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  })

  test('Debe incrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  })

  test('Debe decrementar el counter en 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
    });
    
    expect(result.current.counter).toBe(99);
  })

  test('Debe resetear el counter a su valor inicial', () => {
    const { result } = renderHook(() => useCounter(200));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset()
    });
    
    expect(result.current.counter).toBe(200);
  })
})  