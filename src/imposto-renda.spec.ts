import { calculaIR } from './imposto-renda'
// import { assert } from 'console'

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios maiores do que 2000,00', () => {
    expect(calculaIR(2020.00)).toEqual(154.0)
  })
})

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios menores do que 2000,00 e maiores que 1000,00', () => {
    expect(calculaIR(1000.00)).toEqual(0)
  })
})

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios menores do que 2000,00 e maiores que 1000,00', () => {
    expect(calculaIR(1999.99)).toEqual(149.9985)
  })
})

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios menores do que 1000,00', () => {
    expect(calculaIR(999.99)).toEqual(0)
  })
})

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios menores do que 1000,00', () => {
    expect(calculaIR(300.00)).toEqual(0)
  })
})

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios maiores do que 3000,00', () => {
    expect(calculaIR(5000.00)).toEqual(850.0)
  })
})

describe('Cálculo de imposto de renda', () => {
  test('deve calcular corretamente para salarios menores do que 2000,00 e maiores quem 1000,00', () => {
    expect(calculaIR(6000.00)).toEqual(1100.0)
  })
})
