# -*- coding: utf-8 -*-
from crawlingUtil.UtilCrawling import UtilCrawling
from crawlingUtil.Selenium import Selenium
import re
import asyncio
import time

class Finder:
    se = Selenium()
    crawlingUtil = UtilCrawling()
    cityName = ''
    contryName = ''
    OUTPUT_FILE_NAME = 'address1.txt'
    open_output_file = open(OUTPUT_FILE_NAME, 'w', -1, "utf-8")


    def __init__(self, pageNum, rootPath):

        URL = 'http://www.juso.go.kr/openIndexPage.do'
        self.se.startSelenium(URL)
        #self.findCity(URL)
        self.saeJong(URL)
        self.open_output_file.close()
        #asyncio.run(self.findContry(URL))
        #self.findGu(links)

    def findCity(self, URL):
        # 도로명 주소 버튼 클릭
        findButtonPath = '//*[@id="AKCFrm"]/fieldset/div[1]/button'  # 조회 버튼
        self.se.buttonClick(findButtonPath)
        tempContryArr = []  # 임시 리스트
        tempContryArr.append(self.se.driver.find_element_by_xpath('//*[@id="rdnmcity1"]').text)
        tempContryArr[0] = tempContryArr[0].replace('\n', ',')
        tempContryArr[0] = tempContryArr[0][55:]
        cityArr = tempContryArr[0].split(',')
        for count in range(len(cityArr)):
            cityArr[count] = cityArr[count].lstrip()
        cityArr = ' '.join(cityArr).split()
        self.findContry(cityArr)


    def findContry(self, cityArr):
        ''' len(cityArr) '''
        for cityCount in range(len(cityArr)):
            cityOptionNum = cityCount + 2
            if cityArr[cityCount] != '세종특별자치시':
                self.cityName = cityArr[cityCount]
                cityButton = '//*[@id="rdnmcity1"]/option[' + str(cityOptionNum) + ']' # 시 버튼
                self.se.buttonClick(cityButton)
                #URL = 'http://www.juso.go.kr/getAreaCode.do?from=city&to=county&valFrom=11&valTo='

                tempContryArr = [] # 임시 리스트
                time.sleep(1)
                tempContryArr.append(self.se.driver.find_element_by_xpath('//*[@id="rdnmcounty1"]').text) # 셀레니움 텍스트 가져오기
                tempContryArr[0] = tempContryArr[0].replace('\n',',')
                tempContryArr[0] = tempContryArr[0][100:]

                contryArr = tempContryArr[0].split(',')
                self.findRoad(contryArr)

    def saeJong(self, cityArr):
        findButtonPath = '//*[@id="AKCFrm"]/fieldset/div[1]/button'  # 조회 버튼
        self.se.buttonClick(findButtonPath)
        self.cityName = '세종특별자치시'
        cityButton = '//*[@id="rdnmcity1"]/option[9]' # 시 버튼
        self.se.buttonClick(cityButton)
        time.sleep(2) # query 처리 시간 대기
        tempContryArr = []  # 임시 리스트
        tempContryArr.append(self.se.driver.find_element_by_xpath('//*[@id="roadNameList2"]').text)
        tempContryArr[0] = tempContryArr[0].replace('\n', ',')
        tempContryArr[0] = re.sub("[ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ]", "", tempContryArr[0])
        roadArr = tempContryArr[0].split(',')
        roadArr = ' '.join(roadArr).split()
        if '1' in roadArr:
            del roadArr[roadArr.index('1')]
        if '#' in roadArr:
            del roadArr[roadArr.index('#')]
        self.write_at_notePad(roadArr)

    def findRoad(self, contryArr):
        '''len(contryArr)'''
        for contryCount in range(len(contryArr)):
            contryOptionNum = contryCount + 2
            self.contryName = contryArr[contryCount]
            contryButton = '//*[@id="rdnmcounty1"]/option['+ str(contryOptionNum) +']'  # 읍/면/구 버튼
            self.se.buttonClick(contryButton)
            time.sleep(2) # query 처리 시간 대기
            tempContryArr = []  # 임시 리스트
            tempContryArr.append(self.se.driver.find_element_by_xpath('//*[@id="roadNameList2"]').text)
            tempContryArr[0] = tempContryArr[0].replace('\n', ',')
            tempContryArr[0] = re.sub("[ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ]", "", tempContryArr[0])
            roadArr = tempContryArr[0].split(',')
            roadArr = ' '.join(roadArr).split()
            if '1' in roadArr:
                del roadArr[roadArr.index('1')]
            if '#' in roadArr:
                del roadArr[roadArr.index('#')]
            self.write_at_notePad(roadArr)

    def write_at_notePad(self, roadArr):#result_text, count, fileNum, p):
        for roadName in roadArr:
            result_text = self.cityName + " " + self.contryName + " " + roadName
            print(result_text)
            self.open_output_file.write(result_text+'\n')



    def get_links(self):
        print(self.links)
        return self.linsks