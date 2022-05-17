import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../Hooks/useForm";

describe('Pruebas en useForm', () => {
  const initialValues = {
    name: 'Yeison Rodriguez',
    email: 'yrrodriguezb@gmail.com'
  }

  test('Debe retornar los valores del formulario correctamente', () => {
    const { result } = renderHook(() => useForm(initialValues));
    // console.log(result.current);
    const [ formValues, handleInputChange, reset ] = result.current;

    expect(formValues).toEqual(initialValues);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  })

  test('Debe cambiar el valor del formulario', () => {
    const { result } = renderHook(() => useForm(initialValues));
    const [ , handleInputChange ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Elizabeth'
        }
      })
    });

    const [ formValues ] = result.current;
    expect(formValues).toEqual({ ...initialValues, name: 'Elizabeth' })
  })

  test('Debe establecer el valor del formulario con reset', () => {
    const { result } = renderHook(() => useForm(initialValues));
    const [ , handleInputChange, reset ] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Elizabeth'
        }
      });

      reset();
    });

    const [ formValues ] = result.current;
    // console.log(formValues);
    expect(formValues).toEqual(initialValues);

  })
})
