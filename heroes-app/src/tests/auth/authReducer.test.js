import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"


describe('Pruebas en <AuthReducer />', () => {
  test('Debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('Debe autenticar y tener el "name" del usuario', () => { 
    const action = {
      type: types.login,
      payload: {
        name: 'Yeison Rodriguez'
      }
    }

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Yeison Rodriguez' })
  });

  test('Debe verifiar que el usuario no este autenticado ', () => {
    const action = {
      type: types.logout,
    }

    const state = authReducer({ logged: true, name: 'yrrb' }, action);
    expect(state).toEqual({ logged: false });
  });
})