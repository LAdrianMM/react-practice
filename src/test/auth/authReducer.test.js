import { authReducer } from '../../auth/authReducer'
import { types } from '../../types'

describe('Pruebas en authReducer', () => {
  test('Deberia retornal el estado inicial', () => {
    const state = authReducer({ logged: false }, {})

    expect(state).toEqual({ logged: false })
  })

  test('Deberia retornar el user logged y el "name" del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Luis',
      },
    }

    const state = authReducer({ logged: false }, action)

    expect(state).toEqual({ logged: true, name: 'Luis' })
  })

  test('Deberia retornar logged en false y borrar el nombre del user', () => {
    const action = {
      type: types.logout,
    }

    const state = authReducer({ logged: true, name: 'Luis' }, action)

    expect(state).toEqual({ logged: false })
  })
})
