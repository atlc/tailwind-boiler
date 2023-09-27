import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
});

const Query = <T = mysql.OkPacket>(sql: string, vals: unknown[] = []) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(sql, vals, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

interface Dookie {
    id: number;
    strang: string;
}

const all = () => Query<Dookie[]>("SELECT * FROM Dookie");
const create = (newString: string) => Query("INSERT INTO Dookie (strang) VALUES (?)", [newString]);

export default {
    dookie: {
        all,
        create,
    },
};
