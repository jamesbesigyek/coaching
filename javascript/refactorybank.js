class Account{
    constructor(name,type,accountbalance)
    {
        //var openingBal
        this.Name=name
        this.type=type
       
        this.accountbalance=accountbalance

        if (accountbalance>50){
            this.balance = accountbalance
            console.log("new", type, "account created by James")

        }else
        throw("minimum balance should be atleast 50$")  
    }


}

const BesigyeAC = new Account("besigye","fixed",40)