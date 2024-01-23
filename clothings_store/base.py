import sqlite3

class ProductDB:
    def __init__(self, connect: sqlite3.Connection) -> None:
        self.__connect = connect
        self.__cursor = connect.cursor()
    def getAllProduct(self):
        sql = "SELECT * FROM clothings"
        try:
            self.__cursor.execute(sql)
            return self.__cursor.fetchall()
        except:
            print("ошибка чтения из базы данных")
            return []
    def getProduct(self, id):
        try:
            sql = "SELECT * FROM clothings WHERE id = ?"
            self.__cursor.execute(sql, tuple([id]))
            return self.__cursor.fetchone()
        except:
            print("ошибка чтения из базы данных")
            return []
