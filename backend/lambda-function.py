import json
import pymysql

hostname = 'ngep-metrics-db.c4aeon7epphf.ap-southeast-1.rds.amazonaws.com'
user = 'abilashprod'
password = 'dumsys-Xyxfys-9hahpy'
db = 'ngep_metrics'
conn = pymysql.connect(host=hostname, user=user, passwd=password, db=db, connect_timeout=60)
ngepDatesDict = {0: "date"}
ngepBarDataDict = {0: "date",1: "0_0", 2: "0_1", 3: "0_2", 4: "0_3", 5: "0_4", 6: "0_5", 7: "0_6", 8: "0_7", 9: "0_8", 10: "0_9", 11: "1_0"}
ngepBoxDataDict = {0: "date", 1: "min", 2: "q1", 3: "median", 4: "q3", 5:"max"}

def lambda_handler(event, context):
    with conn.cursor() as cur:
        print("Query executed")
        result = []
        try:
            # TODO: write code...
            cur.execute("select * from ngep_dates") 
            ngep_dates = cur.fetchall()
            for entry in ngep_dates:
                ngep_data_row = {}
                for row in range(0,len(entry)):
                    ngep_data_row[ngepDatesDict[row]] = entry[row]
                result.append(ngep_data_row)
            # cur.execute("select * from ngep_use_ratio_bar") 
            # ngep_bar_data = cur.fetchall()
            # cur.execute("select * from ngep_use_ratio_box") 
            # ngep_box_data = cur.fetchall() 
            
            for entry in result:
                cur.execute("select * from ngep_use_ratio_bar where date = " + str(entry['date'])) 
                ngep_bar_data = cur.fetchall()
                for row in ngep_bar_data:
                    ngep_bar_data_row = {}
                    for data in range(1, len(row)):
                        ngep_bar_data_row[ngepBarDataDict[data]] = row[data]
                entry['bar_data'] = ngep_bar_data_row
                
            for entry in result:
                cur.execute("select * from ngep_use_ratio_box where date = " + str(entry['date'])) 
                ngep_box_data = cur.fetchall()
                for row in ngep_box_data:
                    print(row)
                    ngep_box_data_row = {}
                    for data in range(1, len(row)):
                        print(row[data])
                        ngep_box_data_row[ngepBoxDataDict[data]] = row[data]
                entry['box_data'] = ngep_box_data_row
        except Exception as e:
            print(e)
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json'
        },
        'body': result
    }