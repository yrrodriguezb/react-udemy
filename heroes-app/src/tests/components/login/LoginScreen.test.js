import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from "../../../components/login/LoginScreen"
import { types } from '../../../types/types';

// Es importante que la variable inicie con mock
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate // Sobreesribimos el hook
}))

describe('Pruebas en LoginScreen', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  }

  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={ ['/login'] }>
        <Routes>
          <Route path='/login' element={ <LoginScreen /> }></Route>
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe llamar el dispatch y el navigate', () => {
    const handleClick = wrapper.find('button').prop('onClick');
    handleClick();

    expect(contextValue.dispatch).toHaveBeenCalled();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { name: 'Yeison Rodriguez' }
    })
    expect(mockNavigate).toHaveBeenCalledWith('/marvel', { replace: true });


    localStorage.setItem('lastPath', '/dc');
    handleClick();
    expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
  })
})