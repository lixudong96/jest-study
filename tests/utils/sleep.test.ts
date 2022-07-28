import sleep from '@/utils/sleep'

describe('sleep', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  it('可以睡眠1000ms', async () => {
    const act = async (callback: () => void) => {
      await sleep(1000)
      callback()
    }

    const mockCallback = jest.fn()

    const promise = act(mockCallback)

    expect(mockCallback).not.toBeCalled()
    jest.runAllTimers()
    await promise

    expect(mockCallback).toHaveBeenCalled()

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
