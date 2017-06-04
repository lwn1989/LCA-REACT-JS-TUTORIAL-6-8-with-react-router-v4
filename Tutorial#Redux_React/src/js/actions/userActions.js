
export const fetchUser = () => (
  {
    type: 'FETCH_USER_FULFILED',
    payload: {
      name: 'Will',
      age: 35
    }
  }
)

export const setUserName = (name) => (
  {
    type: 'SET_USER',
    payload: name
  }
)

export const setAge = (age) => (
  {
    type: 'SET_AGE',
    payload: age
  }
)
