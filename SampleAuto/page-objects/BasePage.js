class Base {

    launchApplicationGoCity(){
        browser.url('https://www.sky.com/', {'timeout':30000})
        browser.maximizeWindow()
       
        
        browser.pause(12000000)
    }

}
export default new Base()