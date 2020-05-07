import pymysql

class DBConnector:

    conn = None
    curs = None

    def __init__(self):
        self.conn = pymysql.connect(host='localhost', user='root',
                       password='0000', db='Immovables', charset='utf8')
        self.curs = self.conn.cursor()

    def DBselector(self):
        sql = 'select code, name from contry'
        self.curs.execute(sql)
        result = self.curs.fetchall()
        #for row_data in result:
        print(dict(result))

'select code from city where name="서울시";'
'select code from contry where pre_code = (select code from city where name = "서울시") and name="강남구";'
'select code from town where name="개포동" and pre_code = (select code from contry where pre_code = (select code from city where name = "서울시") and name="강남구");'

    def InsertDB(self, contryList, code, pre_code):
        try:
            for num in range(len(contryList)):
                code += 1

                #sql = "INSERT INTO contry VALUES('"+contryList[num]+"', '" + '{0:03d}'.format(temp) + "', '01'" + ")" #contry

                sql = "INSERT INTO town VALUES('"+contryList[num]+"', '" + '{0:05d}'.format(code) + "', '" + '{0:03d}'.format(pre_code) +"')" #Town
                print(sql)
                self.curs.execute(sql)

            self.conn.commit()
            return code
        except NameError as e :
            print("예외 발생! DB ", e.args)
            print(e.__traceback__)




    def DBCloser(self):
        self.conn.close()
