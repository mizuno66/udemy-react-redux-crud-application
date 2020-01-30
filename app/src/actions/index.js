// actionとはJavascriptのオブジェクト
// タイプの値はユニークでなければならない

// actionを返す関数のことを、action creatorと呼ぶ

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})
