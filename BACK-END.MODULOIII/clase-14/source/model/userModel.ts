// Importamos los modulos necesarios
import fs from 'fs';  // Modulo nativo
import path from 'path' // Modulo nativo
import user from '../../../clase-13/ejerciciosRouterYPostman/actividad2/routes/users';
import { get } from 'http';

// Definimos la ruta al archivo JSON (nuestra base de datos)
const filePath = path.join(__dirname, '../database/user.json'); //.. porque tenemos que salir del model y entrar al database

interface User {        // la estructura de nuestro usuario
    id: number, 
    name: string, 
    email: string,
    age: number
};

// Todos los métodos que vamos a tener los encapsulamos en una clase
export class UserModel {
      static getAll() : User[] {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    }

    
    static saveAll(users : User[]) : void {
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    }

    
    static updateUser(id: number, newData: Partial <User> ) : User | null { //Utilizamos el partial para indicar que un objeto puede tener algunas(o todas) las propiedades del User, pero todas opcionales. Devuelve User si se actualizo bien y null sino existe ese ID.
        const users = this.getAll();

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return null;
    }

    users[index] = { ...users[index], ...newData };    //Con el spread operator copiamos todas las propiedades del usuario original (users[index]) y luego reemplazamos solamente las propiedades que vienen en newData.

    this.saveAll(users);

    return users[index];

    }

    static deleteUser(id: number) : User | null {
        const user = this.getAll();

        const findUser = user.findIndex(u => u.id === id)

        if(findUser === -1) {
            return null
        }

        const deleted = user[findUser]  // Guardamos el usuario a eliminar
        user.splice(findUser, 1)        // Le pasamos el usuario y la cantidad que queremos eliminar, en este caso 1 porque solo queremos eliminar a ese usuario.
        this.saveAll(user)              // Lo guardamos en el nuevo array

        return deleted;                 // Devolvemos el usuario eliminado.
    }

    static filterUser(name: string) : User[] {
            const userName = this.getAll();
            const lower = name.toLowerCase();

            const matches = userName.filter(u =>           // Utilizamos filter porque devuelve un nuevo array con las coincidencias y sino devuelve el filter [] un array vacío.
            u.name.toLowerCase().includes(lower));      // El includes es para la coincidencia parcial.
            
            return matches;
        }

    static sameDomain(email: string) : number {
        const users = this.getAll(); 
       
        // Como el parametro que te manda el cliente puede ver con @ o sin entonces: Si empieza con @, lo saco con slice y paso todo a minuscula
        const normalizedDomain = email.startsWith("@") ? email.slice(1).toLowerCase() : email.toLowerCase(); 
        // Usamos el reduce para recorrer todos los usuarios y acumular las coincidencias
        const count = users.reduce((acc, u) => {
        // Por si por alguna razón no hay email, uso "".
        // Usamos un operador de fusión nula, acá le decimos que si el valor de la izquierda es null o undefined use el de la derecha     
        const email = u.email ?? "";            
        const userDomain = email.split("@")[1]?.toLowerCase() ?? ""; // saco la parte después de @ y la normalizo
        return acc + (userDomain === normalizedDomain ? 1 : 0); //  si coincide sumo 1 al acumulador, sino 0
        
    }, 0);

        return count;

    }

    static addMultiplesUsers(newUsers: Partial <User>[]) : User[] | null {  // Devuelve la lista actualizada o null si falla la validación
        const users = this.getAll();

       for(let i = 0; i < newUsers.length; i ++) {
        const u = newUsers[i];

        if(!u.name || !u.email) {       // Hace que esos dos campos sean obligatorios ya que devuelve nulo si falta alguno
            return null;
        }

       }
    
       const lastId = users.length ? users[users.length - 1].id : 0;
       newUsers.forEach((u, idx) => {   // Recorremos cada usuario nuevo y lo agregamos al array
        users.push({
        id: lastId + idx + 1,   // Le sumamos uno al último ID del array
        name: u.name!,      // ! -> le decimos que ya existen porque lo validamos antes
        email: u.email!,
        age: u.age || 0 // si no viene, ponemos 0
        });
    });
        this.saveAll(users);
        return users;
    }


    static usersOrdered(order? : string): User[] {
        const users = this.getAll();

        return users.sort((a, b) => {
        if (order === "desc") {
            return b.name.localeCompare(a.name); // Descendente
        }

        return a.name.localeCompare(b.name); // Ascendente por defecto
        });
    }

    static userAgeOrder(minAge?: number, maxAge?: number) : User[] | null {
        const users = this.getAll()

        if(minAge === undefined || maxAge === undefined) return null;

        const filter = users.filter(u => u.age >= minAge && u.age <= maxAge)
    
        return filter;
    }


    static getStatistics() {
        const users = this.getAll();

        const totalUsers = users.length;     // Obtenemos el total de usuarios

        const averageAge = totalUsers ? users.reduce((acc, u) => acc + u.age, 0) / totalUsers : 0;   // Para obtener el promedio de todas las edades de los usuarios.

        const youngest = users.reduce((min, u) => u.age < min.age ? u : min, users[0]);     // Con este reduce no sumamos las edades sino que comparamos la edad del usuario actual con el que sigue para ver si es menor. Empieza con el user[0].

        const oldest = users.reduce((max, u) => u.age > max.age ? u : max, users[0]);

    return {totalUsers, averageAge, youngest, oldest}

    }
}

export default UserModel;














