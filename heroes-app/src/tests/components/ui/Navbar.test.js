import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";


// Es importante que la variable inicie con mock
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate // Sobreesribimos el hook
}))

describe('Pruebas en <Navbar />', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Pedro'
    },
    dispatch: jest.fn()
  };
  
  const wrapper = mount(
    <AuthContext.Provider value={ contextValue }>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={ <Navbar /> } />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".nav-item.nav-link.text-info").text().trim()).toBe(contextValue.user.name)

  });

  test('Debe llamar el logout, navigate con los argumentos y el dispatch', () => {
    const action = {
      type: types.logout
    };

    wrapper.find('button').simulate('click');

    expect(contextValue.dispatch).toHaveBeenCalled();
    expect(contextValue.dispatch).toHaveBeenCalledWith(action);
    expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
  })
})