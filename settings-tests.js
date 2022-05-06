describe("The bill with settings factory function test",function(){

    describe("SET:",function(){
        it("should set the call cost",function(){
            let settingsBill=BillWithSettings();
    
            settingsBill.setCallCost(1.85);
            assert.equal(1.85,settingsBill.getCallCost());
        })
    
        it("should set the sms cost",function(){
            let settingsBill=BillWithSettings();
    
            settingsBill.setSmsCost(0.85);
            assert.equal(0.85,settingsBill.getSmsCost());
        })
    
        it("should set warning level",function(){
            let settingsBill=BillWithSettings();
    
            settingsBill.setWarningLevel(20);
            assert.equal(20,settingsBill.getWarningLevel());
    
            
        })
    
        it("should set critical level",function(){
            let settingsBill=BillWithSettings();
    
            settingsBill.setCriticalLevel(30);
            assert.equal(30,settingsBill.getCriticalLevel());
        })
    })

    describe("USE:",function(){
        it("should use the call cost set to make 3 calls @ R2.25 each then return total of R6.75",function(){
            let settingsBill=BillWithSettings();
            settingsBill.setCallCost(2.25);
            settingsBill.setSmsCost(0.50);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(6.75, settingsBill.getTotalCost());
            assert.equal(6.75, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());

        })

        it("should use the sms cost set to make 2 sms's @ R0.85 each then return total of R1.70",function(){
            let settingsBill=BillWithSettings();
            settingsBill.setCallCost(1.35);
            
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalLevel(10);

            settingsBill.sendSms();
            settingsBill.sendSms();
          

            assert.equal(1.70, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());

        })

        it("should make 3 call's @ R2.25 each and 2 sms's @ R0.50 each then return total cost of R7.75",function(){
            let settingsBill=BillWithSettings();
            settingsBill.setCallCost(2.25);
            settingsBill.setSmsCost(0.50);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();
          

            assert.equal(7.75, settingsBill.getTotalCost());
            assert.equal(6.75, settingsBill.getTotalCallCost());
            assert.equal(1.00, settingsBill.getTotalSmsCost());

        })

        it("should make 3 call's @ R2.25 each and 4 sms's @ R0.50 each then return total cost of R8.75",function(){
            let settingsBill=BillWithSettings();
            settingsBill.setCallCost(2.25);
            settingsBill.setSmsCost(0.50);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
          
          

            assert.equal(8.75, settingsBill.getTotalCost());
            assert.equal(6.75, settingsBill.getTotalCallCost());
            assert.equal(2.00, settingsBill.getTotalSmsCost());

        })

        it("should return a class name of WARNING, if warning level has been reached",function(){
            let settingsBill=BillWithSettings();
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(5);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            

            // assert.equal(5.40, settingsBill.getTotalCost());
            // assert.equal(5.40, settingsBill.getTotalCallCost());
            // assert.equal(0.00, settingsBill.getTotalSmsCost());

            assert.equal("warning", settingsBill.totalClassName());
           

        })

        it("should return a class name of CRITICAL, if critical level has been reached",function(){
            let settingsBill=BillWithSettings();
            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalLevel(10);
            // settingsBill.setWarningLevel(5);
            

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();

            // assert.equal(11.25, settingsBill.getTotalCost());
            // assert.equal(11.25, settingsBill.getTotalCallCost());
            // assert.equal(0.00, settingsBill.getTotalSmsCost());

            assert.equal("critical", settingsBill.totalClassName());
           

        })
    })

})  
