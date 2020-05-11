import pymysql

class DBConnector:

    conn = None
    curs = None

    def __init__(self):
        self.conn = pymysql.connect(host='localhost', user='root',
                       password='0000', db='Immovables', charset='utf8')
        self.curs = self.conn.cursor()

    def DBselector(self, arr):

        for count in range(len(arr)):
            city = arr[count][0][0]
            contry = arr[count][1][0]
            town = arr[count][2][0]
            sql1 = "select code from city where name='"+ city +"'"
            sql2 = "select code from contry where pre_code = (select code from city where name ='"+ city +"') and name='" + contry + "'"
            sql3 = "select code from town where name='"+ town +"' and pre_code = (select code from contry where pre_code = (select code from city where name ='"+ city +"') and name='" + contry + "')"

            self.curs.execute(sql1)
            result = self.curs.fetchall()
            arr[count][0][0] = result[0][0]

            self.curs.execute(sql2)
            result = self.curs.fetchall()
            arr[count][1][0] = result[0][0]

            self.curs.execute(sql3)
            result = self.curs.fetchall()
            arr[count][2][0] = result[0][0]

        return arr

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


    def InsertApart(self, arr):

        for count in range(len(arr)):
            cityNum = arr[count][0][0]
            contryNum = arr[count][1][0]
            townNum = arr[count][2][0]
            immovableName = arr[count][3][0]  # 매물 이름
            price = arr[count][4][0]  # 가격
            info = ' , '.join(arr[count][5])  # 설명

            rea = ' , '.join(arr[count][6])  # 공인중개사
            sql = "insert into apartImmovables(cityCode, " \
                  "contryCode, townCode,immovable_name, price, info, rea) " \
                  "values('" + cityNum + "','" + contryNum + "','"+ townNum + \
                  "','" + immovableName + "','" + price + "','" + info + "','" + rea + "')"

            print(sql)

            self.curs.execute(sql)

        self.conn.commit()

    def InsertOfficetel(self, arr):

        for count in range(len(arr)):
            cityNum = arr[count][0][0]
            contryNum = arr[count][1][0]
            townNum = arr[count][2][0]
            immovableName = arr[count][3][0]  # 매물 이름
            price = arr[count][4][0]  # 가격
            info = ' , '.join(arr[count][5])  # 설명

            rea = ' , '.join(arr[count][6])  # 공인중개사
            sql = "insert into officetelImmovables(cityCode, " \
                  "contryCode, townCode,immovable_name, price, info, rea) " \
                  "values('" + cityNum + "','" + contryNum + "','"+ townNum + \
                  "','" + immovableName + "','" + price + "','" + info + "','" + rea + "')"

            print(sql)

            self.curs.execute(sql)

        self.conn.commit()


    def DBCloser(self):
        self.conn.close()
