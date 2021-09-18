# O que são mocks?

Imagine que você tem 2 testes A e B, e precisa fazer mais um. Como irá fazer? Irá passar por A e B para testar C?

É para isso que servem os mocks, ao invés de replicar os testes para realizar um determinado teste, podemos criar objetos que partem do princípio de o primeiro teste já está com tudo funcionando, ou seja, que o teste A já está funcionando, e assim você pode seguir do B para o C sem passar pelo A.