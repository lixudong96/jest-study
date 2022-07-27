import storage from '@/utils/storage'

describe('storage', () => {
  it('可以缓存值', () => {
    storage.set('newKey', 'hello')
    expect(localStorage.getItem('my-app-newKey')).toEqual('hello')
  })

  it('可以取值', () => {
    localStorage.setItem('my-app-newKey', 'hello')
    expect(storage.get('newKey')).toEqual('hello')
  })
})
