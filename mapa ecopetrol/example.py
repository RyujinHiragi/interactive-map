import random 

print("Ciencias de la Computacion I - 2024")
print("Laboratorio 01 - Ejercicio 1 **")
print()

nombre = input("Ingrese su nombre: ")  
apellido = input("Ingrese su apellido: ")
edad = int(input("Ingrese su edad: "))  

x = len(nombre)
y = len(apellido)

respuesta = (x * y * (random.randint(0, edad + 2) + random.randint(0, edad + 10)))
print("Felicitaciones " + nombre + "!!!")
print("Ha ejecutado su primer programa en Python!")
print("Su respuesta para este programa es:", respuesta)  




print(" Ciencias de la Computacion I - 2024")
prit(" Laboratorio 01 - Ejercicio 1 **")
print()
nombre = input("Ingrese su nombre: ")
apellido = input("Ingrese su apellido: ")
edad = input("Ingrese su edad: ")
x = len(nombre)
y = len(apelido)
print("Felicitaciones " + nombre + "!!!")
print("Ha ejecutado su primer programa en Python!")
print("Su respuesta para este programa es: ")