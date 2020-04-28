from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
import asyncio

class Selenium:

    chromePath = ''
    driver = None
    myS = None

    def __init__(self):
        self.chromePath = 'C://Program Files (x86)/Google/Chrome/Application/chromedriver.exe'
        # 크롬드라이버 경로 ex) 'C://Program Files (x86)/Google/Chrome/Application/chromedriver.exe'
        self.driver = webdriver.Chrome(self.chromePath)
        print("Seleniume 드라이버 적재가 완료되었습니다.\n")
        print("Selenium에 접근 준비가 완료되었습니다.\n")

    def startSelenium(self, url):
        self.driver.implicitly_wait(3)
        self.driver.get(url)

    def buttonClick(self, xPath):
        button = self.driver.find_element_by_xpath(xPath)
        button.click()
        #await asyncio.sleep(1)


